//Example fetch using DnD5eAPI - place subclasses in ul

// document.querySelector("button").addEventListener("click", reloader)

document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {

    clearElements()

    const choice = document.querySelector('input').value.toLowerCase()
    const url = `https://www.dnd5eapi.co/api/spells/${choice}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            document.querySelector("h3 + p").innerText = data.classes[0].name
            document.querySelector("h2").innerText = data.classes[0].name
            const subs = data.subclasses
            subs.forEach(sub => {
                let mailList = document.querySelector("ul")
                let listNode = document.createElement("li")
                listNode.appendChild(document.createTextNode(sub.name))
                mailList.appendChild(listNode)

            });
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

function clearElements() {
    const mailList = document.querySelector("ul")
    while (mailList.hasChildNodes()) {
        mailList.removeChild(mailList.firstChild)
    }

}