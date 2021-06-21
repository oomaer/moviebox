
import {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../Homepage/cover.css';
//import './coverpage2.css';

class ContentPage2 extends Component {

    constructor(props){
        super(props);
        this.state = {
            id : this.props.match.params.id,
            content: {},
            details: {},
            found: true
            
        }
    }

    componentDidMount(){
        fetch('http://localhost:4000/getContentData', {
                method: 'post',
                headers : {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    id : this.state.id
                })
            }).then(response => {
                if(!response.ok){  
                    this.setState({found: false});  
                }
                else{
                    response.json().then(result => {
                        this.setState({content: result})
                    })
                }
            
            })
            .catch(err => {
                this.setState({statusMsg: 'Error Connecting to Server'})
            });

            fetch('http://localhost:4000/getContentDetails', {
                method: 'post',
                headers : {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    id : this.state.id
                })
            }).then(response => {
                if(!response.ok){  
                    this.setState({found: false});  
                }
                else{
                    response.json().then(result => {
                        console.log(result);
                        this.setState({details: result})
                    })
                }
            
            })
            .catch(err => {
                this.setState({statusMsg: 'Error Connecting to Server'})
            });
    }


    render(){
        console.log(this.state.content);
        const {content} = this.state
        const backgroundimage = {'background-image': `url(${content.COVER})`};
        return(
            <div className = 'contentpage-container'>
                <div className = 'contentpage-content'>
                        <div className = 'cover-content'>
                            <iframe title = 'trailer'
                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                            </iframe>
                            <div>
                                <img alt = 'movie' src = {content.IMAGE}></img>
                                <div className = 'contentpage-content-details'> 
                                    <h1>{content.TITLE}</h1>
                                    <p>{content.OVERVIEW}</p>
                                </div>
                            </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default withRouter(ContentPage2);