/* render our data in a table, format so that first/last name and address is displayed on one line */
import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface FormData {
  [key: string]: string;
}

interface FormSubmitPageProps {
  formData: FormData;
}

const FormSubmitPage: React.FC<FormSubmitPageProps> = ({ formData }) => {
  const firstName = formData['firstName'] || '';
  const lastName = formData['lastName'] || '';
  const address = formData['address1'] || '';
  const city = formData['city'] || '';
  const state = formData['state'] || '';
  const zip = formData['zip'] || '';

  const fullAddress = `${address}, ${city}, ${state}, ${zip}`;

  return (
    <Container>
      <Typography style={{ padding: '20px', textAlign: 'center' }}variant="h4">Thank you for your submission!</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>{`${firstName} ${lastName}`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{fullAddress}</TableCell>
            </TableRow>
            {Object.keys(formData).map((key) => {
              if (
                key !== 'firstName' &&
                key !== 'lastName' &&
                key !== 'address1' &&
                key !== 'city' &&
                key !== 'state' &&
                key !== 'zip'
              ) {
                return (
                  <TableRow key={key}>
                    <TableCell>{formData[key] || ''}</TableCell>
                  </TableRow>
                );
              }
              return null;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default FormSubmitPage;