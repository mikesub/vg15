import styles from './css/graph.css';

import React from 'react';
import moment from 'moment';

import store from '../store';

export default class Graph extends React.Component {
    // needs active categories & all data to filter from it

    constructor(props) {
        super(props);
        this.state = {
            categories: store.categories,
            data: store.data,
            graphStep: store.graphStep
        };
        this.onCategoriesChange = this.onCategoriesChange.bind(this);
    }

    componentDidMount() {
        store.addListener('change', this.onCategoriesChange);
    }

    componentWillUnmount() {
        store.removeListener('change', this.onCategoriesChange);
    }

    onCategoriesChange() {
        this.setState({
            categories: store.categories,
            graphStep: store.graphStep
        });
    }

    calc() {
        var activeCategories = this.state.categories.filter(function(i){
            return i.active;
        }).map(function(i){
            return i.value;
        });

        var filteredData = this.state.data.filter(function(i) {
            return activeCategories.indexOf(i.category) !== -1;
        });

        var maxX = filteredData.reduce(function(prev, cur){
            return prev.time_secs > cur.time_secs ? prev : cur;
        }, 0).time_secs;

        var minX = filteredData.reduce(function(prev, cur){
            return prev.time_secs < cur.time_secs ? prev : cur;
        }, 0).time_secs;

        var getCount = function(data, right) {
            return data.filter(function(item){
                return (item.time_secs > right-step && item.time_secs < right);
            }).length;
        };

        var humanize = function(x) {
            var t = moment.duration(x*1000);
            if (t.minutes()) {
                return t.hours()+'h'+t.minutes()+'m';
            } else {
                return t.hours()+'h';
            }
        };

        var step = this.state.graphStep;
        var graph = [];
        for (var x=Math.ceil(minX/step)*step; x<maxX+step; x=x+step) {
            graph.push([x, humanize(x), getCount(filteredData, x)]);
        }
        return graph;
    }

    render() {
       return (
            <div>
                {this.calc().map(function(item){
                    return <Bar key={item[0]} number={item[2]} title={item[1]} />;
                }.bind(this))}
            </div>
        );
   }
}

class Bar extends React.Component {
    render() {
        return (
            <div className="graph">
                <div className="graph-title">&lt;{this.props.title}</div>
                <div className="graph-bar" style={{width: this.props.number}}>
                    <div className="graph-bar-title" style={{left: this.props.number+5}}>{this.props.number}</div>
                </div>
            </div>
        );
    }
}
