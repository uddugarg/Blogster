import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import Header from '../Header/Header'
import './Upload.css';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Upload(props) {

    const user = useSelector(state => state.user);

    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const variable = {
            writer: user.userData._id,
            description: description,
            tags: tags,
            title: title,
            category: category
        }

        if (description === '' || title === '' || tags === '' || category === '') {
            return alert('Fields are empty');
        }

        axios.post('/api/post/uploadPost', variable)
            .then(response => {
                if (response.data.success) {
                    alert('Post Created Successfully');
                    setTitle('');
                    setDescription('');
                    setTags('');
                    setCategory('');
                    props.history.push('/');
                } else {
                    alert('Failed to upload post!!')
                }
            })
    }


    return (
        <div className='upload'>
            <Header />

            <Link to='/'>
                <CloseIcon className='upload__close' fontSize='small' />
            </Link>

            <div className="upload__box">
                <div className="upload__detail">
                    <textarea id="outlined-basic" placeholder="Description" variant="filled" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="upload__desc">
                    <TextField className='upload__tags' label='Title' variant='filled' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <TextField className='upload__tags' label='HashTags' variant='filled' value={tags} onChange={(e) => setTags(e.target.value)} />
                    <FormControl className='upload__tags'>
                        <InputLabel className='upload__tagName' id="demo-simple-select-filled-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            variant='filled'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
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
                </div>
            </div>

            <Button className='upload__btn' variant='contained' type='submit' onClick={handleSubmit}>Post</Button>
        </div>
    )
}

export default Upload
