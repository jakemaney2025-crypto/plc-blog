---
title: Ladder Logic Programming Basics
date: 2024-01-20
category: Programming
tags: [ladder-logic, programming, plc-languages]
excerpt: Master the fundamentals of ladder logic programming, the most common PLC programming language.
---

# Ladder Logic Programming Basics

Ladder Logic is the most widely used programming language for PLCs. It represents a program in a graphical format that mimics relay logic diagrams.

## What is Ladder Logic?

Ladder Logic, also known as Relay Ladder Logic or RLL, represents control logic in a format similar to electrical relay circuits. The name comes from its appearance—it looks like a ladder with two vertical rails and horizontal rungs.

## Basic Components

### Contacts (Inputs)
- **Normally Open (NO)**: Represented by two vertical lines. Contact closes when input signal is active.
- **Normally Closed (NC)**: Represented by two vertical lines with a diagonal line through them. Contact opens when input signal is active.

### Coils (Outputs)
- **Standard Coil**: Energizes an output when the logic is true.
- **Set/Reset Coils**: Used to maintain states between scans.
- **Counters and Timers**: Special coils for counting and timing functions.

## Basic Logic Operations

### AND Logic
```
Input1 —|—— AND ——( )—— Output
Input2 —|——
```
Output energizes only when both inputs are active.

### OR Logic
```
Input1 —|——┐
           |——— OR ——( )—— Output
Input2 —|——┘
```
Output energizes when either or both inputs are active.

### NOT Logic
```
Input1 —|/|—— NOT ——( )—— Output
```
Output energizes when input is NOT active.

## Scan Cycle

The PLC executes ladder logic in a continuous loop called a scan cycle:

1. **Input Scan**: Read all input modules
2. **Logic Scan**: Execute the ladder logic
3. **Output Scan**: Update all output modules
4. **Housekeeping**: Perform diagnostic checks

## Programming Tips

- Keep programs simple and well-organized
- Use meaningful names for variables and tags
- Document your logic with comments
- Test thoroughly before deployment
- Always have emergency stop functionality

Ladder Logic's intuitive graphical format makes it accessible to both electricians and engineers, making it the industry standard for PLC programming.
