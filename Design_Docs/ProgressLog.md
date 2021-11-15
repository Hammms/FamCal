9/4/2021
    created angular project
    pulled a based table to act as the calendar
    moved it into its own component 
    wired up the component to root and is displaying
    

       
9/5/2021
    there is not much that i could do today since we are going to have a party for labor day. 

    i decided that i wanted to orgnize all of the componenets including the root into seperate folders to make it easier to understand and look at. 

    it took me a little work to remeber where everything wires up to but for the most part it was not that big of a deal. 

    created the shell for adding in the login componenet 


9/7/2021
    i still get an error when i first load up the page it seems the component for my calendar doesnt initalize properly.

9/8/2021
    working on dynamically binding information and keeping the componenets bare bones. 
    going throug the hero tutorial on angular website and replicating what is useful to me. 
    taking a step back nown and getting an entire rundown of the site 
    
    Creating Site diagram to better understand all of the interworking parts 

9/9/2021
    going to continune working on creating a diagram 
    from what i have learned from building the diagram i am going to need to start focusing on building an API to get the other parts running. 

9/13/2021 
    ended up really breaking $#*! today. 
    reverted changes that i have made since about 9/9/2021 which actually ends up benefiting me 
    going to get a shell structure going again and get bootstrap added into the angular project
    i spent most of the day just playing around and learning the basics of routing aswell as observables and injectables. 
    had a decent bit going then i decided that i wanted to add some type of styling assistance so i went with bootstrap 
    read a comment wrong and didnt realize that ng-bootstrap and ngx-bootstrap are two different things. 
    used the ng add for both of them and got my config files all types of out of wack. 
    after about 20mins of trying to fix it i decided it wasnt that important since most of what i was working was just conceptuial stuff 
    reverated chagnes and re setup ngx-bootstrap as a new dependency for the project 

9/14/2021
    i think the hardest part for me isnt the actual coding part it is for the most part understanding what order i should attempt to build the website in aswell as what type of best 
    pratices that i should be doing to complie a functional angular site. 
    i created s shell of the site after a bunch of playing around in different thing, but now i am going to start working on dynamimc forms and the process of creating and destorying different types of froms 
    the goal is once this is completed is to transform the login, register, and forgot password into one view and dynamic form that can be genereated and destoryed as needed to fit my needs 
    managed to get the base routing of the website down pretty happy about that. at this point now i can start learning about the core important fundmentals of getting this information pushed around 


9/15/2021
    just got into observables dependenct injection and services. 
    got them all functioning quicker than i had expected. 
    need to take this new functionality that i just kinda slapped on top of the login componenet for testing reasons and transfer it over to the calendar component 
    going to refactor the html and stuff first of the componenet. after that i will take some time to implement the functioing observable and see if i can generate 30 day blocks and have it looks like
    an acceptable month. 

9/16/2021
    slow day was not very motivated to work. 
    determined that i use doing to use mongodb as my storage system 
    got the basics of that setup and called it a day 

9/17/2021 
    according to jira i need to get HTTP Requests done today because i can do anything else 
    so the goal is to wire up the database to a flask instance and have the website make a reuqest to send a document out of the mongo db 
    we are going to start with the flask application communicating to the front end 

    got to the point where HTTP requests are pretty much setup 
    running into an issue of a CROS policy error when i am attempting to grab data 
    i think i need to hit the api first 
    
    
9/20/2021
    got basic http requests down pat now and handled the CORS issue slightly, turns out that it is simply time for me to start handling backend work on express.js
    i decided on express js because of the wide array of documentation and popularity that this app provides 

9/21/2021 
    jumping into backend work all day and hopefully going to get a basic backend database that can handle http requests here soon 
    i really need to commit more changes to github soon but i still dont have a fully working project
    the whole thing is close af to getting all wired up i have a little more that needs done 
    mongo is connected to express which is connected to angular 
    the core logic just is not functioning correctly right now aswell as it seems i finally got rid of cors issues for now. 

9/22/2021
    good day so far i finally have everything wired up from a backend mongodb server to api to front end. 
    the only issue that i seem to be facing now is getting that information to render on the screen properly it is possible that i broke some configurations with angular material and bootstrap by adding them both 
    
9/23/2021
    i did not do anything was busy with some personal things

9/24/2021
    dont really plan on doing anything today expect for continuing to work on a plan for completing this project aswell as maybe a little bit of code refactoring 
    again spending time on somem personal stuff once that is ironed out it is back to the grind. i plan on working throughout this weekend aswell to make up for some lost time 
    
9/27/2021
    not much happened from here to then, new week getting back into the groove! 
    understood the theroy behind authentication going to be using RSA with a HSA256 hash and JWT's to handle local authentication on the server 
    going to be split between authentication and application server 

9/29/2021
    having alot of issues with motivation and a few other things, been taking a little time off to focus on health i think i am all set now 
    we are actually going to attempt to implement user authentication now 
    users are now able to register but they are not able to login i am unable to return a user id and map it to the user 

9/30/2021
    stuck on figuring out how to pull the ID from mongo DB to create a character profile page 
    just decieded to scrap making the profile page for now, i wont to work on the meat and potatos of the application 
    i got authentication down with sites that are unable to be accessed unless logged in 
    login and logout seems to be working aswell 
    going to start working on the big part of the application which is the calendar and its ability to handle data 
    might be using the angular calendar 6.0+ since i am not a huge fan of doing the CSS and design work myself. 

10/1/2021
    new month new me! all i did was push an update to the respository today, going to study on getting password resets to work or 
    i am going to work on understanding the angular calendar 6.0+ 
    
10/3/2021
    got angular calendar setup in a sperate project just to take a look at it 

10/4/2021
    i am not going to be using angular calednar instead i will be building my own from scratch 
    the reason for this is angular calendar is way too complicated and it would take me more time than i have to understand everything that is going on there. 
    going to work on getting the password reset functionality working on the website 
    having trouble with password reset functionality got to the point where i can hash the password and create a new JWT 
    not sure how to email it and how it actually handlles saving a new password 
10/5/2021
    continuing working on the password reset process 

10/6/2021
    a new videogame dropped decided i will study on a day on the weekend and place that and do errands today instead 

10/7/2021
    wrote up my resume and updated the github page a little 

10/11/2021
    got my friend to help me out with designing the UI/UX of the application 
    not sure they are going to follow through 
    worked on a bunch of form validation and error handling today 
    made it so each form will only take what i want it to now 
    checking for valid email addresses
    made and handled password criteria 
    added form validation for all forms on the site 
10/12/2021
    managed to get the password reset working when you request a second password reset 
    before it was not deleteing the old token but instead just creating another one and causing internal server errors
    managed to get that all fixed up 
    going to start working on the final part of actually applying a new password to the user and hashing it into the database 
    issue that every time the server disconnectes it messes up the indexs can possibly drop all indexs on startup 
    i will fix this later 
10/13/2021
    starting the day off with a commit to the repository 
    going to work on checking for valid email on password reset aswell as login page 
    then i need to commplete the second part of applying the password reset to the user and database 
    
10/21/2021
    some of my progress logs got deleted on accident 
    fixed more authentication and error handling 
    bought a domain on turboterry.com aswell as a vps server to host the website 
    after a day of miserableness trying to get everything to work on cwp panel switched to cpanel and got the front end of the site up and running 
10/26/2021
    dumb apache and nginx are taking up alot of time to configure kept running into issue because i wanted a web panel that i could work out of but it was impressive how none of thme are for anything buy php
    honestly i am starting to really not like php and apache just because all the panels were centered around them and seemed to purposely make it harder to implement nodejs and other stuff 
11/1/2021
    after about a week of tampering wiht the server i am happy to say that although no programming progress itself was made aside from making some minor changes for everything to function the same in production. overall everything is looking good i have the site acting almost exactly the same as how it does on my local machine. 
    today i am looking to get dynamimc css flowing so that i can have one style sheet that handles 720p 1080p 1440p and mobile 
    preferably this would be alot easier if i can write only one set of code for all and have it dynamically scale, if that does not work i will have to do it the cave man style of coding out each style based on current resoultion of screen and also using a default if one cannot be dertermined 

11/9/2021
    hit a wall and was a little discourged in myself although i am on the final stretch to making something that is a pretty good project 
    started applying for jobs already, going to continue working on this project 
    i have implemented a calendar and a modal popups up when you click on a date i just now need that modal to interact properly with input data and have it move through the proper 
    channels to send that to a database that can handle loading calendar data 
11/10/2021
    struggling with user input and handling how the fullcalendar structure works 
    issue before was data would apply and i had no way of letting the user enter information into the modal before it would apply it to the calendar 
    therefore it was just returning udefined 
    starting to get a better idea of what i am going to do 
    going to have the select field from full calendar only open the modal and prefill data from the selected information into the date field for you 
    then from there the rest will be handled by a different function that takes in the incoming data and adds an event 
11/11/2021
    got more of the interface functioning on famcal specfically error checking inputs and flushing out what was left of inputs to have proper data stored 

11/12/2021
    working on what happens when you click on an existing event today to start with and go from there 
    exisiting events that are clicked now are working properly, i need to now make a button that can also remove that event 
    
    



