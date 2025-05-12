import { render, screen } from "@testing-library/react";
import { ButtonTable } from "../../../src/commons/Table";

describe("<ButtonTable/>", () => {
  test("Renders ButtonTable with 'Available' status", () => {
    render(<ButtonTable status="Available" />);
    
    
    const button = screen.getByRole('button');
    
    
    expect(button).toHaveTextContent(/Available/i);
    
    
    expect(button).toHaveStyle("background-color: #5AD07A");
  });

  test("Renders ButtonTable with 'Booked' status", () => {
    render(<ButtonTable status="Booked" />);
    
   
    const button = screen.getByRole('button');
    
    
    expect(button).toHaveTextContent(/Booked/i);
    
    
    expect(button).toHaveStyle("background-color: #FF4D4D");
  });
});

  