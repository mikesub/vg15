var React = require('react');

var Categories = require('./categories.jsx');
var People = require('./people.jsx');

var data = require('./data.json');

var Root = React.createClass({

    getInitialState: function(){

        var categories = this.props.data.map(function(i){ return i.category; });
        categories = categories.filter(function(value, index, self){ return self.indexOf(value) === index; });

        categories = categories.map(function(value){
            var pretty = value.replace(' ', '');
            if (pretty === '') { pretty = '?'; }
            return {value: value, pretty: pretty, active: true};
        });
        categories.sort(function (a, b) {
            if (a.pretty < b.pretty) { return  1; }
            if (a.pretty > b.pretty) { return -1; }
            return 0;
        });

        return {
            data: this.props.data,
            categories: categories
        };
    },

    onCategoryToggle: function(value){
        this.setState({categories: this.state.categories.map(function(i){
            if (i.value === value) {
                i.active = !i.active;
            }
            return i;
        })});
    },

    render: function() {
        return (
            <div>
                <Categories categories={this.state.categories} onCategoryToggle={this.onCategoryToggle} />
                <People data={this.state.data} categories={this.state.categories}/>
            </div>
        );
    }
});

module.exports = function(node){
    React.render(<Root data={data}/>, node);
};




