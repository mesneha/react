import React, { Component } from 'react';
class Home extends React.Component {


    render() {


        return (
            <div>
                <h1> Welcome to HOME </h1>
                <img src={require('./download.jfif')} />
            </div>
        )
    }

}

export default Home;