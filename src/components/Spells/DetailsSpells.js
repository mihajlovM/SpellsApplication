import React from "react";
import TaskAxios from './../../apis/TaskAxios';
import {Table, Button} from 'react-bootstrap'
import { withNavigation, withParams } from './../../routeconf';


class DetailsSpells extends React.Component {

    constructor(props) {
        super(props);

        this.state = { SpellsId: -1 }
    }


    componentDidMount() {
        this.getSpellsById(this.props.params.index);
     }


     getSpellsById(index) {
        TaskAxios.get('/spells/' + index)
        .then(res => {
            // handle success
            console.log(res);
            this.setState({spells: res.data});
        })
        .catch(error => {
            // handle error
            console.log(error);
            alert('Error occured please try again!');
         });
    }

    renderSpells() {
        return this.state.spells.map((spells, index) => {
            return (
               <tr key={spells.index}>
                  <td>{spells.attack_type}</td>
               </tr>
            )
         })
    }

    render() {
        return (
            <div>
                <h1>Edit movie</h1>
                <Table style={{marginTop:5}}>
                        <thead>
                            <tr>
                                <th>index</th>
                                <th>attack_type</th>
                               
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
export default withNavigation(withParams(DetailsSpells));