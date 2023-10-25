import { useState } from 'react';
import { Row, Col, Image, Typography, Button } from 'antd';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import Programing from './programing.json';
import ListHeader from './componente/ListHeader';
import { MyFooter } from './componente/Footer';
import Sidebar from './componente/Sidebar';

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

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div style={{
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      overflowX: 'hidden',
      position: 'relative',
    }}>
      <ListHeader />
      <Row justify="center" style={{ width: '100%', margin: 0 }}>
        <Button

          type="primary"
          onClick={toggleSidebar}
          style={{ position: 'absolute', top: 10, left: 10, zIndex: 1, backgroundColor: 'pink', color: 'red' }}
        >
          {sidebarVisible ? 'Ocultar' : 'Sidebar'}
        </Button>
        {sidebarVisible && (
          <Sidebar />
        )}
        <Col xs={24} sm={24} md={14}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, staggerChildren: 0.8 }}
            style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <Text style={{ fontSize: '30px', fontWeight: '600', padding: '0 2rem', textAlign: 'center', color: 'yellow' }} className="custom-text">
              O café que fará seu código decolar para o próximo nível.
            </Text>
            <motion.div
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.5 }}
              style={{ width: '100%' }}
            >
              IMAGE TITLE
              <Image style={{ width: '80%', height: '80%' }} preview={false} src="image/Title.png" alt="title" />
            </motion.div>
            <div style={{ bottom: 1, marginTop: '50px' }}>
              <Lottie options={defaultOptions} height="80%" width="80%" />
            </div>
          </motion.div>
        </Col>
      </Row>
      <MyFooter />
    </div>
  );
}

export default PurpleCoffee;
