import React from "react";

const Publikationen = ({}) => {
  return(
    <div className="flex flex-col pl-12 pr-12 pt-16 text-xs">

      {/* 2012 Ganze Teile */}
      <a href=""><div className="flex hover:underline mb-8">
        <div className="w-1/5 mr-8 font-bold text-right"><p>2012</p></div>
        <div className="w-4/5 text-left font-normal"><p>Ganze Teile</p></div>
      </div></a>

      {/* 2009 Blicke, Hoch, 1:1, … */}
      <a href=""><div className="flex hover:underline mb-8">
        <div className="w-1/5 mr-8 font-bold text-right"><p>2009</p></div>
        <div className="w-4/5 text-left font-normal"><p>Blicke, Hoch, 1:1, …</p></div>
      </div></a>

      {/* 2008 77 Augen */}
      <a href=""><div className="flex hover:underline mb-8">
        <div className="w-1/5 mr-8 font-bold text-right"><p>2008</p></div>
        <div className="w-4/5 text-left font-normal"><p>77 Augen</p></div>
      </div></a>

      {/* 2005 In einer anderen Haut */}
      <a href=""><div className="flex hover:underline mb-8">
        <div className="w-1/5 mr-8 font-bold text-right"><p>2005</p></div>
        <div className="w-4/5 text-left font-normal"><p>In einer anderen Haut</p></div>
      </div></a>

      {/* 2003 Polymorph */}
      <a href=""><div className="flex hover:underline mb-8">
        <div className="w-1/5 mr-8 font-bold text-right"><p>2003</p></div>
        <div className="w-4/5 text-left font-normal"><p>Polymorph</p></div>
      </div></a>

    </div>
  );
}
 
export default Publikationen;
