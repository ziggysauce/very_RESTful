# very_RESTful

## Table of Contents
* [About](#about)
* [Projects](#projects)
* [Build Tools](#build-tools)
* [Contributors](#contributors)


## About
This repository is dedicated to practicing creating RESTful routing apps.  
[License](https://github.com/ziggysauce/react-apps/blob/master/LICENSE.md)  


## Projects
[Recipe Book](https://github.com/ziggysauce/very_RESTful)


## RESTful Routes
| Name    | Path           | HTTP Verb | Purpose                          | Mongoose Method          |
| ------- | -------------- | --------- | -------------------------------- | ---------------          |
| Index   | /page          | GET       | List all items on page           | Page.find()              |
| New     | /page/new      | GET       | Show new page form               | N/A                      |
| Create  | /page          | POST      | Create new page; redirect        | Page.create()            |
| Show    | /page/:id      | GET       | Show info about specific page    | Page.findById()          |
| Edit    | /page/:id/edit | GET       | Show edit for for specific page  | Page.findById()          |
| Update  | /page/:id      | PUT       | Update particular page; redirect | Page.findByIdAndUpdate() |
| Destroy | /page/:id      | DELETE    | Delete particular page; redirect | Page.findByIdAndRemove() |


## Build Tools
### Frontend
* HTML, CSS, JS
* SCSS
* EJS

### Backend
* Node.js (v9+)
* NPM

### Database
* MongoDB


## Contributors
* [Dan Nguyen](https://github.com/ziggysauce)