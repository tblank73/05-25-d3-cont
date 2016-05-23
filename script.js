'use strict'; //strict mode: catch silly errors

//Use the jQuery selector function $() to access the '#face' img
//assign that element to a variable

//Use the .click() function to assign a click listener to the #face
//remember to pass an anonymous function as a param to .click()


//Inside your .click() callback function, use the '.attr()' method to
//change the 'src' attribute of the image. Assign it a new 
//value of 'img/surprised.png'
//The syntax for this function is:
//    element.attr('attr to change', 'new value')


//Create a _global_ variable to keep track of whether the face is
//surprised or not (what is the starting value?)
//You can do this at the start of your script


//Modify the .click() callback so that it changes the attr to
//'img/surprised.png' if the face IS NOT surprised, and changes it to
//'img/happy.png' if the face IS surprised.
//After you change the attr, you should also change the global variable!


