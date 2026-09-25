/* ============================================================
   vlsi-circuit-bg.js
   Live animated background: a node-and-edge graph (vias joined
   by traces — a PCB) with pulses traveling between nodes on a
   timer (signal propagation — reads equally as a neural net's
   activations). One concept, not two effects stacked together.

   Include near the end of <body>, e.g.:
     <script src="/assets/js/vlsi-circuit-bg.js" defer></script>

   If you also use Mermaid diagrams, load Mermaid's own script
   BEFORE this one so the theme block at the bottom can find it:
     <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
     <script src="/assets/js/vlsi-circuit-bg.js" defer></script>

   Nothing here is required for the page to look complete --
   if you skip this file, the CSS alone already renders a full,
   finished page (static corner motif, hero trace underline,
   figure frames). This file is the "live" layer on top.
   ============================================================ */

(function circuitBackground() {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText = [
    'position:fixed', 'inset:0', 'width:100%', 'height:100%',
    'z-index:0', 'pointer-events:none', 'display:block'
  ].join(';');
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let W, H, DPR;
  let nodes = [];
  let pulses = [];
  const mouse = { x: -9999, y: -9999 };

  const COLORS = {
    node: 'rgba(201, 134, 63, 0.5)',        // copper
    nodeBright: 'rgba(217, 179, 108, 0.9)', // gold
    edge: 'rgba(201, 134, 63, 0.09)',
    edgeActive: 'rgba(224, 168, 62, 0.5)',  // phosphor
    pulse: 'rgba(239, 231, 214, 0.9)'       // ink / silkscreen
  };

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    buildNodes();
  }

  function buildNodes() {
    nodes = [];
    const area = W * H;
    const density = W < 700 ? 26000 : 15000;
    const count = Math.min(140, Math.max(30, Math.floor(area / density)));

    // loosely grid-based placement (die-like regularity) with
    // jitter (organic, neural-net-like irregularity)
    const cols = Math.max(1, Math.ceil(Math.sqrt(count * (W / H))));
    const rows = Math.max(1, Math.ceil(count / cols));
    const cellW = W / cols;
    const cellH = H / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (nodes.length >= count) break;
        const jitter = 0.42;
        const x = c * cellW + cellW / 2 + (Math.random() - 0.5) * cellW * jitter;
        const y = r * cellH + cellH / 2 + (Math.random() - 0.5) * cellH * jitter;
        nodes.push({
          x, y, baseX: x, baseY: y,
          r: Math.random() * 1.2 + 1.1,
          phase: Math.random() * Math.PI * 2,
          edges: []
        });
      }
    }

    // connect each node to its 2-3 nearest neighbours
    nodes.forEach((n, i) => {
      const nearest = nodes
        .map((m, j) => (j === i ? null : { j, d: Math.hypot(n.x - m.x, n.y - m.y) }))
        .filter(Boolean)
        .sort((a, b) => a.d - b.d)
        .slice(0, 3);
      nearest.forEach((d) => { if (!n.edges.includes(d.j)) n.edges.push(d.j); });
    });
  }

  function spawnPulse() {
    if (!nodes.length) return;
    const from = nodes[Math.floor(Math.random() * nodes.length)];
    if (!from.edges.length) return;
    const toIdx = from.edges[Math.floor(Math.random() * from.edges.length)];
    pulses.push({ from, to: nodes[toIdx], t: 0, speed: 0.006 + Math.random() * 0.008 });
  }

  let lastSpawn = 0;
  function draw(ts) {
    ctx.clearRect(0, 0, W, H);

    // gentle drift so the grid doesn't feel static
    nodes.forEach((n) => {
      n.x = n.baseX + Math.sin(ts * 0.00015 + n.phase) * 3;
      n.y = n.baseY + Math.cos(ts * 0.00013 + n.phase) * 3;
    });

    ctx.lineWidth = 1;
    nodes.forEach((n) => {
      n.edges.forEach((j) => {
        const m = nodes[j];
        ctx.strokeStyle = COLORS.edge;
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();
      });
    });

    nodes.forEach((n) => {
      const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
      const near = Math.max(0, 1 - d / 160);
      ctx.beginPath();
      ctx.fillStyle = near > 0 ? COLORS.nodeBright : COLORS.node;
      ctx.arc(n.x, n.y, n.r + near * 1.5, 0, Math.PI * 2);
      ctx.fill();
    });

    if (!reduceMotion && ts - lastSpawn > 260) {
      lastSpawn = ts;
      if (pulses.length < 40) spawnPulse();
    }
    pulses.forEach((p) => { p.t += p.speed; });
    pulses = pulses.filter((p) => p.t < 1);
    pulses.forEach((p) => {
      const x = p.from.x + (p.to.x - p.from.x) * p.t;
      const y = p.from.y + (p.to.y - p.from.y) * p.t;
      ctx.beginPath();
      ctx.strokeStyle = COLORS.edgeActive;
      ctx.moveTo(p.from.x, p.from.y);
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle = COLORS.pulse;
      ctx.arc(x, y, 1.8, 0, Math.PI * 2);
      ctx.fill();
    });

    if (!reduceMotion) requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

  resize();
  if (reduceMotion) {
    draw(0); // one static frame -- no continuous animation
  } else {
    requestAnimationFrame(draw);
  }
})();

/* ============================================================
   Mermaid theme -- matches the CSS palette above. Only runs if
   Mermaid's own script is already loaded on the page.
   ============================================================ */
(function mermaidTheme() {
  if (typeof mermaid === 'undefined') return;

  mermaid.initialize({
    startOnLoad: true,
    theme: 'base',
    themeVariables: {
      background:          '#0f1b16',
      mainBkg:              '#13221c',
      primaryColor:         '#13221c',
      primaryTextColor:     '#efe7d6',
      primaryBorderColor:   '#c9863f',
      secondaryColor:       '#0f1b16',
      tertiaryColor:        '#0a120e',
      lineColor:            '#c9863f',
      nodeBorder:           '#c9863f',
      nodeTextColor:        '#efe7d6',
      clusterBkg:           '#0a120e',
      clusterBorder:        '#8f632f',
      edgeLabelBackground:  '#0f1b16',
      titleColor:           '#efe7d6',
      fontFamily:           'IBM Plex Mono, monospace',
      fontSize:             '14px'
    }
  });
})();