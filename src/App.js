import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    //2
    // let a = 1;
    // let b = 2;
    // let c = 3;

    //3
   

    const [counter, setCounter] = useState(1); //takes in the initial state of variable
    console.log(`App rendered ${counter}`);
return (
    // <>
    // <Jason name="Jason" address="2136" />
    // <Jason name="Cory" address="2136" />
    // <Jason name="Sam" address="2136" />
    // <Jason name="Jalal" address="2136" />
    // </>

    //2
    // <>
    // <div>{a}</div>
    // <div>{b}</div>
    // <div>{c}</div>
    // </>

        <>
            <button onClick={() => { setCounter((count) => count + 1) }}>counter is {counter}</button>
        </>
);
}

export default App;

// function Jason(props) {
// return(
//     <>
//     <div>{props.name}</div>
//     <div>{props.address}</div>
//     </> //mounting: an event that starts the screen.
//         //unmounting: remove from the screen
//         //component life cycle, mounted: show, unmounted: removed
// )
// }
