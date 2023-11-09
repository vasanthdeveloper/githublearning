document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const dataInput = document.getElementById('data');
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const formatSelect = document.getElementById('format');
    const qrColorInput = document.getElementById('qrColor');
    const bgColorInput = document.getElementById('bgColor');
    const qrcodeImg = document.getElementById('qrcode');
    const downloadLink = document.getElementById('downloadLink');
    const qrcodeContainer = document.getElementById('qrcode-container');

    generateBtn.addEventListener('click', () => {
        const data = encodeURIComponent(dataInput.value);
        const width = widthInput.value;
        const height = heightInput.value;
        const format = formatSelect.value;
        const qrColor = qrColorInput.value.substring(1); // Remove # from color
        const bgColor = bgColorInput.value.substring(1); // Remove # from color

        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${width}x${height}&format=${format}&color=${qrColor}&bgcolor=${bgColor}`;

        // Update the QR code image
        qrcodeImg.src = qrCodeUrl;
        qrcodeImg.alt = "QR Code";

        // Adjust the container's dimensions based on the QR code size
        qrcodeContainer.style.maxWidth = `${width}px`;
        qrcodeContainer.style.maxHeight = `${height}px`;

        // Show the download link
        downloadLink.style.display = 'block';
        downloadLink.href = qrCodeUrl;
        downloadLink.download = `qrcode.${format}`;
    });
});
