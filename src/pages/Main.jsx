import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import Card from "../components/Card";
import Section from "../components/Section";
import { useData, useDataDispatch } from "../context/use-data";
import axios from "axios";

const Main = () => {
  const [offset, setOffset] = useState(0);
  const dispatch = useDataDispatch();
  const data = useData();
  let characters = [];
  useEffect(() => {
    const getData = async () => {
      const baseURL = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=97dac5fa3130452450cc9578cc89bc11&hash=76b71c8ab0592cebb804063f1291c891&limit=30&offset=${offset}`;
      axios
        .get(baseURL)
        .then((response) => {
          dispatch({ type: "SUCCESS", payload: response.data });
        })
        .catch((error) => {
          dispatch({ type: "FERROR" });
        });
    };

    getData();
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setOffset((prev) => prev + 30);
        console.log("you're at the bottom of the page. offset : " + offset);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [dispatch, offset]);

  if (data.loading === false) {
    characters = Array.from(data.characters);
  }
  return (
    <Layout>
      <Section>
        {characters.map((item) => {
          return (
            <Card
              id={item.id}
              key={item.id}
              width="240px"
              height="300px"
              image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              title={item.name}
              description={
                item.description !== ""
                  ? item.description.slice(0, 160) + "..."
                  : "There is no description."
              }
              />
              );
            })}
        {data.loading && <div className="loading">Loading...</div>}
      </Section>
    </Layout>
  );
};

export default Main;
