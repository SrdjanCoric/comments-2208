/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddCommentForm from "./AddCommentForm";

test("contains h2 heading", () => {
  render(<AddCommentForm />);
  const heading = screen.getByRole("heading", {
    name: "Post a Comment",
    level: 2,
  });
  expect(heading).toBeInTheDocument();
});
test("changes the input state when author is changed", async () => {
  const user = userEvent.setup();
  const onSubmit = jest.fn();
  render(<AddCommentForm onSubmit={onSubmit} />);
  const inputAuthor = screen.getByRole("textbox", { name: "Your Name" });
  await user.type(inputAuthor, "Srdjan");
  expect(inputAuthor).toHaveValue("Srdjan");
});
test("changes the input state when body is changed", async () => {
  const user = userEvent.setup();
  const onSubmit = jest.fn();
  render(<AddCommentForm onSubmit={onSubmit} />);
  const inputBody = screen.getByRole("textbox", { name: "Your Comment" });
  await user.type(inputBody, "Comment");
  expect(inputBody).toHaveValue("Comment");
});
test("calls onSubmit when form is submitted", async () => {
  const user = userEvent.setup();
  const onSubmit = jest.fn();
  render(<AddCommentForm onSubmit={onSubmit} />);
  const submitButton = screen.getByRole("button", { name: "Submit" });
  await user.click(submitButton);
  expect(onSubmit.mock.calls.length).toBe(1);
});
test("calls onSubmit and passed the new comment in", async () => {
  const user = userEvent.setup();
  const onSubmit = jest.fn();
  render(<AddCommentForm onSubmit={onSubmit} />);
  const submitButton = screen.getByRole("button", { name: "Submit" });
  const inputAuthor = screen.getByRole("textbox", { name: "Your Name" });
  const inputBody = screen.getByRole("textbox", { name: "Your Comment" });
  await user.type(inputAuthor, "Srdjan");
  await user.type(inputBody, "Comment");
  const newComment = { author: inputAuthor.value, body: inputBody.value };
  await user.click(submitButton);
  expect(onSubmit.mock.calls[0][0]).toEqual(newComment);
});
