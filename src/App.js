import React, { Component } from 'react';
import icons from "./icons.json";
import Wrapper from "./components/Wrapper";
import Intro from "./components/Intro";
import ImageCardContainer from "./components/ImageCardContainer";
import ImageCard from "./components/ImageCard";
import './App.css';


class App extends Component {

  state = {
    score: 0,
    highScore: 0,
    win: false,
    message: "",
    icons
  };

  onClick = (id, clicked) => {
    if (clicked) {
      this.displayLoserScreen();
    } else {
      // this.setState({ icons: icons[id].clicked = true})
      this.scoreCount();
      //still need to change the "picked" to true at this id
    }
  }

  //FISHER-YATES SHUFFLE ALGORITHM
  positionShuffle = (icons) => {
    var currentIndex = icons.length, temporaryVal, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -=1;

      temporaryVal = icons[currentIndex];
      icons[currentIndex] = icons[randomIndex];
      icons[randomIndex] = temporaryVal;
    }
  }

  scoreCount = () => {
    this.setState({ score: this.state.score + 1})

    if (this.state.score === 48) {
      this.displayWinnerScreen();
    } else {
      this.positionShuffle(this.state.icons);
    }
  }

  resetLevelOne = () => {
    let resetClicks = [...this.state.icons];
    resetClicks.map(icon => icon.clicked === false);

    this.setState({ score: 0, win: false })
  }

  displayLoserScreen = () => {
    this.resetLevelOne();
  }

  displayWinnerScreen =() => {
    this.resetLevelOne();
  }

  render() {
    return (
      <Wrapper>
        <ImageCardContainer>
          {this.state.icons.map(icon => (
            <ImageCard 
            key={icon.id}
            image={icon.image}
            name={icon.name}
            onClick={this.onClick}
          />
          ))}
        </ImageCardContainer>
      </Wrapper>
    );
  }
}

export default App;
