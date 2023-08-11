import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className='text-xl bg-cyan-600'>
                <div className='text-center w-4/5 m-auto p-4'>
                    <div className=' '>
                        <Link to="/">

                            <h1 className='text-2xl text-center font-bold text-white'>
                                Elanco Test Task
                            </h1>

                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
