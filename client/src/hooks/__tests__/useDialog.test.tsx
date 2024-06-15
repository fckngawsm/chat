import { act, renderHook } from "@testing-library/react";
import { useDialog } from "../useDialog";

describe("custom useDialog hook", () => {
  it("should render hook with correct value", async () => {
    const { result } = renderHook(() => useDialog());

    act(() => {
      result.current.setDialogIsOpen(true);
    });

    expect(result.current.dialogIsOpen).toBeTruthy();

    act(() => {
      result.current.setDialogIsOpen(false);
    });

    expect(result.current.dialogIsOpen).toBeFalsy();
  });
});
