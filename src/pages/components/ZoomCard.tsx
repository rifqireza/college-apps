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
          height={"160px"}
          alt="example"
          style={{ objectFit: "cover" }}
          src={props.imgSrc}
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <Tooltip title={"Go To " + props.roomName}>
          <ExportOutlined onClick={() => window.open(props.zoomLink, '_blank') } />
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