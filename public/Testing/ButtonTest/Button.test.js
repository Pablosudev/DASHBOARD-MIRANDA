import { render, screen } from "@testing-library/react";
import React from "react";




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
    render(<TestButtonTable status="Available" />);
    const ButtonTable = screen.getByText(/Available/i);
    expect(ButtonTable).toBeInTheDocument();
    expect(ButtonTable).toHaveStyle("background-color: #5AD07A");
  });

  test("Renders ButtonTable with 'Booked' status", () => {
    render(<TestButtonTable status="Booked" />);
    const ButtonTable = screen.getByText(/Booked/i);
    expect(ButtonTable).toBeInTheDocument();
    expect(ButtonTable).toHaveStyle("background-color: #FF4D4D");
  });

  test("Renders ButtonTable with default status", () => {
    render(<TestButtonTable status="Unknown" />);
    const ButtonTable = screen.getByText(/Unknown/i);
    expect(ButtonTable).toBeInTheDocument();
    expect(ButtonTable).toHaveStyle("background-color: #D3D3D3");
  });
});

  