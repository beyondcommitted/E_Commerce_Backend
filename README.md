# E_Commerce_Backend

## User Story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```
---
## Links
### [GitHib Repository](https://github.com/beyondcommitted/E_Commerce_Backend)
### [Walkthrough Video for Categories](https://youtu.be/Ya9FqX-T-aU)
### [Walkthrough Video for Products](https://youtu.be/Oj8iJloLCMg)
### [Walkthrough Video for Tags](https://youtu.be/Wk5brGghewY)
---
## Description
```
E-Commerce Back-end that allows for access to stored data. 
This data can be requested for all, by specific id. 
Also can be added to, updated or deleted.
```
---
## Met Acceptance Criteria
```
GIVEN a functional Express.js API
WHEN user adds the database name,  a MySQL username, and a MySQL password to an environment variable file
THEN user is able to connect to a database using Sequelize
WHEN use enters schema and seed commands
THEN a development database is created and is seeded with test data
WHEN user enters the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN user opens API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN user tests API POST, PUT, and DELETE routes in Insomnia Core
THEN user is able to successfully create, update, and delete data in the database
```
---
## Mock Up
![Screenshots](https://github.com/beyondcommitted/E_Commerce_Backend/blob/main/Develop/Assets/Images/categoriesAddNew.png?raw=true)
![Screenshots](https://github.com/beyondcommitted/E_Commerce_Backend/blob/main/Develop/Assets/Images/categoriesGetAll.png?raw=true)
![Screenshots](https://github.com/beyondcommitted/E_Commerce_Backend/blob/main/Develop/Assets/Images/categoriesGetById.png?raw=true)
![Screenshots](https://github.com/beyondcommitted/E_Commerce_Backend/blob/main/Develop/Assets/Images/productsGetAll.png?raw=true)
![Screenshots](https://github.com/beyondcommitted/E_Commerce_Backend/blob/main/Develop/Assets/Images/tagsAddNew.png?raw=true)
![Screenshots](https://github.com/beyondcommitted/E_Commerce_Backend/blob/main/Develop/Assets/Images/tagsGetAll.png?raw=true)
![Screenshots](https://github.com/beyondcommitted/E_Commerce_Backend/blob/main/Develop/Assets/Images/tagsGetById.png?raw=true)