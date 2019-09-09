import React from "react";
import { IProfessional } from "types/domain";
import { Rating, DateCarousel, UserAvatar, DesktopOnly } from "components";
import { Container, ProfessionalInfo } from "./styles";
import { Summary } from "components/UserAvatar/styles";

interface IProps {
  professional: IProfessional;
}

export function Card({ professional }: IProps) {
  const { summary } = professional;
  // console.log(availabilitySlots);
  return (
    <Container>
      <ProfessionalInfo>
        <UserAvatar {...professional} />
        <Summary>{summary}</Summary>
      </ProfessionalInfo>
      <DesktopOnly>
        <DateCarousel />
      </DesktopOnly>
    </Container>
  );
}
