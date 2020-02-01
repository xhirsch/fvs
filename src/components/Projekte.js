import React from "react";

const Projekte = ({}) => {
  return(
    <div className="flex flex-col pl-12 pr-12 pt-16 text-xs">

      {/* 2018 » CATSweb « Kunst am Bau – Bodengestaltung, Heidelberg */}
      <a href=""><div className="flex hover:underline mb-8">
        <div className="w-1/5 mr-8 font-bold text-right"><p>2018</p></div>
        <div className="w-4/5 text-left font-normal"><p>» CATSweb « Kunst am Bau – Bodengestaltung, Heidelberg</p></div>
      </div></a>

      {/* 2004 » Ein Held unserer Zeit « 31 Photographien */}
      <a href=""><div className="flex hover:underline mb-8">
        <div className="w-1/5 mr-8 font-bold text-right"><p>2004</p></div>
        <div className="w-4/5 text-left font-normal"><p>» Ein Held unserer Zeit « 31 Photographien</p></div>
      </div></a>

    </div>
  );
}
 
export default Projekte;
