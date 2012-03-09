var a = [-1, 3, -2, -8, 7, 4];

var filterSum = function(array){
  return array
	.filter(function(item, index, array){
 			return (item >= 0);})

	.reduce(function(prev,cur){
			return prev + cur;});
}
