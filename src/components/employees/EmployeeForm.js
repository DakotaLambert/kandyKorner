import React, { useContext, useEffect, useState } from "react";

export const EmployeeForm = () => {
  return (
    <form>
      <h2>New Employee</h2>
      <fieldset>
        <div>
          <input
            type="text"
            id="name"
            required
            autoFocus
            placeholder="Employee Name"
            value={employee.name}
            ></input>
        </div>
      </fieldset>
    </form>
  );
};
