mytextarea = document.getElementById('mytextarea');
mydlbutton = document.getElementById('mydownloadbutton');

mydlbutton.addEventListener("click", function() {
    const ta = document.form1.mytextareaname.value;
    console.log(ta);

    var blob = new Blob([ta], { "type": "text/plain" });

    var downLoadLink = document.createElement("a");
    downLoadLink.download = "ipad_txtfile.txt";
    downLoadLink.href = window.URL.createObjectURL(blob);
    downLoadLink.click();
});