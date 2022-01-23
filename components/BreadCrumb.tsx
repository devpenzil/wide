import React from "react";
type btype = {
    path:string,
    img: string
}
function BreadCrumb({path, img}:btype) {
  return (
    <div>
      <section>
        <div className="w-full h-96 bg-slate-50 flex justify-center items-center bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url(${img})`}}>
            <div className="text-6xl font-bold text-white text-center" >{path}</div>
        </div>
      </section>
    </div>
  );
}

export default BreadCrumb;
