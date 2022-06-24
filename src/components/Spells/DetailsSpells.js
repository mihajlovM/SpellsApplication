import React from "react";
import TaskAxios from './../../apis/TaskAxios';
import {Table, Button} from 'react-bootstrap'
import { withNavigation, withParams } from './../../routeconf';


class DetailsSpells extends React.Component {

    constructor(props) {
        super(props);

        this.state = { index : '' ,attack_type: '',  }
    }


    componentDidMount() {
        this.getSpellsById(this.props.params.index);
     }


     getSpellsById(index) {
        TaskAxios.get('/spells/' + index)
        .then(res => {
            // handle success
            console.log(res);
            this.setState({index: res.data.index, attack_type:res.data.attack_type});
        })
        .catch(error => {
            // handle error
            console.log(error);
            alert('Error occured please try again!');
         });
    }


    render() {
        return (
            <div>
                <h1>Details Spells</h1>
                <form>
                    <label htmlFor="index">index</label>
                    <input id="index" type="text" value={this.state.index} /><br/>
                    <label htmlFor="attack_type">Attack type</label>
                    <input id="duration" type="text" value={this.state.attack_type} onChange={(e) => this.onDurationChange(e)}/> 
                </form>
            </div>
        );
    }

}
export default withNavigation(withParams(DetailsSpells));