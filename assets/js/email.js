// This script uses the email.js API to send an email to site owner, triggering a reply. 
// Details and documentation: https://www.emailjs.com/


function sendEmail(contactForm) {
    var templateParams = {
        from_name: contactForm.name.value,
        email: contactForm.email.value,
        to_name: "Bradley",
        subject: contactForm.subject.value,
        message_body: contactForm.message_body.value,
    }

    emailjs.send("service_fsjc9yj", "template_evpkkwd", templateParams)
        .then(function (response) {
            console.log("Success", response.status, response.text)
        }, function (error) {
            console.log("Error", response.status, response.text)
        });
    return false;
}