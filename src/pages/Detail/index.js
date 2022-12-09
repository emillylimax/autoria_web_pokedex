import React from "react";
import { useDetailPokemon } from "../../contexts/DetailContext";
import { Container, Card } from "react-bootstrap";

function Detail() {
  const { detailPokemon } = useDetailPokemon();
  console.log(detailPokemon);
  
  return (
    <Container className="centered">
      <Card className="cardDetail" style={{ width: "19rem" }}>
        <Card.Img variant="top" src={detailPokemon.sprites.other.dream_world.front_default} />
        <Card.Body>
          <h2 className="cardDetailName">{detailPokemon.name}</h2>
          <span><b>ID:</b> {detailPokemon.id}</span>
          <span><b>Peso:</b> {detailPokemon.weight}</span>
          <span><b>Altura:</b> {detailPokemon.height}</span>
          <span><b>Base Experience:</b> {detailPokemon.base_experience}</span>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Detail;
