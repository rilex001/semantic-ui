import React from 'react'
import {Grid, Card, Image} from 'semantic-ui-react'
import picture from '../img/picture1.jpg'
import picture3 from '../img/picture3.jpg'
import picture4 from '../img/picture4.jpg'
import picture5 from '../img/picture5.jpg'



function Content() {
    return (
        <div className='content'>
        <Grid columns={4} divided inverted>
                <Grid.Row color='white' textAlign='center'>
                    <Grid.Column>
                        <div>
                            <div>
                                <img src={picture} className='imagediv'></img>
                            </div>
                            <div className='textcontent'>
                                <p className='headercontent'><b>Ovo je vas 365</b></p>
                                <p>Otkrijte šta se svakog dana može postići uz Microsoft 365.</p>
                                <p><a>Za najvise sest osoba > </a></p>
                                <p><a>Za jednu osoba > </a></p>

                            </div>
                        </div>
                    </Grid.Column>
                    
                    <Grid.Column>
                    <div>
                            <div>
                                <img src={picture3} className='imagediv'></img>
                            </div>
                            <div className='textcontent'>
                                <p className='headercontent'><b>Outlook za IOS i Android</b></p>
                                <p>Povežite se. Organizujte se. Završavajte poslove.</p>
                                <p><a>Preuzmite odmah > </a></p>
                                

                            </div>
                        </div>
                    </Grid.Column>

                    <Grid.Column>
                    <div>
                            <div>
                                <img src={picture4} className='imagediv'></img>
                            </div>
                            <div className='textcontent'>
                                <p className='headercontent'><b>OneNote</b></p>
                                <p>Organizujte svoje beleške i svoj život.</p>
                                <p><a>Saznajte vise > </a></p>
                                

                            </div>
                        </div>
                    </Grid.Column>

                    <Grid.Column>
                    <div>
                            <div>
                                <img src={picture5} className='imagediv'></img>
                            </div>
                            <div className='textcontent'>
                                <p className='headercontent'><b>Ispravka za Windows 10</b></p>
                                <p>Donosi vam nove funkcije koje će vam pomoći da ostvarite ono što volite, da uspostavite bolje veze i da vratite neko vreme.</p>
                                <p><a>Saznajte vise > </a></p>

                            </div>
                        </div>
                    </Grid.Column>
                    
                </Grid.Row>


            </Grid>
            </div>
    )
}

export default Content
