import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='w-16 h-16 border-b-2 border-gray-900 animate-spin rounded-full'></div>
        </div>
    );
};

export default Loading;