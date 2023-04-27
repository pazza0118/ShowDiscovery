# Typescript Web Framework

This TS app provides classes to easily store, update, and persist data with emphasis on code reusability.

## Table of Contents
- [Technology](#technology)
- [Executing App](#executing-app)
- [File Content](#file-content)
  - [Starter File](#starter-file)
  - [Class Files](#class-files)
  - [Helper Files](#helper-files)
  - [Old Files](#old-files)
- [Functions](#functions)
- [Challenge and Solution](#challenge-and-solution)

## Technology
- plain Typescript
- framework
- RESTful API
- parcel       // auto-installed
- json-server  // npm i -g json-server
  - used as 3rd party backend server for this app
  - points to a json file (db.json) which acts like a database
- axios         // npm i axios
  - used to send/retrieve data from the json-server
  - // import axios, { AxiosResponse, AxiosPromise } from "axios";


## Basic Environment
1. npm install -g typescript ts-node 
   1. tsc -v // to check if TS is already installed
2. npm init -y // Creates node.js project
3. Create build folder, src folder
4. Add index.ts file inside src folder, index.html file in root directory
  1. Add script to the body
    <!-- <script src="./src/index.ts"></script> -->
5. Add db.json file in root directory (this is the database for json-server)
6. On package.json, add the following script:
  <!-- "scripts": {
    "start:db": "json-server -w db.json",
    "start:parcel": "parcel index.html"
  } -->

Temp: I installed tsconfig.json, and made "strict" false (so no strict
type checking options, meaning '?' in type interface doesn't do anything)


## Executing App

1. To start json-server, on git bash: npm run start:db
2. To start the app, on git bash: npm run start:parcel
*These two commands need to be run on two separate git bash windows, for that reason you cannot run both commands in one go w/ "concurrently" package.


## Class Relationships & Reusability
User and Model: 
- User, specific class for storing and updating user information
- Model, a general class for handling all kinds of information
- User extends to Model
- To create User instance, run its static method buildUser with 3 args defined in Model constructor

User and Collection:
- Collection, a general class for retrieving and adding/triggering events from json-server; while it is a general class,
 it also behaves like a specific item class (representing user collection)
- It's a standalone class, but for convenience sake User class can instantiate it using its static method 

Model and Events, Attributes, APISync:
- Model delegates adding and triggering events to Events class
- Model delegates getting and setting attribute data to Attributes class         
- Model delegates fetching and saving data from json-server to APISync class    
- All (Events, Attributes, APISync) child classes' instances are passed to Model constructor

View 
- View, a general view class that receives a parent element and a Model instance
  - clears innerHTML in parent element
  - creates template element
  - add template html string to the template element innerHTML
  - binds events from child view class to the template element          
  - populates regions prop using regionsMap() from child class UserEdit   // this is for nesting, now specific class knows the nested parent element
  - creates instance of UserShow and UserForm                             // this is for nesting, now nested parent element can be used to append 
                                                                          // nested elements
  - append templateElement content to parentElement


The following are specific classes, but they are also templates. Meaning they can be called by another specific class to provide the template they'll use to display html.
- UserEdit, a specific parent view class that returns html string for usershow and userform
  - UserShow, a specific view nested class that returns html string for user data, 
  - UserForm, a specific view nested class that returns html string for user form
  
- CollectionView, an abstract general view class, renders a collection of models
- UserList, a specific view class extends to CollectionView class. It also calls UserShow class



- UserEdit, UserShow, UserForm, and UserList all extend to View class
- UserShow and UserForm are nested class that goes into User Edit class
- UserList class is a standalone cless that extends to CollectionView class

## File Structure 

- index.ts        // starter file - connect to express server
- .gitignore
- tsconfig.json
- Routes
  - Movie.ts      // routes for all movie?
  - TVShow.ts     // routes for all tvshows?
- Models
  - Model.ts      // generic model class - delegates to Event, Attribute
  - Movie.ts      // specific model class for show only
  - Genre.ts      // specific model class for genre of all shows
  - Event.ts      // delegation class 
  - Attribute.ts  // delegation class
  - Sync.ts       // delegation class 
- Controllers 
  - Movie.ts      // controller functions, gets passed instances of Movie Models      
- Views
  - BoilerPlate.ts    // overall front page layout
  - Nav.ts            // navigation tab
  - Collection.ts     // generic view class of items
  - Item.ts           // generic view class of item on front page 
  - DetailedItem.ts   // generic view class on detailed item page

### Starter File
- index.ts :

### Class Files
- User.ts
  - parent class referencing other classes
- Attributes.ts
  - child class handling storage of data on frontend
- Events.ts
  - child class handling events
- Sync.ts
  - child class handling persistence of data on backend
  - sends/retrieves data from server

### Class Files Frontend
UserEdit -> UserShow & UserForm

UserEdit, UserShow, UserForm -> extends View

userEdit.render() -> 
create element
update template -> <div class="user-show"><div class="user-form">
bindEvents
mapRegions -> <div class="user-show"><div class="user-form"> 
	-> regions: { userShow : <div class="user-show">, userForm : <div class="user-form">}


onRender() 	-> new UserShow(<div class="user-show">, user).render()	-> 
			-> create element
			-> add template <div>
			-> bindEvents
			-> mapRegions -> blank
			-> append on <div class="user-show">
		-> new UserShow(<div class="user-form">, user).render()	->
			-> create element
			-> add template <div>
			-> bindEvents
			-> mapRegions -> blank
			-> append on <div class="user-form">

### Helper Files

### Old Files


## Functions



## Challenge and Solution
- Challenge: Making reusable code for storing / updating /persisting data
- Solution: 


