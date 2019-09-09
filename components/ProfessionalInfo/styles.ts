import styled, { css } from "styled";

const textColor = css`
  color: ${p => p.theme.textColor};
`;

export const Container = styled.div``;

export const Avatar = styled.div`
  display: flex;
  @media (max-width: ${p => p.theme.breakpointMD}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Thumb = styled.div`
  width: 5rem;
  height: 5rem;
  background: lightgreen;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  margin-left: 1em;
  @media (max-width: ${p => p.theme.breakpointMD}) {
    margin-left: 0;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Name = styled.h2`
  ${textColor}
  font-size: 20px;
  font-weight: bold;
`;

export const CRP = styled.div`
  margin-top: 5px;
`;

export const Profession = styled.span`
  color: ${p => p.theme.primary};
  text-transform: uppercase;
  font-size: 16px;
`;

export const City = styled.span``;

export const Slash = styled.span``;

export const Fields = styled.ul``;

export const Field = styled.li`
  list-style-type: none;
  display: list-item;
  font-size: 13px;
  font-weight: lighter;
`;

export const RateWrapper = styled.div`
  ${textColor}
  margin-top: 5px;
  font-size: 13px;
`;

export const Rate = styled.span`
  font-size: 18px;
  font-weight: normal;
`;

export const Summary = styled.p`
  padding-top: 1em;
  font-size: 16px;
  text-align: justify;
`;
