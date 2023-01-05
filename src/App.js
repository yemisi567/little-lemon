import "./App.css";
import { Helmet } from "react-helmet";

import Nav from "./components/Nav";


function App() {
  return (
    <>
      {/* Meta tags with helmet  */}
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Little Lemon</title>

        <meta property="og:title" content="Little Lemon" />
        <meta property="og:type" content="Website" />
        <meta property="og:image" content="img/Asset 16@4x.png" />
        <meta
          property="og:description"
          content="Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
        />
        <meta property="og:site_name" content="Little Lemon Restaurante" />
      </Helmet>

      <Nav />


      <footer></footer>
    </>
  );
}

export default App;
