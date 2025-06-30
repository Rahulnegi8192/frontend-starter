import { useState, useEffect } from "react";
import axios from "axios";

const Ping = () => {
  const [ping, setPing] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/pong`)
      .then((res) => setPing(res.data.message))
      .catch((err) => console.log(err));
  }, []);
  console.log(ping);
  return (
    <div className="h-screen flex items-center justify-center text-3xl font-bold text-green-600">
      {ping ? `Backend says: ${ping}` : "Loading..."}
    </div>
  );
};

export default Ping;
