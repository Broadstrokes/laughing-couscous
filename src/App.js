import React, { Component } from 'react'
import './App.css'
import Nav from './Nav'
import Footer from './Footer'

export default class App extends Component {
 render() {
   return (
     <div className="App">
       <Nav />
       {this.props.children}
       <Footer />
     </div>
   );
 }
}
