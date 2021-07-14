

function add_section(text, data) {

    // TITLE
    var title = document.createElement("h1")
    var textnode = document.createTextNode(text)
    title.appendChild(textnode)


    // CONTENT
    var content = document.createElement("div")
    content.style.width = "100%"
    content.style.height = "100%"
    content.style.paddingTop = "20px"
    content.appendChild(data)


    // VIEW
    var view = document.createElement("div")
    view.className = "projectpage_section"
    view.style.display = "flex"
    view.style.flexDirection = "column"
    view.style.justifyContent = "center"
    view.style.alignItems = "flex-start"
    view.style.width = "100%"
    view.style.paddingTop = "30px"
    view.style.paddingBottom = "30px"
    view.appendChild(title)
    view.appendChild(content)
    

    return view

}
