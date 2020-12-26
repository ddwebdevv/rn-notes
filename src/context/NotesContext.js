import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const noteReducer = (state, action) => {
    switch (action.type) {
        case 'delete_note':
            return state.filter((notePost) => notePost.id !== action.payload);
        case 'edit_note':
            return state.map((note) => {
                return note.id === action.payload.id 
                    ? action.payload
                    : note;
            });
        case 'get_notes':
            return action.payload;
        default:
            return state;
    }
};

const getNotePosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/noteposts');
        dispatch({ type: 'get_notes', payload: response.data })
    }
}

const addNotePost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/noteposts', { title, content });

        if(callback){
            callback();
        }
    };
};

const editNotePost = dispatch => {
    return async (title, content, id, callback) => {
        await jsonServer.put(`/noteposts/${id}`, { title, content });

        dispatch({
            type: 'edit_note',
            payload: { id, title, content }
        });
        if(callback){
            callback();
        }
    };
};

const deleteNotePost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/noteposts/${id}`);

        dispatch({ type: 'delete_note', payload: id });
    };
};

export const { Context, Provider } = createDataContext(
    noteReducer,
    { addNotePost, deleteNotePost, editNotePost, getNotePosts },
    []
);

// for API requests
// const addNotePost = (dispatch) => {
//     return  async (title, content, callback) => {
//         try {
//             await axios.post('postsometing', title, content);
//             dispatch({ type: 'add_note', payload: { title, content } });
//             callback();
//         } catch (e) {

//         }
//     };
// };


//befor using createDataProvider
// export const NotesProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(noteReducer, []);

// //before using reducer
//     // const addNotePost = () => {
//     //     setNotePost([
//     //         ...notesPosts,
//     //          { title: `Note #${notesPosts.length + 1}`}
//     //     ]);
//     // }
    

//     return(
//         <NotesContext.Provider value={{ data: state, addNotePost }}>
//             {children}
//         </NotesContext.Provider>
//     );
// };