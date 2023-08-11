import React, { useEffect, useState } from 'react';
import App from '../services/AppService';
import IApplicationData from '../types/application';

import { Link } from "react-router-dom";




function Application() {

    // const [application, setApplication] = useState<IApplicationData[]>();
    const [application, setApplication] = useState<any[]>([]);
    const [resourses, setresourses] = useState<any[]>();



    // calling getapplication api
    const getallapplication = () => {
        App.getApplications()
            .then((response: any) => {
                setApplication(response.data);
                console.log(application, 'asdqwds');
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    // calling resourse api
    const getallresourses = () => {
        App.getResourses()
            .then((response: any) => {
                setresourses(response.data);
                console.log(resourses, 'asdqwds');
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
                            <ul className='user-list-app'>
                                {application?.map((item, index) => {
                                    return (
                                        <li key={index} className=''>
                                            <Link to={`/applicationdetail/${item}`}>
                                                <p>{item}</p>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>


                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-4 mt-8'>Resourses List</h1>

                        {/* application list */}
                        <div className='app-name mb-4'>
                            {/* render list */}
                            <ul className='user-list-app'>
                                {resourses?.map((resourses, index) => {
                                    return (
                                        <li key={index} className=''>
                                            <Link to={`/resoursesdetail/${resourses}`}>
                                                <p>{resourses}</p>
                                            </Link>

                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Application;
