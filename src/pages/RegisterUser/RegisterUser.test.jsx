import { render, screen } from "@testing-library/react";
import RegisterUser from "./RegisterUser";

test("Check initial state of component", () => {
  render(<RegisterUser />);
  expect.assertions(2);

  const nameField = screen.getByLabelText(/name/i);
  const emailField = screen.getByLabelText(/email/i);
  const passwordField = screen.getByLabelText("Password");
  const confirmPasswordField = screen.getByLabelText("Confirm Password");

  expect(
    emailField && passwordField && nameField && confirmPasswordField
  ).toBeInTheDocument();

  expect(
    emailField && passwordField && nameField && confirmPasswordField
  ).not.toHaveTextContent();
});
