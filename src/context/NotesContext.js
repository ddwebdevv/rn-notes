import createDataContext from './createDataContext';

const noteReducer = (state, action) => {
    switch (action.type) {
        case 'delete_note':
            return state.filter((notePost) => notePost.id !== action.payload);
        case 'add_note':
            return [
                ...state,
                {
                     title: action.payload.title,
                     content: action.payload.content,
                     id: Math.floor(Math.random()*999999)
                }
            ];
        case 'edit_note':
            return state.map((note) => {
                return note.id === action.payload.id 
                    ? action.payload
                    : note;
            });
        default:
            return state;
    }
};

const addNotePost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ 
            type: 'add_note', 
            payload: { title, content } 
        });
        if(callback){
            callback();
        }
    };
};

const editNotePost = dispatch => {
    return (title, content, id, callback) => {
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
    return (id) => {
        dispatch({ type: 'delete_note', payload: id });
    };
};

export const { Context, Provider } = createDataContext(
    noteReducer,
    { addNotePost, deleteNotePost, editNotePost },
    [{ title: 'test', content: 'test content', id: 1}]
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