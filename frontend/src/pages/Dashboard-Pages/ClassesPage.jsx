import React, { useEffect, useState } from 'react';
import { StudentStores } from '../../Stores/StudentStores';
import ModuleCard from '../../components/ModuleCard';
import { useNavigate } from 'react-router-dom';

function ClassesPage({ id }) {
    const { getContent } = StudentStores();
    const [lectures, setLectures] = useState([]); // Initialize as an empty array
    const navi = useNavigate();
    const fetchClasses = async () => {
        try {
            const content = await getContent(id);
            if (content?.success && Array.isArray(content.lectureTitles)) {
                const lectures = content.lectureTitles.map((title, index) => ({
                    lectureTitle: title,
                    file: content.fileNames[index],
                    _id: index, // Use index as a temporary unique identifier
                }));
                setLectures(lectures);
            } else {
                setLectures([]); // Fallback to an empty array if data is invalid
            }
            //console.log('Lectures:', content.lectureTitles);
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
        <div className='w-auto h-screen bg-main p-4 '>
            <ModuleCard
                title="Lectures"
                items={lectures.map((cls) => ({
                    label: cls.lectureTitle || 'Untitled Lecture', // Ensure correct property name
                    value: cls.file || '', // Use file as the value
                }))}
                onItemSelect={(value) => navi(`/lectures/${value}`)} // Optional handler for selection
            />
        </div>
    );
}

export default ClassesPage;
