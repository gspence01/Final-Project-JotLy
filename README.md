# JotLog
## What is JotLog?
Hey there! JotLog is a project I am working on for my final project with SDSU Digital Skills bootcamp. This is user authenticated social media app inspired by the apps Twitter and Vent. For now, I plan for JotLog to be a text-based platform for users to submit either public or private journal entries. 

## How to use JotLog
JotLog is user authenticated, so there will be a sign-up / log-in page for users. Once the user is logged in, there will be a page to view public entries by other members and another page to view private entries submitted by that particular user. If a user wants to post their own journal entry, there will be a modal to write in, where they can submit a title and any text they wish to add. There will also be an option to make the post public for others to view or private for their own viewing. 

## So what technologies will I be using?
I plan to make this application PERN stack. I will use postgres and Sequelize to configure a database holding the user information, all the posts, and (if time and/or the universe permits lmao) comments. 

## Bugs and unfinished functionality 
Ohhh boy are there a lot of bugs in this project. 

It's propbably because of how I set up the modals and different views, but when you post an entry on this app, there is a flash of the splash page. I let the form keep it's default behavior (reloading the page) on submitting as a lazy out to close out the post modal. And I think on reloading, App.js is rendering that splash page. 

Furthermore, I could not figure out a way to pass data between the components in such a way that I could access the session's user_id. Because of that, I could not compare tht id with the database's entry user_id, preventing me from getting only entries that were private AND only belonged to that specific user in the Private Posts view.

There was so much more functionality I wanted to add to this app, but unfortunately a career change mixed with a horribly timed depressive episode prevented me from really getting to engage with this project. I will honestly probably keep this as a side project because it may be an ugly code baby, but it's mine; a labor of love (and copious amounts of caffeine mixed with my limited understanding of software development).