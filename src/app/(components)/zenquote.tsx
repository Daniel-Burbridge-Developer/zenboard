"use client"

import { useEffect, useState } from "react";
import { getRandomQuote } from "~/server/db/queries";

const ZenQuote = () => {
    const [quote, setQuote] = useState<string | null>(null);
    
    useEffect(() => {
        getRandomQuote().then((quote) => setQuote(quote));
    }, []);

    if (!quote) {
        return <p>Loading...</p>;   
    }
    
    return (
        <div>
        <h2>Random Quote</h2>
        <blockquote>{quote}</blockquote>
        </div>
    );
}

export default ZenQuote;