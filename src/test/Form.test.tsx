import { render, fireEvent, screen } from '@testing-library/react';
import Form from '../components/Form/Form';
import Field from '../components/Field/Field';
import { FieldData } from '../components/Field/FieldData';
import React from 'react';

// Define a mock onFormSubmit function
const mockOnFormSubmit = jest.fn();
const mockOnFieldChange = jest.fn();
const fieldData: FieldData = {
  id: '0',
  placeholder: '',
  required: true,
  type: '',
  options: [],
  validation: undefined,
  testId: ''
}

test('Form renders submit correctly', () => {
  const { getByTestId } = render(<Form onFormSubmit={mockOnFormSubmit} />);
  const handleSubmit = getByTestId('handle-submit');
  
  fireEvent.click(handleSubmit);
  expect(getByTestId('handle-submit')).toBeInTheDocument();
});

test('Form renders onChange hand correctly', () => {
  render(<Field onChange={mockOnFieldChange} fieldData={fieldData} value={'test'} ></Field>);

  const handleChangeText = screen.getByPlaceholderText('Add text');
  fireEvent.change(handleChangeText, { id: '0', value: 'test' })
  expect(screen.getByTestId('handle-Change-text')).toBeInTheDocument();

});