import React from 'react'
import TextField from 'material-ui/TextField'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton'

import Banner from './IMG/03-Cx/cleaning.jpg'

 
export default class extends React.Component{
    state ={ name: '', email: '', phone: '' }

    render(){  

        const senEmail = () => {
            this.setState({ name: '', email: '', phone: '' })
        }


        const myColor = { backgroundColor: "rgba(104, 81, 171, 0.842)" }

        return(
            <div>
                <h1>Contac US</h1>
                <img src={Banner} alt=""/>
                <br/>
              
                <h3>Free Estimates</h3>
                <p><strong>Phone:</strong> 801-123-4567</p>
                <p><strong>Email:</strong> fashioncleaningday@gmail.com</p>
                <br/>

                <div className="form-cont" >
                    <AppBar  style={myColor}
                        title={<span >Want to know more?</span>}
                        showMenuIconButton={false}
                    />

                    <TextField hintText="Name" floatingLabelText="Name" floatingLabelFixed={true} value={this.state.name} onChange={ (e) => { this.setState({ name: e.target.value }) } } />
                    <br />

                    <TextField hintText="Email" floatingLabelText="Email" floatingLabelFixed={true} value={this.state.email} onChange={ (e) => { this.setState({ email: e.target.value }) } } />
                    <br />

                    <TextField hintText="Phone" floatingLabelText="Phone" floatingLabelFixed={true} value={this.state.phone} onChange={ (e) => { this.setState({ phone: e.target.value }) } } />
                    <br />

                    <RaisedButton label="SUBMIT" primary={true} buttonStyle={myColor} onClick={ senEmail } />
                    <br/><br/>
                </div>

                <br/>
                
            </div>
        )
    }
}