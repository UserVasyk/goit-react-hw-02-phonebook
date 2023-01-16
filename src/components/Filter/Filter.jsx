export const Filter = ({ changeFilter, filter }) => (
  <label>
    Find Contacts by name
    <input type="text" value={filter} onChange={changeFilter} />
  </label>
);
