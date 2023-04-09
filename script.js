const wrapper=document.querySelector(".wrapper");
genBtn=wrapper.querySelector(".form button");
qrInput=wrapper.querySelector(".form input");
qrImg=wrapper.querySelector(".qrImg img");
genBtn.addEventListener("click",()=>{
    let qrValue=qrInput.value;
    //console.log(qrValue); 
    if(!qrValue){
        return;
    }
    genBtn.innerText="loading QR....";
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${qrValue}`;
    qrImg.addEventListener('load',()=>{
        wrapper.classList.add("active");
        genBtn.innerText="Generate QR";
    })
})