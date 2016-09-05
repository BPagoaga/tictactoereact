// transform [0,1,2,3] into [[0,1],[2,3]]
  function addDim(arr, dim){
    var arr_dim_2 = [];

    for (var i = 0; i < arr.length; i+=dim){
      var subarray = [];

      for (var j = i; j < i+dim; j++) {
        subarray.push(arr[j]);
      }
      arr_dim_2.push(subarray);
      //console.log(newArr);
    }

    return arr_dim_2;
  }

  // test if horizontal elements are equal, if used after permutation, test if vertical elements are equal
  function testAlignItems(arr_dim_2, turn){
    for (var i = 0; i < arr_dim_2.length; i++) {
      var result;

      result = arr_dim_2[i].every(function(a){
        return a === turn;
      });

      if (result) {
        return true;
      }
    }
  }

  // test if the diagonal elements are equal, if used after switched, test if the element of the second diagonal are equal
  function testDiagonalItems(arr_dim_2, turn){
    var result = [];

    for (var i = 0; i < arr_dim_2[0].length; i++) {
      for (var j = 0; j < arr_dim_2[0].length; j++) {
        if(i===j){
          result.push( arr_dim_2[i][j] === turn );
        }
      }
    }

    return result.every(function(a){
      return a;
    });
  }

  // transform [[0,1],[2,3]] into [[0,2],[1,3]], allows you to use the same method for horizontal and vertical testing
  function permutation(arr_dim_2){
    var result = [];

    for (var i = 0; i < arr_dim_2.length; i++) {
      for (var j = 0; j < arr_dim_2.length; j++) {

        result.push(arr_dim_2[j][i]);
      }
    }
    result = addDim(result, arr_dim_2.length);

    return result;
  }

  // transform [[0,1],[2,3]] into [[2,3],[0,1]]
  function switched(arr_dim_2){
    var result = [];

    for (var i = 0; i < arr_dim_2.length; i++) {
      result[i] = arr_dim_2[arr_dim_2.length - (i+1)];
    }

    return result;
  }

  // select a random position in the cell array :
  // first we create an array containing the keys of the emtpy cells into the cells array
  // then we select a random number in that array
  // return the index of an element if the element is not an empty string
  function isNotEmpty(el, i, arr){
    if(el !== ''){
      return i;
    }
  }

  // remove the undefined values return by the map method
  function isDefined(el, i, arr){
    return el !== undefined;
  }
