import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import './EditPost.css';

const EditPost = ({ data }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [crewmate, setCrewmate] = useState({ id: null, name: "", speed: "", color: "" });

    // Fetch the crewmate details when the component mounts
    useEffect(() => {
        const fetchCrewmate = () => {
            const existingCrewmate = data.find(crewmate => crewmate.id === id);
            if (existingCrewmate) {
                setCrewmate(existingCrewmate);
            }
        };
        fetchCrewmate();
    }, [id, data]);

    // Handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCrewmate((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Update the crewmate in the database
    const updateCrewmate = async (event) => {
        event.preventDefault();

        // Perform the update operation using Supabase
        await supabase
            .from('crewmates')
            .update({ name: crewmate.name, speed: crewmate.speed, color: crewmate.color })
            .eq('id', id);

        // Redirect to home page
        navigate('/');
    };

    // Delete the crewmate from the database
    const deleteCrewmate = async (event) => {
        event.preventDefault();

        // Perform the delete operation using Supabase
        await supabase
            .from('crewmates')
            .delete()
            .eq('id', id);

        // Redirect to home page
        navigate('/');
    };

    return (
        <div>
            <form onSubmit={updateCrewmate}>
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" id="name" name="name" value={crewmate.name} onChange={handleChange} />
                <br /><br />

                <label htmlFor="speed">Speed</label>
                <br />
                <input type="number" id="speed" name="speed" value={crewmate.speed} onChange={handleChange} />
                <br /><br />

                <label htmlFor="color">Color</label>
                <br />
                <input type="text" id="color" name="color" value={crewmate.color} onChange={handleChange} />
                <br /><br />

                <input type="submit" value="Submit" />
                <button className="deleteButton" onClick={deleteCrewmate}>Delete</button>
            </form>
        </div>
    );
};

export default EditPost;
