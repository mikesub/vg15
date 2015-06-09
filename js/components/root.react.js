import styles from './css/root.css';

import React from 'react';

import Filters from './filters.react';
import Graph from './graph.react';

export default function(node){
    React.render((
        <div className="root">
            <Filters/>
            <Graph/>
        </div>
    ), node);
};




