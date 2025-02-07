import React, { useEffect, useState } from 'react';
import { StudentStores } from '../../Stores/StudentStores';
import ModuleCard from '../../components/ModuleCard';
import { useNavigate, useParams } from 'react-router-dom';

function ClassesPage({ id }) {
    const { getContent, getClasses } = StudentStores();
    const [lectures, setLectures] = useState([]); // Initialize as an empty array
    const [alreadyWatched, setAlreadyWatched] = useState([]); // Initialize as an empty array
    const navi = useNavigate();
    const fetchClasses = async () => {
        try {
            const classes = await getClasses();
            if (classes?.watchedVideos) {
                setAlreadyWatched(classes.watchedVideos);
            }

            const content = await getContent(id);
            if (content?.success && Array.isArray(content.lectureTitles)) {
                const lectures = content.lectureTitles.map((title, index) => ({
                    lectureTitle: title,
                    file: content.fileNames[index],
                    _id: index, // Use index as a temporary unique identifier
                    watched: alreadyWatched.includes(content.fileNames[index]), // Check if the lecture is watched
                    author: content.teacher || ' ', // Add a placeholder author
                }));
                setLectures(lectures);
            } else {
                setLectures([]); // Fallback to an empty array if data is invalid
            }
        } catch (error) {
            console.error('Error fetching lectures:', error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchClasses();
        }
    }, [id, getContent]);

    return (
        <div className='w-full h-screen bg-main p-4 '>
            <ModuleCard
                title="Lectures"
                ModuleTitle="Module-1"
                items={lectures.map((cls) => ({
                    label: cls.lectureTitle || 'Untitled Lecture', // Ensure correct property name
                    value: cls.file || '', // Use file as the value
                    watched: cls.watched, // Add a watched property
                    author: cls.teacher || ' ', // Add a placeholder author
                    description: cls.description || 'No description', // Add a description property
                }))}
                author={lectures[0]?.author || 'Unknown'} // Pass the author's name to ModuleCard
                onItemSelect={(value) => navi(`/lectures/${value}`)} // Optional handler for selection
            />
        </div>
    );
}

export default ClassesPage;
