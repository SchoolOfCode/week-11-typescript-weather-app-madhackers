// options needs to be passed in params

export default function Input({ city, setCity }) {
  return (
    <select value={city} onChange={(e) => setCity(e.target.value)}>
      <option value="Paris">Paris</option>{" "}
      <option value="London">London</option>{" "}
      <option value="New York">New York</option>{" "}
    </select>
  );
}
