


function project_button(project_image, project_title, project_link, project_category) {

    // BUTTON
    var button_link = document.createElement("a")
    button_link.href = project_link;
    button_link.id = project_category
    button_link.style.height = "150px"
    

    //  ICON
    var button_image = document.createElement("img")
    button_image.src = project_image;
    button_image.style.width = "auto";
    button_image.style.height = "40%";
    button_image.style.borderRadius = "8pt";
    button_image.style.marginBottom = "5pt";
   
   
    // TITLE
    var button_text = document.createTextNode(project_title)
    var button_title = document.createElement("p")
    button_title.style.fontWeight = "bolder";
    button_title.style.fontSize = "10pt";


    // SHAPE
    var button_shape = document.createElement("div")
    button_shape.className = "project_button"
    button_shape.style.display = "flex";
    button_shape.style.flexDirection = "column";
    button_shape.style.justifyContent = "center";
    button_shape.style.alignItems = "center";
    button_shape.style.width = "inherit";
    button_shape.style.height = "inherit"
    button_shape.style.borderRadius = "12px";
    button_shape.style.boxShadow = "0 0.5px 1px rgba(0,0,0,0.12), 0 0 1px rgba(0,0,0,0.24)"
    
    

    // BUILD
    button_title.appendChild(button_text)
    button_shape.appendChild(button_image)
    button_shape.appendChild(button_title)
    button_link.appendChild(button_shape)

    return button_link
    
}