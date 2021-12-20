import { Container, TextInput } from '@mantine/core';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchInput } from '../redux/notes/notesSlice';


function Search() {

    const [input, setInput] = useState("")
    const dispatch = useDispatch();


    const handleChangeOfSearch = (e) => {
        setInput(e.target.value)
        dispatch(setSearchInput(e.target.value))
    }
    return (
        <div className='searchDiv'>
            <Container>
                <TextInput
                    className='searchInput'
                    placeholder="Search Note"
                    type="search"
                    size='sm'
                    value={input}
                    onChange={handleChangeOfSearch}
                />
            </Container>

        </div>
    )
}

export default Search
