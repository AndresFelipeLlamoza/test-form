/* Needed this component to handle the routing as a child of App.tsx */
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Form from './Form/Form';
import FormSubmitPage from './FormSubmitPage';
import { FieldData } from './Field/FieldData';

const RoutingComponent = () => {
    const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleFormSubmit = (data: FieldData) => {
    setFormData(data);
    navigate('/thank-you');
  };
    return (
      <Routes>
        <Route path="/" element={<Form onFormSubmit={handleFormSubmit} />}/>
        <Route path="/thank-you" element={<FormSubmitPage formData={formData} />}/>
      </Routes>
    )
}

export default RoutingComponent;