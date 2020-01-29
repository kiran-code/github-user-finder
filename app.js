//import and create an instance of GitHub class
const github = new GitHub();

//import and create an instance of UI class
const ui = new UI();

// Search Input 
const searchUser = document.querySelector('#searchUser');

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if(userText !== ''){
    console.log(userText);

    github.getUser(userText)
      .then(data => {
        console.log(data.profile);
       if(data.profile.message === 'Not Found'){
          // Show Alert
          ui.showAlert('User Not Found', 'alert alert-danger');
       }else {
          // Show Profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
       }
      });
  } else {
    ui.clearProfile();
  }

});

const header = document.querySelector('.navbar-brand');
header.addEventListener('click', (e) => {
  ui.clearProfile();
})


function showRepos(user){
    console.log('showRepos');
    github.getUserRepos(user.repos_url).then(data => {
      ui.showRepos(data.repos);
    });
  }