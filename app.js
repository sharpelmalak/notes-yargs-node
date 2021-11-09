// const fs = require('fs')

// fs.writeFileSync('note.txt','HelloWorld')

// console.log(fs.readFileSync('note.txt').toString())

// fs.appendFileSync('note.txt','From Append2')
// console.log(fs.readFileSync('note.txt').toString())


// const x = require('./data')

// console.log(x.firstName + ' '+x.lastName)
// //console.log(x.lastName)
// console.log(x.sum(5,10))


// const validator =  require('validator')
// const chalk =  require('chalk')

// console.log(chalk.red(validator.isEmail('sharbelmalak@gmail.com')))



const yargs = require('yargs')
const notes = require('./notes')

yargs.command({
    command : 'add',
    describe : 'Add Notes',
    builder:{
        title:{
            describe : 'This Is a Title To Be Added',
            type:'string',
            demandOption:true
        },
        body:{
            describe : 'This Is a Body of Note To Be Added',
            type:'string',
            demandOption:true
        }
    },
    handler : (argv)=>{

        notes.addNote(argv.title,argv.body)
    }
    
})
yargs.command({
    command : 'delete',
    describe : 'delete Notes',
    builder:{
        title:{
            describe : 'This Is a Title To Be deleted',
            type:'string',
            demandOption:true
        },},
    handler : (argv)=>{
        
        notes.deleteNote(argv.title)
    }
})
yargs.command({
    command : 'list',
    describe : 'view Notes',
    handler : ()=>{
        notes.viewNotes()
    }
})
yargs.command({
    command : 'read',
    describe : 'read Notes',
    builder:{
        title:{
            describe : 'This Is a Title To Be readed',
            type:'string',
            demandOption:true
        },},
    handler : (argv)=>{
        notes.readNote(argv.title)

    }
})


yargs.parse()



// const person = {
//     name:'sharpel',
//     age:24
// }

// const jPerson = JSON.stringify(person)
// const fs = require('fs')
// fs.writeFileSync('data.json',jPerson)
// const read = fs.readFileSync('data.json').toString()
// console.log(read)
// const newPerson = JSON.parse(read)
// newPerson.name = 'zaki'
// newPerson.age = 36
// const newJperson = JSON.stringify(newPerson)

// fs.writeFileSync('data.json',newJperson)
// console.log(newJperson)


