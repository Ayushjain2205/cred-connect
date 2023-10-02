import React from "react";

const Table = () => {
  const headers = ["Position", "Name", "Job", "Favorite Color"];
  const rows = [
    ["1", "Cy Ganderton", "Quality Control Specialist", "Blue"],
    ["1", "Hart Hagerty", "Desktop Support Technician", "Purple"],
    ["1", "Brice Swyre", "Tax Accountant", "Red"],
  ];

  return (
    <div className="overflow-x-auto border-2 border-black rounded-[10px]">
      <div className="flex border-b-2 border-black">
        {headers.map((header) => (
          <div key={header} className="flex-1 font-medium p-4">
            {header}
          </div>
        ))}
      </div>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex font-bold hover:bg-[#FF84C2] ${
            rowIndex !== rows.length - 1 ? "border-b-2 border-black" : ""
          }`}
        >
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className="flex-1 p-4">
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Table;
