import { combineReducers } from 'redux';
import { chemicalsReducer } from './reducers/chemicalsReducer';

export const rootReducer = combineReducers({
	chemicals: chemicalsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;