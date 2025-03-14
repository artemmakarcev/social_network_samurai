import React from "react";
import { describe, expect, test } from "vitest";
// import { render } from "vitest-browser-react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("should initialize state with props", async () => {
    const initialStatus = "Testing status";
    const { getByText, getByRole } = render(<ProfileStatus initialStatus={initialStatus} />);
    await expect.element(getByText(`${initialStatus}`)).toBeInTheDocument();
  });
});
