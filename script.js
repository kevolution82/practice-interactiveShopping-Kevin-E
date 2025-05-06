document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("itemInput");
    const addBtn = document.getElementById("addButton");
    const list = document.getElementById("shoppingList");

    addBtn.addEventListener("click", () => {
        const text = input.value.trim();
        if (text === "") return;

        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = text;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";

        // Edit toggles to Save and back
        editBtn.addEventListener("click", () => {
            if (editBtn.textContent === "Edit") {
                const editField = document.createElement("input");
                editField.value = span.textContent;
                li.replaceChild(editField, span);
                editBtn.textContent = "Save";
            } else {
                const newText = li.querySelector("input").value.trim();
                if (newText === "") return;
                span.textContent = newText;
                li.replaceChild(span, li.querySelector("input"));
                editBtn.textContent = "Edit";
            }
        });

        // Remove deletes the entire darn thing!!!
        removeBtn.addEventListener("click", () => {
            list.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(removeBtn);
        list.appendChild(li);

        input.value = "";
        input.focus();
    });
});
