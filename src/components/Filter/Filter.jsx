import { FindingContact, Label } from './Filter.styled';
import { Formik } from 'formik';
export const Filter = ({ changeFilter, filter }) => (
  <Formik>
    <Label>
      Find Contacts by name
      <FindingContact type="text" value={filter} onChange={changeFilter} />
    </Label>
  </Formik>
);
