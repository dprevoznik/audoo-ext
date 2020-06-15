
import * as React from 'react';
import { hot } from "react-hot-loader/root";

interface Props {
   main: string,
   names: string[]
}

function App(props: Props) {
  var {main, names} = props;
  return (
  <div>Hello {main} {names[1]}</div>
  )
};

export default hot(App);
