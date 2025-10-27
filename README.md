# 🧮 Calculator

A simple, web-based, fully functional calculator built for [The Odin Project](https://www.theodinproject.com/).
It supports all basic arithmetic operations, keyboard input, percentages, sign toggling, and live display updates.

## ✨ Features

- **Basic math operations:** Addition, subtraction, multiplication, and division
- **Chained operations:** Perform calculations sequentially
- **Keyboard support:** Use your keyboard to type numbers, operators, delete, clear, and evaluate
- **Extra functions:**
  - `AC` - clear all data and reset the display
  - `⌫` - backspace
  - `%` - toggle a percentage input
  - `±` - toggle positive/negative sign
  - `.` - add a decimal point
- **Responsive layout:** Buttons and display adjust within a centered container

## ✅ How It Works

- Each number and operator button updates a **shared display variable** (`displayValue`)
- When an operator is pressed:
  - The current number is stored as `firstValue`
  - The selected operator is saved in `selectedOperator`
  - The next number typed becomes `secondValue`
- When `=` is pressed, the calculator calls:  
```js
operate(firstValue, secondValue, selectedOperator);
```
and updates the display with the result
- Keyboard inputs are handled with a global `keydown` listener that maps the keys to the same funcitons as button clicks

## ⌨️ Keyboard Shortcuts

| Button | Function |
| :--- | :---|
| `0-9` | Enter numbers |
| `+ - * /` | Operators |
| `Enter`/`=` | Equals |
| `Backspace` | Delete last digit |
| `Escape` | Clear all (AC) |
| `.` | Decimal point |
| `%` | Toggle percentage |
| `t` | Toggle sign (±) |

## 🧱 Built With

- **HTML** - Page structure
- **CSS** - Layout and styling
- **JavaScript** - Logic, event handling, and dynamic updates

## 🧠 Key Concepts Practiced

- Javascript logic & state handling
- DOM manipulation
- Event-Driven Programming
- Modular function design
- Keyboard accessibility
- CSS flexbox layout
- Clean UI design

## 🏫 About the Project

This project is part of **The Odin Project's Foundations Course**, under the *JavaScript Basics* section. It demonstrates proficiency in HTML, CSS, and JavaScript fundamentals through a hands-on creative exercise. 