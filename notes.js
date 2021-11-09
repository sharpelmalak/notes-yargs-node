const fs = require('fs')


const addNote =(title,body)=>{

    const notes = loadNotes()
    const isDuplicated = notes.find((note)=>{
        return note.title === title
    })
    if(!isDuplicated){
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log('Saved Successfully')
    }
    else{
        console.log('Note Already Exist')
    }
    

}



const loadNotes = ()=>{
    try{
        const  allNotes = fs.readFileSync('notes.json').toString()
        return JSON.parse(allNotes)
    }
    catch{
        return []
    }
}


const saveNotes = (notes)=>{
     
    fs.writeFileSync('notes.json',JSON.stringify(notes))
}

const deleteNote = (title)=>{
    const allNotes = loadNotes()
    if(allNotes.find((note)=>{
        return note.title === title
    })){
        const updatedNote = allNotes.filter((note)=>{
            return note.title !== title
        })
         
        saveNotes(updatedNote)
        console.log('The Note  : ' + title + ' Deleted successfully')
    

    }

    else console.log('Note Not Found')
        

   
    

}

const viewNotes = ()=>{
    const allNotes = loadNotes()
        console.log('  ' +'TITLE'+' '+'BODY')
        allNotes.forEach((el,index) => {
            console.log(index + ' ' + el.title + ' '+el.body)
        });

}

const readNote = (title)=>{
    var oldNotes = loadNotes()
        const readedNote = oldNotes.find((note)=>{
           return note.title === title
        })
        if (!readedNote)
            console.log('The title Does not exist')
      
        else {
            console.log('The Title : ' + readedNote.title )
            console.log('The Body  : ' + readedNote.body )
        }

}
module.exports = {
    addNote,
    deleteNote,
    viewNotes,
    readNote
}