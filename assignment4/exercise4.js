function getSize()
{
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;


 document.getElementById('width').innerHTML = "<h1> Width: " + width + " </h1>";
 document.getElementById('height').innerHTML = "<h1> Height: " + height + " </h1>";
}
