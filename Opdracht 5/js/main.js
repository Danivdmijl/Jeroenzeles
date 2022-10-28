const toBeClonedSection = document.getElementById("js--toBeCloned")


fetch("/data/trellies.json").then(
    function (response) {
        return response.json();
    }
).then(
    function (data) {
        const clone = toBeClonedSection.cloneNode(true);
        clone.classList.toggle('tasks--hidden');
        clone.setAttribute("id","");
        document.querySelector('main').appendChild(clone);
    }
)