import React, { useState } from "react";
import { Tabs, Form, Select } from "antd";

const { TabPane } = Tabs;
const { Option } = Select;

const AddressFormWithTabs = () => {
  // Data untuk masing-masing dropdown
  const provinces = [
    { id: 1, name: "Bali" },
    { id: 2, name: "Bangka Belitung" },
    { id: 3, name: "Banten" },
  ];

  const cities = [
    { id: 1, name: "Denpasar", provinceId: 1 },
    { id: 2, name: "Tanjung Pandan", provinceId: 2 },
    { id: 3, name: "Serang", provinceId: 3 },
  ];

  const districts = [
    { id: 1, name: "Kuta", cityId: 1 },
    { id: 2, name: "Tanjung", cityId: 2 },
    { id: 3, name: "Pandeglang", cityId: 3 },
  ];

  const postalCodes = [
    { id: 1, code: "80114", districtId: 1 },
    { id: 2, code: "33411", districtId: 2 },
    { id: 3, code: "42151", districtId: 3 },
  ];

  // State untuk menyimpan data pilihan
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  // Filter dropdown berdasarkan pilihan sebelumnya
  const filteredCities = cities.filter((city) => city.provinceId === selectedProvince);
  const filteredDistricts = districts.filter((district) => district.cityId === selectedCity);
  const filteredPostalCodes = postalCodes.filter((code) => code.districtId === selectedDistrict);

  return (
    <Form layout="vertical" style={{ maxWidth: 400, margin: "auto" }}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Provinsi" key="1">
          <Select
            placeholder="Pilih Provinsi"
            style={{ width: "100%" }}
            onChange={(value) => {
              setSelectedProvince(value);
              setSelectedCity(null); // Reset pilihan lainnya
              setSelectedDistrict(null);
            }}
          >
            {provinces.map((province) => (
              <Option key={province.id} value={province.id}>
                {province.name}
              </Option>
            ))}
          </Select>
        </TabPane>
        <TabPane tab="Kota" key="2">
          <Form.Item
            label="Pilih Kota"
            name="city"
            rules={[{ required: true, message: "Harap pilih kota!" }]}
          >
            <Select
              placeholder="Pilih Kota"
              onChange={(value) => {
                setSelectedCity(value);
                setSelectedDistrict(null); // Reset kecamatan dan kode pos
              }}
              disabled={!selectedProvince}
            >
              {filteredCities.map((city) => (
                <Option key={city.id} value={city.id}>
                  {city.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </TabPane>
        <TabPane tab="Kecamatan" key="3">
          <Form.Item
            label="Pilih Kecamatan"
            name="district"
            rules={[{ required: true, message: "Harap pilih kecamatan!" }]}
          >
            <Select
              placeholder="Pilih Kecamatan"
              onChange={(value) => setSelectedDistrict(value)}
              disabled={!selectedCity}
            >
              {filteredDistricts.map((district) => (
                <Option key={district.id} value={district.id}>
                  {district.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </TabPane>
        <TabPane tab="Kode Pos" key="4">
          <Form.Item
            label="Pilih Kode Pos"
            name="postalCode"
            rules={[{ required: true, message: "Harap pilih kode pos!" }]}
          >
            <Select placeholder="Pilih Kode Pos" disabled={!selectedDistrict}>
              {filteredPostalCodes.map((code) => (
                <Option key={code.id} value={code.code}>
                  {code.code}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </TabPane>
      </Tabs>
    </Form>
  );
};

export default AddressFormWithTabs;
