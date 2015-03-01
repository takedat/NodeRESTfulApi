var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userShema = new Schema({
  'name':String,
  'mail':String,
  'memo':String,
  'nestsample':Object
});

var nestsample = {
  "nestLevel1":"test1 value",
  "nestLevel2array":[
    {
      "nestLevel2key1":"test2 value",
      "nestLevel2key2":"test2 value2"
    },
    {
      "nestLevel3array":[
        {
          "nestLevel3key1":"test3 value",
          "nestLevel4array":[
            {
              "nestLevel4key1":"test4 value"
            }
          ]
        }
      ]
    }
  ]
};

var User = mongoose.model('user',userShema);
var db = mongoose.connect('mongodb://localhost/user');

var client = require('redis').createClient();

exports.index = function(req, res){
  User.find(function(err,docs){
    if (err) {
      console.log(err);
    }
    var json = {
      "status":200,
      "kind":"index",
      "doc":docs,
    };
    client.get(json,function (err,val) {
      if(err) return console.log(err);
      var responsejson = JSON.parse(val);
      res.json(responsejson);
    });
  });
};
exports.new = function(req, res){
  var json = {
    "status":200,
    "kind":"new",
  };
  res.json(json);
};

exports.create = function(req, res){
  var number =  Math.floor( Math.random() * 9999 );
  var name = 'name' + number;
  var mail = number + '@example.com';
  var memo = number;

  var data = new User({
    'name':name,
    'mail':mail,
    'memo':memo,
    "nestsample":nestsample
  });
  data.save(function (err,docs) {
    if (err) {
      console.log(err);
    }
    var json = {
      "status":200,
      "kind":"create",
      "doc":docs
    };
    client.set("json",JSON.stringify(json),function () {
      res.json(json);
    });
  });
};

exports.show = function(req, res){
  var id = req.params.id;
  User.findOne({
    '_id':id
  },function (err,doc) {
    if (err) {
      console.log(err);
    }
    var json = {
      "status":200,
      "kind":"show",
      "doc":doc
    };
    client.get(json,function (err,val) {
      if(err) return console.log(err);
      var respjson = JSON.parse(val);
      res.json(respjson);
    });
  });
};

exports.edit = function(req, res){
  var id = req.params.id;
  User.findOne({
    '_id':id
  },function (err,doc) {
    if (err) {
      console.log(err);
    }
    var json = {
      "status":200,
      "kind":"edit",
      "doc":doc
    };
    client.set(json,function (err,val) {
      if(err) return console.log(err);
      res.json(json);
    });
  });
};

exports.update = function(req, res){
  var id = req.params.id;
  User.findOne({
    '_id':id
  },function (err,doc) {
    if (err) {
      console.log(err);
    }

    var number =  Math.floor( Math.random() * 9999 );
    doc.name = 'name' + number;
    doc.mail = number + '@example.com';
    doc.memo = number;

    var json = {
      "status":200,
      "kind":"update",
      "doc":doc
    };

    doc.save(function (err) {
      if (err) {
        console.log(err);
      }
      client.set("json",JSON.stringify(json),function () {
        res.json(json);
      });
    });
  });
};

exports.destroy = function(req, res){
  var id = req.params.id;
  User.findOne({
    '_id':id
  },function (err,doc) {
    if (err) {
      console.log(err);
    }

    var json = {
      "status":200,
      "kind":"destroy",
      "doc":doc
    };

    doc.remove(function (err) {
      if (err) {
        console.log(err);
      }
      client.del("json",JSON.stringify(json),function () {
        res.json(json);
      });
    });
  });
};
