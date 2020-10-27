import React from 'react';
import images from './ImageData.js';
import './App.css';
import ImageItems from './ImageItem.js';

// data to be rendered in
export default class ImageList extends React.Component {

    state={filter: ''}

    handleChange=(e) => {
        this.setState({
            filter: e.target.value
        })
    }

    render() {

        const options=this.props.creatureArray.map((item) => {
            return <option value={item.keyword}>{item.title}</option>
        })

        return (
            <>
            <select onChange={this.handleChange}>
                {options}
            </select>
            <div>
                {
                    this.props.creatureArray.filter((item) => {
                        if (!this.state.filter) return true;
                        if (item.keyword === this.state.filter) return true;
                        return false
                    })
                .map(image => {
                    return <ImageItems title={image.title} url={image.url} description={image.description} horns={image.horns} keyword={image.keyword}/>
                })}

            </div>
            </>
        )
    }
}