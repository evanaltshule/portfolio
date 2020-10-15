import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class About extends Component {
	render() {
		return(
			<div className="container">
			  <h3>Hong Kong</h3>
			    <Grid className="bio">
			      <Cell col={6}></Cell>
			      <Cell col={6}>Hello! My name is Evan Altshule and I'm a fourth year computer science major
		    		at UCSB. Besides studying, you can find me outside playing spikeball, throwing a frisbee,
		   			 or doing any sorts of fun exercising. I derive pleasure from life through hanging out with friends,
		    		petting my dog, drinking coffee, and eating yummy food. This is my first time building a website from scratch 
		    		(as you can probably tell), but the process of making it was extremely fun. I took this photo when I studied 
		    		abroad in Hong Kong in Fall of 2019. Awesome time! Be sure to check my two projects I uploaded and feel free to 
		    		contact me using the information below! Cheers!</Cell>
			    </Grid>

			    <Grid className="contact-grid">

                  <hr/>
                  <hr/>
                  <hr/>

                  <Cell col={6}>
                    <h2>Contact Me</h2>
                  <hr/>

		            <div className="contact-list">
		              <List>
		                <ListItem>
		                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
		                    <i className="fa fa-phone-square" aria-hidden="true"/>
		                    (806) 906-0152
		                  </ListItemContent>
		                </ListItem>


		                <ListItem>
		                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
		                    <i className="fa fa-envelope" aria-hidden="true"/>
		                    ealtshule@ucsb.edu
		                  </ListItemContent>
		                </ListItem>
		          <Cell col={6}>
                  </Cell>

              </List>
            </div>
          </Cell>
        </Grid>
\
			</div>

			

			)
	}
}

export default About;