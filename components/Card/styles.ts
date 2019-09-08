import styled from "styled";

export const Container = styled.div`
  margin: 1em;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
`;

export const ProfessionalInfo = styled.div`
  display: grid;
  padding: 2em;
`;

export const Avatar = styled.div`
  display: grid;
  grid-template-columns: 5em auto;
  grid-gap: 1em;
`;

export const Thumb = styled.div`
  width: 5em;
  height: 5em;
  background: lightgreen;
  border-radius: 50%;
`;

export const UserInfo = styled.div``;

export const Name = styled.h2`
  font-size: 20px;
  font-weight: normal;
`;

export const CRP = styled.div`
  margin-top: 10px;
`;

export const Profession = styled.span`
  color: ${p => p.theme.primary};
  text-transform: uppercase;
  font-size: 16px;
`;

export const City = styled.span`
  font-weight: lighter;
`;

export const Slash = styled.span`
  font-weight: lighter;
`;

export const RatingWrapper = styled.div``;

export const Fields = styled.ul``;

export const Field = styled.li`
  list-style-type: none;
  display: list-item;
  font-size: 13px;
  font-weight: lighter;
`;

export const RateWrapper = styled.div`
  margin-top: 5px;
  font-size: 11px;
`;

export const Rate = styled.span`
  font-size: 18px;
  font-weight: normal;
`;

export const Summary = styled.p`
  font-size: 14px;
  text-align: justify;
`;
