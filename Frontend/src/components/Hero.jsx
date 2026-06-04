import SearchBox from "./SearchBox";

function Hero({ search, setSearch }) {
  return (
    <div className="hero">
      <h1>Find Your Perfect Stay</h1>
      <p>Search hotels by location and price easily</p>

      <SearchBox search={search} setSearch={setSearch} />
    </div>
  );
}

export default Hero;