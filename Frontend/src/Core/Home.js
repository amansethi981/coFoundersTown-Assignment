import React, { useState, useEffect } from "react";
import { getallarticle } from "../Core/helper/coreapicall";
import Base from "./Base";
import { Card } from "react-bootstrap";
import ReadMoreReact from "read-more-react";
import "../App.css";

const Home = () => {
  const [Article, setArticle] = useState([]);
  const [error, setError] = useState(false);
  const styles = {
    color:"black",
      padding: "20px",
    fontFamily: "Arial",
    
  };
  const loadAllArticle = () => {
    getallarticle().then((data) => {
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setArticle(data);
      }
    });
  };
  useEffect(() => {
    loadAllArticle();
  }, []);

  return (
    <Base title="Home Page" description="Welcome to Home Page">
      <div>
        <h1>All Blog</h1>
        <div className="row">
          {Article.map((article, index) => {
            return (
              <div className="col-6 mb-6" style={{marginTop: '20px'}}>
                <Card>
                  <Card.Body style={styles}>
                    <ReadMoreReact
                      text={article.description}
                      min={80}
                      ideal={100}
                      max={200}
                      readMoreText="Read More ..."
                    />
                  </Card.Body>
                  {/* <p>{article.description}</p>  */}
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default Home;
