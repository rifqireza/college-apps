import { Menu, MenuProps } from "antd";
import { VideoCameraOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

export default function SidebarLayout() {
  const items: MenuItem[] = [
    {
      key: 'zoom',
      label: 'Zoom',
      icon: <VideoCameraOutlined />,
      children: [
        { key: 'management', label: 'Zoom Management' },
        { key: 'redirect', label: 'Link Zoom' },
      ]
    }
  ]

  const onClick: MenuProps['onClick'] = () => {
    window.location.href = "/zoom-link"
  };

  return (
    <Menu
      onClick={onClick}
      mode="inline"
      style={{ height: '100vh', }}
      items={items}
    />
  )
}