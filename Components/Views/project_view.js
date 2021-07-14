function create_project_view(data) {
    
// MANAGE DATA --------------------------------------------------------------------------------------

    var title = data.Title
    var description = data.Description
    var icon = data.Icon
    var image_list = data.Images
    var link_list = data.Links
    var specification_list = data.Details
    



    
// CREATE CONTENT --------------------------------------------------------------------------------------

    // TITLE

    var project_title = document.createElement("h1")
    var title_textnode = document.createTextNode(title)
    project_title.appendChild(title_textnode)

    
    // ICON
    var project_icon = document.createElement("img")
    project_icon.src = icon


    // DESCRIPTION
    var description_text = document.createElement("p")
    var description_textnode = document.createTextNode(description)
    description_text.appendChild(description_textnode)

    // LINKS
    var links_container = document.createElement("ul")
    Object.entries(link_list).forEach(element => {

        var shape = default_button(element[1].Name, "150px", "45px")
        var button = document.createElement("a")
        button.href = element[1].Link
        
        button.appendChild(shape)

        links_container.appendChild(button)

    });

    // PREVIEW
    var preview_container = document.createElement("div")
    Object.entries(image_list).forEach(element => {

        var preview_image = document.createElement("img")
        preview_image.src = element[1]
        preview_image.style.width = "220px"
        preview_image.style.height = "auto"
        preview_image.style.borderRadius = "20px"
        preview_image.style.marginRight = "20px"
        preview_container.appendChild(preview_image)

    });

    // DETAILS
    var details_container = document.createElement("ul")
    Object.entries(specification_list).forEach(element => {

        var details_item = document.createElement("li")
        details_item.innerHTML = element[0] + ": " + element[1]
        details_container.appendChild(details_item)

    });

    
    
    
// ADD CONTENT --------------------------------------------------------------------------------------------------
   
    var project_page = document.createElement("div")


    // ADD NAVIGATIONBAR
    var navigationbar = document.createElement("div")
    var close_button = document.createElement("a")
    close_button.href = "/"
    close_button.innerHTML = "X"
    project_page.appendChild(navigationbar)
    navigationbar.appendChild(close_button)


    // ADD PROJECT HEADER
    var header = document.createElement("div")
    project_page.appendChild(header)
    header.appendChild(project_icon)
    header.appendChild(project_title)
    header.appendChild(links_container)


    // ADD PREVIEW
    if (preview_container.hasChildNodes()) {
        var project_preview_component = add_section("Preview", preview_container)
        project_page.appendChild(project_preview_component)
    }
    

    // ADD DESCRIPTION
    var project_description_component = add_section("Description", description_text)
    project_page.appendChild(project_description_component)
    

    // ADD DETAILS
    var project_details_component = add_section("Details", details_container)
    project_page.appendChild(project_details_component)






    
// ADD STYLING --------------------------------------------------------------------------------------------------------------------

    function add_styling() {

        // PROJECT PAGE
        project_page.className = "projectpage_page"

        project_page.style.display = "flex"
        project_page.style.flexDirection = "column"
        project_page.style.justifyContent = "flex-start"
        project_page.style.alignItems = "flex-start"
        project_page.style.width = "100%"
        project_page.style.height = "auto"
    
        project_page.style.boxSizing = "border-box"
        project_page.style.padding = "5%"

        project_page.style.margin = "0"
        project_page.style.borderRadius = "0"
        project_page.style.boxShadow = "0 0.5px 1px rgba(0,0,0,0.12), 0 0.5px 2px rgba(0,0,0,0.24)"

        // NAVIGATION BAR
        navigationbar.style.display = "flex"
        navigationbar.style.justifyContent = "flex-start"
        navigationbar.style.alignItems = "center"
        navigationbar.style.width = "100%"
        navigationbar.style.paddingBottom = "5%"


        // CLOSE BUTTON
        close_button.className = "projectpage_close"



        close_button.style.display = "flex"
        close_button.style.alignItems = "center"
        close_button.style.justifyContent = "center"

        close_button.style.width = "40px"
        close_button.style.height = "40px"
        close_button.style.borderRadius = "25px"


        // PROJECT HEADER
        header.style.display = "flex"
        header.style.flexDirection = "column"
        header.style.justifyContent = "center"
        header.style.alignItems = "center"
        header.style.width = "100%"
        header.style.height = "auto"
 
        project_icon.style.borderRadius = "15%"
        project_icon.style.width = "150px"

        project_icon.style.height = "auto"


        project_title.style.paddingTop = "1.5rem"
        project_title.style.paddingBottom = "3rem"

        links_container.style.display = "flex"
        links_container.style.flexDirection = "row"
        links_container.style.justifyContent = "center"
        links_container.style.alignContent = "flex-start"
        links_container.style.overflowX = "auto"
        links_container.style.whiteSpace = "nowrap"
        links_container.style.width = "100%"


        // PREVIEW
        preview_container.style.display = "flex"
        preview_container.style.flexDirection = "row"
        preview_container.style.justifyContent = "flex-start"
        preview_container.style.alignItems = "center"
        preview_container.style.overflowX = "auto";
        preview_container.style.whiteSpace = "nowrap";

        // DESCRIPTION


        // DETAILS
        details_container.style.display = "flex"
        details_container.style.flexDirection = "column"
        details_container.style.justifyContent = "flex-start"
        details_container.style.alignItems = "flex-start"


        
        // MEDIA QUERIES
        var size = window.matchMedia("(min-width: 1200px)")

        if (size.matches) {

            project_page.style.width = "calc(100% / 1.6)"
            project_page.style.borderRadius = "12px"
            project_page.style.margin = "55px 0 55px 0"

        }
    }

    add_styling() 

    window.addEventListener('resize', function() {

        add_styling()

    });

   return project_page
}
