import React from 'react';
import config from '../../config';


class FeedBabyTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            date_created: ""
        };
    }

    componentDidMount() {  
        console.log('FeedBabyTimer componentDidMount works!');
        
        fetch(`${config.API_ENDPOINT}/feedbabydata`)
        .then(res => res.json())
        .then( datalogs => {
            this.setState({
              date_created: datalogs[datalogs.length-1].date_created
            });
            console.log(this.state.date_created);
        });   
    }


    render() {
        //shows the time of last baby feeding log
        let lastFeedBabyTime = 
        new Date(this.state.date_created); 

        //this returns the correct timing
        let curr = new Date();
        let prev = new Date(this.state.date_created); 
        let timer = curr - prev;
        // let h,m,s;
        let h = Math.floor(timer/1000/60/60);
        let m = Math.floor((timer/1000/60/60 - h)*60);
        let s = Math.floor(((timer/1000/60/60 - h)*60 - m)*60);

        s < 10 ? s = `0${s}`: s = `${s}`
        m < 10 ? m = `0${m}`: m = `${m}`
        h < 10 ? h = `0${h}`: h = `${h}`

        let timeSinceLastFeed = `${h}:${m}:${s}`;

        console.log(timeSinceLastFeed);

     
        



        return (
            <div className="flex-container">
                <p className='timer-text'>
                    Last Time Baby Was Fed
                </p>

                <p className='timer'>
                    {timeSinceLastFeed}
                </p>
            </div>
        ); 
    } 

}

export default FeedBabyTimer;

