import React from 'react';

const LandingLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            <div className='mx-auto max-w-screenS h-full'>{children}</div>
        </div>
    );
};

export default LandingLayout;