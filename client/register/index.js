const form = document.getElementById('signup');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = event.target.username.value;
  const fullName = event.target.fullname.value;
  const email = event.target.email.value;
  const password = event.target.password.value;



  const registerUser = async (user) => {
    const createUser = await fetch('http://localhost:3100/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    const createdUser = await createUser.json();

    return createdUser;

  }

  const saveCollectionOfUser = async () => {


  }
})