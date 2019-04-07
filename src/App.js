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
    win: false,
    message: "",
    icons
  };

  handleClick = (id, picked) => {
    if (picked) {
      // this.displayLoserScreen();
      this.setState({ score: 0 });
      this.resetLevelOne();
    } else {
      this.setState({ score: this.state.score + 1})
        .then((this.state.score === 12 ? this.resetLevelOne() : this.positionShuffle() ))
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

  }

  resetLevelOne = () => {
    this.setState({ score: 0, win: false })
  }

  displayLoserScreen = () => {

  }

  displayWinnerScreen =() => {

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
          />
          ))}
        </ImageCardContainer>
      </Wrapper>
    );
  }
}

export default App;
