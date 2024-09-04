import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import {
  DatatableWrapper,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader,
  TableRow,
} from "react-bs-datatable";
import * as XLSX from "xlsx";
import { Button, Col, Container, Row } from "react-bootstrap";

const PdfCsv = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setData(data.users));
  }, []);

  const csvHeaders = ["Name", "Email", "Phone", "Address"];

  const csvData = data.map((item) => [
    item.firstName + " " + item.lastName,
    item.email,
    item.phone,
    item.address.address,
  ]);

  const generateCsv = () => {
    const csvContent = [
      csvHeaders.join(","),
      ...csvData.map((row) => row.join(",")),
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.csv";
    a.click();
  };

  const generatePdf = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [["Name", "Email", "Phone", "Address"]],
      body: data.map((item) => [
        item.firstName + " " + item.lastName,
        item.email,
        item.phone,
        item.address.address,
      ]),
    });
    doc.save("data.pdf");
  };

  const generateExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      data.map((item) => ({
        Name: item.firstName + " " + item.lastName,
        Email: item.email,
        Phone: item.phone,
        Address: item.address.address,
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, "data.xlsx");
  };

  const copyToClipboard = () => {
    const csvContent = [
      csvHeaders.join(","),
      ...csvData.map((row) => row.join(",")),
    ].join("\n");
    navigator.clipboard
      .writeText(csvContent)
      .then(() => {
        alert("Data copied to clipboard");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  const columns = [
    { title: "ID", prop: "id" },
    { title: "Firstname", prop: "firstName" },
    { title: "Lastname", prop: "lastName" },
    { title: "Username", prop: "username" },
    { title: "Email", prop: "email" },
    { title: "Birthdate", prop: "birthDate" },
    { title: "Phone", prop: "phone" },
    { title: "Address", prop: "address.address" },
  ];

  return (
    <Container style={{ marginTop: "10px" }}>
      <h1>Data Table</h1>
      <div
        style={{ marginBottom: "15px", marginTop: "15px", textAlign: "left" }}
      >
        <Button
          variant="primary"
          onClick={copyToClipboard}
          style={{ margin: "5px" }}
        >
          Copy to Clipboard
        </Button>
        <Button
          variant="success"
          onClick={generateCsv}
          style={{ margin: "5px" }}
        >
          Export to CSV
        </Button>
        <Button
          variant="warning"
          onClick={generateExcel}
          style={{ margin: "5px" }}
        >
          Download Excel
        </Button>
        <Button
          variant="danger"
          onClick={generatePdf}
          style={{ margin: "5px" }}
        >
          Download PDF
        </Button>
      </div>
      <Row>
        <Col>
          <DatatableWrapper
            body={data}
            headers={columns} // Ensure headers are correctly defined
            paginationOptionsProps={{
              initialState: {
                rowsPerPage: 5,
                options: [5, 10, 15, 20],
              },
            }}
          >
            <PaginationOptions />
            <table id="data-table" className="table">
              <TableHeader />
              <TableBody />
            </table>
            <Pagination />
          </DatatableWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default PdfCsv;
