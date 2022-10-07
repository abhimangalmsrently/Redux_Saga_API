import {createStore, combineReducers, applyMiddleware} from 'redux';
import countReducer from '../reducers/reducers';
import saga from 'redux-saga';
import sagaWatchers from '../saga/saga';

const rootReducer = combineReducers({countReducer});

const sagaMiddleware = saga();

const middleWare = applyMiddleware(sagaMiddleware);

//createStore(reducer, [preloadedState], [enhancer])
const configureStore = createStore(rootReducer, {},  middleWare); 

export default configureStore;


sagaMiddleware.run(sagaWatchers);