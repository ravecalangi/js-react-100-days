# Responsive UI Playground

## Description
- A simple HTML and CSS project that demonstrates how different CSS sizing units (% / px / vw / vh) behave inside and outside of parent containers.

## Features
- Boxes sized using percentages (%) relative to parent elements.
- Boxes with fixed pixel (px) widths.
- Boxes using viewport width (vw) and viewport height (vh) units.
- Nested parent container to observe percentage-based sizing.
- Color-coded boxes for easy visual distinction.

## Technologies Used
- HTML5
- CSS3

## How to Run
1. Download or clone the project.
2. Ensure `index.html` and `style.css` are in the same folder.
3. Open `index.html` in your web browser.

## Usage
1. Observe the different box sizes on the page.
2. Resize the browser window to see how `%`, `vw`, and `vh` adjust dynamically.
3. Check the nested `.parent` container to see how percentage-based widths scale relative to the parent.

**Example:**

- `.box-fifty-percent` inside `.parent`  
  Input: parent width = 135px  
  Output: box width = 67.5px (50% of parent)

- `.one-hundred-pixels`  
  Input: any container  
  Output: box width = 100px (fixed)

- `.box-fifty-vw`  
  Input: viewport width = 1200px  
  Output: box width = 600px (50% of viewport)

- `.box-twenty-vh`  
  Input: viewport height = 800px  
  Output: box width = 160px (20% of viewport height)

## License
MIT License
