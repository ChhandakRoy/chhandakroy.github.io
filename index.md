---
layout: default
title: "Home"
description: "Chhandak Roy — VLSI, RTL design, FPGA and ASIC projects."
---
<section class="hero wrap"><div class="hero-copy"><p class="eyebrow">VLSI • RTL • FPGA • ASIC</p><h1>Building hardware.<br><span>Understanding what happens after the RTL.</span></h1><p class="hero-text">I build digital hardware and document the engineering decisions, debugging, verification and implementation results behind it.</p><div class="hero-actions"><a class="button" href="{{ '/projects/' | relative_url }}">Explore projects</a><a class="button secondary" href="{{ '/blog/' | relative_url }}">Read the blog</a></div></div><div class="hero-card"><div class="terminal-bar"><i></i><i></i><i></i><span>design_flow</span></div><pre><code>RTL
 ↓
SIMULATION
 ↓
LINT
 ↓
SYNTHESIS
 ↓
TIMING / AREA / POWER
 ↓
NETLIST</code></pre></div></section>
<section class="wrap section"><div class="section-heading"><div><p class="eyebrow">FEATURED</p><h2>What I'm building</h2></div><a href="{{ '/projects/' | relative_url }}">All projects →</a></div><div class="project-grid"><a class="project-card featured" href="{{ '/projects/apb-spi-master-controller/' | relative_url }}"><div class="card-label">01 · DIGITAL DESIGN</div><h3>APB-Based SPI Master Controller</h3><p>Parameterized Verilog RTL taken from architecture and simulation through lint, synthesis and implementation analysis.</p><div class="tags"><span>Verilog</span><span>APB</span><span>SPI</span><span>Design Compiler</span></div><span class="card-arrow">Open project →</span></a><div class="project-card muted"><div class="card-label">02 · FPGA</div><h3>FPGA CNN Accelerator</h3><p>Hardware architecture experiments around convolution, BRAM, DSP usage, throughput and resource trade-offs.</p><div class="tags"><span>FPGA</span><span>BRAM</span><span>DSP</span></div><span class="coming">Coming soon</span></div></div></section>
<section class="wrap section"><div class="section-heading"><div><p class="eyebrow">LATEST WRITING</p><h2>Things I learned by building</h2></div><a href="{{ '/blog/' | relative_url }}">All articles →</a></div><div class="article-list">{% for post in site.posts limit:3 %}<a class="article-row" href="{{ post.url | relative_url }}"><div><span class="article-date">{{ post.date | date: "%d %b %Y" }}</span><h3>{{ post.title }}</h3><p>{{ post.description }}</p></div><span class="row-arrow">↗</span></a>{% endfor %}</div></section>
<section class="wrap callout"><div><p class="eyebrow">ENGINEERING NOTE</p><h2>A waveform tells you it works.<br>Synthesis tells you what it becomes.</h2><p>Projects are documented with the actual RTL, waveforms, reports and implementation observations behind them.</p></div><a class="button" href="{{ '/blog/' | relative_url }}">Read technical notes</a></section>
