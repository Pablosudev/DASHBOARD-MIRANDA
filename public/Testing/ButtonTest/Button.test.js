import { render, screen } from "@testing-library/react";
import React from "react";
import { ButtonTable } from "../../../src/commons/Table";




const TestButtonTable = {
    styles:{
        button:{
            borderRadius:'12px',
            backgroundColor:' ${(props) => props.status === "Available" ? "#5AD07A" : "#FF4D4D"}',
            color: 'white',
            border: 'transparent',
            width: '7.8rem',
            height: '3Rem',
            fontFamily: "Poppins",
        }
    }
}
 

describe("<ButtonTable/>", () => {
  test("Renders ButtonTable with 'Available' status", () => {
    render(<ButtonTable status="Available" />);
    const TestButtonTable = screen.getByText(/Available/i);
    expect(TestButtonTable).toBeInTheDocument();
    expect(TestButtonTable).toHaveStyle("background-color: #5AD07A");
  });

  test("Renders ButtonTable with 'Booked' status", () => {
    render(<ButtonTable status="Booked" />);
    const TestButtonTable = screen.getByText(/Booked/i);
    expect(TestButtonTable).toBeInTheDocument();
    expect(TestButtonTable).toHaveStyle("background-color: #FF4D4D");
  });

  test("Renders ButtonTable with default status", () => {
    render(<ButtonTable status="Unknown" />);
    const TestButtonTable = screen.getByText(/Unknown/i);
    expect(TestButtonTable).toBeInTheDocument();
    expect(TestButtonTable).toHaveStyle("background-color: #D3D3D3");
  });
});

  