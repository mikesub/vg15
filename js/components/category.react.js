import styles from './css/category.css';

import React from 'react';

import store from '../store.js';

export default class Category extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        store.toggleCategory(this.props.data.value);
    }

    render() {
        return (
            <div onClick={this.onClick} className={'category-button' + (this.props.data.active ? ' active' : '')}>
                {this.props.data.pretty}
            </div>
        );
    }
}
