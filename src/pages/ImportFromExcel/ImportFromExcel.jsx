import { useState } from "react";
import * as XLSX from "xlsx";

const ImportFromExcel = () => {
  const [excelFile, setExcelFile] = useState([]);

  const readExcelFile = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = ({ target }) => {
        const bufferArray = target.result;

        const workBook = XLSX.read(bufferArray, { type: "buffer" });

        const workSheetName = workBook.SheetNames[0]; //selecting first sheet of excel file

        const workSheet = workBook.Sheets[workSheetName];

        const data = XLSX.utils.sheet_to_json(workSheet);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((data) => {
      setExcelFile(data);
      console.log(data);
    });
  };

  return (
    <div>
      <input
        type="file"
        onChange={({ target }) => {
          const file = target.files[0];
          readExcelFile(file);
        }}
      />

      <table id="logTable">
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <td>
              {excelFile.map((file, index) => {
                return (
                  <div className="list" key={index}>
                    {file.Email}
                  </div>
                );
              })}
            </td>
            <td>
              {excelFile.map((file, index) => {
                return (
                  <div className="list" key={index}>
                    {file.Password}
                  </div>
                );
              })}
            </td>
            <td>
              {excelFile.map((file, index) => {
                return (
                  <div className="list" key={index}>
                    {file.Date}
                  </div>
                );
              })}
            </td>
            <td>
              {excelFile.map((file, index) => {
                return (
                  <div className="list" key={index}>
                    {file.Status}
                  </div>
                );
              })}
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ImportFromExcel;
