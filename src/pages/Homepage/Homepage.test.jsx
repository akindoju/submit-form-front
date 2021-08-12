import { screen, render } from "@testing-library/react";
import Homepage from "./Homepage";

test("Check intitial state of components", () => {
  render(<Homepage />);

  expect.assertions(5);

  const registerBtn = screen.getByRole("button", { name: /register/i });
  const getUsersBtn = screen.getByRole("button", { name: /get users/i });
  const signInBtn = screen.getByRole("button", { name: /sign in/i });
  const logBtn = screen.getByRole("button", { name: /log/i });
  const profileBtn = screen.getByRole("button", { name: /profile/i });

  expect(registerBtn).toBeInTheDocument();
  expect(getUsersBtn).toBeInTheDocument();
  expect(signInBtn).toBeInTheDocument();
  expect(logBtn).toBeInTheDocument();
  expect(profileBtn).toBeInTheDocument();
});
