import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { renderWithRouter } from "../../utlis/testing";
import { ChatBottomPart } from "../Chat/ChatBottomPart/ChatBottomPart";
import { ChatMembersHeader } from "../Chat/ChatMembersTop/ChatMembersHeader";

describe("ChatMembersHeader component", () => {
  let history;

  beforeEach(() => {
    history = createMemoryHistory();
  });

  describe("Chat Top component", () => {
    it("should render search input and profile link", () => {
      renderWithRouter(<ChatMembersHeader />, { history });

      // Проверка на наличие элемента с плейсхолдером "Поиск"
      const searchInput = screen.getByPlaceholderText("Поиск");
      expect(searchInput).toBeInTheDocument();

      // Проверка на наличие элемента с текстом "Профиль"
      const profileLink = screen.getByText("Профиль");
      expect(profileLink).toBeInTheDocument();
    });

    it("should navigate to profile page on profile link click", () => {
      renderWithRouter(<ChatMembersHeader />, { history });

      // Клик на элемент с текстом "Профиль"
      fireEvent.click(screen.getByText("Профиль"));

      // Проверка обновленного пути
      expect(history.location.pathname).toBe("/profile");
    });
  });

  describe("Chat bottom part", () => {
    it("should show the menu when menu-attach is clicked", async () => {
      render(<ChatBottomPart />);

      expect(screen.queryByTestId("menu")).not.toBeInTheDocument();

      fireEvent.click(screen.getByTestId("menu-attach"));

      waitFor(() => {
        expect(screen.findByTestId("menu")).toBeInTheDocument();
      });
    });
  });
});
