// React is loaded and is available as React and ReactDOM
// imports should NOT be used
// incomplete test
const OPERATIONS = {
    ADD: "ADD",
    SUBTRACT: "SUBTRACT"
};

function App() {
    const [number, updateNumber] = React.useState(0);

    const [state, dispatch] = React.useReducer((state, action) => {
        /* implement reducer */
        if (action.type == OPERATIONS.ADD) {
            state += dispatch;
        } else if (action.type == OPERATIONS.SUBTRACT) {
            state -= dispatch;
        }
        return state;
    }, 0);

    /* implement dispatches */
    const add = (number) => dispatch(OPERATIONS.ADD);
    const subtract = (number) => dispatch(OPERATIONS.SUBTRACT);

    const handleNumberChange = e => updateNumber(Number(e.target.value));

    return (
        <div>
            <div id="result">{state}</div>
            <div>
                <button id="add" onClick={add}>Add</button>
                <button id="subtract" onClick={subtract}>Subtract</button>
            </div>
            <div>
                <input type="text" value={number} onChange={handleNumberChange} />
            </div>
        </div>
    );
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);