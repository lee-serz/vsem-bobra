import React, { useState, useEffect } from "react";
import axios from "../../axios/axios";

const CoursesHeader = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    useEffect(() => {
        async function fetchData() {
        try {
            const response = await axios.get('api/courses');
            const { title, description } = response.data;
            setTitle(title);
            setDescription(description);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        }
    
        fetchData();
    }, []);
    
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default CoursesHeader;