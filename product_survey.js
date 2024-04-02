
const submitBtn = document.getElementById("submitBtn");
const userInfo = document.getElementById("userInfo");

submitBtn.addEventListener("click", submitFeedback);

// // another way
// submitBtn.onclick = submitFeedback();


function submitFeedback() {
    
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experience = document.getElementById('experience').value;

    alert('Thank you for your valuable feedback');

    userInfo.style.display = "block";

    document.getElementById('userName').innerText = username;
    document.getElementById('userAge').innerText = age;
    document.getElementById('userEmail').innerText = email;
    document.getElementById('userJob').innerText = job;
    document.getElementById('userDesignation').innerText = designation;
    document.getElementById('userProductChoice').innerText = productType;
    document.getElementById('userFeedback').innerText = feedback;
    document.getElementById('userExperience').innerText = experience;
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});

// Practice task

