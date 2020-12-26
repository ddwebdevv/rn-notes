import * as ActionTypes from './ActionTypes';

export const addNotePost = (title, content, callback) => (dispatch) => {
        dispatch({ 
            type: ActionTypes.ADD_NOTE, 
            payload: { title, content } 
        });
        if(callback){
            callback();
        }
    
};

export const deleteNotePost = (id) => (dispatch) => {
        dispatch({ 
            type: ActionTypes.DELETE_NOTE, 
            payload: id 
        });
};

export const editNotePost = (title, content, id, callback) => dispatch => {
    dispatch({
        type: ActionTypes.EDIT_NOTE,
        payload: { id, title, content }
    });
    if(callback){
        callback();
    }
};



