import React from 'react';
import images from './ImageData.js';
import './ImageItem.css';

//presentational componets (items)
export default class ImageItems extends React.Component {
    render() {
        return (
            <div className="image-style">
                <h2>{this.props.title}</h2>
                <img src={this.props.url} alt={this.props.title}></img>
                <p>{this.props.description}</p>
            </div>
        )
    }
}