# Flowchart for ElectricityBillCalculator.java

## Program Flow

```mermaid
flowchart TD
    A[Start] --> B[Init scanner]
    B --> C[Ask for kWh input]
    C --> D[Read units]
    D --> E[Call calculateBill]
    E --> F[Set serviceFee]
    F --> G[Compute totalBill]
    G --> H[Show units]
    H --> I[Show bill amount]
    I --> J[Show service fee]
    J --> K[Show total bill]
    K --> L[Close scanner]
    L --> M[End]

    E --> N[calculateBill]
    N --> O{units <= 150?}
    O -->|Yes| P[Compute tier1 bill]
    O -->|No| Q{units <= 400?}
    Q -->|Yes| R[Compute tier2 bill]
    Q -->|No| S[Compute tier3 bill]
    P --> T[Return bill]
    R --> T
    S --> T
    T --> G
```

## Description

The program follows these steps:

1. **Input**: Gets electricity consumption in kWh from the user
2. **Processing**: Calculates the bill based on tiered pricing:
   - First 150 units: 3.50 THB/unit
   - Next 250 units (151-400): 4.20 THB/unit
   - Remaining units (401+): 5.00 THB/unit
3. **Service Fee**: Adds a fixed service fee of 50 THB
4. **Output**: Displays the units consumed, calculation breakdown, service fee, and total bill

## Decision Logic

The billing calculation uses a tiered approach:
- If units ≤ 150: All units charged at 3.50 THB/unit
- If 150 < units ≤ 400: First 150 units at 3.50 THB/unit, remaining at 4.20 THB/unit
- If units > 400: First 150 at 3.50 THB/unit, next 250 at 4.20 THB/unit, remainder at 5.00 THB/unit