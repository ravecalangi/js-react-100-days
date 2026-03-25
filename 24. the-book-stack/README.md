# The Book Stack

## Description
- A simple web application that lets users manage a bookshelf by adding books to the top, middle, or bottom of the list using specific letter inputs.

## Features
- Add "The Great Gatsby" to the **top** of the shelf.
- Insert "To Kill a Mockingbird" in the **middle** of the shelf.
- Add "1984" to the **bottom** of the shelf.
- Supports both **Enter key** and **Add button** for adding books.
- Input validation to allow only F, M, or L.

## Technologies Used
- HTML
- CSS
- JavaScript (Vanilla JS)
- DOM Manipulation

## How to Run
1. Open the `index.html` file in any modern web browser.
2. Make sure `script.js` and `style.css` are in the same folder as `index.html`.

## Usage
1. Type a letter in the input field:
   - `F` → Adds "The Great Gatsby" to the top of the shelf.
   - `M` → Adds "To Kill a Mockingbird" to the middle of the shelf.
   - `L` → Adds "1984" to the bottom of the shelf.
2. Press **Enter** or click the **Add** button to execute.
3. If an invalid letter is entered, an alert will show prompting the user to choose F, M, or L only.

**Example:**
- Initial shelf:  
  1. Harry Potter  
  2. The Alchemist  
  3. Dune  

- Input: `F` → Result:  
  1. The Great Gatsby  
  2. Harry Potter  
  3. The Alchemist  
  4. Dune  

- Input: `M` → Result:  
  1. The Great Gatsby  
  2. Harry Potter  
  3. To Kill a Mockingbird  
  4. The Alchemist  
  5. Dune  

- Input: `L` → Result:  
  1. The Great Gatsby  
  2. Harry Potter  
  3. To Kill a Mockingbird  
  4. The Alchemist  
  5. Dune  
  6. 1984  

## License
MIT License
