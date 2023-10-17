document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('surveyForm');
    const submitBtn = document.getElementById('submitBtn');
    const resetBtn = document.getElementById('resetBtn');
    const popup = document.getElementById('popup');
    const popupResults = document.getElementById('popupResults');
    const closeBtn = document.getElementById('close');

    submitBtn.addEventListener('click', function() {
        if (form.checkValidity()) {
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const dob = document.getElementById('dob').value;
            const country = document.getElementById('country').value;
            const maleChecked = document.getElementById('male').checked;
            const femaleChecked = document.getElementById('female').checked;
            const gender = (maleChecked && femaleChecked) ? 'Male, Female' : (maleChecked ? 'Male' : (femaleChecked ? 'Female' : ''));
            const profession = document.getElementById('profession').value;
            const email = document.getElementById('email').value;
            const mobile = document.getElementById('mobile').value;

            popupResults.innerHTML = `
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Date of Birth:</strong> ${dob}</p>
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Profession:</strong> ${profession}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mobile Number:</strong> ${mobile}</p>
            `;

            popup.style.display = 'flex';
        } else {
            alert('Please fill out all fields.');
        }
    });

    resetBtn.addEventListener('click', function() {
        form.reset();
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        form.reset();
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
            form.reset();
        }
    });
});
