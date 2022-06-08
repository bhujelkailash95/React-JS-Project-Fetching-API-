import React, { useState } from 'react'
import {Button, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function News() {
  const [data, setData] = useState([]);
  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=397c389d924c4f13afad426f30b13d8c"
      )
      .then((response) => {
        console.log(response);
        setData(response.data.articles);
      });
  };
  return (
    <>
      <div className="container my-3">
        <Button className="btn btn-primary" onClick={getNews}>
          Fetch News
        </Button>
      </div>

      <div className="container">
        <div className="row">
          {data.map((value) => {
            return (
              <div className="col-3">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={value.urlToImage} />
                  <Card.Body>
                    <Card.Title>{value.title}</Card.Title>
                    <Card.Text>{value.description}</Card.Text>
                    <Button a href={value.url} variant="primary">
                      See more
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default News