var SubmitButton = document.querySelector("#submitButton");

var submitted = anime({
    targets: '.submit',
    width: 200,
    opacity: 0.6,
    duration: 1500,
    autoplay: false,
    update: () => {
        SubmitButton.innerHTML = "Submitted&#10003";
    }
});

SubmitButton.onclick = () => submitted.play();