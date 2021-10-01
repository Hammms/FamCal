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



