import React from 'react'
import { Grid } from 'semantic-ui-react'

function Footer() {
    return (
        <div className='footer'>
            <Grid columns={6} divided inverted>
                <Grid.Row color='white' textAlign='center'>
                    <Grid.Column>
                            <p className='footertitle'>Sta je novo</p>
                            <p className='footertext'>Microsoft 365</p>
                    </Grid.Column>
                    <Grid.Column>
                            <p className='footertitle'>Microsoft Store</p>
                            <p className='footertext'>Profil naloga</p>
                            <p className='footertext'>Centar za preuzimanje</p>
                            <p className='footertext'>Pracenje porudzbine</p>
                    </Grid.Column>
                    <Grid.Column>
                            <p className='footertitle'>Obrazovanje</p>
                            <p className='footertext'>Microsoft u obrazovanju</p>
                            <p className='footertext'>Office za studente</p>
                            <p className='footertext'>Office 365 za skole</p>
                    </Grid.Column>
                    <Grid.Column>
                            <p className='footertitle'>Veliko preduzece</p>
                            <p className='footertext'>Pronadjite dobavljaca resenja</p>
                            <p className='footertext'>Microsoft AppSource</p>
                    </Grid.Column>
                    <Grid.Column>
                            <p className='footertitle'>Projektant</p>
                            <p className='footertext'>Microsoft Visual Studio</p>
                            <p className='footertext'>Mreza projektanta</p>
                            <p className='footertext'>TechNet</p>
                            <p className='footertext'>Kanal 9</p>
                    </Grid.Column>
                    <Grid.Column>
                            <p className='footertitle'>Preduzece</p>
                            <p className='footertext'>Zaposlenje</p>
                            <p className='footertext'>O kompaniji Microsoft</p>
                            <p className='footertext'>Privatnost u kompaniji Microsoft</p>
                            <p className='footertext'>Investitori</p>
                    </Grid.Column>
                   
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Footer
