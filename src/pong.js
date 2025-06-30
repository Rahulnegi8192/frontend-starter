import { useState, useEffect } from "react";
import axios from "axios";

const Ping = () => {
  const [ping, setPing] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost/pong")
      .then((res) => setPing(res.message))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="h-screen flex items-center justify-center text-3xl font-bold text-green-600">
      {ping ? `Backend says: ${ping}` : "Loading..."}
    </div>
  );
};

export default Ping;
