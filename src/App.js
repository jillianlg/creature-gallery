import React from 'react';
import Header from './Header.js';
import ImageList from './ImageList.js';
import './App.css';


export default class App extends React.Component {
  render() {
    return (
      <div className="grid">
        <Header />
        <ImageList />
      </div>
    )
  }
}



//ImageList
