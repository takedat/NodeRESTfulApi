exports.index = function(req, res){
  var json = {
    "status":200,
    "kind":"index"
  };
  res.json(json);
};
exports.new = function(req, res){
  var json = {
    "status":200,
    "kind":"new"
  };
  res.json(json);
};

exports.create = function(req, res){
  var json = {
    "status":200,
    "kind":"create"
  };
  res.json(json);
};

exports.show = function(req, res){
  var json = {
    "status":200,
    "kind":"show"
  };
  res.json(json);
};

exports.edit = function(req, res){
  var json = {
    "status":200,
    "kind":"edit"
  };
  res.json(json);
};

exports.update = function(req, res){
  var json = {
    "status":200,
    "kind":"update"
  };
  res.json(json);
};

exports.destroy = function(req, res){
  var json = {
    "status":200,
    "kind":"destroy"
  };
  res.json(json);
};
