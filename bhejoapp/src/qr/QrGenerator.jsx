import React from 'react'
import QRCode from 'react-qr-code'
const QrGenerator = ({link}) => {
    const qrCodeStyles = {
        width: '150px', // Set the desired width
        height: '150px', // Set the desired height
    };
  return (
    <div>
        <QRCode className="text-center" value={link} style={qrCodeStyles} />
    </div>
  )
}

export default QrGenerator
