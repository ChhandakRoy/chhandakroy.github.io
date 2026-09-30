---
layout: default
title: "Home"
description: "Chhandak Roy — VLSI and RTL design engineer working on digital hardware, verification, FPGA architectures and ASIC implementation."
---

<!-- =========================
     HERO
     ========================= -->

<section class="hero wrap">

  <div class="hero-copy">

    <p class="eyebrow">
      VLSI • VERIFICATION • RTL • FPGA • ASIC
    </p>

    <h1>
      Building hardware.<br>
      <span>Understanding what happens after the RTL.</span>
    </h1>

    <p class="hero-text">
      I’m Chhandak Roy, a VLSI and RTL design engineer focused on
      digital hardware, verification, FPGA architectures and ASIC implementation.
      I document the engineering decisions, debugging and implementation results
      behind the designs I build.
    </p>

    <div class="hero-actions">

      <a class="button" href="{{ '/projects/' | relative_url }}">
        Projects &amp; Writing
      </a>

      <a class="button secondary" href="{{ '/blog/' | relative_url }}">
        Technical Blog
      </a>

    </div>

  </div>

  <div class="hero-card">

    <div class="terminal-bar">
      <i></i>
      <i></i>
      <i></i>
      <span>design_flow</span>
    </div>

    <pre><code>RTL
 ↓
SIMULATION
 ↓
LINT
 ↓
SYNTHESIS
 ↓
TIMING / AREA / POWER
 ↓
NETLIST</code></pre>

  </div>

</section>


<!-- =========================
     FEATURED PROJECT
     ========================= -->

<section class="wrap section">

  <div class="section-heading">

    <div>
      <p class="eyebrow">FEATURED PROJECT</p>
      <h2>APB-Based SPI Master Controller</h2>
    </div>

    <a href="{{ '/projects/' | relative_url }}">
      Projects &amp; Writing →
    </a>

  </div>


  <a
    class="project-card featured"
    href="{{ '/projects/apb-spi-master-controller/' | relative_url }}"
  >

    <img
      class="project-thumbnail"
      src="{{ '/assets/images/spi-master-controller/Architecture.png' | relative_url }}"
      alt="Architecture of the APB-based SPI Master Controller"
      loading="lazy"
    >

    <div class="project-card-body">

      <div class="card-label">
        DIGITAL DESIGN · VERILOG RTL
      </div>

      <h3>
        APB-Based SPI Master Controller
      </h3>

      <p>
        A parameterized APB-controlled SPI master implemented in synthesizable
        Verilog RTL and taken through simulation, RTL design checks, synthesis,
        timing, area and power analysis.
      </p>

      <div class="tags">
        <span>Verilog</span>
        <span>APB</span>
        <span>SPI</span>
        <span>Vivado</span>
        <span>SpyGlass</span>
        <span>Design Compiler</span>
      </div>

      <span class="card-arrow">
        Explore project →
      </span>

    </div>

  </a>

</section>


<!-- =========================
     TECHNICAL WRITING
     ========================= -->

<section class="wrap section">

  <div class="section-heading">

    <div>
      <p class="eyebrow">TECHNICAL WRITING</p>
      <h2>Things I learned by building</h2>
    </div>

    <a href="{{ '/blog/' | relative_url }}">
      All articles →
    </a>

  </div>


  <div class="article-list">

    {% for post in site.posts limit:3 %}

    <a
      class="article-row"
      href="{{ post.url | relative_url }}"
    >

      <div>

        <span class="article-date">
          {{ post.date | date: "%d %b %Y" }}
        </span>

        <h3>
          {{ post.title }}
        </h3>

        <p>
          {{ post.description }}
        </p>

      </div>

      <span class="row-arrow">
        ↗
      </span>

    </a>

    {% endfor %}

  </div>

</section>


<!-- =========================
     WHAT I WORK ON
     ========================= -->

<section class="wrap section">

  <div class="section-heading">

    <div>
      <p class="eyebrow">FOCUS AREAS</p>
      <h2>What I work on</h2>
    </div>

  </div>


  <div class="focus-grid">

    <div class="focus-item">

      <h3>RTL Design</h3>

      <p>
        Synthesizable Verilog and digital architectures with an emphasis
        on clean interfaces, modular design and hardware behavior.
      </p>

    </div>


    <div class="focus-item">

      <h3>Verification</h3>

      <p>
        Simulation, waveform analysis, RTL checks and debugging to understand
        whether a design behaves as intended.
      </p>

    </div>


    <div class="focus-item">

      <h3>FPGA &amp; ASIC</h3>

      <p>
        Exploring how RTL maps into hardware through FPGA resources,
        synthesis, timing, area, power and technology-mapped netlists.
      </p>

    </div>

  </div>

</section>


<!-- =========================
     ENGINEERING NOTE
     ========================= -->

<section class="wrap callout">

  <div>

    <p class="eyebrow">
      ENGINEERING NOTE
    </p>

    <h2>
      A waveform tells you it works.<br>
      Synthesis tells you what it becomes.
    </h2>

    <p>
      My projects are documented with the actual RTL, waveforms,
      reports and implementation observations behind them.
    </p>

  </div>

  <a class="button" href="{{ '/blog/' | relative_url }}">
    Read technical notes
  </a>

</section>