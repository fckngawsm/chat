import { useState } from "react";
import {
  RaduisSize,
  StyledIcon,
  StyledSearch,
  StyledSearchContainer,
} from "./styled";

interface SearchProps {
  placeholder: string;
  raduiusSize: RaduisSize;
  viewIcon?: boolean;
}

export const Search = ({
  placeholder,
  raduiusSize,
  viewIcon = true,
}: SearchProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledSearchContainer>
      {viewIcon && (
        <StyledIcon
          size={20}
          $isFocused={isFocused}
          data-testid="search-icon"
        />
      )}
      <StyledSearch
        placeholder={placeholder}
        $raduiusSize={raduiusSize}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        $isFocused={isFocused}
      />
    </StyledSearchContainer>
  );
};
