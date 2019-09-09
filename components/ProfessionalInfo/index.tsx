import React from "react";
import {
  Avatar,
  Container,
  Thumb,
  UserInfo,
  Name,
  CRP,
  Profession,
  Slash,
  City,
  Fields,
  Field,
  RateWrapper,
  Rate,
} from "./styles";
import { Rating } from "components";
import { IProfessional } from "types/domain";

export function ProfessionalInfo({
  name,
  location,
  profession,
  reviews,
  ratesPerHour,
  complaints,
}: IProfessional) {
  return (
    <Container>
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
            {complaints.map((field, index) => (
              <Field key={index}>{field}</Field>
            ))}
          </Fields>
          <RateWrapper>
            <Rate>{`€${ratesPerHour}`}</Rate>
            {" / hour"}
          </RateWrapper>
        </UserInfo>
      </Avatar>
    </Container>
  );
}
