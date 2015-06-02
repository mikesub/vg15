var React = require('react');

var Categories = require('./categories.react');
var Graph = require('./graph.react');

module.exports = function(node){
    React.render((<div>
        <Categories/>
        <hr/>
        <Graph/>
    </div>), node);
};




