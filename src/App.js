import React, { Component } from "react";
import Counter from "./containers/Counter";
import TextLengthCalculator from './containers/TextLengthCalculator';

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <hr/>
        <TextLengthCalculator />
        <hr/>

        <h3>description</h3>
        <p>
          This is a simple react+redux+sass starter kit that I have modified.
          The .js and .sass files are hotloaded using webpack.
        </p>
        <p>
          It consists of a counter (top) and a simple text length calculator (below).
          Redux devtools is enabled so you can explore the redux state.
        </p>

        <h3>tasks</h3>
        <ol>
          <li>One of the counter buttons is broken - fix</li>
          <li>The text length output is broken - fix</li>
          <li>Can you connect the counter to the text input so that
            <ul>
              <li>if text is typed then the counter represents the length of the text</li>
              <li>if the counter buttons are used it modifies the actual text string. This means that negative lengths are not allowed and that you will need to be able to generate random characters in response to counter actions.</li>

            </ul>
          </li>
          <li>In the <code>/styles</code> folder is a SASS file. Make this APP pretty :)</li>
        </ol>
        
      </div>
    );
  }
}

export default App;
