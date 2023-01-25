export const Options = ({ countryList }) => {
  return (
    <>
      {countryList.map((country) => (
        <option key={`${country.id}`} value={`${country.id}`}>
          {country.name}
        </option>
      ))}
    </>
  );
};
