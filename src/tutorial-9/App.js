import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import useDebounce from "./components/use-debounce";
import ResultSearchForm from "./components/ResultSearchForm";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState();
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  async function searchUser(search) {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${search}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);

      searchUser(debouncedSearchTerm).then((results) => {
        setIsSearching(false);
        setResults(results);
        //console.log(results);
      });
    } else {
      setResults(null);
    }
  }, [debouncedSearchTerm]);

  function clearInput() {
    setResults(null);
    setSearchTerm("");
  }
  //console.log(results, searchTerm);
  return (
    <div id="app">
      <div className="app-container">
        <SearchForm
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={clearInput}
        />
        {isSearching && <div>Searching ...</div>}
        {!results && !isSearching && searchTerm && <div> Юзер не найден!</div>}
        {results && <ResultSearchForm results={results} />}
      </div>
    </div>
  );
}
