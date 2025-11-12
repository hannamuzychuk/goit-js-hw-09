
let formData = {
    email: "",
    message: "",
};

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-message";

form.addEventListener("input", (evt) => {
    localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    console.log(evt.target.elements.message.value);
    localStorage.removeItem(localStorageKey);
    form.reset();

});