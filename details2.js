const formDataDiv = document.querySelector('#formData');

const storedFormData = localStorage.getItem('formData');

if (storedFormData) {
	const formData = JSON.parse(storedFormData);

	formDataDiv.innerHTML = `
		<p>first name: ${formData.fname}</p>
		<p>last name: ${formData.lname}</p>
		<p>DOB: ${formData.DOB}</p>
		<p>Email: ${formData.email}</p>
        <p>Username: ${formData.username}</p>
        <p>phone Number: ${formData.phoneNumber}</p>
        
		
	`;
}
