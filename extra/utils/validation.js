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
let vldUser = "", inVldUser = "", count1 = 0, count2 = 0;
function validateEmail(email) {
    return emailregex.test(String(email).toLowerCase());
}


validateUsers();


function validateUsers() {
    

    users.forEach((element, index) => {
        let { traineeEmail, reviewerEmail } = element;
        if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
            vldUser += "(" + traineeEmail + " , " + reviewerEmail + ") ";
            count1++;
        }
        else {
            inVldUser += "(" + traineeEmail + " , " + reviewerEmail + ") ";
            count2++;
        }
    });

    console.log("Total valid users : ", count1);
    console.log("valid users are : ", vldUser);
    console.log("Total Invalid users : ", count2);
    console.log("Invalid users are : ", inVldUser);

}