/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentThread from "./CommentThread";
import axios from "axios";

jest.mock("axios");

afterEach(() => {
  jest.clearAllMocks();
});

const setup = () => {
  const comment = {
    id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
    author: "Reed Fisher",
    body: "Sint in in sunt amet.",
    postedAt: 1550488214207,
    replies_count: 3,
    replies: [
      {
        id: "116dbd01-d5f3-4dfb-afeb-f822a9264a5e",
        comment_id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
        author: "Kathleen Nikolaus",
        body: "Officia suscipit sint sint impedit nemo. Labore aut et quia quasi ut. Eos voluptatibus quidem eius delectus beatae excepturi.",
        postedAt: 1550419941546,
      },
    ],
  };
  const comments = [
    {
      id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
      author: "Reed Fisher",
      body: "Sint in in sunt amet.",
      postedAt: 1550488214207,
      replies_count: 3,
      replies: [
        {
          id: "116dbd01-d5f3-4dfb-afeb-f822a9264a5e",
          comment_id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
          author: "Kathleen Nikolaus",
          body: "Officia suscipit sint sint impedit nemo. Labore aut et quia quasi ut. Eos voluptatibus quidem eius delectus beatae excepturi.",
          postedAt: 1550419941546,
        },
      ],
    },
  ];
  const user = userEvent.setup();
  const setComments = jest.fn();
  const utils = render(
    <CommentThread
      comment={comment}
      comments={comments}
      setComments={setComments}
    />
  );

  return {
    ...utils,
    setComments,
    user,
    comment,
  };
};

const getRepliesResponse = () => {
  return {
    data: [
      {
        id: "116dbd01-d5f3-4dfb-afeb-f822a9264a5f",
        comment_id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
        author: "Srdjan",
        body: "Officia suscipit sint sint impedit nemo. Labore aut et quia quasi ut. Eos voluptatibus quidem eius delectus beatae excepturi.",
        postedAt: 1550419941546,
      },
      {
        id: "116dbd01-d5f3-4dfb-afeb-f822a9264a5d",
        comment_id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
        author: "Max",
        body: "Officia suscipit sint sint impedit nemo. Labore aut et quia quasi ut. Eos voluptatibus quidem eius delectus beatae excepturi.",
        postedAt: 1550419941546,
      },
    ],
  };
};

test("link is rendered", () => {
  setup();
  const link = screen.getByRole("link", { name: /Show More Replies/ });
  expect(link).toBeInTheDocument();
});
test("setComments is called when the link is clicked", async () => {
  const { user, setComments } = setup();
  const link = screen.getByRole("link", { name: /Show More Replies/ });
  axios.get.mockResolvedValueOnce(getRepliesResponse());
  await user.click(link);
  expect(setComments.mock.calls.length).toBe(1);
});

test("axios request was sent to the correct endpoint", async () => {
  const { user, comment } = setup();
  const link = screen.getByRole("link", { name: /Show More Replies/ });
  axios.get.mockResolvedValueOnce(getRepliesResponse());
  await user.click(link);
  expect(axios.get).toHaveBeenCalledWith(
    `/api/comment_replies?comment_id=${comment.id}`
  );
});

test("link disappears after comment is updated", async () => {
  const { user, setComments, comment, rerender } = setup();

  const link = screen.getByRole("link", { name: /Show More Replies/ });

  axios.get.mockResolvedValueOnce(getRepliesResponse());
  await user.click(link);
  const newComments = setComments.mock.calls[0][0];
  const newComment = newComments.find((c) => (c.id = comment.id)); // it will contain 3 replies
  rerender(
    <CommentThread
      comment={newComment}
      comments={newComments}
      setComments={setComments}
    />
  );
  expect(link).not.toBeInTheDocument();
});

// setComments.mock.calls => [[newComments], [newComments], []] (an array of arrays, where each subarray represents a function call)
