import React, { Component } from 'react';
import Header from './Components/Header/index'
import Main from './Pages/main/index'
import Footer from './Components/Footer/index'

export default class App extends Component{

    render(){
        return (
        <div className="principal">
            <Header />
            <Main />
            <Footer />
        </div>
        ); 
    }
}