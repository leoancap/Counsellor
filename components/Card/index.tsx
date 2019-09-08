import React from "react";
import { IProfessional } from "types/domain";
import { Rating } from "components";
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
  professional: {
    reviews,
    summary,
    fields,
    location,
    name,
    profession,
    ratesPerHour,
  },
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
            <Rating reviews={reviews} />
            <Fields>
              {fields.map((field, index) => (
                <Field key={index}>{field}</Field>
              ))}
            </Fields>
            <RateWrapper>
              <Rate>{`€${ratesPerHour}`}</Rate>
              {" / hour"}
            </RateWrapper>
          </UserInfo>
        </Avatar>
        <Summary>{summary}</Summary>
      </ProfessionalInfo>
    </Container>
  );
}
