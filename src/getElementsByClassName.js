// fixme
var getElementsByClassName = function(className){
  var allNodes = document.body.childNodes;
  var returnArray = [];
  var children = [];

  var getElements = function(parents){  
    for(var i =0 ; i < parents.length; i++){
      if(className === parents[i].className){
        returnArray.push(parents[i]);
      };
      if(checkChildren(parents[i])){
        for(var j = 0; j < parents[i].childNodes.length ;j++){
          children.push(parents[i].childNodes[j]);
        }
        var child = children.shift();
        getElements(child);
      };
    }
  }

  var checkChildren = function(elem){
    if(elem.childElementCount > 0){
      return true;
    }else{
      return false;
    }
  }

  getElements(allNodes);
  return returnArray;
  //return document.getElementsByClassName(className);
};

//baseCase 
//return array << if elem.className is what we looking for
//else do not push it