import styles from './css/filters.css';

import React from 'react';

import dispatcher from '../dispatcher';
import store from '../store';

export default class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: store.categories,
            graphStep: store.graphStep
        };
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        store.addListener('change', this.onChange);
    }

    componentWillUnmount() {
        store.removeListener('change', this.onChange);
    }

    onChange() {
        this.setState({
            categories: store.categories,
            graphStep: store.graphStep
        });
    }

    onStepChange(event) {
        dispatcher.emit('changeGraphStep', Number(event.target.value));
    }

    render() {
        return (
            <div className="filters">
                <div className="filter">
                    <div className="filter-header">Categories</div>
                    <div>
                        {this.state.categories.map((item) => <Category key={item.value} data={item} />)}
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
}

class Category extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        dispatcher.emit('toggleCategory', this.props.data.value);
    }

    render() {
        let className = this.props.data.active ? 'filter-button active' : 'filter-button';
        return (
            <div onClick={this.onClick} className={className}>
                {this.props.data.pretty}
            </div>
        );
    }
}
