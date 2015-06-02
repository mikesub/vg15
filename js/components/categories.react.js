"use strict";

var React = require('react');

var loadCSS = require('../utils/loadcss');
var dispatcher = require('../dispatcher');
var store = require('../store');

var Categories = React.createClass({

    componentWillMount: function(){
        loadCSS('css/categories.css');
    },

    getInitialState: function(){
        return {
            categories: store.categories
        };
    },

    componentDidMount: function(){
        store.addListener('change', this.onCategoriesChange);
    },

    componentWillUnmount: function(){
        store.removeListener('change', this.onCategoriesChange);
    },

    onCategoriesChange: function(){
        this.setState({categories: store.categories});
    },

    render: function() {
        return (
            <div className="categories">
                {this.state.categories.map(function(item){
                    return <Category key={item.value} data={item} />;
                }.bind(this))}
                <InvertAll/>
            </div>
        );
    }
});

var InvertAll = React.createClass({
    onClick: function() {
        dispatcher.emit('toggleAllCategories');
    },
    render: function() {
        return (<div className='categories-item categories-item_active' onClick={this.onClick}>invert all</div>);
    }
});

var Category = React.createClass({
    onClick: function() {
        dispatcher.emit('toggleCategory', this.props.data.value);
    },
    render: function() {
        var className = 'categories-item';
        if (this.props.data.active) {
            className += ' categories-item_active';
        }
        return (<div className={className} onClick={this.onClick}>{this.props.data.pretty}</div>);
    }
});

module.exports = Categories;
