# โปรแกรมคำนวณค่าไฟฟ้า / Electricity Bill Calculator

## ภาษาไทย

### Pseudocode
```
BEGIN
  กำหนด อัตราค่าไฟฟ้า = [
    {ช่วง: 0-150, ราคา: 3.50},
    {ช่วง: 151-400, ราคา: 4.20},
    {ช่วง: 401 ขึ้นไป, ราคา: 5.00}
  ]
  กำหนด ค่าบริการ = 50
  
  รับ หน่วยไฟฟ้าที่ใช้ จากผู้ใช้งาน
  
  ถ้า หน่วย <= 150 แล้ว
    ค่าไฟ = หน่วย * 3.50
  นอกนั้น ถ้า หน่วย <= 400 แล้ว
    ค่าไฟ = (150 * 3.50) + ((หน่วย - 150) * 4.20)
  นอกนั้น
    ค่าไฟ = (150 * 3.50) + (250 * 4.20) + ((หน่วย - 400) * 5.00)
  จบเงื่อนไข
  
  ค่าไฟรวม = ค่าไฟ + ค่าบริการ
  
  พิมพ์ ผลลัพธ์ ค่าไฟ, ค่าบริการ, ค่าไฟรวม
END
```

## English

### Pseudocode
```
BEGIN
  DEFINE electricity_rates = [
    {range: 0-150, price: 3.50},
    {range: 151-400, price: 4.20},
    {range: 401+, price: 5.00}
  ]
  DEFINE service_fee = 50
  
  INPUT electricity_units_used
  
  IF units <= 150 THEN
    electricity_cost = units * 3.50
  ELSE IF units <= 400 THEN
    electricity_cost = (150 * 3.50) + ((units - 150) * 4.20)
  ELSE
    electricity_cost = (150 * 3.50) + (250 * 4.20) + ((units - 400) * 5.00)
  END IF
  
  total_cost = electricity_cost + service_fee
  
  OUTPUT electricity_cost, service_fee, total_cost
END
```

## การใช้งาน / Usage

โปรแกรมนี้จะคำนวณค่าไฟฟ้าตามอัตราที่กำหนด:
- 0-150 หน่วย: 3.50 บาท/หน่วย
- 151-400 หน่วย: 4.20 บาท/หน่วย
- 401 หน่วยขึ้นไป: 5.00 บาท/หน่วย
- ค่าบริการ: 50 บาท (คงที่)

This program calculates electricity bills according to the following rates:
- 0-150 units: 3.50 THB/unit
- 151-400 units: 4.20 THB/unit
- 401+ units: 5.00 THB/unit
- Service fee: 50 THB (fixed)