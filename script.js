'use strict'; //strict mode: catch silly errors

//the data!
var dataList = [
   {id:1, name:'A', sleep:1},
   {id:2, name:'B', sleep:3},
   {id:3, name:'C', sleep:6},
];

var svg = d3.select('svg');

var rectList = svg.selectAll('rect');

var dataJoin = rectList.data(dataList);

dataJoin
	.attr({x:10, height:40})
	.attr('y', function(dataItem){
		return dataItem.id*50;
	})
	.attr('width', function(item){ 
		return item.sleep*20;
	}); 










/** Button Handlers **/
$('#addButton').click(function(){
  var lastId = 0; //last person's id
  if(dataList.length > 0){
    lastId = dataList[dataList.length-1].id;
  }

  //add new person at end
  dataList.push({
    id:lastId+1, //increment id
    name:'New',
    sleep: Math.floor(Math.random()*24) //random sleep (integer)
  })
  console.log(dataList);
});

$('#remButton').click(function(){
  //remove first person
  dataList.shift();
  console.log(dataList);
});

$('#moreButton').click(function(){
  dataList[0].sleep += 1; //increase first guy
  console.log(dataList);
});

$('#lessButton').click(function(){
  //decrease first guy; min 0
  dataList[0].sleep = Math.max(dataList[0].sleep - 1, 0);
  console.log(dataList);
});

$('#resetButton').click(function(){
  dataList = [
    {id:1, name:'A', sleep:1},
    {id:2, name:'B', sleep:3},
    {id:3, name:'C', sleep:6},
  ];
  console.log(dataList);
});