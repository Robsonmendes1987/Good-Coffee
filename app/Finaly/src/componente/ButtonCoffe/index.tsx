import { Button } from 'antd';

export function ButtonCoffe() {
  return (
    <Button
      style={{
        marginTop: '1.2rem',
        marginBottom: '1.5rem',
        lineHeight: '15px',
        fontSize: '11px',
        fontWeight: '800',
        padding: '11px 38px',
        border: '1px solid purple',
        backgroundColor: 'transparent',
      }}
      ghost
      onClick={() => {
      }}
    >
      PEGAR MEU CAFE
    </Button>
  );
};
