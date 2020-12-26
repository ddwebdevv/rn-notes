import * as ActionTypes from './ActionTypes';

export const notes = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.DELETE_NOTE:
            return state.filter((notePost) => notePost.id !== action.payload);
        case ActionTypes.ADD_NOTE:
            return [
                ...state,
                {
                     title: action.payload.title,
                     content: action.payload.content,
                     id: Math.floor(Math.random()*999999)
                }
            ];
        case ActionTypes.EDIT_NOTE:
            console.log('edit reducer', id);
            return state.map((note) => {
                return note.id === action.payload.id 
                    ? action.payload
                    : note;
            });
        default:
            return state;
    }
};