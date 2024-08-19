/* Interface for type checking */
export interface FieldData {
    id: string;
    placeholder: string;
    required: boolean;
    type: string;
    options: string[];
    validation: any;
    testId: string;
  }
