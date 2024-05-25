import { useState } from "react";
import { StyledIcon, StyledSearch, StyledSearchContainer } from "./styled";
export const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledSearchContainer>
      <StyledIcon size={20} isFocused={isFocused} />
      <StyledSearch
        placeholder="Поиск"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused}
      />
    </StyledSearchContainer>
  );
};
