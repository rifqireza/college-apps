import { Card, Tooltip } from "antd";
import Meta from "antd/es/card/Meta";
import { SettingOutlined, EditOutlined, ExportOutlined } from '@ant-design/icons';
import { ZoomCardType } from "./ZoomCard.interface";

export default function ZoomCard(props: ZoomCardType) {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          onClick={() => window.open(props.zoomLink, '_blank')}
          height={"160px"}
          alt={props.roomName}
          style={{ objectFit: "cover", cursor: 'pointer' }}
          src={props.imgSrc}
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <Tooltip title={"Go To " + props.roomName}>
          <ExportOutlined onClick={() => window.open(props.zoomLink, '_blank')} />
        </Tooltip>
      ]}
    >
      <Meta
        title={props.roomName}
        description="This is the description"
      />
    </Card>
  )
}