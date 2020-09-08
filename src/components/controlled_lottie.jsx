import React, { Component } from "react";
import Lottie from "react-lottie";
import Background from "./background";
import birdsData from "../lotties/birds.json";
import rocketData from "../lotties/rocket.json";

class ControlledLottie extends Component {
  state = { isStopped: true, isPaused: true, hasBirds: false };

  render() {
    const buttonStyle = {
      display: "inline-block",
      margin: "10px auto",
      marginRight: "10px",
      border: "none",
      color: "white",
      backgroundColor: "#647DFF",
      borderRadius: "2px",
      fontSize: "15px",
    };

    const defaultOptions = {
      loop: true,
      autoplay: false,
      animationData: rocketData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    const birdsOptions = {
      loop: true,
      // autoplay: true,
      animationData: birdsData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    const lottieStyle = {
      "position": "absolute",
      "left": "50%",
      "transform": "translate(-50%, 50px)",
    };

    const isOn = (!this.state.isStopped && !this.state.isPaused);

    return (
      <div className="controlled" style={{ "position": "relative", "maxWidth": "600px", "margin": "0 auto" }}>
        <div style={lottieStyle}>
          <Background isOn={isOn} />
        </div>
        <div style={lottieStyle}>
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            isStopped={this.state.isStopped}
            isPaused={this.state.isPaused}
          />
        </div>
        {this.state.hasBirds && (
          <div style={lottieStyle}>
            <Lottie
              options={birdsOptions}
              height={400}
              width={400}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}
            />
          </div>
        )}
        <button
          style={buttonStyle}
          onClick={() => {
            this.setState({ isStopped: false, isPaused: false });
            this.forceUpdate();
          }}
        >
          Lift Off!
        </button>
        <button
          style={buttonStyle}
          onClick={() => {
            this.setState({ hasBirds: !this.state.hasBirds });
            this.forceUpdate();
        }}
        >
          {this.state.hasBirds && (<span>NO BIRDS!!!</span>)}
          {!this.state.hasBirds && (<span>BIRDS!!!</span>)}
        </button>
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isPaused: !this.state.isPaused })}
        >
          Pause
        </button>
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isStopped: true })}
        >
          Stop
        </button>
        
      </div>
    );
  }
}

export default ControlledLottie;
