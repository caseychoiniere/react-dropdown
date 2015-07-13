var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title:  'Choose a Dessert',//What the button should say
  items:  [//list of items to show in dropdown
    'Apple Pie',
    'Macaroons',
    'Coconut Cream Pie'
  ]
};

//React, render an instance of this class
var element = React.createElement(Dropdown, options);
//React, after you render this class place it in the body tag
React.render(element, document.querySelector('.container'));
