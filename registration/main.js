document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Save to local storage
    const user = {
        username: username,
        email: email,
        password: password
    };
    
    let users = localStorage.getItem('users');
    if (users) {
        users = JSON.parse(users);
    } else {
        users = [];
    }
    
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    
    document.getElementById('message').innerText = 'Registration successful!';
    document.getElementById('registrationForm').reset();
});
