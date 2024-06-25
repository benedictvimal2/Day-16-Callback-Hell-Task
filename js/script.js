//Callback Hell Task
setTimeout(() => {
  document.getElementById("HID").innerText="10"
  setTimeout(() => {
    document.getElementById("HID").innerText="9"
    setTimeout(() => {
        document.getElementById("HID").innerText="8"
        setTimeout(() => {
            document.getElementById("HID").innerText="7"
            setTimeout(() => {
                document.getElementById("HID").innerText="6"
                setTimeout(() => {
                    document.getElementById("HID").innerText="5"
                    setTimeout(() => {
                        document.getElementById("HID").innerText="4"
                        setTimeout(() => {
                            document.getElementById("HID").innerText="3"
                            setTimeout(() => {
                                document.getElementById("HID").innerText="2"
                                    setTimeout(() => {
                                        document.getElementById("HID").innerText="1"
                                        setTimeout(() => {
                                            document.getElementById("HID").innerText="Happy Independence Day!!!"
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

