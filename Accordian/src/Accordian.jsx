import React, { useState } from "react";

const Accordian = () => {
  const Data = [
    {
      id: "1",
      question: "What's your favorite movie?",
      answer:
        "I'm a big fan of sci-fi movies, and 'Arrival' is one of my favorites. It's a thought-provoking film about communication and the nature of time, which I find fascinating.",
    },
    {
      id: "2",
      question: "Tell me about yourself",
      answer:
        "Well, I'm currently an account executive at Smith, where I handle our top-performing client. Before that, I worked at an agency where I was on three different major national healthcare brands. And while I really enjoyed the work that I did, I'd love the chance to dig in much deeper with one specific healthcare company, which is why I'm so excited about this opportunity with Metro Health Center.",
    },
    {
      id: "3",
      question: "How did you hear about this position?",
      answer:
        "I heard about an opening on the product team through a friend of a friend, Akiko, and since I'm a big fan of your work and have been following you for a while I decided it would be a great role for me to apply for",
    },
  ];

  const [select, setSelect] = useState();
  const [enableMultiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const getID = (currentID) => {
    setSelect(currentID === select ? null : currentID);
  };

  const handleMultiSelection = (currentID) => {
    let cpyMultiple = [...multiple];
    const IndexOfCurrentId = cpyMultiple.indexOf(currentID);

    if (IndexOfCurrentId === -1) cpyMultiple.push(currentID);
    else cpyMultiple.splice(IndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Accordian</h1>
      <div className="wraper">
        <button onClick={() => setMultiSelection(!enableMultiSelection)}>
          Enable Multiple Selection
        </button>
        <div className="accordian">
          {Data && Data.length > 0 ? (
            Data.map((data, id) => (
              <div key={id} className="box">
                <div className="heading-item">
                  <h2>{data.question}</h2>
                  <span
                    onClick={
                      enableMultiSelection
                        ? () => {
                            handleMultiSelection(data.id);
                          }
                        : () => {
                            getID(data.id);
                          }
                    }
                  >
                    +
                  </span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(data.id) !== -1 && <p>{data.answer}</p>
                  : select === data.id && <p>{data.answer}</p>}
                {/* {select === data.id || multiple.indexOf(data.id) !== -1 ? <p>{data.answer}</p> : null} */}
              </div>
            ))
          ) : (
            <p>Data not Found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordian;
