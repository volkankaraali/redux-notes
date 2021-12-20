import { Alert, Button, Card, Group, Text } from '@mantine/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote, selectSearchInput } from '../redux/notes/notesSlice';


function SearchList({ filteredNote }) {
    const dispatch = useDispatch();
    const searchInput = useSelector(selectSearchInput)
    console.log(searchInput);
    return (
        <>
            {
                filteredNote.length === 0 ?
                    <Alert title="Not Found" color="red">
                        There is not found that <b>{searchInput}.
                        </b>
                    </Alert> : false
            }
            {
                filteredNote.map(note => (
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
                            <Text size="xs">{note.date.fulldate} {note.date.time}  </Text>
                            <Text size="xs">Color is {note.color} </Text>
                        </Card>
                    </div>
                ))
            }
        </>

    )
}

export default SearchList
