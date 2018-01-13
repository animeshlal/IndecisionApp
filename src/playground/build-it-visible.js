let buttonText = 'Show Details';
let showText = false;

const onButtonClick = () => {
    if(showText){
        buttonText = 'Show Details';
        showText = false;
    }else{
        buttonText = 'Hide Details';
        showText = true;
    }
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick = {onButtonClick}>{buttonText}</button>
            {showText && <p>Hey, This is some detail for you to see</p>}
        </div>
    );

    ReactDOM.render(template,appRoot);
}

render();