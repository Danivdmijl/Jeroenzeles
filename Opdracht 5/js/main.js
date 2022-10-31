const toBeClonedSection = document.getElementById("js--toBeCloned")


fetch("./data/trellies.json").then(
    function (response) {
        return response.json();
    }
).then(
    function (data) {
        const clone = toBeClonedSection.cloneNode(true);
        clone.classList.toggle('tasks--hidden');
        clone.setAttribute("id","");
        document.querySelector('main').appendChild(clone);
        /* h2 */
        clone.firstElementChild.firstElementChild.innerText = data.title;
        /* number */
        clone.firstElementChild.children[1].children[0].innerText = data.activitiesCount;
       
        let toBeAddedUl = document.createElement("ul");
        toBeAddedUl.classList.add("tasks__lists");
        clone.appendChild(toBeAddedUl);
        
        for(let i = 0; i < data.activities.length; i++){
            let toBeAddedLi = document.createElement("li");
            toBeAddedLi.classList.add("tasks__listItem");
            toBeAddedUl.appendChild(toBeAddedLi);

            let toBeAddedLabel = document.createElement("label");
            toBeAddedLabel.classList.add("tasks__label");
            toBeAddedLabel.innerText = data.activities[i].label;
            toBeAddedLi.appendChild(toBeAddedLabel);

            let toBeAddedP = document.createElement("p");
            toBeAddedP.innerText = data.activities[i].description;
            toBeAddedLi.appendChild(toBeAddedP);
        }
    }
)

        // /* activitie Label */
        // clone.children[1].children[0].children[0].innerText	= data.activities[0].label;
        // /* activitie text */
        // clone.children[1].children[0].children[1].innerText	= data.activities[0].description;