import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuestionsByQuizId } from "../../../services/apiService";
import { useLocation } from "react-router-dom";
import _ from "lodash";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./DetailQuiz.scss";
import { BsArrowCounterclockwise } from "react-icons/bs";
import Question from "./Question";

const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  const location = useLocation();

  const [dataQuestion, setDataQuestion] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchQuizData();
  }, [quizId]);

  const fetchQuizData = async () => {
    let res = await getQuestionsByQuizId(quizId);
    if (res && res.EC !== 0) {
      return <span>Not Data</span>;
    } else {
      let raw = res.DT;
      let data = _.chain(raw)
        //group the elements of Array based on 'id' property
        .groupBy("id")
        //'key' is group's name, 'value' is the array of objects
        .map((value, key) => {
          let answers = [];
          let questionDescription,
            image = null;

          value.forEach((item, index) => {
            if (index === 0) {
              questionDescription = item.description;
              image = item.image;
            }
            answers.push(item.answers);
          });
          return { questionID: key, answers, questionDescription, image };
        })
        .value();
      setDataQuestion(data);
    }
  };
  console.log(dataQuestion);

  return (
    <>
      <Container>
        <Row>
          <Col className="question-container" sm={8}>
            <span className="question-title">
              {location?.state?.questionTitle}
            </span>
            <Question
              index={index}
              data={
                dataQuestion && dataQuestion.length > 0
                  ? dataQuestion[index]
                  : []
              }
            />
            <div className="question-button mt-5">
              <Button
                variant="primary"
                style={{ minWidth: "90px", fontSize: "18px" }}
              >
                Quay lại
              </Button>
              <Button
                variant="primary"
                style={{
                  minWidth: "90px",
                  fontSize: "18px",
                  marginLeft: "20px",
                }}
              >
                Tiếp
              </Button>
            </div>
          </Col>
          <Col className="display-container" sm={4}>
            <div className="display-info w-100 d-flex align-items-center justify-content-around">
              <span className="display-result">Kết quả: 100</span>
              <div className="display-countdown d-flex">
                <h3 className="hour-countdown">00:</h3>
                <h3 className="minute-countdown">00:</h3>
                <h3 className="second-countdown">00</h3>
              </div>
              <div className="display-redo">
                <span>
                  <BsArrowCounterclockwise className="me-1" />
                  Làm lại
                </span>
              </div>
            </div>
            <div className="display-question"></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DetailQuiz;
