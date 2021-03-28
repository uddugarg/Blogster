import React, { useState } from 'react'
import Header from './Header/Header';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

function Preferences(props) {

    const [preference, setPreference] = useState('');

    const handleSelect = () => {
        window.localStorage.setItem('prefer', preference);
        props.history.push('/');
    }

    const l = localStorage.getItem('prefer');
    console.log(l);

    return (
        <div className='preferences'>
            <Header />

            <Link to='/'>
                <CloseIcon className='preferences__close' fontSize='small' />
            </Link>

            <div className='preferences__box'>
                <div className='preferences__header'>
                    <h3>What would you like to read today?</h3>
                </div>

                <div className='preferences__select'>
                    <FormControl className='preferences__tags'>
                        <InputLabel className='preferences__tagName' id="demo-simple-select-filled-label">Preferences</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            variant='filled'
                            value={preference}
                            onChange={(e) => setPreference(e.target.value)}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='Business'>Business</MenuItem>
                            <MenuItem value='Entertainment'>Entertainment</MenuItem>
                            <MenuItem value='General'>General</MenuItem>
                            <MenuItem value='Health'>Health</MenuItem>
                            <MenuItem value='Science'>Science</MenuItem>
                            <MenuItem value='Sports'>Sports</MenuItem>
                            <MenuItem value='Technology'>Technology</MenuItem>
                        </Select>
                    </FormControl>
                    <Button className='preferences__btn' variant='outlined' type='submit' onClick={handleSelect}>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default Preferences
