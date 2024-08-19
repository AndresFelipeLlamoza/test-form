/*Render our fields with validation and handle change method for form */
import React, { useState } from 'react';
import { TextField, TextareaAutosize, Select, MenuItem } from '@mui/material';
import './Field.css';
import { FieldData } from './FieldData';

interface FieldProps {
  fieldData: FieldData;
  value: any;
  onChange: (id: string, value: any) => void;
}

const Field: React.FC<FieldProps> = ({ fieldData, value, onChange }) => {
  const { id, type, placeholder, required, options, validation } = fieldData;
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: { target: { value: any } }) => {
    const newValue = e.target.value;
    onChange(id, newValue);

    // Validate input
    if (required && newValue.trim() === '') {
      setError('This field is required');
    } else if (validation && validation.pattern && !validation.pattern.test(newValue)) {
      setError(validation.errorMessage || 'Invalid input');
    } else {
      setError(null);
    }
  };

  return (
    <div className="field-container">
      {/* Provide a label for accessibility */}
      <label htmlFor={id}>
        {placeholder} 
        {required && <span aria-hidden="true" style={{ color: 'red' }}> *</span>} 
      </label>
      {type === 'textarea' ? (
        <TextareaAutosize
          id={id}
          required={required}
          value={value}
          onChange={handleChange}
          minRows={3}
          style={{ width: '100%' }}
          className="textarea-with-padding"
          aria-describedby={`${id}-error`} // Associate error message with textarea
          data-testid='handle-Change'
        />
      ) : type === 'select' ? (
        <Select
          id={id}
          required={required}
          value={value}
          onChange={handleChange}
          style={{ width: '100%' }}
          aria-describedby={`${id}-error`} // Associate error message with select
          data-testid='handle-Change-select'
          >
          <MenuItem value="">
            <em>Select an option</em>
          </MenuItem>
          {options.map((option: string) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <TextField
          id={id}
          required={required}
          type={type}
          value={value}
          onChange={handleChange}
          fullWidth
          style={{ width: '100%' }}
          aria-describedby={`${id}-error`} // Associate error message with input
          data-testid='handle-Change-text' // for test purposes only
          placeholder='Add text'
        />
        
      )}
      {error && (
        <span
          id={`${id}-error`}
          role="alert"
          aria-live="assertive" // Provide accessibility to to the error message
          aria-atomic="true"
          style={{ color: 'red' }}
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default Field;