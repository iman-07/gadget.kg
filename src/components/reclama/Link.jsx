// import fecl from "../../assets/img/gadjet.recl.jpg";
// import recl33 from "../../assets/img/recl33.jpg";
// import recl2 from "../../assets/img/recl2.jpg";
// import recl4 from "../../assets/img/recl4.jpg";

// const Link = () => {
//   return (
//     <div className="flex justify-center py-4">
//       <div className="flex overflow-x-auto space-x-4 w-full max-w-[1170px]">
//         <img className="p-4" src={fecl} alt="Image 1" />
//         <img className="p-4" src={recl33} alt="Image 2" /> 
//         <img className="p-4" src={recl2} alt="Image 3" />
//         <img className="p-4" src={recl4} alt="Image 4" />
//       </div>
//     </div>
//   );
// };

// export default Link;


import { useEffect, useRef } from "react";
import fecl from "../../assets/img/gadjet.recl.jpg";
import recl33 from "../../assets/img/recl33.jpg";
import recl2 from "../../assets/img/recl2.jpg";
import recl4 from "../../assets/img/recl4.jpg";

const images = [fecl, recl33, recl2, recl4];

const Link = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const scrollImages = () => {
      if (scrollContainer) {
        scrollContainer.scrollBy({
          left: scrollContainer.offsetWidth, 
          behavior: "smooth", 
        });
      }
    };

    const resetScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        const isAtEnd =
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth;
        if (isAtEnd) {
          scrollContainer.scrollLeft = 0; 
        }
      }
    };

    const interval = setInterval(() => {
      scrollImages();
      resetScroll();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center py-4">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-4 w-full max-w-[1170px]"
      >
        {images.map((image, index) => (
          <img key={`img-${index}`} className="p-4" src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Link;
