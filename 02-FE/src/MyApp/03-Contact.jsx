import React from 'react'
import gql from "graphql-tag"
import { client } from './EndPoint/MyEndPoint'


import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import Banner from './IMG/03-Cx/cleaning.jpg'

 
export default class extends React.Component{
    state ={ name: '', email: '', phone: '' }

    render(){  

        const senEmail = async () => {
            console.log(this.state)

            let temp1 = await client.mutate({
                mutation: gql`
                mutation{
                    createUser(data: { name: "${this.state.name}", email: "${this.state.email}", phone: "${this.state.phone}" }){
                      id
                      name
                      email
                      phone
                    }
                  }
                `}).then((result) => { return result.data.createUser } )
            
            await console.log("La Data: ", temp1 )

            this.setState({ name: '', email: '', phone: '' })
        }


        const myColor = { backgroundColor: "rgba(104, 81, 171, 0.842)" }
        const bCont = { padding: "10px", maxWidth: "75%", margin: "0px auto" }
        const banerSty = { margin: "0px auto", display: "block", width: "100%", height: "auto" }

        return(
            <div>
                <h1>Contact US</h1>
                <div style={bCont} >
                    <img style={banerSty} src={Banner} alt=""/>
                </div>  
        
                <br/>
              
                <h2>Free Estimates</h2>
                <p><strong>Manager: </strong>Maria Cardon</p>
                <p><strong>Phone:</strong> (801)400-2547</p>
                <p><strong>Email:</strong> fashioncleaningday@gmail.com</p>
                <br/>

                <div className="form-cont" >
                    <div style={banerSty}>
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
                </div>

                <br/>
                
            </div>
        )
    }
}