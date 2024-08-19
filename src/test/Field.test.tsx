import { render, fireEvent, screen } from '@testing-library/react';
import Field from '../components/Field/Field';
import { FieldData } from '../components/Field/FieldData';
import React from 'react';
// Define a mock onFormSubmit function
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

test('Field renders submit correctly', () => {
  render(<Field onChange={mockOnFieldChange} fieldData={fieldData} value={'test'} />);
  
  const handleChangeText = screen.getByPlaceholderText('Add text');
  fireEvent.change(handleChangeText, { target: { value: "10999" } })
  expect(screen.getByTestId('handle-Change-text')).toBeInTheDocument();
});
