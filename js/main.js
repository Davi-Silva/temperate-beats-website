var Submit = /** @class */ (function () {
    function Submit(name, groupName, subject, email, msg) {
        this.name = name;
        this.groupName = groupName;
        this.subject = subject;
        this.email = email;
        this.msg = msg;
    }
    Submit.prototype.messageBuilder = function () {
        return "Name: " + this.name + " Group Name: " + this.groupName + " Subject: " + this.subject + " Email: " + this.email + " Message: " + this.msg;
    };
    return Submit;
}());
;
var h1Test = document.querySelector(".test");
function htmlChanger() {
    h1Test.innerHTML = "Done!";
}
h1Test.addEventListener('click', function () {
    htmlChanger();
});
