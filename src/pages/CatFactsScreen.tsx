import { useEffect, useState } from "react";

type CatFact = {
  _id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
  source: string;
  type: string;
  used: boolean;
  user: string;
  status: {
    verified: boolean;
    sentCount: number;
  };
  __v: number;
};
const CatFactsScreen = () => {
  const [catFacts, setCatFacts] = useState<CatFact[]>([]);
  useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((response) => response.json())
      .then((data) => setCatFacts(data));
  }, []);
  return (
    <>
      {catFacts.map((fact, index) => {
        return (
          <p>
            {index} - {fact.text}
          </p>
        );
      })}
    </>
  );
};

export default CatFactsScreen;
