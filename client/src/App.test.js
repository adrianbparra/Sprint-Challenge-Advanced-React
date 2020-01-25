import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerCard from './components/PlayerCard';
import Players from "./components/Players";

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


test("App title", ()=> {
  const AppComp = rtl.render(<App/>)
  
  const hasTitle = AppComp.queryByText(/select your favorite players/i)

  expect(hasTitle).toBeInTheDocument();


})


const player = {name: "adrian", country: "USA", searches: 4, id: 134}

test("PlayerCard" , () => {
  const PlayerComp = rtl.render(<PlayerCard player={player}/>)

  const hasPlayerName = PlayerComp.queryByText(/adrian/i);
  
  expect(hasPlayerName).toBeInTheDocument();
})



test("Players Api", ()=>{
  const PlayerApi = rtl.render(<Players />)


})