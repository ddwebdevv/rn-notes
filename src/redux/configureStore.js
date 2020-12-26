import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { notes } from './reducer';
import thunk from 'redux-thunk';

const config = {
    key: 'root',
    storage,
    debug: true
};

export const ConfigureStore = () => {
    const store = createStore(
        persistCombineReducers(config, {
            notes
        }),
        applyMiddleware(thunk)
    );

    const persistor = persistStore(store);

    return { persistor, store };
};