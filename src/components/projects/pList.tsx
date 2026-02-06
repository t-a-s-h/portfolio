import { type List, type Info } from "../../utils/types"

export const project_list : List = [
    {
        title : "hangman",
        tagline : "A simple game of hangman.",
        blurb : `I developed this hangman game with React.
I was inspired to create this after viewing the
YouTube video Hangman is a Weird Game.`,
        image : "hangman.png",
        links : [
            {
                target : "GitHub",
                url : "#",
            },
                        {
                target : "Demo",
                url : "#",
            },
        ]
    },
    {
        title : "connect 4",
        tagline : "A game of connect 4.",
        blurb : `I initially developed this game in C++, then converted it to TS and added an AI opponent`,
        image : "connect4.png",
        links : [
            {
                target : "GitHub",
                url : "#",
            },
                        {
                target : "Demo",
                url : "#",
            },
        ]
    }
]

export const project_info : Info = {
    hangman : {
        info : [
            {
                heading_type : "h4",
                heading_text : "about",
                text :`This game was originally completed in my spare time over about a month and a half. I have since edited it to use Reacts features better and removed API dependence for the retrieval of dictionary words.`
            },
            {
                heading_type : "h4",
                heading_text : "achievements",
                text : `Successfully used React to create an engaging and user-friendly Hangman game.`
            },
            {
                heading_type : "h4",
                heading_text : "next steps",
                text : `In the upcoming development phase, I plan to create more interactivity for the user by incorporating category selection into the "guess a word" user flow. Additionally, I aim to improve the GUI for a more polished user experience.`
            },
        ]
    },
    "connect 4": {
            info : [
                {
                    heading_type : "h4",
                    heading_text : "about",
                    text :`This game was originally completed in my spare time over about a month and a half. The most difficult part was implementing the AI opponent.`
                },
                {
                    heading_type : "h4",
                    heading_text : "achievements",
                    text : `Successfully created heuristic so that AI is a formidable opponent for most people.`
                },
                {
                    heading_type : "h4",
                    heading_text : "next steps",
                    text : `In the upcoming development phase, I plan to update the UI so that it is more responsive.`
                },
            ]
        }
}