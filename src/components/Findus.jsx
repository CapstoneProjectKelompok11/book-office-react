import React from "react";

const Findus = () => {
  return (
    <div>
      <p className="mt-20 mb-28 text-center text-2xl font-semibold">Find us</p>
      <div>
        <div>
          <section className="bg-white body-font relative">
            <div
              className="border m-auto mb-28 shadow-2xl"
              style={{ width: "850px"}}
            >
            <div
              className="m-auto"
              style={{ width: "850px", height: "350px" }}
            >
              <iframe
                title="map"
                width="100%"
                height="100%"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                src="https://maps.google.com/maps?q=desa%20keniten%20rt%20004%20rw%20001%20kecamatan%20geneng%20kabupaten%20ngawi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              />
            </div>
              <p className="border text-center text-xl py-5 font-semibold">
                Graha MIR Lt. 2, Jalan Pemuda No.9 Rawamangun, Jakarta Timur -
                13220
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Findus;
