const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const notes = require('./notes.js')
const chalk = require('chalk');

// using one yargs for all the commands and version customization
yargs(hideBin(process.argv))
    .version('1.1.0')

    // add notes
    .command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.addNote(argv.title, argv.body)
        }
    })

    // remove notes
    .command({
        command: 'remove',
        describe: 'Remove a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.removeNote(argv.title)
        }
    })

    // read note
    .command({
        command: 'read',
        describe: 'Read a note',
        builder: {
            title: {
                describe: 'note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.readNote(argv.title)
        }
    })

    // list notes
    .command({
        command: 'list',
        describe: 'List all notes',
        handler() {
            notes.listNotes()
        }
    })
    // parse (grabs info from commands)
    .parse()