// This script uses the email.js API to send an email to site owner, triggering a reply. 
// Details and documentation: https://www.emailjs.com/


function sendEmail(contactForm) {
    var templateParams = {
        from_name: contactForm.fname.value + contactForm.fname.value,
        fname: contactForm.fname.value,
        email: contactForm.email.value,
        subject: contactForm.subject.value,
        message_body: contactForm.message_body.value,
        termsAccept: contactForm.terms.value,
    }

    emailjs.send("service_fsjc9yj", "template_evpkkwd", templateParams)
        .then(function () {
            console.log("Success");
            $("#contact_form").fadeOut();
        }, function (error) {
            console.log("Error", response.text)
        });
    return false;
}