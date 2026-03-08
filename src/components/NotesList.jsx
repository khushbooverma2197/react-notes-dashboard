import { useNotesContext } from '../context/NotesContext'

function NotesList() {
  const { notes, selectedNoteId, setSelectedNoteId } = useNotesContext()

  if (notes.length === 0) {
    return <p>No notes yet.</p>
  }

  return (
    <ul className="notes-list">
      {notes.map((note) => (
        <li
          key={note.id}
          className={selectedNoteId === note.id ? 'selected' : ''}
          onClick={() => setSelectedNoteId(note.id)}
        >
          {note.text}
        </li>
      ))}
    </ul>
  )
}

export default NotesList
