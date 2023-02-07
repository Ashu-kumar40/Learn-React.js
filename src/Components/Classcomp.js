// class base component

import {Component} from 'react';
class Message extends Component {
    render(){
        return <h1>This is class base component</h1>
    }
}

// OR
/* 
import React from 'react';
class Message extends React.Component {
    render(){
        return <h1> I am learning React.</h1>
    }
}
*/

// props in class base component

export default Message;