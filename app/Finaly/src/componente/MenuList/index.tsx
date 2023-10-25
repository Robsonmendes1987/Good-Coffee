import { Button, Flex, FlexProps, Menu, Radio, Segmented, SegmentedProps } from "antd";

export function MenuList() {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <a href="#">Home</a>
                </Menu.Item>
                <Menu.Item key="menu">
                    <a href="#">Menu</a>
                </Menu.Item>
                <Menu.Item key="rewards">
                    <a href="#">Recompensas</a>
                </Menu.Item>
                <Menu.Item key="gift-cards">
                    <a href="#">Gift Cards</a>
                </Menu.Item>
                <Menu.Item key="stores">
                    <a href="#">Lojas</a>
                </Menu.Item>
            </Menu>
        </div>
    )
}