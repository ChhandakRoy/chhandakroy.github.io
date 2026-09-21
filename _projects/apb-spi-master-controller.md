---
title: "APB-Based SPI Master Controller"
tagline: "A parameterized APB-controlled SPI master, taken from RTL through simulation, lint and synthesis."
category: "DIGITAL DESIGN"
tags: [Verilog, APB, SPI, Vivado, SpyGlass, Design Compiler]
repo: "https://github.com/ChhandakRoy/APB-based-SPI-Master-Controller"
excerpt: "Parameterized Verilog RTL with APB register access, programmable baud generation, SPI TX/RX, transfer control and a complete RTL-to-synthesis flow."
---
## Overview

This project implements a parameterized **APB-based SPI Master Controller** in synthesizable Verilog RTL.

<div class="project-image"><img src="https://github.com/ChhandakRoy/APB-based-SPI-Master-Controller/blob/main/docs/Architecture.png?raw=true" alt="SPI_TOP architecture"></div>

The design is organized into four functional blocks plus a top-level integration module:

- `APB_SLAVE_INTERFACE.v` — APB transactions, registers, status and interrupt logic
- `BAUD_GENERATOR.v` — programmable SPI clock generation and timing events
- `SPI_SHIFT_REGISTER.v` — serial TX / RX datapath
- `SPI_SLAVE_CONTROL_SELECT.v` — slave-select and transfer control
- `SPI_TOP.v` — top-level integration

The current reported synthesis configuration uses `WIDTH = 8`.

## End-to-end transaction

```text
APB WRITE 178
     │
     ▼
Transmit register
     │
     ▼
SS asserted + SCLK generated
     │
     ▼
MOSI transmission / MISO sampling
     │
     ▼
RX data = 109
     │
     ▼
APB READ 109
```

## Verification

The final top-level Vivado simulation demonstrates the complete APB → SPI → APB path.

The received shift-register value progresses through:

```text
1 → 3 → 6 → 13 → 27 → 54 → 109
```

and the final APB read returns `109`.

## Synthesis snapshot

| Metric | Reported result |
|---|---:|
| Clock period | 20 ns |
| Slack | +1.89 ns |
| Mapped cell area | 2204 units |
| Switching-power estimate | 1.0848 µW |

The area value is mapped cell area; a physical total area including interconnect was not reported because no wire-load model was specified. The power report carries a library characterization limitation, so `1.0848 µW` is presented as the available switching-power estimate rather than a fully characterized total power value.

## A small synthesis-debugging lesson

After synthesis, `check_design` reported that `BAUD_RATE_DIV[0]` was not driving internal logic.

The first reaction was: *did I leave a connection out?*

Tracing the equation showed:

```text
BAUD_RATE_DIV = (SPPR + 1) × 2^(SPR + 1)
```

Since `2^(SPR + 1)` is always even, the complete divider value is always even. Therefore:

```text
BAUD_RATE_DIV[0] = 0
```

The tool could therefore optimize away a redundant least-significant bit.

That became a useful reminder that a synthesis warning is a starting point for investigation — not automatically a functional failure.

## Tools

**Verilog HDL** · **Xilinx Vivado** · **Synopsys VC SpyGlass** · **Synopsys Design Compiler**

[View the complete RTL, testbenches, reports and synthesized netlist on GitHub →](https://github.com/ChhandakRoy/APB-based-SPI-Master-Controller)
