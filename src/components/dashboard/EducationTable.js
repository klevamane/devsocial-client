import React from 'react'
import Moment from 'react-moment';


const EducationTable = ({education, deleteEdu}) => {
  const educationData =   education.map(education => 
        <tr key={education._id}>
            <td>{education.school}</td>
            <td>{education.degree}</td>
            <td>
            <Moment format="DD/MM/YYY">{education.from}</Moment> - <Moment format="DD/MM/YYY">{education.to}</Moment> 
                  </td>
            <td>
                <button className="btn btn-danger" name="xpid" value={education._id} onClick={deleteEdu}>
                    Delete
                    </button>
            </td>
        </tr>
    );
  return (
    <div>
            <h4 className="mb-2">Education Credentials</h4>
            <table className="table">
              <thead>
                <tr>
                <th>School</th>
                  <th>Degree</th>
                  <th>Years</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {educationData}

                
              </tbody>
            </table>
          </div>
  )
}

export default EducationTable;
