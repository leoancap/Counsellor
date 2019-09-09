import React from "react";
import { IProfessional } from "types/domain";
import { ProfessionalInfo, DesktopOnly, Calendar } from "components";
import { Container, ProfessionalAvatar } from "./styles";
import { Summary } from "components/ProfessionalInfo/styles";

interface IProps {
  professional: IProfessional;
}

export function Card({ professional }: IProps) {
  const { summary } = professional;
  return (
    <Container>
      <ProfessionalAvatar>
        <ProfessionalInfo {...professional} />
        <Summary>{summary}</Summary>
      </ProfessionalAvatar>
      <DesktopOnly>
        <Calendar availabilitySlots={professional.availabilitySlots} />
      </DesktopOnly>
    </Container>
  );
}
