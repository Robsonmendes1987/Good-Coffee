import { Button, Drawer, Image, Row, Col, Space } from 'antd';
import React from 'react';
import { MenuList } from '../MenuList';
import { ButtonCoffe } from '../ButtonCoffe';
import Coffee from '../../coffee.json';
import Lottie from 'react-lottie';

export function ListHeader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Coffee,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const [visible, setVisible] = React.useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>

      <Drawer
        width="320"
        title={
          <Row align="middle" gutter={8}>
            <Col>
              <Image src="/image/coffee-cup.png" width={25} height={25} />
            </Col>
            <Col>Great Code</Col>
          </Row>
        }
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
      </Drawer>


      <header
        style={{
          borderBottom: '1px solid #5a5454',
          marginBottom: '-2rem',
          borderColor: '#5a5454',
          // backgroundColor: 'black'
        }}
      >

        <div
          style={{
            width: '100%',
            margin: '0 auto',
            maxWidth: 1140,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem',
            paddingBottom: '-1',
          }}
        >
          <div style={{ position: 'relative', top: '-1rem' }}>
            <Lottie options={defaultOptions} height="80%" width="80%" />
          </div>
          <Space direction="horizontal" size={4}>
            <Button
              type="text"
              style={{ color: 'purple' }}
              onClick={showDrawer}
            >

              <Image src="/image/menu.png" width={30} height={30} />
            </Button>
            <ButtonCoffe />
          </Space>
        </div>

        {/* Aqui, aplicamos estilos para centralizar o MenuList */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MenuList />
        </div>
      </header>

    </>
  );
}

export default ListHeader;
