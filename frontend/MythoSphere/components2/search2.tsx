import React, { useState } from "react";
import { fetchResults } from "../API/Flask_API"; // Your async fetch function

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(""); // default category
  const [results, setResults] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false)
  const [loading, setLoading] = useState(false);
  const searchRef = useRef(null);




return (
    <main>
        <div className="w">
            {fetchResults.map(result => (
                <Card key={result.id}>

                    </Card>

            )
            ))}
        </div>
    </main>
)

 }