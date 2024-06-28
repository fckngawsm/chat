import { Divider } from "../../../components/Divider/Divider";
import {
  StyledProfileInfromationItemInput,
  StyledProfileInfromationItemTitle,
  StyledProfileInfromationStrokeItem,
  StyledProfileInfromationStrokeWrapper,
} from "./styled";

interface ProfileInformationStrokeProps {
  config?: Array<{
    field: string;
    value: string;
    type: string;
  }>;
  onlyRead?: boolean;
}

export const ProfileInformationStroke = ({
  config,
  onlyRead,
}: ProfileInformationStrokeProps) => {
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
          {index < config.length - 1 && <Divider fullWidth />}
        </>
      ))}
    </StyledProfileInfromationStrokeWrapper>
  );
};
