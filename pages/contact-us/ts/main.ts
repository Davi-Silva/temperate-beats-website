let realFileBtn: any = document.querySelector(".contact-section .form-container .file-picker-container #real-file");
let virtualCustomFileBtn: any = document.querySelector(".contact-section .form-container .file-picker-container #virtual-file-btn");
let fileNameSpan: any = document.querySelector(".contact-section .form-container .file-picker-container #file-name-span");

virtualCustomFileBtn.addEventListener('click', () => {
    realFileBtn.click();
});

realFileBtn.addEventListener('change', () => {
    if(realFileBtn.value) {
        fileNameSpan.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    } else {
        fileNameSpan.innerHTML = "No file chosen, yet.";
    }


});

class ContactMessageHandler {
    private name: string;
    private groupName: string;
    private subject: string;
    private email: string;
    private message: string;
    private fileName: string;

    constructor(name: string, groupName: string, subject: string, email: string, message: string, fileName: string) {
        this.name = name;
        this.groupName = groupName;
        this.subject = subject;
        this.email = email;
        this.message = message;
        this.fileName = fileName;
    }




}