import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import Image from "next/image";

const QrCodeGenerator = ({ text }) => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    QRCode.toDataURL(text).then((data) => {
      setSrc(data);
    });
  }, []);

  return (
    <>
      <div>
        <img src={src} alt="" />
      </div>
    </>
  );
};

export default QrCodeGenerator;
