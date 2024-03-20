// form validation 

jQuery(window).on("load", function (e) {
    jQuery(".pq-applyform .form-btn").click(function () {
        var first_name = jQuery("#first-name").val();
        var doctor_name = jQuery("#doctor-name").val();
        var disease_name = jQuery("#disease-name").val();
        var email = jQuery("#e-mail").val();

        var result;

        jQuery(".pq-applyform .pq-message").remove();
        jQuery(".pq-applyform .pq-thank-you-message").remove();

        if (first_name == "" || first_name == undefined) {
            jQuery(
                "<span class='pq-name-error-message pq-message'>Please fill the field</span>"
            ).insertAfter(".pq-applyform .name-field");
            result = false;
        } else {
            jQuery(".pq-name-error-message").remove();
            result = true;
        }

        if (email == "" || email == undefined) {
            jQuery(
                "<span class='pq-email-error-message pq-message'>Please fill the field</span>"
            ).insertAfter(".pq-applyform .e-mail-field");
            result = false;
        } else {
            jQuery(".pq-email-error-message").remove();
            result = true;
        }

        if (doctor_name == "" || doctor_name == undefined) {
            jQuery(
                "<span class='pq-doctor-name-error-message pq-message'>Please fill the field</span>"
            ).insertAfter(".pq-applyform .doctor-name-field");
            result = false;
        } else {
            jQuery(".pq-doctor-name-error-message").remove();
            result = true;
        }

        if (disease_name == "" || disease_name == undefined) {
            jQuery(
                "<span class='pq-disease-name-error-message pq-message'>Please fill the field</span>"
            ).insertAfter(".pq-applyform #disease-name");
            result = false;
        } else {
            jQuery(".pq-disease-name-error-message").remove();
            result = true;
        }

        if (result == true) {
            var email = jQuery("#email").text();
            event.preventDefault();
            jQuery.ajax({
                type: "POST",
                url: "mail.php",
                data: { email: email },
                success: function () {
                    jQuery(
                        "<span class='pq-thank-you-message pq-text-white ms-5'> Thank You For Filling The form</span>"
                    ).insertAfter(".pq-applyform .pq-button");
                },
            });
        }
    });
});



// formo submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbzkCMWUVRStX09ZcXkl-7xhAoahwmXgQlYFyzxtSJZhF4v5Jn2LmrvGyKkPcEDW_LXpSQ/exec';
const form = document.getElementById('myForm');

function sendEmail() {
    var select = document.getElementById('choose-option');
    var value = select.options[select.selectedIndex].value;
    let name = document.getElementById("patient-name").value;
    let email = document.getElementById("e-mail").value;
    let phone = document.getElementById("phone-number").value;
    let date = document.getElementById("date").value;
    let formattedDate = formatDate(date); // Convert date format to dd-mm-yyyy
    let message = document.getElementById("message").value;

    let ebody = `<div
    style="max-width: 600px; margin: 0 auto; background-color: #f5f5f5; padding: 20px; font-family: Arial, sans-serif;">
    <h2 style="color: #333; text-align: center;">Patient Information</h2>
    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
            <th style="padding: 10px; background-color: #eee;">Name</th>
            <td style="padding: 10px; background-color: #e2e8ea">${name}</td>
        </tr>
        <tr>
            <th style="padding: 10px; background-color: #eee;">Regarding</th>
            <td style="padding: 10px; background-color: #e2e8ea">${value}</td>
        </tr>
        <tr>
            <th style="padding: 10px; background-color: #eee;">Email</th>
            <td style="padding: 10px; background-color: #e2e8ea">${email}</td>
        </tr>
        <tr>
            <th style="padding: 10px; background-color: #eee;">Phone</th>
            <td style="padding: 10px; background-color: #e2e8ea"><a href="tel:${phone}">${phone}</a></td>
        </tr>
        <tr>
            <th style="padding: 10px; background-color: #eee;">Appointment Date</th>
            <td style="padding: 10px; background-color: #e2e8ea">${formattedDate} (dd-mm-yyyy)</td>
        </tr>
        <tr>
            <th style="padding: 10px; background-color: #eee;">Message</th>
            <td style="padding: 10px; background-color: #e2e8ea">${message}</td>
        </tr>
    </table>
</div>`;
    let client_mail_body = `<div style="max-width: 600px; margin: 0 auto; background-color: #222; border-radius: 5px; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <h1 style="text-align: center; color: #fff;">Appointment Confirmation</h1><br>
    <p style="color: #fff;">Dear ${name},</p>
    <p style="color: #fff; line-height: 30px;">We appreciate your scheduling a consultation with <b>Dr. Vivek Supaha</b>. Soon, a member of our team will call you to schedule an appointment that works for you. We look forward to seeing you on ${formattedDate} (dd-mm-yyyy).</p>
     <p style="color: #fff; line-height: 30px;">To cancel or reschedule your appointment before the scheduled time, please feel free to call us on <a href="tel:+91 9766911892" style="text-decoration: none;">
        <span style="color: cyan;">9766911892</span>
     </a>.</p>
    
    <div style="margin-top: 20px;">
      <p style="color: #fff; font-weight: bold;">Appointment Details:</p>
      <p style="color: #fff;"><span style="font-weight: bold;">Doctor:</span> Dr. Vivek Supaha</p>
      <p style="color: #fff;"><span style="font-weight: bold;">Date:</span> ${formattedDate} (dd-mm-yyyy)</p>
      <p style="color: #fff;"><span style="font-weight: bold;">Time:</span> to discuss with you over the phone</p>
      <p style="color: #fff;"><span style="font-weight: bold;">Location:</span> 171,sakkardara,Marchi bazar, Umred Rd, near State bank, Nagpur, Maharashtra 440024.<a href="https://www.google.com/maps/dir//Dr.+V.+G.+Supaha,+Umred+Road,+State+bank,+Shri+Saikripa+Housing+Society,+Ayurvedic+Layout,+Raghuji+Nagar,+Nagpur,+Maharashtra/@21.0850582,79.1209607,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3bd4bf7061d5eb77:0xb35ddbe68491cea7!2m2!1d79.1165966!2d21.1252945!3e0" style="text-decoration:underline; color: cyan;" target="_blank">click here to see direction</a></p>
    </div>
    
    <p style="color: #fff; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 20px;">Thank you,</p>
    <p style="color: #fff;">The Dr. Vivek Supaha Team</p>
  </div>`;
    Email.send({
        SecureToken: "b5a91d47-b7e1-421f-aaed-f248f408bdf3",
        To: 'pallnikhil6@gmail.com',
        From: "pallnikhil2000@gmail.com",
        Subject: name + " want to sheduled appointment with you.",
        Body: ebody
    }).then(
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
    );
    Email.send({
        SecureToken: "b5a91d47-b7e1-421f-aaed-f248f408bdf3",
        To: email,
        From: "pallnikhil2000@gmail.com",
        Subject: "Appointment confirmation mail from Dr. Vivek Supaha Team",
        Body: client_mail_body
    }).then(
        jQuery(function ($) {
            swal({
                title: "Form Submited Successfully!",
                text: "Check your mailbox",
                icon: "success",
                button: "close",
            });
        })
    );
}

function formatDate(date) {
    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
}

// date validation
var dateInput = document.getElementById('date');
var errorMessage = document.getElementById('error-message');
var timer;

dateInput.addEventListener('change', function () {
    var selectedDate = new Date(this.value);
    var currentDate = new Date();

    if (selectedDate < currentDate) {
        errorMessage.style.display = 'block'; // Show the error message
        dateInput.value = ''; // Clear the input value
        dateInput.setAttribute('data-placeholder', ''); // Update the placeholder
        clearTimeout(timer); // Clear any existing timer

        timer = setTimeout(function () {
            errorMessage.style.display = 'none'; // Hide the error message after 3 seconds
            var isWindowsBrowser = navigator.userAgent.indexOf("Windows") !== -1;
            if (isWindowsBrowser) {
                dateInput.setAttribute('data-placeholder', ''); // Hide the placeholder for Windows browsers
            } else {
                dateInput.setAttribute('data-placeholder', 'Appointment date'); // Restore the original placeholder
            }
        }, 2000);
    } else {
        errorMessage.style.display = 'none'; // Hide the error message
    }
});

