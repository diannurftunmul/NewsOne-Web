import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotesBoard = () => {
    const [note, setNote] = useState('');
    const [savedNotes, setSavedNotes] = useState([]);

    const handleSaveNote = () => {
        if (note) {
            setSavedNotes([...savedNotes, note]);
            setNote('');
        }
    };

    const handleDeleteNote = (index) => {
        const newNotes = savedNotes.filter((_, i) => i !== index);
        setSavedNotes(newNotes);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mt-5 mb-5 fst-italic">Notes Board</h2>

            <div className="card shadow-sm rounded-3 mb-4">
                <div className="card-body">
                    <textarea
                        className="form-control rounded-3 shadow-sm"
                        rows="4"
                        placeholder="Write your notes here..."
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        style={{
                            border: '2px solid #5cb874',
                            resize: 'none',
                            backgroundColor: '#f9f9f9',
                            fontSize: '1.1rem',
                            padding: '10px',
                            color: '#333'
                        }}
                    />
                    <button
                        className="btn btn-success w-100 mt-3 rounded-3 shadow-sm"
                        onClick={handleSaveNote}
                        style={{ backgroundColor: '#5cb874', border: 'none' }}
                    >
                        Save Note
                    </button>
                </div>
            </div>

            {/* Saved Notes */}
            {savedNotes.length > 0 && (
                <div>
                    <div className="list-group">
                        {savedNotes.map((savedNote, index) => (
                            <div key={index} className="list-group-item d-flex justify-content-between align-items-center shadow-sm mb-2 rounded-3" style={{ backgroundColor: '#f9f9f9' }}>
                                <span style={{ fontSize: '1.1rem', color: '#333' }}>{savedNote}</span>
                                <button
                                    className="btn btn-danger btn-sm rounded-3"
                                    onClick={() => handleDeleteNote(index)}
                                    style={{
                                        backgroundColor: '#d9534f',
                                        border: 'none',
                                        color: 'white'
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotesBoard;
