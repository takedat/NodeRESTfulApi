Node RESTful API
===================
The foundation for making a RESTful api in Node.js.

Components
===================
* Node.js
* express@3
* express-resource
* MongoDB/Mongoose
* Redis

Getting Started
===========
Installing  [Node.js](http://nodejs.org/) and [express](http://expressjs.com/),[MongoDB](http://www.mongodb.org/),[redis](http://redis.io/)
~~~
$ cd path/to/directory
$ sudo npm install
$ redis-server # redis start
$ sudo mongo   # MongoDB start
$ pm2 start processes.json  # pm2 start
~~~

request mapping
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

Examples of CRUD
===========
~~~
# READ
$ curl localhost:3000/users/

# CREATE
$ curl localhost:3000/users/ -X POST

# UPDATE
$ curl localhost:3000/users/[_id] -X PUT

# DELTE
$ curl localhost:3000/users/[_id] -X DELETE
~~~

Road Map
===========
* ~~Database connection to MongoDB~~
* ~~Data cache and response by redis~~
