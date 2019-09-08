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
  Slash,
  RatingWrapper,
  Fields,
  Field,
  RateWrapper,
  Rate,
  Summary,
} from "./styles";

interface IProps {
  professional: IProfessional;
}

export function Card({
  professional: { summary, fields, location, name, profession, ratesPerHour },
}: IProps) {
  return (
    <Container>
      <ProfessionalInfo>
        <Avatar>
          <Thumb />
          <UserInfo>
            <Name>{name}</Name>
            <CRP>
              <Profession>{profession}</Profession>
              <Slash>&nbsp;|&nbsp;</Slash>
              <City>{location}</City>
            </CRP>
            <RatingWrapper>⭐️⭐️⭐️⭐️⭐️</RatingWrapper>
            <Fields>
              {fields.map((field, index) => (
                <Field key={index}>{field}</Field>
              ))}
            </Fields>
            <RateWrapper>
              <Rate>{`€${ratesPerHour}`}</Rate>
              {" / hour"}
            </RateWrapper>
            <Summary>{summary}</Summary>
          </UserInfo>
        </Avatar>
      </ProfessionalInfo>
    </Container>
  );
}
