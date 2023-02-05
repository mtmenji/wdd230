const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener('click', () => {        
    if (input.value != '') {
        const chapter = input.value;
        input.value = '';

        const listItem = document.createElement("li");
        const listText = document.createElement("span");
        const listBtn = document.createElement("button");

        listItem.appendChild(listText);
        listText.textContent = chapter;
        listItem.appendChild(listBtn);
        listBtn.textContent = "❌";
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
            list.removeChild(listItem);
        });

        input.focus();
    }
});