/* Form with onSubmit method */ 
import React, { useState } from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import Field from '../Field/Field';
import formStructure from './FormStructure';
import { FieldData } from '../Field/FieldData';


interface FormProps {
  onFormSubmit: (formData: FieldData) => void;
}

const Form: React.FC<FormProps> = ( { onFormSubmit}) => {
  const [formData, setFormData] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id: string, value: any) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit(formData);
  };
  return (
    
<Container style={{ paddingTop: '20px'  }}>
<Typography style={{ paddingBottom: '20px', textAlign: 'center' }} variant="h4" gutterBottom>Mock Job Application Form</Typography> {/* Title */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {formStructure.map((fieldData: any, index: number) => (
            <Grid item xs={12} key={index}>
              {Array.isArray(fieldData) ? (
                <Grid container spacing={2}>
                  {fieldData.map((subFieldData: any) => (
                    <Grid item xs={12 / fieldData.length} key={subFieldData.id}>
                      <Field
                        fieldData={subFieldData}
                        value={formData[subFieldData.id] || ''}
                        onChange={handleChange}
                        data-testid='field-id'
                      />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Field
                  fieldData={fieldData}
                  value={formData[fieldData.id] || ''}
                  onChange={handleChange}
                  data-testid='field-id'
                />
              )}
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" data-testid='handle-submit'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Form;
