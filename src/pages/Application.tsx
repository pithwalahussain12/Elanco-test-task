import React, { useEffect, useState } from 'react';
import App from '../services/AppService';
import IApplicationData from '../types/application';

import { Link } from "react-router-dom";
import Spinner from '../components/Loader';




function Application() {

    // const [application, setApplication] = useState<IApplicationData[]>();
    const [application, setApplication] = useState<any[]>([]);
    const [resourses, setresourses] = useState<any[]>();

    // loading
    const [loading, setLoading] = useState(true);



    // calling getapplication api
    const getallapplication = () => {
        App.getApplications()
            .then((response: any) => {
                setApplication(response.data);
                setLoading(false)
            })
            .catch((e: Error) => {
            });
    };

    // calling resourse api
    const getallresourses = () => {
        App.getResourses()
            .then((response: any) => {
                setresourses(response.data);

            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    // render data
    useEffect(() => {
        getallapplication();
        getallresourses();
    }, []);



    return (
        <>

            <div className='text-left w-4/5 m-auto p-4 mt-8'>
                <div className=''>
                    <div>
                        <h1 className='text-xl font-bold mb-4'>Application List</h1>
                        {/* application list */}
                        <div className='app-name'>
                            {/* render list */}
                            {loading ?
                                <Spinner></Spinner>
                                :
                                <ul className='user-list-app'>
                                    {application?.map((item, index) => {
                                        return (
                                            <li key={index} className=''>
                                                <Link to={`/applicationdetail/${item}`} className='flex items-center'>
                                                    <p>{item}

                                                    </p>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-5 h-5 ml-2 rotate-180"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                                                        />
                                                    </svg>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            }
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-4 mt-8'>Resourses List</h1>

                        {/* application list */}
                        <div className='app-name mb-4'>
                            {/* render list */}
                            {loading ?
                                <Spinner></Spinner>
                                :
                                <ul className='user-list-app'>
                                    {resourses?.map((resourses, index) => {
                                        return (
                                            <li key={index} className=''>
                                                <Link to={`/resoursesdetail/${resourses}`} className='flex items-center'>
                                                    <p>{resourses}</p>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-5 h-5 ml-2 rotate-180"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                                                        />
                                                    </svg>
                                                </Link>

                                            </li>
                                        )
                                    })}
                                </ul>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Application;
