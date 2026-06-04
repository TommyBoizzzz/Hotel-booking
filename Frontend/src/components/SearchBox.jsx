function SearchBox({ search, setSearch }) {
  return (
    <div className="search-box">
      <input
        placeholder="Search location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn">Search</button>
    </div>
  );
}

export default SearchBox;