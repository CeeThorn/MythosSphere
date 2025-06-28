import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios"

const Search = () => {
    const [query, setQuery] = useState(""); //handles the search bar input
    const[results, setResults] = useState([]);  // handles the search results
    const[error, setError] = useState(null); //handles any ApI errpors

    const handleSearch = async (e) => { // handles the form of submmissopn when the user clicks the search button
        e.preventDeafault(); // prevents the default form submission behavior

        if(!query.trim()) return;
        setLoading(true);
        setError(null);

        try{
            let response;

            if (category === "anime") {
                
                ")
            const response = await axios.get(`http://localhost:5000/search/anime/${encodeURIComponent(query)}`);//make adesicion
            setResults(response.data); // sets the results to the data returned from the API
        }
        
    }



}



