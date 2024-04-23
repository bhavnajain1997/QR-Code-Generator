var qrInput = document.querySelector('.qr-input');
var qrBtn = document.querySelector('.qrcode-btn');
var qrcodeResult = document.getElementById("Qr_Code")
var size = document.getElementById('size').value
qrBtn.addEventListener('click',function(){
    console.log(qrInput.value)
    qrcodeResult.innerHTML = ""
     var qrInputValue = qrInput.value;
     new QRCode(qrcodeResult,qrInputValue
//     {
//         text : qrInputValue,
//         width : size,
//         height: size,
//         colorDark : "#000000",
//  colorLight : "#ffffff",
//  correctLevel : QRCode.CorrectLevel.H
//     })
     )

     qrcodeResult.style.marginTop = "20px"

    
})

