import { Provider } from 'react-redux';
import './scss/main.scss';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { store } from './redux/store';
import Search from './components/Search';

function App() {
  return (
    <Provider store={store}>
      <NoteForm />
      <Search />
      <NoteList />
    </Provider>

  );
}

export default App;
