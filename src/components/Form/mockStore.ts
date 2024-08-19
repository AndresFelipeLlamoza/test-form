/*mock reducer for testing purposes */
import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../../reducers/formReducer';

const mockStore = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default mockStore;
