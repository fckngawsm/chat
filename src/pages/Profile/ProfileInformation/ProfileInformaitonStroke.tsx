import { Divider } from "../../../components/Divider/Divider";
import { ProfileConfig } from "../constants/informationConfig";
import {
  StyledProfileInfromationItemInput,
  StyledProfileInfromationItemTitle,
  StyledProfileInfromationStrokeItem,
  StyledProfileInfromationStrokeWrapper,
} from "./styled";

interface ProfileInformaitonStrokeProps {
  config?: Array<{
    field: string;
    value: string;
    type: string;
  }>;
  onlyRead?: boolean;
}

export const ProfileInformaitonStroke = ({
  config = ProfileConfig,
  onlyRead,
}: ProfileInformaitonStrokeProps) => {
  return (
    <StyledProfileInfromationStrokeWrapper>
      {config.map(({ field, value, type }, index) => (
        <>
          <StyledProfileInfromationStrokeItem>
            <StyledProfileInfromationItemTitle>
              {field}
            </StyledProfileInfromationItemTitle>
            <StyledProfileInfromationItemInput
              type={type}
              value={value}
              disabled={onlyRead}
            />
          </StyledProfileInfromationStrokeItem>
          {index < ProfileConfig.length - 1 && <Divider fullWidth />}
        </>
      ))}
    </StyledProfileInfromationStrokeWrapper>
  );
};
