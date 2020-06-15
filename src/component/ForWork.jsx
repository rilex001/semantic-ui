import React from 'react'
import {Grid, Card, Image} from 'semantic-ui-react'
import picture6 from '../img/picture6.jpg'
import picture7 from '../img/picture7.jpg'
import picture9 from '../img/picture9.jpg'
import picture10 from '../img/picture10.jpg'



function ForWork() {
    return (
        <div className='forwork'>
            <h2>Za posao  </h2>
        <Grid columns={4} divided inverted>
                <Grid.Row color='white' textAlign='center'>
                    <Grid.Column>
                        <div>
                            <div>
                                <img src={picture6} className='imagediv'></img>
                            </div>
                            <div className='textcontent'>
                                <p className='headercontent'><b>Microsoft 365 za preduzeće</b></p>
                                <p>Microsoft 365 za preduzeće pruža moćne usluge koje vam mogu pomoći da pokrenete i razvijate svoje poslovanje.</p>
                                <p><a>Kupite sada > </a></p>

                            </div>
                        </div>
                    </Grid.Column>
                    
                    <Grid.Column>
                    <div>
                            <div>
                                <img src={picture7} className='imagediv'></img>
                            </div>
                            <div className='textcontent'>
                                <p className='headercontent'><b>Windows 10 Enterprise</b></p>
                                <p>Preuzmite 90-dnevnu probnu verziju za IT stručnjake.</p>
                                <p><a>Preuzmite odmah > </a></p>
                                

                            </div>
                        </div>
                    </Grid.Column>

                    <Grid.Column>
                    <div>
                            <div>
                                <img src={picture9} className='imagediv'></img>
                            </div>
                            <div className='textcontent'>
                                <p className='headercontent'><b>Nabavite Visual Studio 2019</b></p>
                                <p>Preuzmite Visual Studio 2019, produktivan, moderan i inovativan IDE.</p>
                                <p><a>Preuzmite odmah > </a></p>
                                

                            </div>
                        </div>
                    </Grid.Column>

                    <Grid.Column>
                    <div>
                            <div>
                                <img src={picture10} className='imagediv'></img>
                            </div>
                            <div className='textcontent'>
                                <p className='headercontent'><b>Novi Microsoft Edge</b></p>
                                <p>Performanse, kompatibilnost, bezbednost. Pregledač za poslovanje.</p>
                                <p><a>Preuzmite odmah > </a></p>

                            </div>
                        </div>
                    </Grid.Column>
                    
                </Grid.Row>


            </Grid>
            </div>
    )
}

export default ForWork
