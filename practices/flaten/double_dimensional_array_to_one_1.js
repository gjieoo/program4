'use strict';

function double_to_one(collection) {

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


module.exports = double_to_one;
