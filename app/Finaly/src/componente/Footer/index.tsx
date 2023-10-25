import { Layout, Row, Col, Typography, Divider } from 'antd';

const { Footer } = Layout;
const { Link } = Typography;

export function MyFooter() {
    return (
        <Footer style={{
            background: 'black',
            textAlign: 'center',
            maxHeight: '220px',
            width: '100vw',
            height: '100vh'
        }}>
            <Row justify="space-between" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                    <h3 style={{ color: 'white' }}>Links Úteis</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li><Link>Sobre Nós</Link></li>
                        <li><Link>Contato</Link></li>
                    </ul>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                    <h3 style={{ color: 'white' }}>Contato</h3>
                    <p style={{ color: 'white' }}>Endereço: 123 Rua Exemplo</p>
                    <p style={{ color: 'white' }}>Telefone: (123) 456-7890</p>
                    <p style={{ color: 'white' }}>Email: info@example.com</p>
                </Col>
            </Row>
            <p style={{ color: 'white' }}>© 2023 Minha Empresa. Todos os direitos reservados.</p>
            <Divider />
        </Footer>
    );
}
