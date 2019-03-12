import React from 'react'
import Moment from 'react-moment';

const ExperienceTable = ({experience, deleteExp}) => {
  const experiences =   experience.map(experience => 
        <tr key={experience._id}>
            <td>{experience.company}</td>
            <td>{experience.title}</td>
            <td>
            <Moment format="DD/MM/YYY">{experience.from}</Moment> - <Moment format="DD/MM/YYY">{experience.to}</Moment> 
                  </td>
            <td>
                <button className="btn btn-danger" name="xpid" value={experience._id} onClick={deleteExp}>
                    Delete
                    </button>
            </td>
        </tr>
    );
  return (
    <div>
            <h4 className="mb-2">Experience Credentials</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Title</th>
                  <th>Years</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {experiences}

                
              </tbody>
            </table>
          </div>
  )
}

export default ExperienceTable;
