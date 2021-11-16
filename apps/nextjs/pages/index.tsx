import { createContext } from "react";

const context = createContext(null); // ✅ this does autoimport correctly

export default function Home() {
  return <div>Hi</div>;
}
