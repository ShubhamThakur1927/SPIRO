import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StudentStores } from '../Stores/StudentStores';
import Sidebar from '../components/Sidebar';

function LecturesView() {
    const { id } = useParams();
    const { fetchvideo } = StudentStores();
    const [lecture, setLecture] = useState('');
    const [lectureTitle, setLectureTitle] = useState('');

    const fetchLectures = async () => {
        try {
            const response = await fetchvideo(id);
            setLecture(response?.url);
            setLectureTitle(response?.lectureTitle); // Set the lecture title
        } catch (error) {
            console.error('Error fetching video:', error);
        }
    };

    useEffect(() => {
        fetchLectures();
    }, [id]);

    return (
        <div className="flex h-screen">
            {/* Sidebar with a fixed width */}
            <div className="w-64 bg-gray-800 text-white">
                <Sidebar
                    classes={[]}
                    handleLogout={() => {}}
                    onContentChange={() => {}}
                />
            </div>
            {/* Main content area */}
            <div className="flex-1 p-4 bg-main flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">{lectureTitle}</h1> {/* Display the lecture title */}
                {lecture ? (
                    <video
                        controls
                        autoPlay
                        className="w-[960px] h-[540px] max-w-full rounded-xl shadow-lg"
                    >
                        <source src={lecture} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <p>Loading video...</p>
                )}
            </div>
        </div>
    );
}

export default LecturesView;
