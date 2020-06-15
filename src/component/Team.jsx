import React from 'react'
import picture2 from '../img/picture2.jpg'
import { Grid, Button } from 'semantic-ui-react'



function Team() {
    return (
        <div className='container'>
            <Grid columns={4} divided inverted>
                <Grid.Row color='white' textAlign='center'>
                    <Grid.Column>
                            
                    </Grid.Column>

                    <Grid.Column>
                    <img src={picture2} className='header' />
                    </Grid.Column>

                    <Grid.Column>
                    <img src={picture2} className='header' />
                    </Grid.Column>

                    <Grid.Column>
                        
                    </Grid.Column>
                    
                </Grid.Row>


            </Grid>
                         
          <div className='headercontainer'>             
            <p className='microsoftteam'><b>Microsoft Teams - bezbedan</b></p> 
            <p className='microsoftteam'><b> Bezbedan. Besplatan</b></p>
            <p className='microsoftteaminfo'><b>Teams vam moze pomoci da ostanete produktivni, bez obzira na to gde se nalazite</b></p >
            <Button size='large'>Saznajte vise > </Button>
            </div>         
        </div>
    )
}

export default Team
