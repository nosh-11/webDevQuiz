import React, { useState, useEffect } from 'react';

const FaqPage = () => {
    const [faqList, setFaqList] = useState([]);

    useEffect(() => {
        // Fetch FAQ data from API
        fetch('https://api.example.com/faq')
            .then(response => response.json())
            .then(data => {
                setFaqList(data.data); // Update state with fetched FAQ data
            })
            .catch(error => {
                console.error('Error fetching FAQ data:', error);
            });
    }, []);

    return (
        <div>
            <h1>FAQ</h1>
            <ul>
                {faqList.map(faqItem => (
                    <li key={faqItem.id}>
                        <h3>{faqItem.question}</h3>
                        <p>{faqItem.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FaqPage;
