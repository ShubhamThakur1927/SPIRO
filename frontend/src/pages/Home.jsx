import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Cardsareng from "../components/Cardsareng";
import "./styles/styles.css";
import Card from "../components/Card";
import Smallcard from "../components/Smallcard";
import FeatureCard from "../components/FeatureCard";
import Banner from "../components/Banner";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function Home() {
  const [textColor, setTextColor] = useState("text-white");

  const navigate= useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setTextColor("text-black");
      } else {
        setTextColor("text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="bg-main body scroll-smooth min-w-screen min-h-screen box-border">
      {/* Navbar & Hero Section */}
      <Navbar className={`${textColor}`} />
      <div className="min-h-screen min-w-screen hero overflow-hidden relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 mt-44 xl:mx-10 xl:left-32 md:left-20 left-0 mx-10 w-auto h-full">
          <div className="text-white text-display xl:my-20 xl: xl:w-1/3 w-2/3 md:w-1/2  leading-display font-semibold">
            Empowering Your Future
            <p className="text-small text-white leading-small my-5 font-normal">
              Achieve your goals with flexible, high-quality  programs for all levels
            </p>
          </div>
          <button onClick={()=>{
            navigate("/about-us")
          }} className="bg-primary relative xl:bottom-14 hover:bg-primary-dark text-white font-semibold flex align-middle items-center py-3 px-8 rounded-lg">
            Explore <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* MID Section */}
      <section className="bg-white relative  bottom-12 rounded-3xl w-auto h-auto py-20 flex flex-col items-center justify-around align-middle">
        {/* Feature Section */}
        <h1 className=" md:text-h1 text-h2 font-semibold w-full md:w-1/2 text-center md:leading-h1 leading-h2 mb-10" data-aos="fade-up">
          Unlock The Future Of Education With <Link to="/login"><span className="text-primary font-bold">SPIRO</span></Link>
        </h1>
        <div className="grid grid-cols-1 bg-opacity-80 md:grid-cols-3 gap-5 w-full px-4 md:px-10">
  <div className="grid gap-5">
    <FeatureCard title="The Tech That Simplifies Your Educational World" />
    <Card title="Seamless Sharing" subtitle="Easily collaborate and share resources." />
  </div>
  <div className="grid gap-5">
    <Smallcard title="Personalized Chatbot" subtitle="Instant support for your learning." 
    gif="https://s3-alpha-sig.figma.com/img/afc3/da47/25433bb036ef9d6827fcd72fc1b9d5ba?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VM82b5kt75RZZnPrfH1A-9ju6evyvb~iEdVOPFps5Q4NboG4yLK-m9bQSXIrhskZsWYIew2KbanNo5lShBQDb02AxRas8HLRp8vxhHGxNdAKQUWCb5Fyep3LDELuDP6-yxFl2rUJpRGdPgmnqBMq6XbVYlGsZUOzmWvU0Lb69rX81soZKnjJJ3-7xpAQaWRS-yhyKMkc9Mf-v53JzhMgV1za4ODfWJtYgRMqddfGmXgmVGJ6i1AMz0z-ch2i0m7Pez9kffE3kBoyyr~q~aqZi56IfMMXrTEr2AIIaMexuCM~lSWYEdqIbLDrwcLTdsRoet076ceZuy7-ObYMnik4yQ__"
    />
    <Smallcard title="Progress Tracking" subtitle="Monitor your growth with detail."
    gif="https://s3-alpha-sig.figma.com/img/b005/00da/b3f140a319772ee9db0b1d924a39ca98?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OK61Xua~EYyRVGNAxc~us2UEkvquDI0ebPHVc-nAXUZnRxnzt8art1WbqXt7JpaQjedczkzRo94TCNZbcVdgg~ZUikcSNI1vIWwSF0DGixtpV-IQ3FtxXvUfAGg~y~rn5TK-lkQLYgM6QcAyGjb3uz7dp1ae4-DJlzVR4dIQOVYhldJqS4fJ1l0S1h00ASRUi3YTLUP31qk6GwaEVmHaqJLm2-bjUqt0e6zXoP8~K92LL4qfNeaWYs-jGf0EkIzXgJEJsORj7O~57bhjqAdGlIlXVAN3Hp8JKD96iJ3cNs8-O9uAVvpb0U9GuwWUzJdkZlQsPqqQ9QOgtROK3UGRaA__"
    />
    <Smallcard title="Secure Learning" subtitle="Top-level security for your data." 
    gif="https://s3-alpha-sig.figma.com/img/b5d7/0565/fb3b2304bbf0b3f9fcd542fbe3ebd503?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LoX~Ufj~~c6LSWxdfBbsgBP1~J-kWPDK-vl2esk2gb-XzBeJf64Q5tiy2cd-8AzG5h8NsyyBbohN4ACaBAzP8~3IPjZAvo9UmcEj0ccAUmMnJRdlnpOrQPHcU4KPPSYOHpKSl8PjjCAYis3qwgyUZCax7laoI6-j9meLleAaturdxnJ1xYkLyVEZcJFHDJAr5mWqSUUQJxSj771bsKpoDS2XIxrBmLVcO4eVdBteih30u0iNlO3dqVh5GWB4Y4vS7I0VGagICe-WCDrh3bkm7I4zzE4kH64IPd70K7Alnas784l1mheTp4v9pIUhyIhU47Z5UMkBVh0ei~fW4IFe4Q__ "
    />
  </div>
  <div className="grid gap-5">
    <Card title="Engaging Simulations" subtitle="Interactive tools to enhance learning." />
    <Card title="Interesting Games" subtitle="Gaming zone making studies interesting." />
  </div>
</div>


        {/* About Section */}
        <h1 className="text-h1 leading-h1 font-semibold w-4/5 md:w-2/5 my-10 text-center" data-aos="fade-up">
          Transforming learning, one click at a time
        </h1>
        <div className="grid grid-cols-1 gap-12 w-full md:w-2/3 px-4 md:px-10">
          <div className="w-full h-[400px] bg-[url(./assets/cardbg.png)] md:px-10 px-5 pb-6 text-white bg-cover bg-center place-content-end md:place-items-end bg-no-repeat bg-blend-screen bg-slate-900 rounded-3xl" data-aos="fade-right">
            <div className="md:w-3/4 w-full md:text-end space-y-2">
              <h3 className="text-h3 leading-h3 font-semibold">Increased Engagement</h3>
              <p className="text-small leading-small">
                Gamified elements, simulations, and real-time collaboration keep students actively involved in their learning journey.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 h-[400px]  px-5 pb-8 bg-[url(./assets/image108.png)] bg-cover bg-center bg-no-repeat place-content-end bg-blend-screen bg-slate-900 rounded-3xl text-white" data-aos="fade-down">
            <div className="w-full space-y-4">
              <h3 className="text-h3 leading-h3 font-semibold">Improved Teacher-Student Communication</h3>
              <p className="text-small leading-small font-normal">
              Fosters better communication through discussion and real-time feedback, allowing educators to address student needs quickly.
              </p>
            </div>
            </div>
            <div className="w-full md:w-1/2 h-[400px] px-5 pb-8 bg-[url(./assets/image109.png)] bg-cover bg-center bg-no-repeat bg-blend-screen place-content-end text-white bg-slate-900 rounded-3xl" data-aos="fade-up">
            <div className="w-full space-y-5">
              <h3 className="text-h3 leading-h3 font-semibold">Flexible Learning
              Opportunities</h3>
              <p className="text-small leading-small font-normal">
              Learn at your own pace, anywhere, anytime, fitting education into your schedule.
              </p>
            </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="FAQ justify-center items-center p-4 md:p-12 lg:p-52 w-full">
          <h1 className="text-h1 pb-12 text-center" data-aos="fade-up">FAQ's</h1>
          <Faq
            question="Is my data secure on SPIRO?"
            answer="Yes, Spiro uses advanced security measures to protect your data and ensure privacy."
          />
          <Faq
            question="How do colleges get started with SPIRO?"
            answer="Colleges can sign up on our website and start uploading content and resources for students."
          />
          <Faq
            question="How do I get support if I need help?"
            answer="You can contact our 24/7 support via live chat, email, or our help center."
          />
          <Faq
            question="Can I track my progress on Spiro?"
            answer="Yes, students can track their progress with quizzes and assignments."
          />
          <Faq
            question="Is Spiro mobile-friendly?"
            answer="Yes, Spiro is fully optimized for mobile devices, allowing easy access anytime, anywhere."
          />
        </div>
      </section>

      {/* Footer */}
      <section className="mx-4 md:mx-10">
        <Banner Title="Your Vision, Our Platform Let’s Connect Today!" />
        <Footer />
      </section>
    </section>
  );
}

export default Home;