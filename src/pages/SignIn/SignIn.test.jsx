import { render, screen } from "@testing-library/react";
import SignIn from "./SignIn";

test("Check initial state of component", () => {
  render(<SignIn />);
  expect.assertions(2);

  const emailField = screen.getByLabelText(/email/i);
  const passwordField = screen.getByLabelText(/password/i);

  expect(emailField && passwordField).toBeInTheDocument();
  expect(emailField && passwordField).not.toHaveTextContent();
});
