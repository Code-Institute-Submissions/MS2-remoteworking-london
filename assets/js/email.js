// This script uses the email.js API to send an email to site owner, triggering a reply. 
// Details and documentation: https://www.emailjs.com/


function sendEmail(contactForm) {
    var templateParams = {
        from_name: contactForm.fname.value + contactForm.fname.value,
        fname: contactForm.fname.value,
        email: contactForm.email.value,
        subject: contactForm.subject.value,
        message_body: contactForm.message_body.value,
    }

    emailjs.send("service_fsjc9yj", "template_evpkkwd", templateParams)
        .then(function () {
            
         // Add in redirect
        }, function (error) {
               
                
                // Add error alert
        });
        redirectThanks()
    return ;
}

function redirectThanks() {
    window.location.replace = "./thank_you.html";
}