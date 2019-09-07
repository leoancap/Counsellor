import React from "react";
import { IProfessional } from "types/domain";
import {
  Avatar,
  Container,
  CRP,
  Name,
  ProfessionalInfo,
  Thumb,
  UserInfo,
  Profession,
  City,
} from "./styles";

interface IProps {
  professional: IProfessional;
}

export function Card({ professional }: IProps) {
  return (
    <Container>
      <ProfessionalInfo>
        <Avatar>
          <Thumb />
          <UserInfo>
            <Name>{professional.name}</Name>
            <CRP>
              <Profession>{professional.profession}</Profession>
              <City>{professional.location}</City>
            </CRP>
          </UserInfo>
        </Avatar>
      </ProfessionalInfo>
    </Container>
  );
}
