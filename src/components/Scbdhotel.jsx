import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "../assets/kota.png";

const Scbdhotel = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building?page=0&limit=10"
      )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  return (
    <div>
      <p className="ml-20 mt-40 text-2xl font-semibold">Kuningan</p>
      <div className="grid grid-cols-4 gap-1 place-items-center pt-5 px-5">
        {data.map((builds) => {
          return (
            <>
              {builds.complex.complexName === "Kuningan"
                ? builds.images.map((tes) => (
                    <>
                      <img
                        src={`http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/${tes.fileName}`}
                        alt="img"
                        className="h-full object-cover"
                      />
                    </>
                  ))
                : null}

              {/* Karena "complex" itu object jadi cara mapnya seperti yg dibawah */}
              {/* {Object.keys(builds.complex).map((tes) => {
                console.log(builds.complex[tes].id);
                return (
                  <>
                    <p>{builds.complex[tes].id}</p>
                  </>
                );
              })} */}
            </>
          );
        })}
      </div>
      <div>
        <p className="text-xl ml-20 mt-5 font-semibold underline underline-offset-4">
          More Office in Kuningan
        </p>
        <p className="ml-20 mt-24 text-2xl font-semibold">Senayan City</p>
        <div className="grid grid-cols-4 gap-1 place-items-center pt-5 px-5">
          <img className="w-[314px] h-[240px] object-cover" src={img} alt="/" />
          <img className="w-[314px] h-[240px] object-cover" src={img} alt="/" />
          <img className="w-[314px] h-[240px] object-cover" src={img} alt="/" />
          <img className="w-[314px] h-[240px] object-cover" src={img} alt="/" />
        </div>
        <div>
          <p className="text-xl ml-20 mt-5 font-semibold underline underline-offset-4">
            More Office in Senayan City
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scbdhotel;
// {
//   data.map((builds) => {
//     return (
//       <>
//         <p> {builds.complex.complexName}</p>
//         {builds.complex.map((tes) => {
//           console.log(tes.complexName);
//           return (
//             <>
//               <img
//                 src={`http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/${tes.fileName}`}
//                 alt="img"
//                 className="h-full object-cover"
//               />
//             </>
//           );
//         })}
//       </>
//     );
//   });
// }
