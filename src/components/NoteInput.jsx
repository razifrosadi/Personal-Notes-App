import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            createdAt: new Date().toISOString(),
        }
        
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

onTitleChangeEventHandler(event){
    this.setState(() =>{
        return{
            title: event.target.value
        }
    });
}

onBodyChangeEventHandler(event){
    this.setState(() =>{
        return{
            body: event.target.value
        }
    });
}

onSubmitEventHandler(event){
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() =>{
        return{
            title: '',
            body: '',
        }
    })
}

render(){
    return(
        <form className="note-input" onSubmit={this.onSubmitEventHandler}>
            <input type="text"className='note-input__title' placeholder='title' value={this.state.title} onChange={this.onTitleChangeEventHandler} />
            <textarea type="text" className='note-input__body' placeholder='Tuliskan Catatanmu Disini...' value={this.state.body} onChange={this.onBodyChangeEventHandler} />
            <button type="submit" className='note-input button'>submit</button>
        </form>
    )
}
}

export  default NoteInput;