import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getresoursesDetail } from '../services/AppService'
import DataTable from '../components/Table';


function ResoursesDetail() {

    const [resoursedetail, setresoursesDetail] = useState<any[]>([]);


    const params = useParams();

    console.log(params);

    // application detail api
    const getresoursesdeatil = () => {
        getresoursesDetail(params.name)
            .then((response: any) => {
                setresoursesDetail(response.data);
                console.log(response.data, 'resou');
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
                <p className='text-xl font-bold mb-6'>Resourses Details  -  <span className='text-sm font-medium underline capitalize'> {params.name}</span></p>

                {/* data table */}
                <DataTable data={resoursedetail} />

            </div>
        </>
    );
}

export default ResoursesDetail;
