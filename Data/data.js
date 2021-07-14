//------------------------------- PROFILE DATA ---------------------------------------



const GitHub = {
    Title: "GitHub",
    Url: "https://github.com/MartinBruland",
    Icon: "Data/Assets/Icons/github.png",
    Category: "MARTIN BRULAND"
}

const LinkedIn = {
    Title: "LinkedIn",
    Url: "https://no.linkedin.com/in/martinbruland?trk=profile-badge",
    Icon: "Data/Assets/Icons/linkedin.svg",
    Category: "MARTIN BRULAND"
}

const Mail = {
    Title: "Mail",
    Url: "mailto:martinbruland@icloud.com",
    Icon: "Data/Assets/Icons/contact.png",
    Category: "MARTIN BRULAND"
}

const contact_data = [GitHub, LinkedIn, Mail]




//------------------------------- PROJECT 1 DATA ---------------------------------------

const Project1 = {

    Url: "?s=letterquiz",
    Category: "Games",
    Title: "LetterQuiz",
    Icon: "Data/Assets/Project: LetterQuiz/letterquizIcon.png",
    Description: "LetterQuiz is a game available for iOS devices.\n The player gets a question and answer alternatives, that has to be answered before the time runs out.\n Each correct answer gives the player 3 more seconds.\n If the answer is incorrect the player loses 1 of 3 lives.\n If the number of lives run out, the game is over.\n The goal is to reach the next difficulty by beating the score.",
    
    Links: {
        
        GitHub: {
            Name: "GitHub",
            Link: "https://github.com/MartinBruland/letterquiz-ios"
        }

    },

    Details: {

        Developer: "Martin Bruland",
        Created: "April 2019",
        Platform: "IOS",
        Language: "Swift",
        Genre: "Trivia, Puzzle, Quiz"

    },

    Images: {

        Image1: "Data/Assets/Project: LetterQuiz/letterquiz2.png",
        Image2: "Data/Assets/Project: LetterQuiz/letterquiz3.png",
        Image3: "Data/Assets/Project: LetterQuiz/letterquiz1.png"
    
    }
}


/*------------------------------- PROJECT 2 DATA ---------------------------------------*/

const Project2 = {


    Url: "?s=portfolio",
    Category: "Websites",
    Title: "Portfolio",
    Icon: "Data/Assets/Project: Portfolio Website/websiteicon2.png",
    Description: "«Portfolio» is the website that you are now visiting, which purpose is to display the developers projects.",
    
    Links: {

        GitHub: {
            Name: "GitHub",
            Link: "https://github.com/MartinBruland/martinbruland.github.io"
        }

    },

    Details: {

        Developer: "Martin Bruland",
        Created: "January 2021",
        Platform: "Web",
        Language: "HTML, CSS + JS"

    },

    Images: {



    }
}



/*------------------------------- ALL PROJECT DATA ---------------------------------------*/

const project_data = [Project1, Project2]