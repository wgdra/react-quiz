import { Form, Image } from "react-bootstrap";

const Question = (props) => {
  const { data, index } = props;

  return (
    <>
      <div className="question-content">
        <div>
          <div className="question-description">
            <span>
              Câu {data.questionID}: {data.questionDescription}
            </span>
          </div>
          <div className="question-image my-4">
            <Image
              style={{ height: "100%" }}
              src={`data:image/jpeg;base64,${data.image}`}
            />
          </div>
          <div className="question-answers">
            <span>Câu trả lời:</span>
            <Form className="ms-4">
              {data.answers &&
                data.answers.length > 0 &&
                data.answers.map((answer, index) => {
                  return (
                    <Form.Check
                      key={`answer-${index}`}
                      className="my-2"
                      style={{ fontSize: "20px" }}
                      type="radio"
                      id={answer.id}
                      label={answer.description}
                      name="answer"
                    />
                  );
                })}
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
