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

function Profilepage({ profilePic: initialProfilePic }) {
    const [studentName, setStudentName] = useState("");
    const [studentEmail, setStudentEmail] = useState("");
    const [studentPhone, setStudentPhone] = useState("");
    const [studentBranch, setStudentBranch] = useState("");
    const [studentYearAndDivision, setStudentYearAndDivision] = useState("");
    const [studentGender, setStudentGender] = useState("");
    const [profilePic, setProfilePic] = useState(initialProfilePic);
    const [isCropModalOpen, setIsCropModalOpen] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const { updateProfilePic, getProfile, updateProfile } = StudentStores();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileData = await getProfile();
        setStudentName(profileData.FullName);
        setStudentEmail(profileData.email);
        setStudentPhone(profileData.phone);
        setStudentBranch(profileData.Branch);
        setStudentYearAndDivision(profileData.Class);
        setStudentGender(profileData.Gender);
        setProfilePic(profileData?.ProfilePicUrl);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [getProfile]);

  const userDetails = {
    name: studentName,
    email: studentEmail,
    phone: studentPhone,
    branch: studentBranch,
    yearAndDivision: studentYearAndDivision,
    gender: studentGender,
  };

  const handleEditDetails = async (field, value) => {
    const updatedDetails = {
      name: field === "name" ? value : studentName,
      phone: field === "phone" ? value : studentPhone,
      branch: field === "branch" ? value : studentBranch,
      yearAndDivision: field === "yearAndDivision" ? value : studentYearAndDivision,
      gender: field === "gender" ? value : studentGender,
    };

    try {
      await updateProfile(updatedDetails);
      setStudentName(updatedDetails.name);
      setStudentPhone(updatedDetails.phone);
      setStudentBranch(updatedDetails.branch);
      setStudentYearAndDivision(updatedDetails.yearAndDivision);
      setStudentGender(updatedDetails.gender);
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

      setProfilePic(croppedImageUrl);
      setIsCropModalOpen(false);

      // Send the cropped image file to the backend
      const formData = new FormData();
      formData.append("profilePic", file);
      await updateProfilePic(formData);
    } catch (error) {
      console.error(error);
    }
  };

  const subjects = [
    {
      subject: "Science",
      percentage: 85,
      image:
        "https://s3-alpha-sig.figma.com/img/eea5/ca33/27e5ad9da8ebf9339d6cc521cf680156?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C234v-k8zx6cizddupmt1z1-MefIVSMEqMOhZ1SbLc4buVVp3YY-7wwFeHNxQOtpaMET0l6wJX7t1PBnloJAvea6lk7ECxHRrT0KeW07hPsrZJRzAPvp5dh53QtrpTrHba~lSb3E11IeSB-JeyNvwa5IRAefAUm03ElcwKVSZXx-Wy7Jmdm9TeYhp-kOW4jniz7HEIbSWFSgs3tgv9CI0ODYY7B4RGaeAKLu9NvMNEpzYjli-KrF-Wbsxsr-UMNzl9LxHz-eSlU0xgxIsChy5Fx5BgHEBJ0SPsoWbZYyZUe2uocYwPynFFoyThTZ3Eg1Z5a44lP6~2gVYqAVQKcBcw__",
    },
    {
      subject: "Math",
      percentage: 70,
      image:
        "https://s3-alpha-sig.figma.com/img/66b3/63de/5a6a589cf1e29751c5aab95bc61f736e?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SBWbPx-MnpiBGkq3V-Ay6cDUQOVwlGdkAlzZOQP6uiRQ1FdIhV1TNnjmoowF4Q1R6IRV8fttO7~lJmUE-1wpXAQO4XBQAwHxxafr7CPYSGLt6R-yw5AE5CleDTCIIujtgvJgFnKp0Umfy0yT~~GrFp3b98h6ozl38k~5Y5VGjKQk82efwrGynnihl4nW3w-Y4niY9UVChY16DmVk~0sccZ7a2yAl8bI5tnrdLgGDfV-sR4he6j6BGPaUqbTFEhUAsEETaxCkgFvWl1n4~raVZK2w~59hijalQ3fyLVGDHx88Ss76VKHIZd~gNynKv7Homxfq50XvIcStv76oElRSCg__",
    },
    {
      subject: "Physics",
      percentage: 90,
      image:
        "https://s3-alpha-sig.figma.com/img/aec9/c230/e2de8aed66fda6f11c178564af8df8df?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H8KgIxnG6mqcW1lYO9YQtaXaQK2KXaTy9feLshhqDNT1gF74xHRCn7a-DePGnKk0rekpWXL6LA79HmE4iGqqkdx7Wzz~j2YvuN11xVq2KhiyyiJPxDw3c3IkovI~2s8xgLBrFpOfvhiB90M1ccemdgLYdu8BCorZRmTHyZ9wNPqBB028e1s3VEJBel-ZOOyX4~l~aWaPokWtC1ENKGzz1q2RJMbcUKqo94ShOxFXwh974mmsQv3nYh1eBbFmJ8l3btAyZqMGgy8LVKbJCrAy-cwnxvLKDMQx4rO8~nIE~Glxzi66gRUSuSOZTxygdsOErp4Yo99P3BcTE8QzFyQl0Q__",
    },
    {
      subject: "Chemistry",
      percentage: 65,
      image:
        "https://s3-alpha-sig.figma.com/img/cede/f43e/a5b5d6b4660bd1f6dbc1f89794de1695?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=chFXMf017oJhvNZhyDDWkA3rh8mFqmPToy7hlCtmFxJvzXNi3vdItZzB0DslDMPrdfZ4c1kOjyQpymaDtlj3IWcWhPXUcFVNKMI32sHt6TM7Rtjlvz2c~3wyTGJFvhxhB~43ufhJxk6sBPbD5FfITHtCGFOs8osXrK9LvoEGo4EoiZL2oAtoArpTx85nWI0ZQ5YQXQ6RAwTuWedgqLRluQ0ja2a6he5jt5fsHzddY52v~hUAYoBz0l6qipaQsWMvA4g-PUYPwfABRosDZU3Ly4ORh4E22zwsiQRRCP3~kSNznMxKekx5w~~EA51u7hO1B-vNk6jeQY2ltOWAQX3djw__",
    },
    {
      subject: "Mechanics",
      percentage: 40,
      image:
        "https://s3-alpha-sig.figma.com/img/cede/f43e/a5b5d6b4660bd1f6dbc1f89794de1695?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=chFXMf017oJhvNZhyDDWkA3rh8mFqmPToy7hlCtmFxJvzXNi3vdItZzB0DslDMPrdfZ4c1kOjyQpymaDtlj3IWcWhPXUcFVNKMI32sHt6TM7Rtjlvz2c~3wyTGJFvhxhB~43ufhJxk6sBPbD5FfITHtCGFOs8osXrK9LvoEGo4EoiZL2oAtoArpTx85nWI0ZQ5YQXQ6RAwTuWedgqLRluQ0ja2a6he5jt5fsHzddY52v~hUAYoBz0l6qipaQsWMvA4g-PUYPwfABRosDZU3Ly4ORh4E22zwsiQRRCP3~kSNznMxKekx5w~~EA51u7hO1B-vNk6jeQY2ltOWAQX3djw__",
    },
  ];
  const workHistoryCards = Array(1).fill(<Blankcard text="My work." />);
  const workHityp = Array(1).fill(<Blankcard text="Your Work." />);

  return (
    <div className="bg-transparent min-h-screen flex flex-col space-y-5">
      <div className="relative left-2 px-8 mt-2">
      {/* Main Content */}
      <div className="px-5 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 gap-4 lg:gap-20">
        {/* Left Column */}
        <div className="space-y-4 place-items-center md:space-y-6">
          <Profilecard name={studentName} image={profilePic || profilealt} onUpdateProfile={()=> document.getElementById("fileInput").click()} />
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
              icon="Gmail"
              text="wcdang@gmail.com"
              url="mailto:wcdang@gmail.com"
            />
            <Socialmedia
              icon="Linkedin"
              text="wcdangi"
              url="https://linkedin.com/in/wcdangi"
            />
            <Socialmedia
              icon="Instagram"
              text="@wcdangi"
              url="https://instagram.com/wcdangi"
            />
          </div>
          <Notescard />
        </div>

        {/* Right Column */}
        <div className="md:col-span-3 space-y-4">
          <Profileinfo details={userDetails} onEdit={handleEditDetails} />

          {/* Activity Status Section */}
          <section className="space-y-4">
            <h1 className="text-xl md:text-2xl font-semibold">
              Activity Status
            </h1>

            {/* Workspace Section */}
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
              <h1 className="text-lg md:text-xl font-semibold mb-4">
                Workspace
              </h1>
              <div className="flex overflow-x-scroll scrollbar-hide space-x-4">
                {subjects.map((item, index) => (
                  <Linecardgraph
                    key={index}
                    subject={item.subject}
                    percentage={item.percentage}
                    image={item.image}
                    width="100%"
                    height="90px"
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
}

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
