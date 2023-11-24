import React, { Fragment } from 'react';
import { getInitialData } from '../utils/index';
import NotesList from './NotesList';
import NoteHeader from './NoteHeader';
import NoteInput from './NoteInput';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            queryFilter: "",
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onActiveHandler = this.onActiveHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

onSearchHandler(valueInput){
    this.setState({
        queryFilter: valueInput,
    });
}

onDeleteHandler(id){
    const notes = this.state.notes.filter(note => note.id !== id );
    this.setState({notes});
}

onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = !note.archived;
      }
      return note;
    });
    this.setState({ notes });
  }

  onActiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = note.archived;
      }
      return note;
    });
    this.setState({ notes });
  }


onAddNoteHandler({ title, body }){
    this.setState((prevState) => {
        return{
            notes:[
                ...prevState.notes,
                {
                    id: +new Date(),
                    title,
                    body,
                    createdAt: new Date().toISOString(),
                    archived: false,
                }
            ]
        }
    })
}



render(){
    const filteredNotes = this.state.notes.filter((note) => 
    note.title.toLowerCase().includes(this.state.queryFilter.toLowerCase())
    )
    return(
        <Fragment>
            <NoteHeader notes={filteredNotes} onSearch={this.onSearchHandler} />
            <div className="note-app__body">
                <NoteInput addNote={this.onAddNoteHandler}/>
                <NotesList
                    notes={this.state.notes}
                    onDelete={this.onDeleteHandler}
                    onArchived={this.onArchiveHandler}
                    onActive={this.onActiveHandler}/>
            </div>
        </Fragment>
    )
}
}

export default NoteApp;