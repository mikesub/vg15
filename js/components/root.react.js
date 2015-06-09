import React from 'react';

import styles from './css/root.css';

import store from '../store.js'

import Filters from './filters.react.js';
import Graph from './graph.react.js';


export default class Root extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.getState();
        this.update = this.update.bind(this);
    }

    getState() {
        return {
            categories: store.categories,
            graphStep: store.graphStep,
            data: store.data
        }
    }

    componentDidMount() {
        store.addListener('update', this.update);
    }

    componentWillUnmount() {
        store.removeListener('update', this.update);
    }

    update() {
        this.setState(this.getState());
    }

    render() {
        return (
            <div className="root">
                <Filters
                    categories={this.state.categories}
                    graphStep={this.state.graphStep}
                />
                <Graph
                    categories={this.state.categories}
                    graphStep={this.state.graphStep}
                    data={this.state.data}
                />
            </div>
        );
    }
}





