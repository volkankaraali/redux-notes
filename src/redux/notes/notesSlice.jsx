import { createSlice, nanoid } from "@reduxjs/toolkit";


export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [
            {
                id: "1",
                text: "redux ile note app yap",
                color: "#ebeb49",
                date: { fulldate: "20.12.2021", time: "18:00:00" }
            }
        ],
        searchInput: "",
    },
    reducers: {
        addNote: {
            reducer: (state, action) => {
                state.items.push(action.payload)
            },
            prepare: ({ text, color }) => {
                const date = new Date();
                return {
                    payload: {
                        id: nanoid(),
                        text,
                        color,
                        date: { fulldate: date.toLocaleDateString(), time: date.toLocaleTimeString() }
                    }
                }
            }
        },
        deleteNote: (state, action) => {
            const id = action.payload
            const filtered = state.items.filter(item => item.id !== id)
            state.items = filtered;
        },
        setSearchInput: (state, action) => {
            console.log(action.payload);
            state.searchInput = action.payload;
        }
    },
})

export const selectNotes = (state) => state.notes.items;
export const selectSearchInput = (state) => state.notes.searchInput;

export const { addNote, deleteNote, setSearchInput } = notesSlice.actions;
export default notesSlice.reducer;