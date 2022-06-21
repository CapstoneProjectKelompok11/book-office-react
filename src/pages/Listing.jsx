import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ListTable from "../components/ListTable";
import { BiCaretDown, BiSearchAlt } from "react-icons/bi";

const Listing = ({item, hapus}) => {
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
          <div className="w-[1184px] h-[236px] flex row center flex-start">
            <table>
              <tr>
                <th>
                  Search
                </th>
                <th>Filter</th>
                <th>Sort by</th>
              </tr>
              <tr>
                <td>
                <form className="flex items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-white bg-gray-100/90">
                <div className="flex items-center">
                  <input
                    className="bg-transparent w-[150px] focus:outline-none mx-4 text-black"
                    type="text"
                    placeholder="Search a place"
                  />
                  <div>
                    <BiSearchAlt
                      className="mr-4 text-black cursor-pointer"
                      size={18}
                    />
                  </div>
                </div>
                </form>
                </td>
                <td>
                <form className="flex items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90">
                <div className="flex items-center">
                  <select id="location" name="location" className="bg-transparent w-[150px] focus:outline-none mx-4 text-black">
                    
                    <option value="jakarta barat">Jakarta Barat</option>
                    <option value="jakarta pusat">Jakarta Pusat</option>
                    <option value="jakarta selatan">Jakarta Selatan</option>
                    <option value="jakarta timur">Jakarta Timur</option>
                    <option value="jakarta utara">Jakarta Utara</option>
                  </select>
                  <div>
                    <BiCaretDown
                        className="mr-4 text-black cursor-pointer"
                        size={18}
                      />
                  </div>
                </div>
                </form>
                </td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <ListTable/>
                </td>
                <td></td>
              </tr>
            </table>
          </div>
          <div className="">
            {data.map((builds) => {
              return (
                <>
                  {builds.complex.city.city_name === "Jakarta Pusat"
                    ? builds.images.map(
                        (
                          tes //slice buat limitasi data yg diambil (0 sampai 1 data)
                        ) => (
                          <>
                            <NavLink to={`/detail/${builds.id}`}>
                              <img
                                src={`http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/${tes.fileName}`}
                                alt="img"
                                className="h-full object-cover"
                                key={tes.id}
                              />
                            </NavLink>
                          </>
                        )
                      )
                    : null}
                </>
              );
            })}
          </div>
        </div>
    )
}

export default Listing