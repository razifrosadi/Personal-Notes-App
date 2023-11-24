import React from 'react';
import { showFormattedDate } from '../utils/index';

function NoteItemContent({ title, body, createdAt }) {
    const formattedDate = showFormattedDate(createdAt);

    return (
        <div className="note-item__content">
            <h3 className="note-item__title">{title}</h3>
            <h4 className="note-item__date">{formattedDate}</h4>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

export default NoteItemContent;
