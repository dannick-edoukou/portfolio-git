import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Moi = () => {
  return (
    < div className='text-xl font-bold text-gray-600 text-center p-8'>
      <TypeAnimation
        sequence={[
          'Qui suis-je ?',
          1000,
          'Je suis développeur front-end',
          1000,
          'Avec React JS',
          1000,
          'React Native',
          1000,
          'Tailwind CSS',
          1000,
          'Et Vite JS',
          1000
        ]}
        wrapper="span"
        speed={50}
        
        repeat={Infinity}
      />
    </div>
  );
}

export default Moi;
