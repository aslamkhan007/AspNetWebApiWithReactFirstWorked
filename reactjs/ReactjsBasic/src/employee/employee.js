import React from 'react'
import ReactDom from 'react-dom'


class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee:[]
        };
        
    }

    componentDidMount()
    {
        
      fetch('http://localhost:51611/api/values')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            employees: result
          });
        }
      );
    }


    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                ID                                
                            </td>
                            <td>
                            FirstName
                            </td>
                            <td>
                            Gender
                            </td>
                            <td>
                            LastName
                            </td>
                            <td>
                            Salary
                            </td>
                        </tr>
                    </thead>
                    <tbody>

                      {this.state.employee.map((emp) => {
                          <tr key = {emp.ID} >
                              <td>{emp.FirstName}</td>
                              <td>{emp.Gender}</td>
                              <td>{emp.LastName}</td>
                              <td>{emp.Salary}</td>                                                          

                          </tr>

                      } )} 

                    </tbody>
                </table>
            </div>
        )

    }
}

const element = <employee></employee>
ReactDom.render(element,document.getElementById('root'));
 export default Employee



