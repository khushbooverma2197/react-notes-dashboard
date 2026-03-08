import { useNotesContext } from '../context/NotesContext'

function NotesSummary() {
  const { totalNotes } = useNotesContext()

  return <p>Total Notes: {totalNotes}</p>
}

export default NotesSummary
