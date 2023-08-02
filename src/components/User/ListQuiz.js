import { Button, Card } from "react-bootstrap";
import { getQuizByUser } from "../../services/apiService";
import { useEffect } from "react";
import { useState } from "react";

const ListQuiz = (props) => {
  const [arrQuiz, setArrQuiz] = useState([]);

  useEffect(() => {
    getQuizData();
  }, []);
  const getQuizData = async () => {
    let res = await getQuizByUser();

    if (res && res.EC === 0) {
      setArrQuiz(res.DT);
    }
  };

  return (
    <>
      {arrQuiz && arrQuiz.length > 0 ? (
        arrQuiz.map((quiz, index) => {
          return (
            <Card key={`quiz-${index}`} style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`data:image/jpeg;base64,${quiz.image}`}
              />
              <Card.Body>
                <Card.Title>Quiz {quiz.id}</Card.Title>
                <Card.Text>{quiz.description}</Card.Text>
                <Button variant="primary">Bắt đầu</Button>
              </Card.Body>
            </Card>
          );
        })
      ) : (
        <span>Không có dữ liệu</span>
      )}
    </>
  );
};

export default ListQuiz;
