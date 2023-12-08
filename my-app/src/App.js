import logo from './logo.svg';
import './App.css';
import MyFunctionalGreeting from './components/MyFunctionalGreeting';
import MyFunctionalGreetingWithProps from './components/MyFunctionalGreetingWithProps';
import StatefulGreeting2 from './components/StatefulGreeting2';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import ConditionalRendingClass from './components/ConditionalRendingClass';
import ConditionalRendingFunctional from './components/ConditionalRendingFunctional';
import NestingComponents from './components/NestingComponents';
import RenderingList from './components/RenderingList';
import Clock from './components/Clock';
import LifeCyclesCDM from './components/LifeCycleCDM';
import ControlledForm from './components/ControlledForm';

function App() {
  return (
    <div className="App">
      {/* <MyFunctionalGreeting /> */}
      {/* <MyFunctionalGreetingWithProps greeting="Nice to meet you" name="mike" age="32"/> */}
      {/* <StatefulGreeting2 greeting="I'm a stateful class component" name="Mohamed"/> */}
      {/* <StatefulGreetingWithCallback greeting="I'm a stateful class component" name="Mohamed"/> */}
      {/* <StatefulGreetingWithPrevState greeting="I'm a stateful class component" name="Mohamed"/> */}
      {/* <EventsFunctional /> */}
      {/* <EventsClass /> */}
      {/* <ConditionalRendingClass /> */}
      {/* <ConditionalRendingFunctional class={false} /> */}
      {/* <NestingComponents /> */}
      {/* {<RenderingList />} */}
      {/* {<Clock />} */}
      {/* {<LifeCyclesCDM />} */}
      {<ControlledForm />}

    </div>
  );
}

// import './App.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
// import StatefulGreeting from './components/StatefulGreeting';
// import HooksCounter from "./components/HooksCounter";

// function App() {
//   return (
//     <div className="App">
//       {/* <FunctionalGreeting name="Mohamed" /> */}
//       <StatefulGreeting name="Anna" />
//       <HooksCounter name="Mike" />
//     </div>
//   );
// }


export default App;
