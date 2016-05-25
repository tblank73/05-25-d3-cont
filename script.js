'use strict'; //strict mode: catch silly errors

//the data!
var dataList = [
   {id:1, name:'A', sleep:1},
   {id:2, name:'B', sleep:3},
   {id:3, name:'C', sleep:6},
];

function update(dataList){
  var widthScale = d3.scale.linear() //create the linear width scaling (domain to range)
         .domain([0, 24])   //sleep interval
         .range([10, 390]); //pixel interval
         
  var sleepMax = d3.max(dataList, function(d){
    return d.sleep;
  });
  
  var xAxis = d3.svg.axis().scale(widthScale)
  
  svg.append('g') //to position the axis
  
  var svg = d3.select('svg'); //creating var to refer to svg element
  
  var rectList = svg.selectAll('rect'); //go to svg element in DOM, and select all rect elements in svg block
  
  var dataJoin = rectList.data(dataList, function(item){
    return item.id;
  }); //bind the dataList entries with the rect elements
  
  dataJoin.enter().append('rect') //using .enter() to append rects for all datajoin items w/o rects
  
  dataJoin //if you call the attr on a collection, such as this array, D3 reads that as a "forEach"
    .on('click', function(item){ //make it 1 longer on a click
      console.log('clicky clicky')
      item.sleep += 1;
      update(dataList); //call the update function to update the dataset accordingly
    })
    .on('mouseover', function(item){
      d3.select(this).attr('fill', 'yellow') //make it yellow on mouseover
    })
    .on('mouseout', function(item){ //go back to the if-else conditions on mouseout
      d3.select(this).attr('fill', function(item){
        if(item.sleep <= 4){
        return 'red';
      }
      else{
        return 'blue';
      }
      })
    })
    .transition()
    .attr('fill', function(item){ //use conditional function to determine which fills are red/blue
      if(item.sleep <= 4){
        return 'red';
      }
      else{
        return 'blue';
      }
    })
    .attr({x:10, height:40}) //all rects have same x position and height
    .attr('y', function(dataItem){ //take the dataitem with key id and multiply by 50 to get y pos
      return dataItem.id*50;
    })
    .attr('width', function(item){ //take the item with key id and multiply by 20 to get width
      return widthScale(item.sleep);
    }); // note this is the only semicolon to denote you're done modifying data rects
  
  dataJoin.exit().remove() //uses exit() to isolate list items with DOM but not data, then removing
};

update(dataList);







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
  update(dataList);
});

$('#remButton').click(function(){
  //remove first person
  dataList.shift();
  console.log(dataList);
  update(dataList);
});

$('#moreButton').click(function(){
  dataList[0].sleep += 1; //increase first guy
  console.log(dataList);
  update(dataList);
});

$('#lessButton').click(function(){
  //decrease first guy; min 0
  dataList[0].sleep = Math.max(dataList[0].sleep - 1, 0);
  console.log(dataList);
  update(dataList);
});

$('#resetButton').click(function(){
  dataList = [
    {id:1, name:'A', sleep:1},
    {id:2, name:'B', sleep:3},
    {id:3, name:'C', sleep:6},
  ];
  console.log(dataList);
  update(dataList);
});