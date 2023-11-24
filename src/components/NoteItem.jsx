import React from 'react';
import NoteItemContent from './NoteItemContent';
import ActionButton from './ActionButton';



function NoteItem({ title, body, createdAt, id, onDelete, onArchived, archived }) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} body={body} createdAt={createdAt} />
            <ActionButton id={id} onDelete={onDelete} onArchived={onArchived} archived={archived} />
        </div>
    )
}

export default NoteItem;
