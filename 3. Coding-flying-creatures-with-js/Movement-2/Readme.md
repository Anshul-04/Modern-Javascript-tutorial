# Movement-2: Flying Creatures with JavaScript

This project demonstrates how to create and animate flying creatures using modern JavaScript. It focuses on implementing smooth movement and interactivity.

## Features

- Smooth animations for flying creatures.
- Interactive controls for movement.
- Modular and reusable code structure.
- Utilizes modern JavaScript features (ES6+).

## Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript.
- A modern web browser (e.g., Chrome, Firefox).

## Installation

1. Clone the repository:
  ```bash
  git clone <repository-url>
  ```
2. Navigate to the project directory:
  ```bash
  cd Movement-2
  ```
3. Open `index.html` in your browser to view the project.

## Usage

- Modify the JavaScript files in the `scripts` folder to customize the movement logic.
- Adjust styles in the `styles` folder to change the appearance of the creatures.

## Project Structure

```
/Movement-2
├── index.html
├── styles/
│   └── style.css
├── scripts/
│   └── movement.js
└── Readme.md
```
## Code Explanation

This project animates multiple flying creatures ("enemies") on an HTML canvas. Here’s a short and simple explanation of the main code and its logic:

- **Canvas Setup**:  
  The canvas is like a stage where all the creatures move. We set its width and height and get a drawing context (`ctx`) to draw on it.

- **Enemy Class**:  
  Each enemy is like a unique bird with its own:
  - **Speed**: How fast it moves left.
  - **Position**: Random starting place on the canvas.
  - **Flap Speed**: How quickly its wings flap (changes sprite frame).
  - **Curve & Angle**: Controls how much it bobs up and down (like flying in a wavy path).

- **update() Method**:  
  Moves the enemy left and makes it bob up and down using a sine wave.  
  If it goes off the left edge, it reappears on the right (like looping around the stage).  
  Handles sprite animation by changing frames at a random speed.

- **draw() Method**:  
  Draws the current frame of the enemy sprite at its position.

- **Animation Loop**:  
  Clears the canvas, updates and draws each enemy, then repeats the process for smooth animation.

**Analogy:**  
Imagine a parade of cartoon birds, each with its own style of flying and flapping. When a bird leaves one side of the stage, it comes back from the other, making the parade endless and lively.
