import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import ImageCardContainer from "./components/ImageCardContainer";
import './App.css';
import icon from "./icons.json";


class App extends Component {

  state = {
    icon
  };

  render() {
    return (
      <Wrapper>
        <ImageCardContainer>
          {this.state.icon.map(image => (
            <ImageCard 
            image={image.image}
            name={image.name}
          />
          ))}
        </ImageCardContainer>
      </Wrapper>
    );
  }
}

export default App;
