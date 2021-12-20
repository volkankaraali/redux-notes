import { ActionIcon, Button, ColorInput, Container, Textarea } from '@mantine/core';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../redux/notes/notesSlice';

import { BsArrowRepeat } from "react-icons/bs";

function NoteForm() {
    const [text, setText] = useState("")
    const [color, onChange] = useState("")
    const [error, setError] = useState(false)
    const dispatch = useDispatch();


    const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text !== "") {
            dispatch(addNote({ text, color }))
            setText("")
            onChange("Pick color")
            setError(false)
        }
        else { setError(true) }

    }
    return (
        <div className='noteDiv'>
            <Container>
                <form id="noteForm" className='noteForm' onSubmit={handleSubmit} >

                    <Textarea
                        className='textInput'
                        placeholder="Type a note"
                        label="Your note"
                        error={error ? "Text area can't be empty." : ""}
                        required
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <div className="formFooter">
                        <ColorInput
                            className='colorInput'
                            placeholder="Pick color"
                            value={color}
                            onChange={onChange}
                            rightSection={
                                <ActionIcon onClick={() => onChange(randomColor())}>
                                    <BsArrowRepeat />
                                </ActionIcon>
                            }
                        />
                        <Button type='submit' form="noteForm" className='addButon'>Add</Button>
                    </div>
                </form>
            </Container>
        </div>
    )
}

export default NoteForm
