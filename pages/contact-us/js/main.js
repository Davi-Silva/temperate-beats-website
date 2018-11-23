var realFileBtn = document.querySelector(".contact-section .form-container .file-picker-container #real-file");
var virtualCustomFileBtn = document.querySelector(".contact-section .form-container .file-picker-container #virtual-file-btn");
var fileNameSpan = document.querySelector(".contact-section .form-container .file-picker-container #file-name-span");
virtualCustomFileBtn.addEventListener('click', function () {
    realFileBtn.click();
});
realFileBtn.addEventListener('change', function () {
    if (realFileBtn.value) {
        fileNameSpan.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }
    else {
        fileNameSpan.innerHTML = "No file chosen, yet.";
    }
});
var ContactMessageHandler = /** @class */ (function () {
    function ContactMessageHandler(name, groupName, subject, email, message, fileName) {
        this.name = name;
        this.groupName = groupName;
        this.subject = subject;
        this.email = email;
        this.message = message;
        this.fileName = fileName;
    }
    return ContactMessageHandler;
}());
