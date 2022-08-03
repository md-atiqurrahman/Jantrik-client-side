import React from 'react';
import img from '../../images/MyPortfolio/Atiqur.png';

const MyPortfolio = () => {
    return (
        <div>
            <div className="hero min-h-max">
                <div className="flex flex-col lg:flex-row-reverse items-center">
                    <div>
                        <div className="w-[250px]">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div className='lg:mr-[120px] section-title'>
                        <h1 className="text-3xl lg:text-5xl font-bold mt-[15px] lg:mt-0">Welcome To My Portfolio</h1>
                        <p className="mt-3 lg:mt-6"><span className='text-[18px] font-bold'>Name</span>: Md.Atiqur Rahman</p>
                        <p><span className='text-[18px] font-bold'>Email Address</span>: mdatiqurrahman9104@gmail.com</p>
                        <p><span className='text-[18px] font-bold'>Phone</span>: +8801773204011</p>
                        <a href="https://www.facebook.com/mdatiqur.rahaman.581">
                            <p>
                                <span className='text-[18px] font-bold'>Facebook</span>: https://www.facebook.com/
                            </p>
                        </a>
                        <a href="https://www.linkedin.com/in/md-atiqur-rahman-90539b240/">
                            <p>
                                <span className='text-[18px] font-bold'>LinkedIn</span>: https://www.linkedin.com/
                            </p>
                        </a>
                        <p><span className='text-[18px] font-bold'>Educational Background</span>: Honours Student of Botany</p>
                    </div>
                </div>
            </div>
            <div className='lg:mx-[90px] section-title mt-[30px]'>
                <h1 className="text-xl text-[#363f4d] font-bold">My Skills</h1>
                <ul className="steps mt-[10px] lg:mt-[30px] w-full steps-vertical lg:steps-horizontal">
                    <li className="step step-success">Html</li>
                    <li className="step step-success">Css</li>
                    <li className="step step-success">Tailwindcss</li>
                    <li className="step step-success">Bootstrap</li>
                    <li className="step step-success">JavaScript</li>
                    <li className="step step-success">ReactJS</li>
                    <li className="step step-success">daisyUI</li>
                    <li className="step step-success">Node.js</li>
                    <li className="step step-success">Express.js</li>
                    <li className="step step-success">MongoDB</li>
                </ul>
            </div>
            <div className='lg:mx-[90px] my-[30px] lg:my-[60px] section-title'>
                <h1 className="text-xl text-[#363f4d] font-bold">My three projects (live website links)</h1>
                <ul className="mt-[10px] lg:mt-[20px] w-full">
                    <li><a href='https://gym-equipment-store.web.app/'>1. Fitness Store(a  full-stack  Gym equipment management website)</a></li>
                    <li><a href='https://independent-service-prov-47fa3.web.app/'>2. Catering By Odzemir(an independent catering service provider website)</a></li>
                    <li><a href='https://books-forlearning-a441c4.netlify.app/'>3. Books-For-Learning(a product(books) analysis website)</a></li>
                </ul>
            </div>
        </div>
    );
};

export default MyPortfolio;