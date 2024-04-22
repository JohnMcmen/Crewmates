import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';

const ReadPosts = (props) => {
    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        // Define the fetchCrewmates function
        const fetchCrewmates = async () => {
            // Fetch all entries from the crewmates table
            const { data, error } = await supabase
                .from('crewmates')
                .select();

            if (error) {
                console.error('Error fetching crewmates:', error.message);
                return;
            }

            // Update the state of crewmates
            setCrewmates(data);
        };

        // Call fetchCrewmates to fetch the data from the database
        fetchCrewmates();
    }, []);

    return (
        <div className="ReadPosts">
            {crewmates && crewmates.length > 0 ? (
                crewmates.map((crewmate) => (
                    <Card
                        key={crewmate.id}
                        id={crewmate.id}
                        name={crewmate.name}
                        speed={crewmate.speed}
                        color={crewmate.color}
                    />
                ))
            ) : (
                <h2>No Crewmates Yet 😞</h2>
            )}
        </div>
    );
};

export default ReadPosts;
