import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title"
import characters from "./characters.json";
import Score from "./components/Score";

class App extends Component {

  state = {
    characters: characters,
    score: 0
  };

  shuffleCharacter = id => {
    // // Filter this.state.characters for characters with an id not equal to the id being removed
    // const characters = this.state.characters.filter(character => character.id !== id);
    // // Set this.state.characters equal to the new characters array
    // this.setState({ characters });
    this.shuffle(this.state.characters)
    this.setState({characters: this.state.characters})
  };
  
  
  shuffle = array => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array
  }

  // demo() {
  //   const returnCharNames = this.state.characters.map(char => char.name);

  //   return (
  //     returnCharNames.map(name => {
  //       if(name.includes('e')) {
  //         return (<Title>This starts with a e</Title>)
  //       } else {
  //         return (<Title>{name}</Title>)
  //       }
  //     }
  //     )
  //   )
  // }

  render() {
    return (
      <Wrapper>
        <Title>Choose Your Character</Title>
        {/* {this.demo()} */}
        <Score score={this.state.score}/>
        {this.state.characters.map(character => (
          <CharacterCard 
            shuffle={this.shuffleCharacter} 
            id={character.id} key={character.key} 
            name={character.name} 
            image={character.image}
            occupation={character.occupation}
            location={character.location}
            />
        ))}
      </Wrapper>
    )
  }
}

export default App;
