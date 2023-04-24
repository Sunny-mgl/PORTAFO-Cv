import React from 'react';
   import Wave from 'react-wavify'
   
const WaveComponents = () => {
    return (
        <div>
         
            <Wave
                data-bs-theme="light"
                className='wave'
                fill='pink'
                //  paused={false}
                paused={false}
                options={
                    {
                        height: 80,
                        amplitude: 70,
                    }
                }
            />
        </div>
    );
};

export default WaveComponents;