import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { deleteNote, selectNotes, selectSearchInput } from '../redux/notes/notesSlice';
import { useDispatch } from 'react-redux'
import { Alert, Button, Card, Container, Group, SimpleGrid, Text } from '@mantine/core';
import SearchList from './SearchList';

function NoteList() {
    const dispatch = useDispatch();

    const notes = useSelector(selectNotes)
    const searchInput = useSelector(selectSearchInput)

    const [filteredNote, setFilteredNote] = useState([])

    useEffect(() => {
        if (searchInput !== "") {

            const data = notes.filter(note => note.text.includes(searchInput))
            setFilteredNote(data)
        }
    }, [searchInput, notes])

    return (
        <div className='noteList'>
            <Container>
                <SimpleGrid cols={3} breakpoints={[
                    { maxWidth: 768, cols: 2, spacing: 'md' },
                    { maxWidth: 425, cols: 1, spacing: 'sm' },
                ]} >
                    {
                        searchInput !== "" ? (
                            <SearchList filteredNote={filteredNote} />
                        ) :
                            (
                                notes.length >= 1 ? (
                                    notes.map(note => (
                                        <div key={note.id}>
                                            <Card
                                                shadow="sm"
                                                padding="xl"
                                                style={{ backgroundColor: `${note.color}`, paddingTop: 10 }}
                                            >

                                                <Group position='right'>
                                                    <Button size='xs' color="red" onClick={() => dispatch(deleteNote(note.id))}>X</Button>
                                                </Group>

                                                <Text weight={500} style={{ wordWrap: "break-word" }} size="lg" >
                                                    {note.text}
                                                </Text>
                                                <Text size="xs">{note.date.fulldate} {note.date.time}   </Text>
                                                <Text size="xs">Color is {note.color}  </Text>
                                            </Card>
                                        </div>
                                    ))
                                ) : <Alert title="" color="red">
                                    There are not notes.
                                </Alert>
                            )
                    }

                </SimpleGrid>
            </Container>
        </div>
    )
}

export default NoteList
