import React from 'react'

const SkillSet = ({skills}) => {
    let devSkills = '';
    if (skills) {
        const devSkills = skills.map(skill => (

            <li className="list-group-item">
                <i className="fa fa-check pr-1"></i>
                {skill}
            </li>
        ))
    }
   
  return (
    <div className="col-md-4 d-none d-lg-block">
                  <h4>Skill Set</h4>
                  <ul className="list-group">
                      {devSkills}
                  </ul>
              </div>
  )
}

export default SkillSet
