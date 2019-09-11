import { Rating } from 'components'
import React from 'react'
import { IProfessional } from 'types/domain'
import {
  Avatar,
  City,
  Container,
  CRP,
  Field,
  Fields,
  Name,
  Profession,
  Rate,
  RateWrapper,
  Slash,
  Thumb,
  UserInfo,
} from './styles'

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
          <Name data-testid="fullname">{name}</Name>
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
            {' / hour'}
          </RateWrapper>
        </UserInfo>
      </Avatar>
    </Container>
  )
}
