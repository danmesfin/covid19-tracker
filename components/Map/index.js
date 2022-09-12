import dynamic from "next/dynamic";

const Mymap = dynamic(() => import('./Map'), {
    ssr: false
  });
  
export default Mymap;