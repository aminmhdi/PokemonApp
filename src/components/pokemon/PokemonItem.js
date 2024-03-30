import React from "react";
import PropTyes from "prop-types";
const PokemonItem = ({ pokemon }) => {
  return (
    <tr>
      <td>{pokemon.id}</td>
      <td>{pokemon.name}</td>
      <td>{pokemon.type}</td>
      <td>{pokemon.hp}</td>
      <td>{pokemon.attack}</td>
      <td>{pokemon.defense}</td>
      <td>{pokemon.sp_atk}</td>
      <td>{pokemon.sp_def}</td>
      <td>{pokemon.speed}</td>
    </tr>
  );
};
PokemonItem.propTyes = {
  pokemon: PropTyes.object.isRequired
};
export default PokemonItem;
