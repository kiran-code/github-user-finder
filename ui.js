class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    // Clear all alerts
    this.clearAlert();
    
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos" class="col-md-9"></div>
    `;
  }

  clearProfile(){
    this.clearAlert();
    document.querySelector('#searchUser').value = ''; 
    this.profile.innerHTML = '';
  }

  // Show Alert
  showAlert(message, className){
    // Clear all alerts
    this.clearAlert();
    //Create a div
    const div = document.createElement('div');

    //Attach class attribute and assign a value to it
    div.className = className;

    //create a text node inside the div
    div.appendChild(document.createTextNode(message));

    // Get Parent 
    const container = document.querySelector('.searchContainer');

    // Get Sibling
    const search = document.querySelector('.search');

    // Insert div before
    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert(){
    const alert = document.querySelector('.alert');

    if(alert){
      alert.remove();
    }
  }

  showRepos(userRepos){
    console.log(userRepos);

    let output = '';

    userRepos.forEach(repo => {
      output += `
                  <div class="card card-body mb-2">
                    <div class="row">
                      <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                      </div>
                      <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watcher: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                      </div>
                    </div>
                  </div>
      `
    });

    document.querySelector('#repos').innerHTML = output;

    // let repos = `<div>
    //                 <div>

    //                 </div> 
    //             </div>`
  }
}