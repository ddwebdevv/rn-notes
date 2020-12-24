import createDataContext from './createDataContext';

const noteReducer = (state, action) => {
    switch (action.type) {
        case 'delete_note':
            return state.filter((notePost) => notePost.id !== action.payload);
        case 'add_note':
            return [
                ...state,
                {
                     title: `Note #${state.length + 1}`,
                     id: Math.floor(Math.random()*99999)
                }
            ];
        default:
            return state;
    }
};

const addNotePost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_note' });
    };
};

const deleteNotePost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_note', payload: id });
    };
};

export const { Context, Provider } = createDataContext(
    noteReducer,
    { addNotePost, deleteNotePost },
    []
);


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