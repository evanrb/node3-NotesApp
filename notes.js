const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your Notes...'

const addNotes = (title, body) => {
    const existingNotes = loadNotes()
    //const duplicateNotes = existingNotes.filter((note) => note.title == title)
    const duplicateNotesSingular = existingNotes.find((note) => note.title == title)

    //if(duplicateNotes.length === 0){
    if(!duplicateNotesSingular){
        console.log(existingNotes)
        existingNotes.push({
            title: title,
            body: body
        })

        saveNotes(existingNotes)
    }else{
        console.log("noteTitle exists")
    }
}

const removeNote = (title) => {
    const existingNotes = loadNotes()
    const newNotes = existingNotes.filter((note) => note.title != title)
    if(existingNotes.length === newNotes.length) console.log(chalk.red.inverse("No Note Found!"))
    else{
        saveNotes(newNotes)
        console.log(chalk.green.inverse("Note Deleted!"))
    }
}

const readNote = (title) =>{
    const existingNotes = loadNotes()
    const desiredNote = existingNotes.find((note) => note.title === title)
    if(desiredNote){
        console.log(chalk.inverse.bold.blue(desiredNote.title))
        console.log(desiredNote.body)
    }else{
        console.log(chalk.red("No Note Found"))
    }
}

const listNotes = () => {
    console.log(chalk.bold.inverse.blue("your notes"))
    const existingNotes = loadNotes()
    existingNotes.forEach((note) => {console.log(note.title)})
}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const databuffer = fs.readFileSync("notes.json")
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }
}
module.exports = {
    getNotes,
    addNotes,
    removeNote,
    listNotes,
    readNote
}