import { Col, Row } from "antd";
import ZoomCard from "./components/ZoomCard";
import { ZoomCardType } from "./components/ZoomCard.interface";
import "./ListZoomLink.css"
import AddressFormWithTabs from "../component/SelectAddress";
import { NPWPForm } from "../component/InputNPWP";
import { useRef } from "react";
import TimeRangePicker from "../component/range-time-picker/RangeTimePicker";
import YearSelect from "../component/select-year/SelectYear";

export default function ListZoomLink() {
  const startTimeRef = useRef(null);
  const endTimeRef = useRef(null);

  return (
    <Row className="list-zoom-link" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      {zoomItems.map((item) => (
        <Col style={{ marginBottom: '30px' }}>
          <ZoomCard {...item}  />
        </Col>
      ))}

      <TimeRangePicker />

      <YearSelect placeholder="Pilih Tahun" />
      <AddressFormWithTabs />
      <NPWPForm />

    </Row>
  )
}

const zoomItems: ZoomCardType[] = [
  {
    roomName: "Kalkulus",
    imgSrc: "/assets/kalkulus-image.jpeg",
    zoomLink: "https://us06web.zoom.us/j/82693444830?pwd=HkKoGgwhD3LNrRQhMkbgFgYQ0pssFW.1",
  },
  {
    roomName: "Bahasa Inggris 2",
    imgSrc: "/assets/bahasa-inggris.jpg",
    zoomLink: "https://us06web.zoom.us/j/81405884336?pwd=SuzDu43ZSuoQaraFFdf6XjaSVnFcn2.1",
  },
  {
    roomName: "Logika Digital",
    imgSrc: "/assets/logika-digital.jpg",
    zoomLink: "https://us06web.zoom.us/j/85333895688?pwd=z1ucSjLCRRuuhJsdKbLanvPd4ErUb8.1",
  },
  {
    roomName: "Rekayasa Perangkat Lunak",
    imgSrc: "/assets/rekayasa-perangkat-lunak.jpg",
    zoomLink: "https://us06web.zoom.us/j/86348657160?pwd=bUiVXKmXTsqvoGLFoj4EW3rfpOFfk4.1",
  },
  {
    roomName: "Pemrograman Web",
    imgSrc: "/assets/pemrograman-web.jpg",
    zoomLink: "https://us06web.zoom.us/j/81036564773?pwd=KueYbC7dYXvC6DXo1DnbjLxChwDVcA.1",
  },
  {
    roomName: "Jaringan Komputer",
    imgSrc: "/assets/jaringan-komputer.jpg",
    zoomLink: "https://us06web.zoom.us/j/87453303204?pwd=p1xoq1bH9LUaUv7au6disPc8ldubNp.1",
  },
  {
    roomName: "Sistem Operasi",
    imgSrc: "/assets/sistem-operasi.jpg",
    zoomLink: "https://us06web.zoom.us/j/83042830941?pwd=oiCIFqr71bpnBDnobPoubXicZQNEY9.1",
  },
]