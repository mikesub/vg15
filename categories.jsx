var React = require('react');
var loadCSS = require('./loadcss.js');

var Categories = React.createClass({
    componentWillMount: function(){
        loadCSS('categories.css');
    },
    render: function() {
        return (
            <div className="categories">
                {this.props.categories.map(function(item){
                    return <Category key={item.value} data={item} onCategoryToggle={this.props.onCategoryToggle} />
                }.bind(this))}
            </div>
        );
    }
});

var Category = React.createClass({
    onClick: function() {
        this.props.onCategoryToggle(this.props.data.value);
    },
    render: function() {
        var className = 'categories-item';
        if (this.props.data.active) { className += ' categories-item_active'; }
        return <div className={className} onClick={this.onClick}>{this.props.data.pretty}</div>;
    }
});

module.exports = Categories;