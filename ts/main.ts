class Submit {
    private name: string;
    private groupName: string;
    private subject: string;
    private email: string;
    private msg: string;
    constructor(name: string, groupName: string, subject: string, email: string, msg: string) {
        this.name = name;
        this.groupName = groupName;
        this.subject = subject;
        this.email = email;
        this.msg = msg;
    }

    messageBuilder() {
        return `Name: ${this.name} Group Name: ${this.groupName} Subject: ${this.subject} Email: ${this.email} Message: ${this.msg}`;
    }



};

let h1Test: any = document.querySelector(".test");

function htmlChanger() {
    h1Test.innerHTML = "Done!"
}

h1Test.addEventListener('click', () => {
    htmlChanger();
});
