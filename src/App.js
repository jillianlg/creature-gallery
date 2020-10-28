import React from 'react';
import Header from './Header.js';
import ImageList from './ImageList.js';
import images from './ImageData.js';
import './App.css';


export default class App extends React.Component {
  render() {
    return (
      <div className="grid">
        <Header />
        <ImageList creatureArray={images}/>
      </div>
    )
  }
}
