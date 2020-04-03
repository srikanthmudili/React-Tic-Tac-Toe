import React, { useState } from "react";
import Icon from "./Icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { FaTimes, FaRegCircle } from "react-icons/fa";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('');

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {    setWinMessage("Game is Over");

      return toast(itemArray[0]+" has won the game", { type: "success" });
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {setWinMessage("Game is Over");
      return toast(itemArray[3]+" has won the game", { type: "success" });
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {setWinMessage("Game is Over");
      return toast(itemArray[6]+" has won the game", { type: "success" });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {setWinMessage("Game is Over");
      return toast(itemArray[0]+" has won the game", { type: "success" });
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {setWinMessage("Game is Over");
      return toast(itemArray[1]+" has won the game", { type: "success" });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {setWinMessage("Game is Over");
      return toast(itemArray[2]+" has won the game", { type: "success" });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {setWinMessage("Game is Over");
      return toast(itemArray[0]+" has won the game", { type: "success" });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {setWinMessage("Game is Over");
      return toast(itemArray[2]+" has won the game", { type: "success" });
    }
    var c=0
     for(var i=0;i<9;i++){
       if(itemArray[i]!=='empty'){
         c++;
       }
     }
     if(c===9){
      setWinMessage("Game Tied");
      return toast('reload the game', { type: "warning" })
     }
  };

  const changeItem = itemNumber => {

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("already filled", { type: "error" });
    }

    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button color="info" block onClick={reloadGame}>
                Reload the game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-white">
              It's {isCross ? <FaTimes className="icons"></FaTimes> : <FaRegCircle className="icons"></FaRegCircle>} turn
            </h1>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;