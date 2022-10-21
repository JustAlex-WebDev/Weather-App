import React from "react";

const TimeAndLocation = () => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-[#fff] text-xl text-center">
          Tuesday, 31 May 2022 | Local time: 12:46 PM
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-[#fff] text-2xl font-bold">Berlin, DE</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
