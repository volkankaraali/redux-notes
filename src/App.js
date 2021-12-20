import { Provider } from 'react-redux';
import './scss/main.scss';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { store } from './redux/store';
import Search from './components/Search';
import { Text } from '@mantine/core';

function App() {
  return (
    <Provider store={store}>
      <div className='githubLink'>
        <a href='https://github.com/volkankaraali' target="_blank"><Text size="lg">github.com/volkankaraali</Text></a>
      </div>
      <NoteForm />
      <Search />
      <NoteList />
    </Provider>

  );
}

export default App;
