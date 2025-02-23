import React, { useEffect, useState } from "react";
import { Form, Input, Button, Space } from "antd";

export const NPWPForm = () => {
  const [npwpParts, setNpwpParts] = useState({
    part1: "",
    part2: "",
    part3: "",
    part4: "",
    part5: "",
    part6: "",
  });

  useEffect(() => {
    const value = "12.343.565.8-889.998"
    setNpwpParts({
      part1: value.split(".")[0],
      part2: value.split(".")[1],
      part3: value.split(".")[2],
      part4: value.split(".")[3].split("-")[0],
      part5: value.split(".")[3].split("-")[1],
      part6: value.split(".")[4],
    })
  }, [])

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e: any, part: any, nextRef: any, prevRef: any) => {
    const { value } = e.target;

    // Update bagian tertentu hanya jika input valid
    if (/^\d*$/.test(value)) {
      setNpwpParts({ ...npwpParts, [part]: value });

      // Jika panjang input maksimal, pindah ke input berikutnya
      if (value.length === e.target.maxLength && nextRef) {
        nextRef.current.focus();
      }
    }

    // Jika pengguna menghapus seluruh karakter, pindah ke input sebelumnya
    if (value === "" && e.nativeEvent.inputType === "deleteContentBackward" && prevRef) {
      prevRef.current.focus();
    }
  };

  // Menggabungkan semua bagian NPWP
  const formattedNPWP = `${npwpParts.part1}.${npwpParts.part2}.${npwpParts.part3}.${npwpParts.part4}-${npwpParts.part5}.${npwpParts.part6}`;

  const handleSubmit = () => {
    if (formattedNPWP.length === 20) {
      alert(`NPWP yang diinput: ${formattedNPWP}`);
    } else {
      alert("Harap lengkapi NPWP!");
    }
  };

  // Referensi untuk auto-focus
  const partRefs = {
    part1: React.createRef(),
    part2: React.createRef(),
    part3: React.createRef(),
    part4: React.createRef(),
    part5: React.createRef(),
    part6: React.createRef(),
  };

  return (
    <Form
      layout="vertical"
      style={{ maxWidth: 600, margin: "auto" }}
      onFinish={handleSubmit}
    >
      <Form.Item label="NPWP">
        <Space>
          <Input
            ref={partRefs.part1}
            value={npwpParts.part1}
            onChange={(e) => handleInputChange(e, "part1", partRefs.part2, null)}
            maxLength={2}
            style={{ width: 50, textAlign: "center" }}
            placeholder="99"
          />
          .
          <Input
            ref={partRefs.part2}
            value={npwpParts.part2}
            onChange={(e) => handleInputChange(e, "part2", partRefs.part3, partRefs.part1)}
            maxLength={3}
            style={{ width: 70, textAlign: "center" }}
            placeholder="999"
          />
          .
          <Input
            ref={partRefs.part3}
            value={npwpParts.part3}
            onChange={(e) => handleInputChange(e, "part3", partRefs.part4, partRefs.part2)}
            maxLength={3}
            style={{ width: 70, textAlign: "center" }}
            placeholder="999"
          />
          .
          <Input
            ref={partRefs.part4}
            value={npwpParts.part4}
            onChange={(e) => handleInputChange(e, "part4", partRefs.part5, partRefs.part3)}
            maxLength={1}
            style={{ width: 30, textAlign: "center" }}
            placeholder="9"
          />
          -
          <Input
            ref={partRefs.part5}
            value={npwpParts.part5}
            onChange={(e) => handleInputChange(e, "part5", partRefs.part6, partRefs.part4)}
            maxLength={3}
            style={{ width: 70, textAlign: "center" }}
            placeholder="999"
          />
          .
          <Input
            ref={partRefs.part6}
            value={npwpParts.part6}
            onChange={(e) => handleInputChange(e, "part6", null, partRefs.part5)}
            maxLength={3}
            style={{ width: 70, textAlign: "center" }}
            placeholder="999"
          />
        </Space>
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};