class GitHub{
  constructor(){
    this.client_id = '816207b8b680378e3f21';
    this.client_secret = '0f627907633925dfce9ac4e7c08eaf465f8fde2f';
    this.repos_count = 5;
    this.repos_sort = 'created asc';
  }

  async getUser(user){
    const url = 'https://api.github.com/users';

    let profileResponse = await fetch(`${url}/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    let reposResponse = await fetch(`${url}/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await reposResponse.json();

    return{
      profile: profile,
      repos: repos
    }
  }

  async getUserRepos(url){
    console.log('getUserRepos');
    let reposResponse = await fetch(`${url}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const repos = await reposResponse.json();

    return {
      repos
    }
  }
}