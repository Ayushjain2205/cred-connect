import React from "react";

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-1/2 border-collapse rounded-[10px]">
        <thead>
          <tr className="border-2 border-black rounded-[10px]">
            <th className="font-medium">Position</th>
            <th className="font-medium">Name</th>
            <th className="font-medium">Job</th>
            <th className="font-medium">Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-2 border-black">
            <td>1</td>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          <tr className="border-2 border-black">
            <td>1</td>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          <tr className="border-2 border-black">
            <td>1</td>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
