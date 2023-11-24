import React from 'react';

function ActionButton({ id, onDelete, onArchived, archived }){
    return (
    <div>
        <button className="note-item__delete-button" onClick={() => onDelete(id)}>X</button>
        <button className="note-item__archive-button" onClick={() => onArchived(id)}>
            {archived ? 'Kembalikan dari Arsip' : 'Arsipkan'}
        </button>
    </div>
    );
}

export default ActionButton;