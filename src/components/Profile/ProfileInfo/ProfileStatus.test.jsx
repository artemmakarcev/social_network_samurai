import { test, expect, describe, jest } from "bun:test";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  const text = "test status success";
  test("display profile empty status", () => {
    render(<ProfileStatus initialStatus={null} />);
    const spanElement = document.querySelector("span");
    expect(spanElement?.innerText).toEqual("status empty");
    expect(spanElement).toBeInTheDocument();
  });
  test("after creation <span> should be displayed and contains correct status", () => {
    render(<ProfileStatus initialStatus={text} />);
    const spanElement = document.querySelector("span");
    expect(spanElement?.innerText).toEqual(text);
    expect(spanElement).toBeInTheDocument();
  });
  test("after creation <input> shouldn't be displayed", () => {
    render(<ProfileStatus initialStatus={text} />);
    const inputElement = screen.queryByRole("input");
    expect(inputElement).toBeNull();
  });
  test("input should be displayed in editMode instead of span", () => {
    render(<ProfileStatus initialStatus={text} />);
    const spanElement = document.querySelector("span");
    fireEvent.dblClick(spanElement);
    const inputElement = document.querySelector("input");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement?.value).toEqual(text);
  });
  test("callback should be called", () => {
    const mockCallback = jest.fn();
    render(<ProfileStatus initialStatus={text} updateStatus={mockCallback} />);
    console.log(mockCallback.mock.calls.length)
  });
});
