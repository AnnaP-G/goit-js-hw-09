const loadFormData = () => {
    const userInputData = localStorage.getItem('feedback-form-state');
    if (userInputData) {
        const parsedData = JSON.parse(userInputData);
        userEmail.value = parsedData.email || "";
        userMessage.value = parsedData.message || "";
    }
};

const saveFormData = () => {
    const email = userEmail.value.trim();
    const message = userMessage.value.trim();
    if (email || message) {
        localStorage.setItem(
        "feedback-form-state",
        JSON.stringify({ email, message })
        );
    } else {
    localStorage.removeItem('feedback-form-state');
    }
};

const onSubmit = (event) => {
    event.preventDefault();
    const email = userEmail.value.trim();
    const message = userMessage.value.trim();
    if (email && message) {
        console.log({ email, message });
        localStorage.removeItem('feedback-form-state');
        userEmail.value = "";
        userMessage.value = "";
    } else {
        alert("Both email and message fields must be filled in");
    }
};

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener("submit", onSubmit);
feedbackForm.addEventListener("input", saveFormData);
loadFormData();