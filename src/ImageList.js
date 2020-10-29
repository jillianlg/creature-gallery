import React from 'react';
import './ImageList.css';
import ImageItems from './ImageItem.js';

// data to be rendered in
export default class ImageList extends React.Component {

    state={
        filter: '',
        horns: '',
}

    handleKeywordChange=(e) => {
        this.setState({
            filter: e.target.value
        })
    }

    handleHornsChange=(e) => {
        this.setState({
            horns: e.target.value
        })
    }

    render() {

        const options=this.props.creatureArray.map((item) => {
            return <option value={item.keyword}>{item.title}</option>
        })

        return (
            <>
            <div className="text">Filter by Creature:</div>
            <select onChange={this.handleKeywordChange}>
                {options}
            </select>
            <div className="text">Filter by Horns:</div>
            <select onChange={this.handleHornsChange}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='100'>100</option>
            </select>
            <div className='image-group'>
                {
                    this.props.creatureArray.filter((item) => {
                        if (!this.state.filter) return true;
                        if (item.keyword === this.state.filter) return true;
                        return false
                    })
                    .filter((item) => {
                        if (!this.state.horns) return true;
                        if (item.horns === +this.state.horns) return true;
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