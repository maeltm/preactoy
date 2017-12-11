import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Sign extends React.Component {
    constructor(props){
        super(props);

        this.state = {  id: '',
                        password: ''};

        this.signIn = this.signIn.bind(this);
        this.signUp = this.signUp.bind(this);
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChangeId(event) {
        this.setState({id: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    signIn(){
        axios.post('http://localhost:4000/api/account/signin', {test: 'signin_test'}).then( response => {
            console.log('sign-in');
            console.log(response);
        })
        .catch( response => { console.log(response); } );
    }

    signUp(){
        axios.post('http://localhost:4000/api/account/signup', {id: this.state.id, password: this.state.password}).then( response => {
            console.log('sign-up');
            console.log(response);
        })
        .catch( response => { console.log(response); } );
    }

    render(){
        return (
            <div>
                <h1>TEXT: { this.props.text }</h1>
                ID: <input type="text" name="ID" value={this.state.id} onChange={this.handleChangeId}></input>
                Password: <input type="text" name="Password" value={this.state.password} onChange={this.handleChangePassword}></input>
                <button onClick={this.signIn}>Sign-In</button>
                <button onClick={this.signUp}>Sign-Up</button>
            </div>
        );
    }
}

export default Sign;