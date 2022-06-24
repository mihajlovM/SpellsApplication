import React from "react";
import TaskAxios from './../../apis/TaskAxios';
import {Table, Button} from 'react-bootstrap'
import { withNavigation } from './../../routeconf';

    class Spells extends React.Component {

        constructor(props) {
            super(props);
    
            this.state = { spells : [] }
        }
    
        componentDidMount() {
            this.getSpells();
        }
    
        getSpells() {
            TaskAxios.get('/spells')
                .then(res => {
                     // handle success
                     console.log(res);
                     this.setState({spells: res.data.results});
                })
                .catch(error => {
                    // handle error
                    console.log(error);
                    alert('Error occured please try again!');
                });
        }

        goToDetails(index) {
            this.props.navigate('/spells/'+ index); 
        }

    renderSpells() {
        return this.state.spells.map((spells, index) => {
            return (
               <tr key={spells.index}>
                  <td>{spells.index}</td>
                  <td>{spells.name}</td>
                  <td>{spells.url}</td>
                  <td><Button variant="warning" onClick={() => this.goToDetails(spells.index)}>details</Button></td>
               </tr>
            )
         })
    }
        render() {
          return (
            <div>
                <h1>Spells</h1>
                <Table style={{marginTop:5}}>
                        <thead>
                            <tr>
                                <th>index</th>
                                <th>name </th>
                                <th>url</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderSpells()}
                        </tbody>         
                    </Table>



            </div>

          );
        }
      }
      export default withNavigation(Spells);