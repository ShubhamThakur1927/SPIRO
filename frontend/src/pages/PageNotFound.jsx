import React,{useState, useEffect}from 'react'
import GoHomeButton from '../Tests/Components/GoHomeButton'
import Navbar from '../components/Navbar'

function PageNotFound() {
  const [textColor, setTextColor] = useState("text-black");
  useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setTextColor("text-black");
          } else {
            setTextColor("text-black");
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <div className="">
      <Navbar className={`${textColor}`} textColor="text-black" />
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-white text-blue-600 px-5">
        <h1 className="text-h1 font-bold">404</h1>
        <p className="text-lg mt-2">Sorry, the page you're looking for could not be found</p>
        <img
          src="https://s3-alpha-sig.figma.com/img/3d58/6797/04f165405fcb7b89811597cbde439695?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QBj722rKNsM1XgihW-KTXJ8GRds~CE93HIIT2Sy3YkAJGdCmT4DMD~-GE3m0380fSzmZ2yBy7kanDGAJGW9DAkulrsMXaDcjUW3Q~7OZzjgDjymNzaQOOX5CRWYfRf6p0UjK0ozcF4Lt3I4Opk7JZFZ6nWiZvxCxBTd6OaBa6Rl5wnoA~1Ls0tibzt7GZgmWT6FgC3~lGJUaq5aq4BQD-A-v5iMrBm5nnikQQ8whmApyaJNACV72aQJIcVFbWhF1925sfRVzuGlszAXZQLFJ0Chz6NlleTeKJqa3uNojtrBIjr~qMvjT0U9APHBGxEfV4or~H5Nh2YWpYuxsf4xUSg__"
          alt="Error 404 Illustration"
          className="w-64 mt-6"
        />
        <GoHomeButton/>
      </div>
    </div>
  )
}

export default PageNotFound