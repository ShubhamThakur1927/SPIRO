import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Optional: For prop type checking
import Profilecard from "../../Tests/Components/Profilecard";
import Profileinfo from "../../Tests/Components/Profileinfo";
import Linecardgraph from "../../Tests/Components/Linecardgraph";
import Blankcard from "../../Tests/Components/Blankcard";
import Notescard from "../../Tests/Components/Notescard";
import Socialmedia from "../../Tests/Components/Socialmedia";
import profilealt from "../../assets/profile-alt.svg";
import Cropper from "react-easy-crop";
import getCroppedImg from "../../utils/cropImage";
import { StudentStores } from "../../Stores/StudentStores";
import { useAuthstore } from "../../Stores/authstores";

const Profilepage = ({ profilePic: initialProfilePic, onEdit }) => {
    const { user } = useAuthstore();
    const [isCropModalOpen, setIsCropModalOpen] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [profilePic, setProfilePic] = useState(initialProfilePic || profilealt);
    const { updateProfilePic, getProfile, updateProfile, getClasses , classes } = StudentStores();
    // const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                await getClasses();
                await getProfile(); // Fetch updated profile data
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        fetchProfileData();
    }, [getProfile]);

    const userDetails = {
        name: user?.FullName,
        email: user?.email,
        phone: user?.phone,
        branch: user?.Branch,
        yearAndDivision: user?.Class,
        gender: user?.Gender,
    };

    const handleEditDetails = async (updatedDetails) => {
        try {
            await updateProfile(updatedDetails);
            window.location.reload(); // Reload the page to reflect changes
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result);
                setIsCropModalOpen(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    const handleCropSave = async () => {
        try {
            const croppedImageUrl = await getCroppedImg(imageSrc, croppedAreaPixels);
            const response = await fetch(croppedImageUrl);
            const blob = await response.blob();
            const file = new File([blob], "profilePic.jpg", { type: "image/jpeg" });

            window.location.reload(); // Reload the page to reflect changes
            setProfilePic(croppedImageUrl); // Update state with cropped image URL
            setIsCropModalOpen(false);

            // Send the cropped image file to the backend
            const formData = new FormData();
            formData.append("profilePic", file);
            await updateProfilePic(formData);
        } catch (error) {
            console.error(error);
        }
    };

    const workHistoryCards = Array(1).fill(<Blankcard key="work1" text="My work." />);
    const workHityp = Array(1).fill(<Blankcard key="work2" text="Your Work." />);

    return (
        <div className="bg-transparent min-h-screen flex flex-col space-y-5">
            <div className="relative left-2 px-8 mt-2">
                {/* Main Content */}
                <div className="px-5 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 gap-2 xl:gap-24 ">
                    {/* Left Column */}
                    <div className="space-y-4 xl:place-items-center place-items-stretch md:space-y-6">
                        <Profilecard
                            name={user?.FullName}
                            image={profilePic} // Use updated profilePic state
                            onUpdateProfile={() => document.getElementById("fileInput").click()}
                        />
                        <input
                            type="file"
                            id="fileInput"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                        />
                        <div className="space-y-4 bg-white p-4 rounded-xl shadow-xl w-[280px]">
                            <Socialmedia
                                icon="Github"
                                text="wcdangi"
                                url="https://github.com/wcdangi"
                            />
                            <Socialmedia
                                icon="Linkedin"
                                text="wcdangi"
                                url="https://linkedin.com/in/wcdangi"
                            />
                        </div>
                        <Notescard />
                    </div>

                    {/* Right Column */}
                    <div className="place-items-stretch xl:col-span-3 col-span-1 space-y-4">
                        <Profileinfo details={userDetails} onEdit={onEdit || handleEditDetails} />

                        {/* Activity Status Section */}
                        <section className="space-y-4 max-w-full">
                            <h1 className="text-xl md:text-2xl font-semibold">
                                Activity Status
                            </h1>

                            {/* Workspace Section */}
                            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
                                <h1 className="text-lg md:text-xl font-semibold mb-4">
                                    Workspace
                                </h1>
                                <div className="flex overflow-x-scroll scrollbar-hide space-x-4">
                                    {classes.map((item, index) => (
                                        <Linecardgraph
                                            key={index}
                                            subject={item.subjectname}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Work History Section */}
                            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
                                <h1 className="text-lg md:text-xl font-semibold mb-4">
                                    Work History
                                </h1>
                                <div className="flex overflow-x-scroll scrollbar-hide space-x-4">
                                    {workHistoryCards}
                                    {workHityp}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Crop Modal */}
            {isCropModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl mb-4">Crop Image</h2>
                        <div className="relative w-full h-64">
                            <Cropper
                                image={imageSrc}
                                crop={crop}
                                zoom={zoom}
                                aspect={1}
                                onCropChange={setCrop}
                                onZoomChange={setZoom}
                                onCropComplete={handleCropComplete}
                            />
                        </div>
                        <div className="flex justify-end space-x-4 mt-4">
                            <button
                                onClick={() => setIsCropModalOpen(false)}
                                className="bg-gray-500 text-white p-2 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleCropSave}
                                className="bg-blue-500 text-white p-2 rounded"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

Profilepage.propTypes = {
    details: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        branch: PropTypes.string.isRequired,
        yearAndDivision: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
    profilePic: PropTypes.string,
};

export default Profilepage;
