import {
  Store,
  createStore,
  applyMiddleware,
  ActionCreator,
  Action
} from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { ApplicationState, rootReducer } from './root-reducer';

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export default function configureStore(
  initialState: ApplicationState
): Store<ApplicationState> {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
}
