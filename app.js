// const u = require('./utils.js')

// const sum = u(4, -2)
// console.log(sum)

//
const notes = require('./notes.js')
console.log(notes)
//

const v = require('validator')
console.log(v.isURL('ign.com'))

//
const chalk = require('chalk')
console.log(chalk.bold.inverse.red('Success!'))
//

//vanilla way
const command = process.argv[2]
/*switch(command){
    case 'add':
        console.log("Adding a Note")
        break
    case 'remove':
        console.log("Removing a Note")
}*/

//better yargs way
const yargs = require('yargs')

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'The notes body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {notes.addNotes(argv.title, argv.body)}
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "title of note to be removed",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {notes.removeNote(argv.title)}
})

//list command
yargs.command({
    command: 'list',
    describe: 'forced to do this',
    handler: (argv) => {notes.listNotes()}
})

//read command
yargs.command({
    command: 'read',
    describe: 'forced to do this',
    builder: {
        title: {
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {notes.readNote(argv.title)}
})

yargs.parse()
