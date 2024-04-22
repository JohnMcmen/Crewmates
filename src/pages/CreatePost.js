import React, { useState } from 'react';
import './CreatePost.css';
import { supabase } from '../client';

const CreatePost = () => {
    // Initialize state for crewmate data
    const [crewmate, setCrewmate] = useState({ name: '', speed: '', color: '' });

    // Handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCrewmate((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const createCrewmate = async (event) => {
        event.preventDefault();

        try {
            // Insert data into the Crewmates table using Supabase
            const { data, error } = await supabase.from('crewmates').insert([crewmate]);

            if (error) {
                throw error;
            }

            console.log('Crewmate created successfully:', data);

            // Clear form fields after successful submission
            setCrewmate({ name: '', speed: '', color: '' });

            // Redirect to home page or display success message
            // (depending on your application flow)
        } catch (error) {
            console.error('Error creating crewmate:', error.message);
            // Handle error (e.g., display error message to the user)
        }
    };

    return (
        <div>
            <form onSubmit={createCrewmate}>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={crewmate.name} onChange={handleChange} /> <br />
                <br />

                <label htmlFor="speed">Speed</label> <br />
                <input type="number" id="speed" name="speed" value={crewmate.speed} onChange={handleChange} /> <br />
                <br />

                <label htmlFor="color">Color</label> <br />
                <input type="text" id="color" name="color" value={crewmate.color} onChange={handleChange} /> <br />
                <br />

                {/* Submit button */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CreatePost;
