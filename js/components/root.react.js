var React = require('react');

var Filters = require('./filters.react');
var Graph = require('./graph.react');

require('./root.css');

module.exports = function(node){
    React.render((<div className="root">
        <Filters/>
        <Graph/>
    </div>), node);
};




