// This script uses the email.js API to send an email to site owner, triggering a reply. 
// Details and documentation: https://www.emailjs.com/


// Gather the data from the input values and send email using emailjs API call
function sendEmail(contactForm) {
    var templateParams = {
        from_name: contactForm.fname.value + contactForm.fname.value,
        fname: contactForm.fname.value,
        email: contactForm.email.value,
        subject: contactForm.subject.value,
        message_body: contactForm.message_body.value,
    }

    // If successful, redirect to thank you page, otherwise show error alert
    emailjs.send("service_fsjc9yj", "template_evpkkwd", templateParams)
        .then(function () { 
            window.location.href = "./thank_you.html";
        },function (error) {
            alert("Oh no! looks like that didn't send. Please try again")
        });
    return false;
}