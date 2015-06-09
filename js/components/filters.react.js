import styles from './css/filters.css';

import React from 'react';

import store from '../store.js';

import Category from './category.react';

export default class Filters extends React.Component {

    onChange(event) {
        store.changeGraphStep(Number(event.target.value));
    }

    render() {
        return (
            <div className="filters">
                <div className="filter">
                    <div className="filter-header">Categories</div>
                    <div>
                        {this.props.categories.map((item) => <Category key={item.value} data={item} />)}
                    </div>
                </div>
                <div className="filter">
                    <div className="filter-header">Graph step: {this.props.graphStep/60}mins</div>
                    <div>
                        <input type="range" min="300" max="3600" step="300" value={this.props.graphStep} onChange={this.onChange}/>
                    </div>
                </div>
            </div>
        );
    }
}
