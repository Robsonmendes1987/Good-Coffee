import React from 'react';
import { Image } from 'antd';

const MyComponent: React.FC = () => {
  return (
    <div>
      <Image
        src="./animation.css"
        alt="Descrição da imagem"
        width={200}
        height={150}
      />
    </div>
  );
};

export default MyComponent;
