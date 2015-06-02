var React = require('react');
var moment = require('moment');

var loadCSS = require('../utils/loadcss');
var store = require('../store');

var Graph = React.createClass({
    // needs active categories & all data to filter from it

    componentWillMount: function(){
        loadCSS('/css/graph.css');
    },

    getInitialState: function(){
        return {
            categories: store.categories,
            data: store.data
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

    calc: function(){
        var activeCategories = this.state.categories.filter(function(i){
            return i.active;
        }).map(function(i){
            return i.value;
        });
        //

        var filteredData = this.state.data.filter(function(i) {
            return activeCategories.indexOf(i.category) !== -1;
        });

        var maxX = filteredData.reduce(function(prev, cur){
            return prev.time_secs > cur.time_secs ? prev : cur;
        }, 0).time_secs;

        var getCount = function(data, right) {
            return data.filter(function(item){
                return (item.time_secs > right-step && item.time_secs < right);
            }).length;
        };

        var humanize = function(x) {
            var t = moment.duration(x*1000);
            return t.hours()+'h'+t.minutes()+'m';
        };

        var step = 10*60;
        var xs = [];
        for (var x=step; x<maxX; x=x+step) {
            xs.push([x, getCount(filteredData, x), humanize(x-step)]);
        }
        return xs;
    },

    render: function(){
       return (
            <div>
                {this.calc().map(function(item){
                    return <Bar key={item[0]} number={item[1]} title={item[2]} />;
                }.bind(this))}
            </div>
        );
   }
});

var Bar = React.createClass({
    render: function() {
        var style = {width: this.props.number};
        return (
            <div className="graph">
                <div className="graph__title">
                    {this.props.title} — {this.props.number}
                </div>
                <div className="graph__bar" style={style}>
                </div>
        </div>);
    }
});

module.exports = Graph;
