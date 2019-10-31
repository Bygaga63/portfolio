import React from 'react';
import {ArmLeft, ArmRight, Character, Computer, Table} from './components';
import './index.scss';
import {ANIMATION_TYPE} from './entities/animation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: ANIMATION_TYPE.sleeping,
      armPath: "M 207 171",
      frequency: 3,
      amplitude: 0.1,
      xstart: 207,
      ystart: 171,
      length: 110,
      offset: 0,
      fps: 60,
    };
    this.createCurve = this.createCurve.bind(this);
    this.setAnimation = this.setAnimation.bind(this);
    this.setConfig = this.setConfig.bind(this);
    this.updateArms = this.updateArms.bind(this);
    this.loop = this.loop.bind(this);
    this.loopref = null;
  }

  createCurve(x, offset, inverted = false) {
    const { frequency, ystart, xstart, amplitude } = this.state;
    const phase = inverted ? Math.sqrt(x*frequency) - offset : Math.sqrt(x*frequency) + offset;
    return ystart - (Math.sin(phase)) * (x-xstart) * amplitude;
  }

  updateArms() {
    const { ystart, xstart, length } = this.state;
    let x = xstart;
    let dataL = `M ${xstart} ${ystart}`;
    let dataR = `M ${xstart} ${ystart}`;

    while (x < xstart + length) {
      const newYL = this.createCurve(x, this.state.offset);
      const newYR = this.createCurve(x, this.state.offset, true);
      dataL = `${dataL} L ${x} ${newYL}`;
      dataR = `${dataR} L ${x} ${newYR}`;
      x += 1;
    }
    this.setState({
      armPathL: dataL,
      armPathR: dataR,
    })
  }

  loop() {
    const { offset, animation, fps } = this.state;
    if (animation !== ANIMATION_TYPE.typing && animation !== ANIMATION_TYPE.stressed) {
      clearTimeout(this.loopRef);
      return;
    }
    this.setState({
      offset: offset + 0.3,
    });
    this.updateArms();
    this.loopRef = setTimeout(() => {
      requestAnimationFrame(this.loop);
    },(1000 / fps));
  }

  setAnimation(newAnimation, speed) {
    this.setState({
      animation: newAnimation,
      fps: speed || 60,
    });
    if (newAnimation === ANIMATION_TYPE.typing || newAnimation === ANIMATION_TYPE.stressed) {
      clearTimeout(this.loopRef);
      requestAnimationFrame(this.loop);
    }
  }

  setConfig(e) {
    const type = e.target.name;
    this.setState({
      [type]: e.target.value,
    })
  }

  render() {
    const { frequency, amplitude, animation, armPathL, armPathR } = this.state;
    return (
        <div className="app">
          <h1>ItDevelop</h1>
          <div className="wrapper">
            <ArmLeft animation={animation} armPath={armPathL} />
            <Character animation={animation} />
            <ArmRight animation={animation} armPath={armPathR} />
            <Table />
            <Computer animation={animation} />
          </div>
          <div className="controls">
            <button onClick={() => this.setAnimation('passive')}>Passive</button>
            <button onClick={() => this.setAnimation('waiting')}>Waiting</button>
            <button onClick={() => this.setAnimation('thinking')}>Thinking</button>
            <button onClick={() => this.setAnimation('typing')}>Typing</button>
            <button onClick={() => this.setAnimation('stressed', 240)}>Nailing it</button>
          </div>
          { animation === ANIMATION_TYPE.stressed &&
          <div className="sliders">
            <input
                type="range"
                step="0.01"
                name="frequency"
                value={frequency}
                onChange={this.setConfig}
                min="0"
                max="10"
            />
            <input
                type="range"
                step="0.01"
                name="amplitude"
                value={amplitude}
                onChange={this.setConfig}
                min="0.05"
                max="2"
            />
          </div>
          }
        </div>
    );
  }
}

export default App;
