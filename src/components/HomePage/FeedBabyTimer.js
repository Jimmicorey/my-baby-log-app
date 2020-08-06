import React from 'react';
//import config from '../../config';


class FeedBabyTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            // date_created: "",
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    // componentDidMount() {  
    //     console.log('FeedBabyTimer componentDidMount works!');
        
    //     fetch(`${config.API_ENDPOINT}/feedbabydata`)
    //     .then(res => res.json())
    //     .then( datalogs => {
    //         this.setState({
    //           date_created: datalogs[datalogs.length-1].date_created
    //         });
    //         console.log(this.state.date_created);
    //     });   
    // }
            // //this returns the correct time difference in milliseconds
            // let curr = new Date();
            // let prev = new Date(this.state.date_created); 
            // let timer = curr - prev;
            // // let h,m,s;
            // let h = Math.floor(timer/1000/60/60);
            // let m = Math.floor((timer/1000/60/60 - h)*60);
            // let s = Math.floor(((timer/1000/60/60 - h)*60 - m)*60);
    
            // s < 10 ? s = `0${s}`: s = `${s}`
            // m < 10 ? m = `0${m}`: m = `${m}`
            // h < 10 ? h = `0${h}`: h = `${h}`
    
            // let timeSinceLastFeed = `${h}:${m}:${s}`;
            
            // console.log(timeSinceLastFeed);


    render() {
        return (
            <div className="flex-container">
                <p className='timer-text'>
                    Last Time Baby Was Fed
                </p>

                <p className='timer'>
                    {/* {timeSinceLastFeed} */}
                    {this.state.date.toLocaleTimeString()}
                </p>
            </div>
        ); 
    } 

}

export default FeedBabyTimer;

