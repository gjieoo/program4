'use strict';

function double_to_one(collection) {

  var oneDimensionalArray=buildOneDimensionalArray(collection);
  var noRepeatElement=buildNoRepeatElement(oneDimensionalArray);

  return noRepeatElement;
}

function buildOneDimensionalArray(collection){

  var oneDimensionalArray=[];

  for(var i=0;i<collection.length;i++){
    if(collection[i].constructor===Array)
    {
      oneDimensionalArray=doubleDimensionalArray(collection[i],oneDimensionalArray);

    }
    else{
      oneDimensionalArray.push(collection[i]);
    }
  }

  return oneDimensionalArray;
}

function doubleDimensionalArray(element,oneDimensionalArray){

  for(var i=0;i<element.length;i++)
  {
    oneDimensionalArray.push(element[i]);
  }

  return oneDimensionalArray;
}

function buildNoRepeatElement(oneDimensionalArray){

  var json= {};
  var noRepeatElement= [];
  var val, type;
  for (var i = 0; i < oneDimensionalArray.length; i++) {

    val = oneDimensionalArray[i];
    type = typeof val;

    if (!json[val]) {
      json[val] = [type];
      noRepeatElement.push(val);
    }
    else if (json[val].indexOf(type) < 0) {
      json[val].push(type);
      noRepeatElement.push(val);
    }
  }
  return noRepeatElement;
}

module.exports = double_to_one;
