class _____ extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        datalogs: [] 
      };
    }
  
    componentDidMount() {
      console.log('_____________');
    
      fetch('http://localhost:8000/api/datalogs/feedbabydata')
      .then(res => res.json())
      .then( datalogs => {
        this.setState({datalogs});
        console.log(datalogs);
      }); 
    }
  
    render() {
      return (
        <div>

          <div className='flex-container'>
           
            <ul>
              {this.state.datalogs.map(d => 
                <li key={d.id}> 
                  {d.event_category} {d.date_created}
                </li>
              )}
            </ul>
     

          </div>
        </div> 
        );
    }
  }
  
  export default ________;