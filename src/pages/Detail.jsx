import React, { useContext } from "react";
import Section from "../components/Section";
import Layout from "../layouts/Layout";
import { useParams } from "react-router-dom";
import { useData } from "../context/use-data";
const Detail = (props) => {
  const { characterId } = useParams();
  const data = useData();
  let characterList = [];
  let character = {};
  characterList = Array.from(data.characters);
  character = characterList.filter(
    (item) => item.id.toString() === characterId.substring(1)
  )[0];

  return (
    <Layout>
      <Section>
        <div className="detail-page">
          <div className="series">
            <h2 className="series-list-title">Series</h2>
            <ul className="series-list">
              {character.series.items.map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })}
            </ul>
          </div>
          <div className="main-tag">
            <img
              className="character-picture"
              src={character.thumbnail.path + ".jpg"}
              width="300px"
              height="300px"
              alt="Character's overview"
            />

            <h1 className="character-name">{character.name}</h1>

            <p className="character-description">
              {character.description !== ""
                ? character.description
                : "There's no description."}
            </p>
          </div>
          <div className="comics">
            <h2 className="comics-list-title">Comics</h2>
            <ul className="comics-list">
              {character.comics.items.map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })}
            </ul>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Detail;
