import React, { Component, createContext } from 'react'

const InfoContext = createContext();

class Context extends Component {
    state = {
        email: '',
        phone: '',
        password: ''
    }
    
    componentDidMount(){
        this.setEmail();
        this.setPassword();
    }
    

    setEmail = (email) => {
        // const val = email.target.value;
        this.setState({
            email: email
        })
    }

    setPassword = (password) => {
        // const pw = email.target.value;
        this.setState({
            password: password
        })
    }

    render() {
        return (
            <InfoContext.Provider value={{...this.state, setEmail:this.setEmail, setPassword:this.setPassword}}>
                {this.props.children}
            </InfoContext.Provider>
        )
    }
}

const InfoConsumer = InfoContext.Consumer;

export {Context, InfoConsumer};
