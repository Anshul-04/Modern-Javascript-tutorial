# Parallax Scrolling in JavaScript Games

This project demonstrates a parallax scrolling effect in a JavaScript game using HTML5 Canvas. It includes multiple background layers that move at different speeds to create a sense of depth and immersion.

## Features

-   **Parallax Scrolling:** Implements a parallax effect with multiple background layers.
-   **Adjustable Game Speed:** Includes a slider to control the speed of the background layers.
-   **Layer Class:** Uses a `Layer` class to manage and update each background layer.
-   **Canvas-Based:** Built using HTML5 Canvas for rendering.

## Technologies Used

-   HTML5 Canvas
-   JavaScript

## Setup

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd parallax-in-js-games
    ```

2.  **Open `index.html` in your browser.**

## Project Structure

-   `index.html`: The main HTML file containing the canvas and slider.
-   `style.css`: CSS file for styling the page.
-   `script.js`: JavaScript file containing the game logic.
-   `assets/`: Directory containing the background layer images (`layer-1.png` to `layer-5.png`).

## Usage

-   Open `index.html` in a web browser.
-   Use the slider to adjust the game speed and observe the parallax effect.

## Code Overview

### HTML (`index.html`)

-   Creates a canvas element with `id="canvas"`.
-   Includes a slider with `id="slider"` to control the game speed.
-   Displays the current game speed using an element with `id="showGameSpeed"`.

### CSS (`style.css`)

-   Basic styling for the page and canvas.

### JavaScript (`script.js`)

-   **Canvas Setup:**
    -   Gets the canvas element and its 2D rendering context.
    -   Defines canvas dimensions (`CANVAS_WIDTH`, `CANVAS_HEIGHT`).
-   **Game Speed:**
    -   Initializes the game speed (`gameSpeed`).
-   **Background Layers:**
    -   Loads the background layer images.
-   **Event Listener:**
    -   Adds a `load` event listener to the window to execute the main game logic after all assets are loaded.
-   **Slider Control:**
    -   Sets up the slider to adjust the game speed.
    -   Updates the displayed game speed when the slider value changes.
-   **Layer Class:**
    -   Defines a `Layer` class to manage each background layer.
    -   The `Layer` class includes:
        -   `constructor(image, speedModifier)`: Initializes the layer with an image and speed modifier.
        -   `update()`: Updates the layer's position based on the game speed and speed modifier.
        -   `draw()`: Draws the layer on the canvas, creating a seamless scrolling effect.
-   **Game Objects:**
    -   Creates instances of the `Layer` class for each background layer.
    -   Stores the layers in a `gameObjects` array.
-   **Animation:**
    -   Defines an `animate()` function to:
        -   Clear the canvas.
        -   Update and draw each game object (layer).
        -   Use `requestAnimationFrame()` to create a smooth animation loop.

## Assets

The `assets/` directory contains the background layer images used in the parallax effect. Ensure these images are present for the project to run correctly.

