function validation() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name == "" || email == "" || phone == "") {
        document.getElementById('warning').innerHTML = " *Please fill all fields !";
        setTimeout(() => document.getElementById('warning').innerHTML = ``, 2000);
        return false;
    }
    else if (name.length <= 1) {
        document.getElementById('warning').innerHTML = " *Please enter the valid name !";
        setTimeout(() => document.getElementById('warning').innerHTML = ``, 2000);
        return false;
    }
    else if (email.indexOf('@') <= 0) {
        document.getElementById('warning').innerHTML = " *Please enter the valid E-mail address !";
        setTimeout(() => document.getElementById('warning').innerHTML = ``, 2000);
        return false;
    }
    else if (email.charAt(email.length - 4) != '.' && email.charAt(email.length - 3) != '.') {
        document.getElementById('warning').innerHTML = " *Please enter the valid E-mail address !";
        setTimeout(() => document.getElementById('warning').innerHTML = ``, 2000);
        return false;
    }
    else if (!phone.match(/^\d{10}$/)) {
        document.getElementById('warning').innerHTML = " *Please enter the valid phone number !";
        setTimeout(() => document.getElementById('warning').innerHTML = ``, 2000);
        return false;
    }
    else {
        document.getElementById('success').innerHTML = "Thanks your form has been submitted successfully.";
        setTimeout(() => document.getElementById('success').innerHTML = ``, 2000);
        document.getElementById('name').value = ``;
        document.getElementById('email').value = ``;
        document.getElementById('phone').value = ``;
        return false;
    }
}

function check() {
    const newsemail = document.getElementById('newsemail').value;
    if (newsemail == "") {
        document.getElementById('error').innerHTML = `<i class="bi bi-x-circle-fill text-danger p-3" style="font-size: x-large;"></i>`;
        setTimeout(() => document.getElementById('error').innerHTML = ``, 2500);
        return false;
    }
    else if (newsemail.indexOf('@') <= 0) {
        document.getElementById('error').innerHTML = `<i class="bi bi-x-circle-fill text-danger p-3" style="font-size: x-large;"></i>`;
        setTimeout(() => document.getElementById('error').innerHTML = ``, 2500);
        return false;
    }
    else if (newsemail.charAt(newsemail.length - 4) != '.' && newsemail.charAt(newsemail.length - 3) != '.') {
        document.getElementById('error').innerHTML = `<i class="bi bi-x-circle-fill text-danger p-3" style="font-size: x-large;"></i>`;
        setTimeout(() => document.getElementById('error').innerHTML = ``, 2500);
        return false;
    }
    else {
        document.getElementById('error').innerHTML = `<i class="bi bi-check-circle-fill text-success p-3" style="font-size: x-large;"></i>`;
        document.getElementById('newsemail').value = "";
        setTimeout(() => document.getElementById('error').innerHTML = ``, 2500);
        return false;
    }
}

