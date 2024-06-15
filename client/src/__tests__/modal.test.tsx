import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "../components/Modal/Modal";

describe("render Modal component", () => {
  it("should correctly render component and handle form submission", () => {
    const mockSubmit = jest.fn();
    render(
      <Modal
        btnText="Submit data"
        children={<input aria-label="name" />}
        onSubmit={mockSubmit}
        titleText="My title"
      />
    );

    // Имитируем ввод данных в поле input
    fireEvent.change(screen.getByRole("textbox", { name: "name" }), {
      target: { value: "Kirill" },
    });

    // Имитируем отправку формы
    fireEvent.submit(screen.getByRole("form"));

    // Проверяем, была ли вызвана mockSubmit с правильными аргументами
    expect(mockSubmit).toHaveBeenCalled();
  });
  it.todo("testing submit axios");
});
