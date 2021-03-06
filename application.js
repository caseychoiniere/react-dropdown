var options = {
  thumbnailData: [{
    title: 'Show Courses',
    number: 12,
    header: 'Learn React',
    description: 'Fast frontend library for rendering changes.Fast frontend library for rendering changes. ',
    imageUrl: 'http://sc5.io/blog/wp-content/uploads/2014/06/react.png'
  },{
    title: 'Show Courses',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your dev workflow. gulp will speed up your dev workflow.gulp will speed up your dev workflow. ',
    imageUrl: 'http://brunch.io/images/others/gulp.png'
  }]
};

//  options = {thumbnailData:[{}, {}, {} ]}
//React, render an instance of this class
var element = React.createElement(ThumbnailList, options);
//React, after you render this class place it in the body tag
React.render(element, document.querySelector('.container'));

var Badge = React.createClass({displayName: "Badge",
  render: function(){

    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
    this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
    )
  }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function(){
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });

    return React.createElement("div", null, 
      list
    )
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function(){
    return React.createElement("div", {class: "col-sm-6 col-md-4"}, 
    React.createElement("div", {class: "thumbnail"}, 
       React.createElement("img", {src: this.props.imageUrl, alt: "..."}), 
         React.createElement("div", {class: "caption"}, 
           React.createElement("h3", null, this.props.header), 
           React.createElement("p", null, this.props.description), 
           React.createElement("p", null, 
            React.createElement(Badge, {title: this.props.title, number: this.props.number})
           )
         )
       )
     )
  }
});
