/* form structure
placeholder for labels
type to distinguish between text and select fields
required true for all fields
validation for special fields with regex pattern for email and phone number
options array for select fields (job title)  */

const formStructure = [
  [
    {
      id: 'firstName',
      placeholder: 'First name',
      required: true,
      type: 'text',
      testId: 'firstNameField',
    },
    {
      id: 'lastName',
      placeholder: 'Last name',
      required: true,
      type: 'text',
      testId: 'lastNameField',
    },
  ],
  {
    id: 'Email',
    placeholder: 'Email address',
    required: true,
    type: 'text',
    validation: {
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      errorMessage: 'Invalid email address',
    },
    testId: 'emailField',
  },
  {
    id: 'address1',
    placeholder: 'Address 1',
    required: true,
    type: 'text',
    testId: 'address1Field',
  },
  [
    {
      id: 'city',
      placeholder: 'City',
      type: 'text',
      required: true,
      testId: 'cityField', 
    },
    {
      id: 'state',
      placeholder: 'State',
      type: 'text',
      required: true,
      testId: 'stateField',
    },
    {
      id: 'zip',
      placeholder: 'Zip Code',
      type: 'text',
      required: true,
      testId: 'zipField',
    },
  ],
  {
    id: 'phone',
    required: true,
    type: 'text',
    placeholder: 'Phone number',
    validation: {
      pattern: /^[0-9]{10}$/,
      errorMessage: 'Invalid phone number (10 digits required)',
    },
    testId: 'phoneField', 
  },
  {
    id: 'jobTitle',
    placeholder: 'Job Title',
    options: [
      'Engineer - lead',
      'Engineer - mid level',
      'Engineer - junior',
      'Engineer - front end focused',
      'Engineer - backend focused',
      'Engineer - full stack',
    ],
    required: true,
    type: 'select',
    testId: 'jobTitleField',
  },
  {
    id: 'reason',
    placeholder: 'Describe why you are a good fit for the job you are applying for.',
    required: true,
    type: 'textarea',
    testId: 'reasonField', 
  },
];

export default formStructure;
