import NoteInput from './components/NoteInput'
import NotesList from './components/NotesList'
import NotesSummary from './components/NotesSummary'
import { NotesProvider } from './context/NotesContext'

function App() {
  return (
    <NotesProvider>
      <main>
        <h1>Notes Dashboard</h1>
        <NoteInput />
        <NotesSummary />
        <NotesList />
      </main>
    </NotesProvider>
  )
}

export default App
