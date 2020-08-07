import React from 'react';
import config from '../../config';


class FeedBabyTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          elapsedTime: null,
          date: this.date
        };
    
        this.countUp = this.countUp.bind(this);
        this.startCounting = this.startCounting.bind(this);
    }
    
    startCounting() {
        setInterval(this.countUp, 1000);
    }

    countUp() {
        // get total milliseconds between the times
        let time = Math.abs(Date.now() - new Date(this.state.date)) / 1000;

        // calculate (and subtract) whole days
        // let days = Math.floor(time / 86400);
        // time -= days * 86400;

        // calculate (and subtract) whole hours
        let hours = Math.floor(time / 3600) % 24;
        time -= hours * 3600;

        // calculate (and subtract) whole minutes
        let minutes = Math.floor(time / 60) % 60;
        time -= minutes * 60;

        // calculate whole seconds
        let seconds = Math.floor(time % 60); 

        //current timestamp
        let now = `${hours} hr: ${minutes} min: ${seconds} sec`
        
        this.setState(({ elapsedTime: now }));
    }
   

    componentDidMount() {          
        fetch(`${config.API_ENDPOINT}/feedbabydata`)
        .then(res => res.json())
        .then( datalogs => {
            this.setState({
              date: datalogs[datalogs.length-1].date_created
            });
        })
        .then(this.startCounting());
    }

    render() {
        return (
            <div className="flex-container">
                <p className='timer-text'>
                    How Long Since Baby Was Fed
                </p>

                <p className='timer'>
                    {this.state.elapsedTime}                   
                </p>
            </div>
        ); 
    } 

}

export default FeedBabyTimer;