"use client"
import Image from 'next/image'
import 'animate.css';
import {useState} from "react";
import { useRouter } from 'next/navigation'
import ScrollAnimation from 'react-animate-on-scroll';

const ServiceCard = ({ icon, title, details }) => {
    return (
        <>
            <div className="w-full h-full px-4 md:w-1/2 lg:w-1/3">
                <div className="border border-gray-200 mb-9 rounded-[20px] h-full bg-white p-10 shadow-2 transition-all hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
                    <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-blue-600">
                        {icon}
                    </div>
                    <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
                        {title}
                    </h4>
                    <p className="text-body-color dark:text-dark-6">{details}</p>
                </div>
            </div>
        </>
    );
};


export default function Home() {
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');

    const router = useRouter();

    const sendForm = (e, num) => {
        e.preventDefault();
        const body = {
            email: num === 1 ? email : email2,
            waitlist_id: 12369
        }
        console.log(body)
        fetch('https://api.getwaitlist.com/api/v1/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        }).then((response) => {
            console.log(response);
            router.push('/success');
        });
    }
    return (
        <main className="bg-white dark:bg-[#121212]">
            <div className={'dark:hidden w-1/2 h-96 absolute z-0 top-0 right-0'}>
                <Image alt={""} priority placeholder={'empty'} src={'/images/blur1.png'} layout={'fill'} className={'absolute top-0 right-0'}></Image>
            </div>
            <div className={'dark:hidden w-2/3 h-2/3 absolute z-0 -left-16 top-1/8'}>
                <Image alt={""} priority placeholder={'empty'} src={'/images/blur3.png'} layout={'fill'} className={'absolute top-0 right-0'}></Image>
            </div>
            <section className="w-full z-10">
                <div className="flex flex-col items-center justify-center px-8 pt-8 lg:px-12 md:pt-16 lg:pt-24">
                    <h1 className="text-5xl animate__animated animate__fadeInUp md:text-7xl xl:text-8xl z-10 font-sans text-center px-4 md:px-16 lg:px-24 font-bold mt-8 text-dark dark:text-white">
                        Start Studying Smarter. <br className="hidden lg:block" />
                        Your <span className="bg-gradient-to-r from-cyan-500 to-blue-700 text-transparent bg-clip-text">Custom </span>Learning Path Awaits!
                    </h1>
                    <p className="mt-6 animate__fadeIn animate__delay-1s text-xl animate__animated z-10 md:px-12 text-center text-body-color dark:text-dark-6">
                        AptoLearn is the only hyper-personalized learning platform for college students to help you achieve your learning goals. <br/> Sign up for the beta to be the first to try it out!
                    </p>
                    <form action="https://formkeep.com/f/49adcf2e0d4f" method="post" id="form" name="form"
                          acceptCharset="UTF-8" encType="multipart/form-data"
                          className="p-2 mt-8 animate__animated animate__fadeIn animate__delay-1s transition duration-500 ease-in-out transform border2 bg-gray-50 rounded-xl w-full md:w-3/4 lg:w-1/2 sm:flex">
                        <div className="flex-1 min-w-0 revue-form-group">
                            <label htmlFor="member_email" className="sr-only">Email address</label>
                            <input id="cta-email" type="email" onChange={(e) => setEmail(e.target.value)} value={email}
                                   className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                   placeholder="Enter your email  " />
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                            <button type="submit" name="Subscribe"
                                    id="member_submit" onClick={(e) => sendForm(e, 1)}
                                    className="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10">Sign up</button>
                        </div>
                    </form>
                </div>
            </section>
            <div className="w-full mt-8 lg:mt-4 z-10">
                <img src={"/bigmockup.webp"} className="animate__animated animate__fadeIn animate__delay-1s"/>
            </div>
            <section className="w-full">
                <div className=" px-5 py-12 mx-auto lg:px-16">
                    <div className="flex flex-col w-full mb-8 text-center">
            <span className="mb-4 text-sm font-medium tracking-wide text-gray-500 uppercase">
        Currently in testing with students from:
            </span>
                    </div>
                    <div className="mx-auto text-center">
                        <div className="grid grid-cols-5 gap-4 mx-auto lg:grid-cols-5">
                            <div>
                                <img className="h-4 mx-auto lg:h-12"
                                     src="/cmu.webp"
                                     alt="Carnegie Mellon University" />
                            </div>
                            <div>
                                <img className="h-4 mx-auto lg:h-12"
                                     src="/princeton.webp"
                                     alt="Princeton University" />
                            </div>
                            <div>
                                <img className="h-4 mx-auto lg:h-12"
                                     src="/penn.webp"
                                     alt="University of Pennsylvania" />
                            </div>
                            <div>
                                <img className="h-4 mx-auto lg:h-12"
                                     src="/harvard.webp"
                                     alt="Harvard University " />
                            </div>
                            <div>
                                <img className="h-4 mx-auto lg:h-12"
                                     src="/yale.webp"
                                     alt="Sketch " />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="overflow-hidden pt-8 lg:pt-16 pb-12">
                <div className="px-4 md:px-8 lg:px-12 xl:px-20 mx-auto">
                    <div className="flex flex-col md:flex-row-reverse gap-4 lg:gap-8 items-center md:justify-between">
                        <div className="ml-4 md:px-4 w-[90%] md:w-[40%] lg:w-[50%] aspect-square bg-gray-100 dark:bg-gray-800 flex flex-row items-center">
                            <img className="w-full rounded"
                                 src="/onboardingmockup-removebg.webp"/>
                        </div>
                        <div className="px-4 w-full md:w-[60%] lg:w-[50%]">
                            <div className="mt-10 lg:mt-0 text-center md:text-start">
                                <span className="mb-4 text-lg font-semibold tracking-wide text-blue-600 uppercase">
                                    AptoLearn's Key Features
                                </span>
                                <h2 className="mb-5 text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-dark dark:text-white">
                                    Your Personal Pathway to Crushing Classes
                                </h2>
                                <p className="mb-5 text-lg text-body-color dark:text-dark-6">
                                    Embark on a learning journey uniquely tailored to your study goals with our
                                    cutting-edge recommendation system. Our algorithm analyzes your objectives, existing
                                    knowledge, preferred pace, and learning style to create a custom pathway unique to you.
                                    It then creates a roadmap to help you reach your goals in the most efficient way possible.
                                </p>
                                <div className="mt-8 flex flex-col gap-2 xl:gap-8">
                                    <ScrollAnimation animateIn={'animate__fadeInLeft'} animateOnce className="flex flex-row items-center animate__animated">
                                        <div className="flex flex-row items-center justify-center p-1 rounded-full bg-blue-600">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M5 13l4 4L19 7"/>
                                            </svg>
                                        </div>
                                        <p className="text-md xl:text-lg ml-2 md:ml-4"><span className="font-bold">Flexible Learning</span>: AptoLearn adapts to your style, creating a flexible and effective learning environment.</p>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn={'animate__fadeInLeft'} animateOnce className="flex flex-row items-center animate__animated">
                                        <div className="flex flex-row items-center justify-center p-1 rounded-full bg-blue-600">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M5 13l4 4L19 7"/>
                                            </svg>
                                        </div>
                                        <p className="text-md xl:text-lg ml-2 md:ml-4"><span className="font-bold">Objective Analysis</span>: Our algorithm analyzes your learning objectives to ensure precise recommendations.</p>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn={'animate__fadeInLeft'} animateOnce className="flex flex-row items-center animate__animated">
                                        <div className="flex flex-row items-center justify-center p-1 rounded-full bg-blue-600">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M5 13l4 4L19 7"/>
                                            </svg>
                                        </div>
                                        <p className="text-md xl:text-lg ml-2 md:ml-4"><span className="font-bold">Structured Learning</span>: Resources are thoughtfully organized to provide a structured and coherent learning experience.</p>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="overflow-hidden pt-12 lg:pb-8">
                <div className="px-4 md:px-8 xl:px-20 mx-auto">
                    <div className="flex flex-col md:flex-row gap-4 lg:gap-8 items-center md:justify-between">
                        <div className="ml-4 md:px-4 w-[90%] md:w-[40%] lg:w-[50%] aspect-square bg-gray-100 dark:bg-gray-800 flex flex-row items-center">
                            <img className="w-full rounded"
                                 src="/contentmockup.webp"/>
                        </div>
                        <div className="px-4 w-full md:w-[60%] lg:w-[50%]">
                            <div className="mt-10 lg:mt-0 text-center md:text-start">
                                <h2 className="mb-5 text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-dark dark:text-white">
                                    Tailored Resources for Academic Success
                                </h2>
                                <p className="mb-5 text-lg text-body-color dark:text-dark-6">
                                    At AptoLearn, we house a comprehensive content library curated
                                    to cater to diverse learning needs. Our repository encompasses a vast selection of
                                    educational resources of different types and subjects, meaning there will be content specific to your goals.
                                    Each resource is split into digestible sections, making it effortless to grasp.
                                </p>
                                <div className="mt-8 grid grid-cols-3 gap-4 md:gap-8">
                                    <ScrollAnimation animateIn={'animate__fadeInRight'} animateOnce delay={0} className="animate__animated flex flex-col col-span-1">
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-blue-600">500+</h3>
                                        <p className="text-lg lg:text-2xl text-gray-700">Different <br/> Sources</p>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn={'animate__fadeInRight'} animateOnce delay={100} className="animate__animated flex flex-col col-span-1">
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-blue-600">25</h3>
                                        <p className="text-lg lg:text-2xl text-gray-700">Academic subjects</p>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn={'animate__fadeInRight'} animateOnce delay={200} className="animate__animated flex flex-col col-span-1">
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-blue-600">10,000+</h3>
                                        <p className="text-lg lg:text-2xl text-gray-700">Total <br/> Resources</p>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-4 pb-16 pt-16 dark:bg-dark">
                <div className="px-4 md:px-8 lg:px-20 mx-auto">
                    <div className="mx-auto mb-8 md:w-3/5 text-center lg:mb-12">
                        <div className="mb-2 text-lg font-semibold tracking-wide text-blue-600 uppercase">
                            Discover AptoLearn's Benefits
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-center text-dark dark:text-white">
                            The First Hyper-Personalized Learning Platform for College Students
                        </h2>
                    </div>
                    <div className="md:-mx-4 px-2 flex flex-wrap">
                        <ServiceCard
                            title="Adaptive Learning"
                            details="Experience tailored learning journeys that adapt to your pace, learning style, and objectives."
                            icon={
                                <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 36 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21.0375 1.2374C11.8125 -0.393851 2.92503 5.7374 1.29378 14.9624C0.450029 19.4061 1.46253 23.9624 4.05003 27.6749C6.63753 31.4436 10.5188 33.9186 14.9625 34.7624C15.975 34.9311 16.9875 35.0436 18 35.0436C26.0438 35.0436 33.2438 29.2499 34.7625 21.0374C36.3938 11.8124 30.2625 2.9249 21.0375 1.2374ZM32.2313 20.5874C32.175 21.0374 32.0625 21.4874 31.95 21.8811L19.2375 17.0999V3.5999C19.6875 3.65615 20.1375 3.7124 20.5313 3.76865C28.4063 5.1749 33.6375 12.7124 32.2313 20.5874ZM16.7063 3.5999V16.7624H3.60003C3.65628 16.3124 3.71253 15.8624 3.76878 15.4124C4.95003 8.83115 10.4063 4.10615 16.7063 3.5999ZM15.4125 32.2311C11.5875 31.5561 8.32503 29.4186 6.13128 26.2124C4.66878 24.1311 3.82503 21.7124 3.60003 19.2374H17.775L31.05 24.2436C28.2938 29.9811 21.9375 33.4686 15.4125 32.2311Z"
                                        fill="white"
                                    />
                                </svg>
                            }
                        />
                        <ServiceCard
                            title="Personalized Learning"
                            details="Tailor your learning path based on your goals, preferences, and existing knowledge, creating a personalized journey."
                            icon={
                                <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 36 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M9.89195 14.625C10.9995 10.1252 13.769 7.875 18.1996 7.875C24.8458 7.875 25.6765 12.9375 28.9996 13.7812C31.2151 14.3439 33.1535 13.5002 34.815 11.25C33.7075 15.7498 30.9379 18 26.5073 18C19.8611 18 19.0304 12.9375 15.7073 12.0938C13.4918 11.5311 11.5535 12.3748 9.89195 14.625ZM1.58423 24.75C2.69174 20.2502 5.46132 18 9.89195 18C16.5381 18 17.3689 23.0625 20.692 23.9062C22.9075 24.4689 24.8458 23.6252 26.5073 21.375C25.3998 25.8748 22.6302 28.125 18.1996 28.125C11.5535 28.125 10.7227 23.0625 7.39963 22.2188C5.18405 21.6561 3.24576 22.4998 1.58423 24.75Z"
                                        fill="white"
                                    />
                                </svg>
                            }
                        />
                        <ServiceCard
                            title="Progress Tracking"
                            details="Effortlessly monitor your learning progress with intuitive tracking tools, allowing you to stay on course."
                            icon={
                                <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 36 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.2063 1.9126H5.0625C3.15 1.9126 1.575 3.4876 1.575 5.4001V12.5438C1.575 14.4563 3.15 16.0313 5.0625 16.0313H12.2063C14.1188 16.0313 15.6938 14.4563 15.6938 12.5438V5.45635C15.75 3.4876 14.175 1.9126 12.2063 1.9126ZM13.2188 12.6001C13.2188 13.1626 12.7688 13.6126 12.2063 13.6126H5.0625C4.5 13.6126 4.05 13.1626 4.05 12.6001V5.45635C4.05 4.89385 4.5 4.44385 5.0625 4.44385H12.2063C12.7688 4.44385 13.2188 4.89385 13.2188 5.45635V12.6001Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M30.9375 1.9126H23.7937C21.8812 1.9126 20.3062 3.4876 20.3062 5.4001V12.5438C20.3062 14.4563 21.8812 16.0313 23.7937 16.0313H30.9375C32.85 16.0313 34.425 14.4563 34.425 12.5438V5.45635C34.425 3.4876 32.85 1.9126 30.9375 1.9126ZM31.95 12.6001C31.95 13.1626 31.5 13.6126 30.9375 13.6126H23.7937C23.2312 13.6126 22.7812 13.1626 22.7812 12.6001V5.45635C22.7812 4.89385 23.2312 4.44385 23.7937 4.44385H30.9375C31.5 4.44385 31.95 4.89385 31.95 5.45635V12.6001Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M12.2063 19.8564H5.0625C3.15 19.8564 1.575 21.4314 1.575 23.3439V30.4877C1.575 32.4002 3.15 33.9752 5.0625 33.9752H12.2063C14.1188 33.9752 15.6938 32.4002 15.6938 30.4877V23.4002C15.75 21.4314 14.175 19.8564 12.2063 19.8564ZM13.2188 30.5439C13.2188 31.1064 12.7688 31.5564 12.2063 31.5564H5.0625C4.5 31.5564 4.05 31.1064 4.05 30.5439V23.4002C4.05 22.8377 4.5 22.3877 5.0625 22.3877H12.2063C12.7688 22.3877 13.2188 22.8377 13.2188 23.4002V30.5439Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M30.9375 19.8564H23.7937C21.8812 19.8564 20.3062 21.4314 20.3062 23.3439V30.4877C20.3062 32.4002 21.8812 33.9752 23.7937 33.9752H30.9375C32.85 33.9752 34.425 32.4002 34.425 30.4877V23.4002C34.425 21.4314 32.85 19.8564 30.9375 19.8564ZM31.95 30.5439C31.95 31.1064 31.5 31.5564 30.9375 31.5564H23.7937C23.2312 31.5564 22.7812 31.1064 22.7812 30.5439V23.4002C22.7812 22.8377 23.2312 22.3877 23.7937 22.3877H30.9375C31.5 22.3877 31.95 22.8377 31.95 23.4002V30.5439Z"
                                        fill="white"
                                    />
                                </svg>
                            }
                        />
                        <ServiceCard
                            title="Efficient Studying"
                            details="Optimize your study sessions with curated resources, organized pathways, and efficient learning structures."
                            icon={
                                <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 36 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M30.2625 10.6312C27.1688 7.36875 22.8375 5.34375 18 5.34375C8.60626 5.34375 1.01251 12.9937 1.01251 22.3875C1.01251 25.0312 1.63126 27.6187 2.75626 29.925C2.92501 30.2625 3.20626 30.4875 3.54376 30.6C3.65626 30.6 3.71251 30.6562 3.82501 30.6562C3.82501 30.6562 3.82501 30.6562 3.88126 30.6562C3.88126 30.6562 3.88126 30.6562 3.93751 30.6562C3.99376 30.6562 4.05001 30.6562 4.10626 30.6562C4.21876 30.6562 4.38751 30.6 4.50001 30.5437L6.80626 29.4187C7.42501 29.1375 7.70626 28.35 7.36876 27.7312C7.03126 27.1125 6.30001 26.8312 5.68126 27.1687L4.55626 27.7312C3.88126 26.1 3.60001 24.3562 3.54376 22.5562H5.90626C6.58126 22.5562 7.20001 21.9937 7.20001 21.2625C7.20001 20.5312 6.63751 19.9687 5.90626 19.9687H3.71251C4.10626 17.4937 5.17501 15.2437 6.69376 13.3875L8.71876 15.4125C8.94376 15.6375 9.28126 15.8062 9.61876 15.8062C9.95626 15.8062 10.2938 15.6937 10.5188 15.4125C11.025 14.9062 11.025 14.1187 10.5188 13.6125L8.43751 11.5312C10.6875 9.5625 13.5563 8.2125 16.7625 7.9875V11.4187C16.7625 12.0937 17.325 12.7125 18.0563 12.7125C18.7313 12.7125 19.35 12.15 19.35 11.4187V7.9875C22.5 8.26875 25.425 9.5625 27.675 11.5312L26.1 13.1062C25.5938 13.6125 25.5938 14.4 26.1 14.9062C26.325 15.1312 26.6625 15.3 27 15.3C27.3375 15.3 27.675 15.1875 27.9 14.9062L29.4188 13.3875C30.9375 15.2437 31.95 17.4937 32.4 19.9687H30.2063C29.5313 19.9687 28.9125 20.5312 28.9125 21.2625C28.9125 21.9937 29.475 22.5562 30.2063 22.5562H32.5688C32.5688 24.3562 32.2313 26.1 31.5563 27.7875L30.4313 27.225C29.8125 26.8875 29.025 27.1687 28.7438 27.7875C28.4625 28.4062 28.6875 29.1937 29.3063 29.475L31.6125 30.6C31.7813 30.7125 32.0063 30.7125 32.175 30.7125C32.175 30.7125 32.175 30.7125 32.2313 30.7125C32.2313 30.7125 32.2313 30.7125 32.2875 30.7125C32.7375 30.7125 33.1875 30.4312 33.4125 30.0375C34.5938 27.7312 35.1563 25.0875 35.1563 22.5C35.0438 17.8312 33.1875 13.6687 30.2625 10.6312Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M21.4313 19.3499L17.6625 22.1624C16.9875 22.2749 16.3688 22.6687 15.975 23.2312C15.9188 23.3437 15.8625 23.3999 15.8063 23.5124L15.6938 23.6249H15.75C15.1313 24.8062 15.4688 26.2687 16.5938 27.1124C17.7188 27.8999 19.2375 27.7874 20.1375 26.8312H20.1938L20.25 26.7187C20.3063 26.6624 20.4188 26.5499 20.475 26.4374C20.925 25.8749 21.0375 25.1437 20.9813 24.4687L22.4438 19.9687C22.6125 19.4624 21.9375 19.0124 21.4313 19.3499Z"
                                        fill="white"
                                    />
                                </svg>
                            }
                        />
                        <ServiceCard
                            title="Instant Feedback"
                            details="Receive immediate feedback on quizzes, assessments, and interactive activities, fostering continuous improvement."
                            icon={
                                <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 36 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M30.0937 21.8251L29.6437 21.6001L30.2062 21.2626C31.3312 20.5876 31.95 19.4063 31.95 18.0563C31.95 16.7626 31.2187 15.5813 30.0937 14.9063L28.9125 14.2313L30.2062 13.4438C31.3312 12.7688 31.95 11.5876 31.95 10.2376C31.95 8.94385 31.2187 7.7626 30.0937 7.14385L19.9125 1.4626C18.7875 0.843848 17.3812 0.843848 16.3125 1.4626L5.84999 7.5376C4.72499 8.2126 4.04999 9.39385 4.04999 10.6876C4.04999 11.9813 4.72499 13.2188 5.84999 13.8376L7.08749 14.5688L5.84999 15.3001C4.72499 15.9751 4.04999 17.1563 4.04999 18.4501C4.04999 19.7438 4.72499 20.9813 5.84999 21.6001L6.35624 21.8813L5.84999 22.1626C4.72499 22.8376 3.99374 24.0188 3.99374 25.3126C3.99374 26.6626 4.66874 27.8438 5.79374 28.4626L16.1437 34.4813C16.7062 34.8188 17.325 34.9876 18 34.9876C18.675 34.9876 19.35 34.8188 19.9125 34.4251L30.2625 28.1251C31.3875 27.4501 32.0062 26.2688 32.0062 24.9188C31.95 23.6251 31.275 22.4438 30.0937 21.8251ZM6.52499 10.6876C6.52499 10.5188 6.58124 10.0126 7.08749 9.73135L17.55 3.65635C17.8875 3.43135 18.3375 3.43135 18.675 3.65635L28.9125 9.3376C29.4187 9.61885 29.475 10.1251 29.475 10.2938C29.475 10.4626 29.4187 10.9688 28.9125 11.3063L18.6187 17.6626C18.2812 17.8876 17.8312 17.8876 17.4375 17.6626L7.08749 11.6438C6.58124 11.3626 6.52499 10.8563 6.52499 10.6876ZM7.08749 17.4938L9.56249 16.0313L16.1437 19.8563C16.7062 20.1938 17.325 20.3626 18 20.3626C18.675 20.3626 19.35 20.1938 19.9125 19.8001L26.4375 15.8063L28.8562 17.1563C29.3625 17.4376 29.4187 17.9438 29.4187 18.1126C29.4187 18.2813 29.3625 18.7876 28.8562 19.1251L18.6187 25.4251C18.2812 25.6501 17.8312 25.6501 17.4375 25.4251L7.08749 19.4063C6.58124 19.1251 6.52499 18.6188 6.52499 18.4501C6.52499 18.2813 6.58124 17.7751 7.08749 17.4938ZM28.9125 25.9876L18.6187 32.3438C18.2812 32.5688 17.8312 32.5688 17.4375 32.3438L7.08749 26.3251C6.58124 26.0438 6.52499 25.5376 6.52499 25.3688C6.52499 25.2001 6.58124 24.6938 7.08749 24.4126L8.83124 23.4001L16.2 27.6751C16.7625 28.0126 17.3812 28.1813 18.0562 28.1813C18.7312 28.1813 19.4062 28.0126 19.9687 27.6188L27.225 23.1751L28.9125 24.0751C29.4187 24.3563 29.475 24.8626 29.475 25.0313C29.475 25.2001 29.4187 25.7063 28.9125 25.9876Z"
                                        fill="white"
                                    />
                                </svg>
                            }
                        />
                        <ServiceCard
                            title="Confidence & Success"
                            details="Build confidence as you progress through your learning paths, setting the stage for academic success and mastery."
                            icon={
                                <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 36 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.725 16.3124C4.89375 16.3124 5.11875 16.2562 5.2875 16.1999L11.5312 14.0062C12.2062 13.7812 12.5437 13.0499 12.3187 12.3749C12.0937 11.6999 11.3625 11.3624 10.6875 11.5874L6.80625 12.9374C8.6625 8.0999 13.3875 4.8374 18.7875 4.8374C24.6938 4.8374 29.8125 8.7749 31.275 14.3999C31.4437 15.0749 32.1187 15.4687 32.7937 15.2999C33.4687 15.1312 33.8625 14.4562 33.6938 13.7812C31.95 7.03115 25.8187 2.30615 18.7312 2.30615C12.4312 2.30615 6.8625 6.01865 4.55625 11.5874L3.375 8.2124C3.15 7.5374 2.41875 7.1999 1.74375 7.4249C1.06875 7.6499 0.73125 8.38115 0.95625 9.05615L3.09375 15.1874C3.43125 15.9187 4.05 16.3124 4.725 16.3124Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M34.9312 27.9562L32.625 21.9375C32.4562 21.5437 32.175 21.2062 31.7812 21.0375C31.3875 20.8687 30.9375 20.8687 30.5437 21.0375L24.3562 23.3999C23.6812 23.6249 23.4 24.3562 23.625 25.0312C23.85 25.7062 24.5813 25.9875 25.2563 25.7625L29.1375 24.3C26.8875 28.4062 22.5 31.1062 17.6062 31.1062C12.0375 31.1062 7.14375 27.6187 5.4 22.4437C5.175 21.7687 4.44375 21.4312 3.825 21.6562C3.15 21.8812 2.8125 22.6124 3.0375 23.2312C5.11875 29.4187 10.9687 33.5812 17.6062 33.5812C23.4 33.5812 28.6312 30.375 31.275 25.425L32.5688 28.8562C32.7375 29.3625 33.2437 29.6437 33.75 29.6437C33.9187 29.6437 34.0312 29.6437 34.2 29.5312C34.875 29.3625 35.1562 28.6312 34.9312 27.9562Z"
                                        fill="white"
                                    />
                                </svg>
                            }
                        />
                    </div>
                </div>
            </section>
            <section className="pt-16 pb-16 bg-gray-50 dark:bg-dark relative">
                <div className="px-4 md:px-8 xl:px-20 mx-auto">
                    <div className="mb-2 text-lg font-semibold text-center tracking-wide text-blue-600 uppercase mx-auto">What Students Think About AptoLearn</div>
                    <h2 className="text-4xl md:text-5xl mx-auto text-center font-bold text-dark dark:text-white lg:w-1/2">Studying is hard. Let us help you
                        help yourself.</h2>
                    <p className="mt-4 mx-auto text-center text-lg text-body-color dark:text-dark-6 lg:w-1/2">
                        AptoLearn is a personalized learning platform that helps you achieve your academic goals. We
                        provide you with the resources you need to succeed in your courses and beyond.
                    </p>
                    <div className="mt-24 md:grid md:grid-cols-4 flex flex-col items-center justify-center gap-20 md:gap-4 lg:gap-8">
                        <div className="col-span-1 rounded-xl h-full pt-16 p-8 bg-white relative rounded-xl flex flex-col justify-center">
                            <img className="left-0 right-0 text-center mx-auto h-24 w-24 rounded-full absolute -top-12"
                                    src="/face1-modified.jpg"/>
                            <p className="text-center my-auto">AptoLearn has helped me so much, especially with finals season. I have been able to just review the content I needed without extra fluff.</p>
                            <img className="mx-auto mt-auto pt-2 w-1/2"
                                    src="/pitt.webp" alt="University of Pittsburgh"/>
                            <h3 className="text-center font-bold text-xl mt-2">Joshua Oguh, Biology Major</h3>
                        </div>
                        <div className="col-span-1 rounded-xl h-full pt-16 p-8 bg-white relative rounded-xl flex flex-col justify-center">
                            <img className="left-0 right-0 text-center mx-auto h-24 w-24 rounded-full absolute -top-12"
                                 src="/face2-modified.jpg"/>
                            <p className="text-center my-auto">So far, AptoLearn has been a gamechanger for me. I was able to make a study path that fit my own needs and wants instead of using my classes' textbook. </p>
                            <img className="mx-auto mt-auto pt-2 w-1/2"
                                 src="/MIT.webp" alt="Massachusetts Institute of Technology"/>
                            <h3 className="text-center font-bold text-xl mt-2">Joshua Oguh, Biology Major</h3>
                        </div>
                        <div className="col-span-1 rounded-xl h-full pt-16 p-8 bg-white relative rounded-xl flex flex-col justify-center">
                            <img className="left-0 right-0 text-center mx-auto h-24 w-24 rounded-full absolute -top-12"
                                 src="/face3-modified.jpg"/>
                            <p className="text-center my-auto">I love how one of the first things I'm asked about is my learning style. I was sick of using resources that don't match with the way I learn, but AptoLearn provided me with all sorts of resources that fit my style.</p>
                            <img className="mx-auto mt-auto pt-2 w-1/2"
                                 src="/tufts.webp" alt="Tufts University"/>
                            <h3 className="text-center font-bold text-xl mt-2">Joshua Oguh, Biology Major</h3>
                        </div>
                        <div className="col-span-1 rounded-xl h-full pt-16 p-8 bg-white relative rounded-xl flex flex-col justify-center">
                            <img className="left-0 right-0 text-center mx-auto h-24 w-24 rounded-full absolute -top-12"
                                 src="/face4-modified.jpg"/>
                            <p className="text-center my-auto">I was lacking a way to understand my course content efficiently when I found AptoLearn. I used it to get up to speed on my classes and make sure I fully understood it before exams.</p>
                            <img className="mx-auto mt-auto pt-2 w-1/2"
                                 src="/duke.webp" alt="Duke University"/>
                            <h3 className="text-center font-bold text-xl mt-2">Joshua Oguh, Biology Major</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 px-8">
                <div className="mx-auto max-w-screen-xl">
                    <h2 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">Frequently
                        asked questions</h2>
                    <div
                        className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                        <div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    Will AptoLearn be free?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">AptoLearn will offer a free tier with
                                    foundational features. Our premium tier unlocks advanced resources, personalized
                                    guidance, and enhanced tracking tools. Stay tuned for more details!
                                </p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    How do I get access?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">Once you sign up for the waitlist and
                                    the public beta is available, you will be notified through email about AptoLearn's beta. It will be coming soon,
                                    so make sure to keep an eye on your email!</p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    How does the reccomentation system work?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    AptoLearn's algorithms craft personalized learning paths based on your goals, pace,
                                    knowledge, and style. Engage with the platform to experience adaptive suggestions
                                    and tailored adjustments to enhance your learning journey.
                                </p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    When Will AptoLearn be released?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">AptoLearn is set to fully launch by August 2024.
                                    The public beta, however, will be available soon. We're working diligently to ensure
                                    a seamless and enriching experience for our users. Stay tuned for updates on the official release date!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-4 md:px-16 lg:px-16 pb-16">
                <div className="w-full bg-gray-100 p-8 md:p-12 lg:p-16 xl:p-24 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 rounded-2xl">
                    <h3 className="text-5xl font-bold text-center lg:text-start lg:w-1/2">Join the waitlist for early access!</h3>
                    <form action="https://formkeep.com/f/49adcf2e0d4f" method="post" id="form" name="form"
                          acceptCharset="UTF-8" encType="multipart/form-data"
                          className="p-2 transition duration-500 ease-in-out transform border2 bg-gray-50 w-full lg:w-1/2 rounded-xl sm:flex">
                        <div className="flex-1 min-w-0 revue-form-group">
                            <label htmlFor="member_email" className="sr-only">Email address</label>
                            <input id="cta-email" type="email" onChange={(e) => setEmail2(e.target.value)} value={email2}
                                   className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                   placeholder="Enter your email  " />
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                            <button type="submit" name="Subscribe"
                                    id="member_submit" onClick={(e) => sendForm(e, 2)}
                                    className="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 transition-all sm:px-10">Sign up</button>
                        </div>
                    </form>
                </div>
            </section>
            <footer className="bg-[#1D1D1F] flex flex-col">
                <div className="flex flex-col md:flex-row justify-between items-center py-8 px-4 md:px-16 lg:px-16">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="flex items-center justify-center md:justify-start">
                            <a href="#" className="flex items-center text-white hover:no-underline">
                                <div className="text-xl font-bold text-blue-500">Apto<span className="text-white">Learn</span></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex border-t border-gray-700 flex-col md:flex-row justify-between items-center py-4 px-4 md:mx-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="flex items-center justify-center md:justify-start">
                            <a href="#" className="text-white hover:no-underline hover:text-gray-200">Terms of
                                Service</a>
                            <a href="#" className="ml-8 text-white hover:no-underline hover:text-gray-200">Privacy
                                Policy</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center md:justify-end mt-4 md:mt-0">
                        <a href="#" className="text-white hover:no-underline hover:text-gray-200">© 2023 AptoLearn</a>
                    </div>
                </div>
            </footer>
        </main>
    )
}
