import { useEffect, useRef } from 'react'
import { useNotesContext } from '../context/NotesContext'

function NoteInput() {
  const { noteInput, setNoteInput, addNote } = useNotesContext()
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    addNote()
  }

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        ref={inputRef}
        type="text"
        value={noteInput}
        placeholder="Write a note"
        onChange={(event) => setNoteInput(event.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  )
}

export default NoteInput
