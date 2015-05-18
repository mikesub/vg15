var React = require('react');

var People = React.createClass({

    calc: function(){
        var total = 0;

        var activeCategories = this.props.categories.filter(function(i){
            return i.active;
        }).map(function(i){
            return i.value;
        });

        this.props.data.map(function(i){
            if (activeCategories.indexOf(i.category) !== -1) {
                total += 1;
            }
        });

        return total;
    },

    render: function(){
       return <div><strong>{this.calc()} out of {this.props.data.length}</strong></div>;
   }
});

module.exports = People;