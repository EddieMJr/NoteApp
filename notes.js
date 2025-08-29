const fs = require ('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

// allows user to add notes to notes.json
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    // if there isnt a duplicate note, add the note and show user its been added
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.underline('new note added!'))
        // if there is, tell user it is already in the notes.json
    } else {
        console.log(chalk.red.underline('note title taken!'))
    }
}

// allows user to remove notes to notes.json
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse.bold('note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse.bold('no note found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

// shows user all of the titles of the notes she has
const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse.bold('your notes!'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

// allows user to read one note from notes.json
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(note.title)
        console.log(note.body)
    } else (
        console.log('Note not found')
    )
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}