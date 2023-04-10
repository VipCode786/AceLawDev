const form = document.getElementById("formContact");

form.addEventListener("submit",async function(e){
	e.preventDefault();

	const prePayload = new FormData(form);
	const payload = new URLSearchParams(prePayload);
	console.log([...payload])

	await fetch("https://beamerlaw.onrender.com/api/booking/contactUS", {
		method: "POST",
		 mode:"cors",
		body:payload,
		headers: {
			Accept: 'application/json',
			
		  },
	}).then(response => {
		if (response.ok) {
			alert("Your response sent to AceLawChamber");
			location.reload();
			document.body.scrollTop = 0;
		  response.json().then(json => {
			
			console.log("index",json);
		  });
		}
	}).catch(err => console.log(err))
	
})