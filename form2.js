const myForm = document.querySelector('#myForm');

myForm.addEventListener('submit', function(event) {
	event.preventDefault();

	const fname = document.querySelector('#fname').value;
	const lname = document.querySelector('#lname').value;
	const DOB = document.querySelector('#DOB').value;
	const email = document.querySelector('#email').value;
	const username = document.querySelector('#username').value;
    const phoneNumber = document.querySelector('#phoneNumber').value;
    
    

	const formData = {
		fname,
		lname,
		DOB,
        email,
		username,
        phoneNumber
        


	};

	localStorage.setItem('formData', JSON.stringify(formData));

    console.log(formData);

	window.location.href = '/details2.html';
});
