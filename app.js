function setup() {

    // DATA
    let data = [contact_data, project_data]

    // VARIABLES
    var default_filter = "All Projects";

    // ADD CONTENT
    manage_collection_buttons(default_filter, data)
    manage_filter_buttons(default_filter, data)

    // LOAD PROJECT.
    load_projectpage(data[1])

    // ADDITIONAL STUFF.


}







// LOAD PROJECTPAGE ON PROJECT URL.
function load_projectpage(all_projects) {

    var current_url = window.location.search

    all_projects.forEach(project => {
        
        if (current_url == project.Url) {
            
            document.getElementById("mainpage").remove();

            var myProject = create_project_view(project)
            document.body.appendChild(myProject)
        }
    });   
}






// ADD CONTENT ---------------------------------------------------------------------------------------------------------

    // FILTER BUTTONS
    function manage_filter_buttons(default_filter, data) {
        
        var filters = ["All Projects", "Websites", "Applications", "Games", "MARTIN BRULAND"]
        
        filters.forEach(filter => {
            
            var button = default_button(filter, "100%", "50px")
            button.id = filter

            if (filter != "MARTIN BRULAND") {
                document.getElementById("upper").appendChild(button)
            } else {
                button.style.fontWeight = "600"
                document.getElementById("lower").appendChild(button)
            }
            
            button.onclick = function() {

                // UPDATE BUTTON ACTIVE STATUS.
                var current = document.getElementsByClassName("default_button_active"); // Get current button with active class.
                current[0].className = current[0].className.replace(" default_button_active", "") // Remove active class from current button.
                button.className += " default_button_active"; // Adds active class to new button on click.
                if(window.outerWidth < "1200") {
                    document.getElementById("slide-sidebar").checked = false;
                }
                // LOAD CONTENT IN COLLECTION.
                manage_collection_buttons(filter, data)
            }
        });

        //SETS DEFAULT FILTER AS ACTIVE.. 
        document.getElementById(default_filter).className += " default_button_active";
        
    }











/*MANAGE COLLECTION VIEW*/
    
    function manage_collection_buttons(active_filter, data) {
        
        // ADJUST DATA.
        var button_data = data[1];
        
        if (active_filter == "MARTIN BRULAND") {
            button_data = data[0]
        }

        // REMOVE EXISTING BUTTONS.
        var collection = document.getElementById('project_collection');
        remove_elements_from_view(collection)

        // CREATE NEW BUTTONS.
        var buttons = create_collection_buttons(button_data)

        // ADD BUTTONS.
        for (button in buttons) {

            if (active_filter == buttons[button].id || active_filter == "All Projects") {

                document.getElementById("project_collection").appendChild(buttons[button])
            
            }
        }
    }


    // CREATE NEW BUTTONS.
    function create_collection_buttons(data) {

        var all_buttons = []

        Object.entries(data).forEach(button_data => {

            var category = button_data[1]["Category"]
            var icon = button_data[1]["Icon"]
            var url = button_data[1]["Url"]
            var title = ""

            if (button_data[1]["Title"]) {
                title = button_data[1]["Title"]
            }

            var button = project_button(icon, title, url, category) 
            all_buttons.push(button)
        });
        
        return all_buttons
    }

    
    // REMOVE EXISTING BUTTONS.
    function remove_elements_from_view(collection) {

        while(collection.firstChild){
            collection.removeChild(collection.firstChild);
        }

    }
