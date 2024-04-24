var qrInput = document.querySelector('.qr-input');
var qrBtn = document.querySelector('.qrcode-btn');
var qrcodeResult = document.getElementById("Qr_Code")

qrBtn.addEventListener('click',function(){
    qrcodeResult.innerHTML = ""
     var qrInputValue = qrInput.value;
     var size = document.getElementById('size').value
     new QRCode(qrcodeResult,
    {
        text : qrInputValue,
        width : size,
        height: size,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    })
     qrcodeResult.style.marginTop = "20px"    
})

