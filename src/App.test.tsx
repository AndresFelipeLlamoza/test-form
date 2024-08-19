import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

xtest('renders learn react link', () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(queryByTestId('handle-Change-text')).toBeInTheDocument();
});
