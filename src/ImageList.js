import React from 'react';
import images from './ImageData.js';
import './App.css';
import ImageItems from './ImageItem.js';

// data to be rendered in
export default class ImageList extends React.Component {
    render() {
        return (
            <div className="image-style">
                {images.map(image => {
                    return <ImageItems title={image.title} url={image.url} description={image.description}/>
                })}

            </div>
        )
    }
}