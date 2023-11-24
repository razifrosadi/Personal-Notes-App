import React, {Fragment} from 'react';
import NoteItem from './NoteItem';


function NotesList ({ notes, onDelete, onArchived }){
    return(
        <Fragment>
            <h2>Catatan Aktif</h2>
        <div className="notes-list">
            {notes.length > 0 ?
            notes.map((note)=>{ 
                return !note.archived ?
                <NoteItem 
                key={note.id} 
                id={note.id} 
                title={note.title} 
                createdAt={note.createdAt} 
                body={note.body} 
                onDelete={onDelete}
                onArchived={onArchived}
                archived={note.archived}/> : null;
            }) :
            <p> Catatan Tidak Tersedia</p>
        }
        </div>


            <h2>Arsip</h2>
        <div className="notes-list">
            {notes.length > 0 ?
            notes.map((note) => { 
                return note.archived ?
                <NoteItem 
                key={note.id} 
                id={note.id} 
                title={note.title} 
                createdAt={note.createdAt} 
                body={note.body} 
                onDelete={onDelete} 
                onArchived={onArchived}
                archived={note.archived} /> : null;
            }) :
            <p>Arsip Tidak Tersedia</p>
        }
        </div>
        </Fragment>
    );
}

export default NotesList;