---
layout: default
title: "Projects & Writing"
description: "Selected VLSI, RTL design, verification and digital hardware projects by Chhandak Roy."
---

<section class="projects-hero wrap">
  <p class="eyebrow">SELECTED WORK</p>

  <h1>Projects &amp; Writing</h1>

  <p class="projects-intro">
    Digital hardware projects, RTL implementations, verification work and
    technical notes documenting how the designs are built and analyzed.
  </p>
</section>

<section class="wrap section project-showcase-section">

  <div class="section-heading">
    <div>
      <p class="eyebrow">FEATURED PROJECT</p>
      <h2>APB-Based SPI Master Controller</h2>
    </div>
  </div>

  <article class="project-showcase">

    <a
      class="project-showcase-image"
      href="{{ '/projects/apb-spi-master-controller/' | relative_url }}"
    >
      <img
        src="{{ '/assets/images/spi-master-controller/Architecture.png' | relative_url }}"
        alt="Architecture of the APB-Based SPI Master Controller"
      >
    </a>

    <div class="project-showcase-body">

      <p class="card-label">
        DIGITAL DESIGN · VERILOG RTL
      </p>

      <h3>APB-Based SPI Master Controller</h3>

      <p class="project-showcase-description">
        A parameterized APB-controlled SPI master implemented in synthesizable
        Verilog RTL and taken through simulation, RTL design checks, synthesis,
        timing, area and power analysis.
      </p>

      <div class="project-meta">
        <span>Verilog</span>
        <span>APB</span>
        <span>SPI</span>
        <span>Vivado</span>
        <span>SpyGlass</span>
        <span>Design Compiler</span>
      </div>

      <div class="project-showcase-links">
        <a
          class="button"
          href="{{ '/projects/apb-spi-master-controller/' | relative_url }}"
        >
          Explore project →
        </a>

        <a
          class="text-link"
          href="{{ '/blog/spi-master-controller-verilog-rtl-apb/' | relative_url }}"
        >
          Read the technical deep dive →
        </a>
      </div>

    </div>

  </article>

</section>

<section class="wrap section deep-dive-section">

  <div class="section-heading">
    <div>
      <p class="eyebrow">TECHNICAL DEEP DIVE</p>
      <h2>How to Design an SPI Master Controller in Verilog RTL</h2>
    </div>
  </div>

  <article class="deep-dive-card">

    <div class="deep-dive-number">01</div>

    <div class="deep-dive-content">

      <p class="article-date">
        VLSI · RTL · SPI · APB · SYNTHESIS
      </p>

      <h3>APB, Timing, Simulation and Synthesis</h3>

      <p>
        A detailed walkthrough of the controller, starting from SPI and APB
        fundamentals and moving through modular RTL, simulation, timing,
        synthesis, area, power and synthesis-debugging observations.
      </p>

      <div class="deep-dive-topics">
        <span>SPI fundamentals</span>
        <span>APB interface</span>
        <span>Baud generator</span>
        <span>Shift register</span>
        <span>Verification</span>
        <span>Synthesis</span>
      </div>

      <a
        class="text-link"
        href="{{ '/blog/spi-master-controller-verilog-rtl-apb/' | relative_url }}"
      >
        Read the complete article →
      </a>

    </div>

  </article>

</section>

<section class="wrap portfolio-note">

  <div>
    <p class="eyebrow">ENGINEERING APPROACH</p>

    <h2>From RTL behavior to implementation results.</h2>

    <p>
      The work is documented across the RTL, simulation waveforms, design
      checks and synthesis reports so that the path from logic description
      to hardware implementation can be followed.
    </p>
  </div>

</section>