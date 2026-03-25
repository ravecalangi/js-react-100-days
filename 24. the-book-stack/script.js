const classList = document.getElementById("class-list");
const addBtn = document.getElementById("add-btn");
const numInput = document.getElementById("num-input");

document.addEventListener("keyup", (e) => {

        if (e.key == "Enter") {

            const letterChoice = numInput.value.toUpperCase();
        
        if (letterChoice == "F") {

            const firstBook = document.createElement("li");
            firstBook.textContent = "The Great Gatsby";
            classList.prepend(firstBook);

        } else if (letterChoice == "M") {

            const mockingBird = document.createElement("li");
            mockingBird.textContent = "To Kill a Mockingbird";
            
            const alchemist = classList.children[2];

            classList.insertBefore(mockingBird, alchemist); // newElement, referenceElement

        } else if (letterChoice == "L") {

            const lastBook = document.createElement("li");
            lastBook.textContent = "1984";
            classList.append(lastBook);

        } else {

            alert("Invalid! Please choose F, M, or L only.");

        }

        numInput.value = "";
        
    }
});

addBtn.addEventListener("click", () => {

    const letterChoice = numInput.value.toUpperCase();
    
    if (letterChoice == "F") {

        const firstBook = document.createElement("li");
        firstBook.textContent = "The Great Gatsby";
        classList.prepend(firstBook);

    } else if (letterChoice == "M") {

        const mockingBird = document.createElement("li");
        mockingBird.textContent = "To Kill a Mockingbird";
        
        const alchemist = classList.children[2];

        classList.insertBefore(mockingBird, alchemist); // newElement, referenceElement

    } else if (letterChoice == "L") {

        const lastBook = document.createElement("li");
        lastBook.textContent = "1984";
        classList.append(lastBook);

    } else {

        alert("Invalid! Please choose F, M, or L only.");

    }

    numInput.value = "";

});

