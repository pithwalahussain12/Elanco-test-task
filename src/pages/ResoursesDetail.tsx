import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getresoursesDetail } from '../services/AppService'
import DataTable from '../components/Table';
import { Link } from "react-router-dom";
import Spinner from '../components/Loader';

function ResoursesDetail() {

    const [resoursedetail, setresoursesDetail] = useState<any[]>([]);

    const [loading, setLoading] = useState(true);
    const params = useParams();

    console.log(params);

    // application detail api
    const getresoursesdeatil = () => {
        getresoursesDetail(params.name)
            .then((response: any) => {
                setresoursesDetail(response.data);
                setLoading(false)
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    useEffect(() => {
        getresoursesdeatil();
    }, [])


    return (
        <>
            <div className='text-left w-[90%] m-auto p-4 mt-8'>
                {/* title */}
                <p className='text-xl font-bold mb-6 flex items-center'>
                    <Link to='/'>
                        <span className='arrow-icon mr-4'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                />
                            </svg>
                        </span>
                    </Link>
                    Resourses Details  -  <span className='text-sm ml-2 font-medium underline capitalize'> {params.name}</span></p>

                {/* data table */}
                {loading ?
                    <Spinner />
                    :
                    <DataTable data={resoursedetail} />
                }

            </div>
        </>
    );
}

export default ResoursesDetail;
