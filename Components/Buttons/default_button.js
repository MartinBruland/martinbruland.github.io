function default_button(title, width, height) {
        
    var button = document.createElement("li")
    button.className = "default_button"
    button.innerHTML = title
    button.style.width = width
    button.style.height = height

    button.style.display = "flex"
    button.style.justifyContent = "center"
    button.style.alignItems = "center"
    button.style.borderRadius = "25px"
    button.style.margin = "15px"
    button.style.boxShadow = "0 0.5px 1px rgba(0,0,0,0.12), 0 0 1px rgba(0,0,0,0.24)"
    button.style.whiteSpace = "nowrap"
    button.style.overflow = "hidden"

    button.addEventListener('mouseover', function() {

        button.style.cursor = "pointer"

    });
    
    return button

}