import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'

import PicResid from './IMG/02-Services/01-residential-3.jpg'
import PicOffic from './IMG/02-Services/02-office-3.jpg'
import PicMover from './IMG/02-Services/03-move-3.png'
 
export default class extends React.Component{
    render(){    
        
        const tabHead = { backgroundColor: "rgba(104, 81, 171, 0.842)" }

        return(
            <div>
                <h1>Our Cleaning Services</h1>

                <Tabs>
    {/* -------------------------------------------------------------------------------- */}

                    <Tab label="RESIDENTIAL" style={tabHead} >
                        <div className="sr-tab" >
                            <div className="tab-top" >
                                <h2>A CLEAN home is a HAPPY home.</h2>
                                <img src={PicResid} alt=""/>
                            </div>
                            <br/>
                        </div>
                    </Tab>

    {/* -------------------------------------------------------------------------------- */}

                    <Tab label="OFFICES" style={tabHead} >
                        <div className="sr-tab" >
                            <div className="tab-top" >
                                    <h2>You make the office SUCCESSFUL, we make it CLEAN.</h2>
                                    <img src={PicOffic} alt=""/>
                            </div>
                            <br/>
                        </div>
                    </Tab>

    {/* -------------------------------------------------------------------------------- */}

                    <Tab label="MOVE: IN / OUT" style={tabHead} >
                        <div className="sr-tab" >
                            <div className="tab-top" >
                                    <h2>Moving is HARD enough, leave the cleaning to us.</h2>
                                    <img src={PicMover} alt=""/>
                            </div>
                            <br/>
                        </div>
                    </Tab>

    {/* -------------------------------------------------------------------------------- */}
                </Tabs>

                <br/>
                
            </div>
        )
    }
}


{/* <h2 style={styles.headline}>Tab One</h2> */}