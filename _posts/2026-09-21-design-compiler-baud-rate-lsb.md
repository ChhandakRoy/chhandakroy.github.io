---
title: "I Thought My RTL Was Broken: Why Design Compiler Removed BAUD_RATE_DIV[0]"
description: "A practical synthesis-debugging story from an APB-based SPI Master Controller."
date: 2026-09-21 09:00:00 +0530
categories: [VLSI, RTL, Synthesis]
---
I thought I had broken my RTL.

After taking an APB-based SPI Master Controller through synthesis, `check_design` reported that:

```text
BAUD_RATE_DIV[0]
```

was not driving any internal logic.

At first, that sounded like a connectivity bug.

So I traced the signal back through the RTL.

## The equation

The baud divider is calculated as:

```text
BAUD_RATE_DIV = (SPPR + 1) × 2^(SPR + 1)
```

The important part is:

```text
2^(SPR + 1)
```

This value is always even.

Multiplying by `(SPPR + 1)` therefore keeps the complete result even. An even binary number always has a zero least-significant bit:

```text
BAUD_RATE_DIV[0] = 0
```

So the warning was not pointing to a missing functional connection in the way I first suspected. The least-significant bit was mathematically redundant, and synthesis could optimize the corresponding logic away.

## Why this mattered

This was a small warning, but it made a useful point about RTL:

**Simulation and synthesis answer different questions.**

Simulation asks:

> Does the RTL behave as intended for the scenarios I tested?

Synthesis asks:

> What hardware does this RTL actually require?

A signal can therefore look perfectly reasonable at the RTL level and still be simplified, merged or removed during synthesis.

## The bigger lesson

When a synthesis report looks suspicious, the right response is not to immediately change the RTL.

Trace the signal.

Check the equation.

Check whether the tool's optimization is logically justified.

Then decide whether anything really needs to be fixed.

For this case, the answer came from the arithmetic itself.

## Back to the complete design

This debugging episode came from my **APB-Based SPI Master Controller**, which I took through:

```text
RTL
 ↓
Vivado Simulation
 ↓
Lint / Design Checks
 ↓
Design Compiler Synthesis
 ↓
Timing / Area / Power
 ↓
Synthesized Netlist
```

The final top-level simulation demonstrates:

```text
APB Write 178
      ↓
SPI transmission
      ↓
SPI reception 109
      ↓
APB Read 109
```

Full implementation and reports:

**[APB-Based SPI Master Controller on GitHub](https://github.com/ChhandakRoy/APB-based-SPI-Master-Controller)**

---

*The synthesis report used a target library with incomplete power characterization; the reported 1.0848 µW value is therefore treated as the available switching-power estimate.*
