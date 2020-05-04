import React, { useState } from "react";
import MainRouter from './components/MainRouter';

const App = ({ }) => {

  const [open, setOpen] = useState(false);

  return (
    <main>
      <MainRouter open={open} setOpen={setOpen} />
    </main>
  );
};

export default App;
