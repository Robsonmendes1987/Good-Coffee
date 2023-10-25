import React from 'react';
import { Row, Col, Image, Typography } from 'antd';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import Programing from './programing.json';
import { ButtonCoffe } from './componente/ButtonCoffe';
import ListHeader from './componente/ListHeader';

const { Text } = Typography;

const PurpleCoffee = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Programing,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const isWideVersion = window.innerWidth > 1024;

  return (
    <div style={{ marginTop: '80px'}}>
      <ListHeader />
      <Row justify="center">
        <Col span={14}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, staggerChildren: 0.8 }}
            style={{ position: 'absolute', bottom: 0, left: 0 }}
          >

            <Image
              style={{ width: '100%', height: 'auto' }}
              preview={false}
              src="image/blur-1.png"
              alt="light down"
            />
          </motion.div>
          OLA 1
          {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, staggerChildren: 0.8 }}
            style={{ position: 'absolute', top: 0, right: 0 }}
          > */}
          OLA 2
            <Image
              style={{ width: '100%', height: 'auto' }}
              preview={false}
              src="image/blur-2.png"
              alt=""
            />
          {/* </motion.div> */}
        </Col>
        OLA 3
        <Col span={14}>
          {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, staggerChildren: 0.8 }}
            style={{ position: 'absolute', bottom: 0, width: '100%' }}
          >
            <Image
              style={{ width: '100%', height: 'auto' }}
              preview={false}
              src="/image/Blur.svg"
              alt="light-mobile"
            />
          </motion.div> */}
        </Col>
        <Col span={24}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, staggerChildren: 0.8 }}
            style={{ marginTop: '4rem' }}
          >
            {!isWideVersion && (
              <Text
                style={{ fontSize: '30px', fontWeight: '600', padding: '0 2rem', textAlign: 'center' }}
                className="custom-text"
              >
                O café que fará seu código decolar para o próximo nível.
              </Text>
            )}
            {isWideVersion || <ButtonCoffe />}
            <motion.div
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.5 }}
              style={{ width: '100%' }}
            >
              <Image
                style={{ width: '80%', height: '80%' }}
                preview={false}
                src="image/Title.png"
                alt="title"
              />
            </motion.div>
            <div style={{  bottom: 1,  marginTop: '50px' }}>
              <Lottie options={defaultOptions} height="70%" width="80%"/>
            </div>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
}

export default PurpleCoffee;
