import React, { Component } from 'react';
import Axios from "axios";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import {Link} from 'react-router-dom';
import Header from  './layouts/Header';

class VoiceMailSelect extends Component {
   
    state ={
        selectVoiceMail :[],
    };
   
    async componentDidMount() {
        const { data: selectVoiceMail } = await Axios.get(
          "http://localhost:3002/selectVoiceMail"
        );
        this.setState({ selectVoiceMail: selectVoiceMail.data });
        console.log(this.state.selectVoiceMail);
      }
      handleChange = (e) => {
        console.log(e.target.value);
        e.target.box.setAttribute('defaultValue',e.target.value)
      };
    
   
    render() {
        return (<>
        <Header></Header>
            <table class="table">
              <thead>
                <tr>
                  
                  <th scope="col">Name</th>
                  <th scope="col">Messages</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                  {this.state.selectVoiceMail.map((vm)=> 
                  <tr key={vm.id}>

                      <td>
                         {vm.name}
                      </td>
                      <td>
                      {vm.messages}
                      </td>
                      <td>
                        <Link to={{
                            pathname:`/listVoiceMails/${vm.id}`,state:{vm}}}><button>Load</button></Link>
                      </td>
                      </tr>)}
              </tbody>
            </table>
            </>
    
        );
    }
}

export default VoiceMailSelect;