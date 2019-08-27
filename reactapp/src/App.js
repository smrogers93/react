import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title"
import characters from "./characters.json"

class App extends Component {

  state = {
    characters
  };

  removeCharacter = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const characters = this.state.characters.filter(character => character.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ characters });
  };

  render() {
    return (
      <Wrapper>
        <Title>Choose Your Character</Title>
        {this.state.characters.map(character => (
          <CharacterCard 
            removeCharacter={this.removeCharacter}
            id={character.id}
            key={character.key}
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
