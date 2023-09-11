import './App.css';
import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';
import PureComponent from './HOC/PureComponent';

function App() {
  return (
    <div className='App'>
 <div className="heading">Pure Component and HOC</div>

    <PureComponent/>

           <h1>HOC Component</h1>

<div className="hoc">
Hoc is higher order component, it is a code pattern that is used for minimizing codes repeat-ability and create an optimized code. Here one component holds all the common logic (that component is the HOC) that can be used by different components .
<h2>NewComponent = HOC(Wrapper Component)</h2>

<h3>
How it works??
</h3>
<div className="steps">
    <div className="step"> <span>Step One :</span> create a Hoc Component which returns and Hoc function ,hoc function holds all the logic that may be show on the browser. </div>
    <div className="step"> <span>Step Two :</span> create a Counter Component (any component that's gonna use Hoc Logic) it import's the Hoc component then export's "Hoc Component(Counter Component)"(this is the enhanced components) </div>
    <div className="step"> <span>Step Three :</span> Now in Hoc Component we have to accept a parameter say "WraperComponent" ( make sure its first letter should capital) that represents Counter componet in this case .  </div>
</div>


</div>
<div className="counter">
    <ClickCounter/>
    <HoverCounter />
</div>
  
    </div>
  );
}

export default App;
