import createDataContext from './createDataContext';

const noteReducer = (state, action) => {
    switch (action.type) {
        case 'add_note':
            return [...state, { title: `Note #${state.length + 1}`}];
        default:
            return state;
    }
};

const addNotePost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_note' });
    };
};

export const { Context, Provider } = createDataContext(
    noteReducer,
    { addNotePost },
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