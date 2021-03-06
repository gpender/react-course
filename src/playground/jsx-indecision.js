console.log('app.js is running watched');

//JSX - Javascript XML
const app={
    title:'Indecision App',
    subtitle:'A React course',
    options:['one','two']
}
const onFormSubmit = (e)=>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(option);
        console.log(e.target);
        render();
    }
    
};
const onReset = () => {
    app.options = [];
    render();
};
const onMakeDecision = ()=>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(option);
};
const appRoot = document.getElementById('app');
const numbers = [56,101,1000];
const render = ()=>{
    const template = (
        <div>
            {app.title && <h1>{app.title}</h1>}
            {app.subtitle && <h2>{app.subtitle}</h2>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
<button disabled={app.options.length==0} onClick={onMakeDecision}>What should I do?</button>
            <ol>
                {
                    app.options.map((option)=>{
                        return <li key={option}>Option: {option}</li>;
                    })
                }
            </ol>
            <button onClick={onReset}>Reset</button>
            <form  onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>
        );
        ReactDOM.render(template, appRoot);
};

render();