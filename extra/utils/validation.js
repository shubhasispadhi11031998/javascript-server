let users =
    [
        {
            traineeEmail: "shubhasis1.padhi@successive.tech",
            reviewerEmail: "shubham1.jain@successive.tech"
        },
        {
            traineeEmail: "shubhasis2.padhi@successive.tech",
            reviewerEmail: "shubham2.jain@successive.tech"
        },
        {
            traineeEmail: "shubhasis13.padhi@successive.tech",
            reviewerEmail: "shubham13.jain@successive.tech"
        },
        {
            traineeEmail: "shubhasis14.padhi@successive.tech",
            reviewerEmail: "shubham4@.jain@successive.tech"
        }
    ];
let emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function validateEmail(email) {
    return emailregex.test(String(email).toLowerCase());
}

function validateUsers() {
    let validUser = [], invalidUser = [], count1 = 0, count2 = 0;
    users.forEach((element, index) => {
        let { traineeEmail, reviewerEmail } = element;
        if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
            validUser.push("(" + traineeEmail + " , " + reviewerEmail + ")");
            count1++;
        }
        else {
            invalidUser.push("(" + traineeEmail + " , " + reviewerEmail + ") ");
            count2++;
        }
    });
    const finalvaliduser = Object.assign({}, validUser);
    const finalinvaliduser = Object.assign({}, invalidUser)
    const printuser = {
        validcount: count1,
        totalvaliduser: finalvaliduser,
        invalidcount: count2,
        totalinvaliduser: finalinvaliduser
    };
    console.log(printuser);
}
validateUsers();