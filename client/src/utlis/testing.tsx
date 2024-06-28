// utils/test-utils.tsx
import { render, RenderOptions } from "@testing-library/react";
import { createMemoryHistory, MemoryHistory } from "history";
import { ReactElement } from "react";
import { Router } from "react-router-dom";

interface RenderWithRouterOptions extends RenderOptions {
  route?: string;
  history?: MemoryHistory;
}

export const renderWithRouter = (
  ui: ReactElement,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
    ...renderOptions
  }: RenderWithRouterOptions = {},
) => {
  return {
    ...render(
      <Router location={history.location} navigator={history}>
        {ui}
      </Router>,
      renderOptions,
    ),
    history,
  };
};
