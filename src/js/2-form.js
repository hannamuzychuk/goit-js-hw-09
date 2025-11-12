
let formData = {
    email: "",
    message: "",
};

const form = document.querySelector(".feedback-form");

const STORAGE_KEY = "feedback-form-state";

form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value.trim();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

try {
    const savedToLS = localStorage.getItem(STORAGE_KEY);
    if (savedToLS) {
        formData = JSON.parse(savedToLS);

        form.elements.email.value = formData.email || "";
        form.elements.message.value = formData.message || ""; 
    }
}   catch (error) {
    console.log("Error reading localStorage", error);
    }

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (email === "" || message === "") {
        alert("Fill please all fields");
        return;
    }
    
    console.log("Form Data", formData);

    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: "", message: "" };
    
});