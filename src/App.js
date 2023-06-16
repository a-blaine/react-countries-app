import "./App.css";

function App() {
  //API documentation available at https://restcountries.com/
  //API region url https://restcountries.com/v3.1/region/europe
  //API search by name url https://restcountries.com/v3.1/name/eesti
  return (
    <div className="App">
      <div className="navbar">
        <h1>Where in the world?</h1>
      </div>
      <form>
        <input type="search" placeholder="Search for a country..." />
        <select>
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
      <Country />
    </div>
  );
}

export default App;
