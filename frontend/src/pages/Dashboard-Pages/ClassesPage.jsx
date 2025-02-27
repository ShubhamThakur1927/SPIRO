import React, { useEffect, useState } from 'react';
import { StudentStores } from '../../Stores/StudentStores';
import ModuleCard from '../../components/ModuleCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthstore } from '../../Stores/authstores';
import { useTeacherStore } from '../../Stores/teacherStores';

function ClassesPage({ id }) {
    const { getContent, getClasses} = StudentStores();
    const {checkAuth ,student} = useAuthstore();
    const { Upload } = useTeacherStore();
    const [lectures, setLectures] = useState([]); // Initialize as an empty array
    const [alreadyWatched, setAlreadyWatched] = useState([]); // Initialize as an empty array
    const [isTeacher, setIsTeacher] = useState(false);
    const [newLectureTitle, setNewLectureTitle] = useState("");
    const [newLectureFile, setNewLectureFile] = useState(null);
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

    const checkauth = async () => {
        try {
            await checkAuth();
            setIsTeacher(student?.role === 'teacher');
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleAddLecture = async () => {
        const subjectname = "Java";
        if (newLectureTitle.trim() !== "" && newLectureFile) {
            try {
                const formData = new FormData();
                formData.append('lectureTitle', newLectureTitle);
                formData.append('file', newLectureFile);
                formData.append('subjectname', subjectname);
                 // Replace with the actual subject name
                await Upload(formData); // Upload the lecture file with subject name
                const newLecture = {
                    lectureTitle: newLectureTitle,
                    file: newLectureFile.name, // Use the file name
                    _id: lectures.length, // Use length as a temporary unique identifier
                    watched: false,
                    author: student?.name || 'Unknown', // Use student's name as author
                };
                setLectures([...lectures, newLecture]);
                setNewLectureTitle("");
                setNewLectureFile(null);
            } catch (error) {
                console.error('Error uploading lecture:', error);
            }
        }
    };

    useEffect(() => {
        checkauth();
        if (id) {
            fetchClasses();
        }
    }, [id, getContent,checkAuth]);

    return (
        <div className='w-full h-auto bg-main p-4 '>
            {isTeacher && (
                <div className="mb-4">
                    <h2 className="text-h3 font-semibold mb-2">Add New Lecture</h2>
                    <input
                        type="text"
                        value={newLectureTitle}
                        onChange={(e) => setNewLectureTitle(e.target.value)}
                        placeholder="Lecture Title"
                        className="border p-2 rounded w-full mb-2"
                    />
                    <input
                        type="file"
                        onChange={(e) => setNewLectureFile(e.target.files[0])}
                        className="border p-2 rounded w-full mb-2"
                    />
                    <button onClick={handleAddLecture} className="p-2 bg-primary text-white rounded">Add Lecture</button>
                </div>
            )}
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
