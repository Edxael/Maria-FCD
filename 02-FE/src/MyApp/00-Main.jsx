// Main.jsx
 
import React from 'react'
import { ApolloProvider } from "react-apollo"
import { HashRouter, Route, Link } from 'react-router-dom'
import './CSS/style.css'
import { client } from './EndPoint/MyEndPoint'


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'


 
import Home from './01-Home'
import Services from './02-Services'
import ContacUS from './03-Contact'
 
 
export default class extends React.Component{
    state = { open: false }

    render(){

        const styleAppBar = { backgroundColor: "rgba(104, 81, 171, 0.842)", textAlign: "left" }
        
 
        return(
            <ApolloProvider client={client}>
                <MuiThemeProvider>
                    <HashRouter>
                        <div className="MainContainer">

                            <AppBar title="FASHION CLEANING DAY" style={ styleAppBar } onLeftIconButtonClick={ () => { this.setState({ open: true }) } }  />

                            <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})} >
                                <MenuItem primaryText="Home" containerElement={<Link to="/" />} onClick={ () => { this.setState({ open: false }) } } />
                                <MenuItem primaryText="Services" containerElement={<Link to="/2" />} onClick={ () => { this.setState({ open: false }) } } />
                                <MenuItem primaryText="Contact US" containerElement={<Link to="/3" />} onClick={ () => { this.setState({ open: false }) } } />
                            </Drawer>
                    
                            
                            <hr/>
                    
                            <div className="pagesCont">
                                <Route exact path="/" component={Home}/>
                                <Route path="/2" component={Services}/>
                                <Route path="/3" component={ContacUS}/>

                                <br/>
                            </div>
    
                            
                            <hr/>
                            <div>Manager: Maria Cardon.</div>
                            <div>(801)-400-2547</div>
                    
                        </div>
                    </HashRouter>
                </MuiThemeProvider>
            </ApolloProvider>
        )
    }
}




