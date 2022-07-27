import React, { useEffect, useState } from 'react';
import { faGreaterThan, faLessThan} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Tools.css';
import Tool from '../Home/Tool/Tool';

const Tools = () => {
    const [tools , setTools] = useState([]);

    useEffect(() =>{
        fetch('items.json')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])

    return (
        <div className='ml-[90px] mr-[90px] mb-[30px] relative'>
            <div className='flex justify-between border border-[#dddddd] py-[10px] pl-[25px] pr-[10px] mb-[30px]'>
                <div>
                    <h1 className=' text-[18px] '>Tools</h1>
                </div>
                <div className='flex'>
                    <div className='mr-[8px] border rounded-[3px] h-[30px] w-[30px] text-center hover:bg-[#f1ac06] text-[#b6b4b4] hover:text-white'>
                    <FontAwesomeIcon className='text-[12px]' icon={faLessThan} />
                    </div>
                    <div className='border rounded-[3px] h-[30px] w-[30px] text-center hover:bg-[#f1ac06] text-[#b6b4b4] hover:text-white'>
                    <FontAwesomeIcon className='text-[12px] ' icon={faGreaterThan} />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 justify-items-center gap-y-[10px]'>
                {
                    tools.map( tool => <Tool
                    key={tool._id}
                    tool = {tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;