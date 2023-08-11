import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getApplicationDetail } from '../services/AppService'
import DataTable from '../components/Table';


function Detail() {

    const [applicationdetail, setApplicationdetail] = useState<any[]>([]);


    const params = useParams();

    console.log(params);

    // application detail api
    const getappdeatil = () => {
        getApplicationDetail(params.name)
            .then((response: any) => {
                setApplicationdetail(response.data);
                console.log(response.data, 'asdqwds');
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    useEffect(() => {
        getappdeatil();
    }, [])


    return (
        <>
            <div className='text-left w-[90%] m-auto p-4 mt-8'>
                <p className='text-xl font-bold mb-6'>Application Details  -  <span className='text-sm font-medium underline color-custom capitalize'> {params.name}</span></p>

                {/* data table */}
                <DataTable data={applicationdetail} />

            </div>
        </>
    );
}

export default Detail;
