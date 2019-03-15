import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProfileGithub extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clientSecret: '5ccb89f9952ddead117d105042f9f2175c798a95',
            clientId: 'Iv1.18399b5ce8dd0ae3',
            count: 5,
            sort: 'created asc',
            repos: []
        }
    }
    componentDidMount(){
        console.log('tttttttttttt ', this.props);
        const { githubusername } = this.props;
        const { sort, count, clientId, clientSecret } = this.state;

        fetch(`https://api.github.com/users/${githubusername}/repos?per_page=${count}&sort=${sort}&clientId=${clientId}
        &client_secret=${clientSecret}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ repos: data })
            })
            .catch(err => console.log(err))
    }

   
    
  render() {
      console.log('*****State ', this.state.repos);
      const { repos } = this.state; 
      let respositoryItems;
      if(repos.length > 0) {
          
        // let htm = repos.html_url.splice()
      respositoryItems = repos.map((repo) => (
                <div key={repo.id} className="card card-body mb-2">
                    <div className="row">
                    <div className="col-md-6">
                    <h4>
                        <Link to={repo.html_url} className="text-info" target="_blank">
                        {repo.name}
                    </Link>
                    </h4>
                    <p>{repo.description}</p>
                    </div>
                    <div className="col-md-6">
                        <span className="badge badge-info mr-1">Stars: {repo.stargazers_count}</span>
                        <span className="badge badge-success mr-1">Watchers: {repo.forks_count}</span>
                        <span className="badge badge-secondary mr-1">Watcher: {repo.watchers_count }</span>
                    </div>
                    </div>
                </div>
      )
      )
      
      }
    return (
      <div>
          <hr />

        <h1>Latest Github repositories</h1>
        {respositoryItems}
      </div>
    )
  }
}

ProfileGithub.propTypes = {
    username: PropTypes.string.isRequired
}

export default ProfileGithub;
