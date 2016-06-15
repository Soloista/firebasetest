// below checks if the user is already signed in
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.location = 'app.html';
    }
});

var regForm = document.querySelector('form#registrationForm');
regForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let email = document.querySelector('input[name=email]').value;
    let pass = document.querySelector('input[name=pass]').value;
    firebase.auth().createUserWithEmailAndPassword(email, pass).then(function (event) {
        console.log('successful');
        window.location = 'app.html'
    }).catch(function (error) {
        console.log(error);
    })
});
