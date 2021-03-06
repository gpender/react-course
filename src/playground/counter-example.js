const app = document.getElementById("app");

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.onAddOne = this.onAddOne.bind(this);
        this.onSubtractOne = this.onSubtractOne.bind(this);
        this.onReset = this.onReset.bind(this);
        this.state = {
            count:this.props.count,
            name:'guy'
        };
    }
    componentDidMount(){
        const storedCount = parseInt(localStorage.getItem('count'));
        if(!Number.isNaN(storedCount)){
            this.setState(()=>{
                return{
                    count:storedCount
                }
            });
        }        
    }
    componentDidUpdate(prevProps, prevState){
        //console.log(prevProps);
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
            console.log('Save to local storage');
        }
    }
    onAddOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            }
        });
    }    
    onSubtractOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count - 1
            }
        });
    }
    onReset(){
        this.setState(()=>{
            return {
                count: 0
            }
        });
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.onAddOne}>+1</button>
                <button onClick={this.onSubtractOne}>-1</button>
                <button onClick={this.onReset}>Reset</button>
            </div>
        )
    }
}
// Counter.defaultProps={
//     count:10
// }
    ReactDOM.render(<Counter></Counter>,app);