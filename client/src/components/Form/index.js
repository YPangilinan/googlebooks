import React from "react";
import "./style.css";
import Button from '@material-ui/core/Button';

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" type="text" {...props} />
    </div>
  );
}

// Destructuring the type, className, children and onClick props, applying them to the button element
export function FormBtn({ children, onClick }) {
  return (
    <Button variant="contained" color="primary" onClick={onClick} style={{ marginBottom: 10 }} id="formbtn" className={"btn"}>
      {children}
    </Button>
  );
}
