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
        // get total seconds between the times
        let delta = Math.abs(Date.now() - new Date(this.state.date)) / 1000;

        // calculate (and subtract) whole days
        let days = Math.floor(delta / 86400);
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        let hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        let minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        // what's left is seconds
        let seconds = Math.floor(delta % 60); 

        //current timestamp
        let now = `${days} dy: ${hours} hr: ${minutes} min`
        //let now = new Date((Date.now()-new Date(this.state.date))).toString('H:mm:ss');
        this.setState(({ elapsedTime: now }));



      }
   

    componentDidMount() {  
        console.log('FeedBabyTimer componentDidMount works!');
        
        fetch(`${config.API_ENDPOINT}/feedbabydata`)
        .then(res => res.json())
        .then( datalogs => {
            this.setState({
              date: datalogs[datalogs.length-1].date_created
            });
            console.log(this.state.date);
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