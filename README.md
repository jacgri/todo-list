# To Do List Express and MongoDB

A To Do List where the user can add items to a list and delete them once complete. Using Express, Handlebars and MongoDB

# Why Created
Task for week 9 of MCRcodes to implement learning of the following:
* Express to create a webserver
* Model View Controller model
* Handlebars templating engine
* Mongoose - an ODM (Object Document Mapper) - to talk to our database

# Set up and Running
Clone this git repository 
Install nodemon globally `npm install -g nodemon`
Run `npm install` to install dependencies

You will need a MongoDB database I used [mLab](https://mlab.com/) 

Create a settings.env file using your own database connection URL. Add settings.env to a `.gitignore` file. 

In the command line, run nodemon app.js, then go to your web browser and visit localhost:3000