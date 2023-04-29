import React from 'react';
   import Wave from 'react-wavify'
   
const WaveComponents = () => {
    return (
        <div>
         
            <Wave
                data-bs-theme="light"
                className='wave'
                fill= '#845EC2'
                //  paused={false}
                paused={false}
                options={
                    {
                        height: 70,
                        amplitude: 60,
                    }
                }
            />
        </div>
    );
};

export default WaveComponents;