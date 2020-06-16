import React from 'react'
import { Grid, Dropdown, Search } from 'semantic-ui-react'

const countryOptions = [
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
    { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
    { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
  ]

function Navbar() {
    return (
        <div className='margincontainer'>
        <Grid columns={3} divided inverted>
            <Grid.Row textAlign='center'>
                
            <Grid columns={5} divided inverted>
                <Grid.Row color='white' textAlign='center'>
                    <Grid.Column>
                            {/* <a href='#'>Microsoft</a> */}
                            Microsoft
                    </Grid.Column>
                    <Grid.Column>
                        {/* <a href='#'>Microsoft 365</a> */}
                            Microsoft 365
                    </Grid.Column>
                    <Grid.Column>
                        {/* <a href='#'>Office</a> */}
                        Office
                    </Grid.Column>
                    <Grid.Column>
                        {/* <a href='#'>Windows</a> */}
                        Windows
                    </Grid.Column>
                    <Grid.Column>
                        {/* <a href='#'>Podrska</a> */}
                        Podrska
                    </Grid.Column>
                </Grid.Row>
            </Grid>

                <Grid.Column>
                    
                </Grid.Column>
      
                <Grid columns={2} divided inverted>
                <Grid.Row color='white' textAlign='center'>
                    <Grid.Column>
                        <Dropdown
                            placeholder='Select Country'
                            fluid
                            search
                            selection
                            options={countryOptions}
                        />
                    </Grid.Column>
                    <Grid.Column>
                    <Search

                    />
                    </Grid.Column>
                    
                    
                </Grid.Row>
            </Grid>
      
            </Grid.Row>
        </Grid>
        </div>
    )
}

export default Navbar
