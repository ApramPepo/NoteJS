const container = document.querySelector(".container");
        const createNote = document.querySelector("#create");

        function newNote() {
            const div = document.createElement("div");
            div.className = "app";
            const inputBox = document.createElement("textarea");
            inputBox.className = "text";
            const clearButton = document.createElement("button");
            clearButton.className = "clear";
            const img = document.createElement("img");
            img.src = "/NoteJS/img/delete.png";
            img.alt = "delete note";
            clearButton.appendChild(img);
            clearButton.appendChild(document.createTextNode("Clear"));
            div.appendChild(inputBox);
            div.appendChild(clearButton);
            container.appendChild(div);

            clearButton.addEventListener("click", () => {
                div.remove();
            });
        }

        createNote.addEventListener("click", newNote);

        const initialClear = document.querySelector(".clear");
        initialClear.addEventListener("click", () => {
            initialClear.parentElement.remove();
        });