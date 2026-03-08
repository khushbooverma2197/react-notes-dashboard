import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const NotesContext = createContext(null)
const STORAGE_KEY = 'notes-dashboard-items'

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState([])
  const [noteInput, setNoteInput] = useState('')
  const [selectedNoteId, setSelectedNoteId] = useState(null)

  useEffect(() => {
    const savedNotes = localStorage.getItem(STORAGE_KEY)

    if (!savedNotes) {
      return
    }

    try {
      const parsedNotes = JSON.parse(savedNotes)
      if (Array.isArray(parsedNotes)) {
        setNotes(parsedNotes)
      }
    } catch (error) {
      console.error('Could not read notes from localStorage:', error)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
  }, [notes])

  const totalNotes = useMemo(() => notes.length, [notes])

  const addNote = () => {
    const trimmedNote = noteInput.trim()

    if (!trimmedNote) {
      return
    }

    setNotes((previousNotes) => [
      ...previousNotes,
      {
        id: Date.now(),
        text: trimmedNote,
      },
    ])
    setNoteInput('')
  }

  const value = {
    notes,
    noteInput,
    setNoteInput,
    addNote,
    selectedNoteId,
    setSelectedNoteId,
    totalNotes,
  }

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
}

export function useNotesContext() {
  const context = useContext(NotesContext)

  if (!context) {
    throw new Error('useNotesContext must be used inside NotesProvider')
  }

  return context
}
