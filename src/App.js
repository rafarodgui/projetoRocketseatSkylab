import React, { Component } from 'react';
import Header from './Components/Header/index'
import Footer from './Components/Footer/index'
import Routes from './routes'

export default class App extends Component{

    render(){
        return (
        <div className="principal">
            <Header />
            <Routes />
            <Footer />
        </div>
        ); 
    }
}