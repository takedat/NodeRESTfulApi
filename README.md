Node RESTful API
===================
The foundation for making a RESTful api in Node.js.

Components
===================
* Node.js
* express@3
* express-resource

Getting Started
===========
Installing  [node.js](http://nodejs.org/) and [express](http://expressjs.com/)
~~~
$ cd path/to/directory
$ sudo npm install
$ npm start
~~~

Example for request mapping
===========
~~~
GET     /users             ->  index
GET     /users/new         ->  new
POST    /users             ->  create
GET     /users/:user       ->  show
GET     /users/:user/edit  ->  edit
PUT     /users/:user       ->  update
DELETE  /users/:user       ->  destroy
~~~

Road Map
===========
* Database connection to MongoDB
* Data cache and response by redis
