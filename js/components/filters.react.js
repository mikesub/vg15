require("./filters.css");

var React = require('react');

var dispatcher = require('../dispatcher');
var store = require('../store');

var Filters = React.createClass({
    getInitialState: function(){
        return {
            categories: store.categories,
            graphStep: store.graphStep
        };
    },

    componentDidMount: function(){
        store.addListener('change', this.onChange);
    },

    componentWillUnmount: function(){
        store.removeListener('change', this.onChange);
    },

    onChange: function(){
        this.setState({
            categories: store.categories,
            graphStep: store.graphStep
        });
    },

    onStepChange: function(event){
        dispatcher.emit('changeGraphStep', Number(event.target.value));
    },

    render: function() {
        return (
            <div className="filters">
                <div className="filter">
                    <div className="filter-header">Categories</div>
                    <div>
                        {this.state.categories.map(function(item){
                            return <Category key={item.value} data={item} />;
                        }.bind(this))}
                    </div>
                </div>
                <div className="filter">
                    <div className="filter-header">Graph step: {this.state.graphStep/60}mins</div>
                    <div>
                        <input type="range" min="300" max="3600" step="300" value={this.state.graphStep} onChange={this.onStepChange}/>

                    </div>
                </div>
            </div>
        );
    }
});

var Category = React.createClass({

    onClick: function() {
        dispatcher.emit('toggleCategory', this.props.data.value);
    },

    render: function() {
        var className = 'filter-button';
        if (!this.props.data.active) {
            className += ' off';
        }
        return (
            <div onClick={this.onClick} className={className} style={{backgroundColor: this.props.data.color}}>
                {this.props.data.pretty}
            </div>
        );
    }
});

module.exports = Filters;
