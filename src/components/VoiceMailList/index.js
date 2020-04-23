import React, { Component } from 'react';
import Table from './Table';
import axios from 'axios'
import Header from  './../layouts/Header';


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data:[]
        };
      }
      

      setFolder = async (e,vm,status)=>{
          e.preventDefault();
          const {data} = await axios.get(`http://localhost:3002/message/${vm.media_id}/${status}`)
          const boxes = [...this.state.data]
          const index = this.state.data.indexOf(vm);
          vm.folder = status
          boxes[index] = vm
          this.setState({data:boxes})
          console.log(this.state.data)
      }

   async componentWillMount(){
    await axios.get('http://localhost:3002/test/'+this.props.location.state.vm.id).then(response=>{
        this.setState({
            isLoading:false,
            data:response.data,
        });
    });
    }
    
    async componentWillUpdate(){
        
    }

    render() {
        const {isLoading,data} = this.state;
        if(!isLoading){
            return (<>
                <Header></Header>
                <div>
                <Table voicemails={data} setFolder={this.setFolder}></Table>
                </div></>
);
        }
        else{
            return (<div>
                        Loading!!!
                </div>
                
                );
        }
    }
}
export default index;