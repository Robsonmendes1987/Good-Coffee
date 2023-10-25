import { Button, Flex, FlexProps, Menu, Radio, Segmented, SegmentedProps } from "antd";

export function MenuList() {
    return (
        <Menu mode="horizontal" style={{ backgroundColor: 'black' }}>

            <Menu.Item key="home">
                <a href="#" style={{ color: 'white' }} >Home</a>
            </Menu.Item>
            <Menu.Item key="menu">
                <a href="#" style={{ color: 'white' }}>Menu</a>
            </Menu.Item>
            <Menu.Item key="rewards">
                <a href="#" style={{ color: 'white' }}>Recompensas</a>
            </Menu.Item>
            <Menu.Item key="gift-cards">
                <a href="#" style={{ color: 'white' }}>Gift Cards</a>
            </Menu.Item>
            <Menu.Item key="stores">
                <a href="#" style={{ color: 'white' }}>Lojas</a>
            </Menu.Item>
        </Menu>

    )
}