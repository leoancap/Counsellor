import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React from 'react'

import { Calendar, DesktopOnly, ProfessionalInfo } from 'components'
import { Summary } from 'components/ProfessionalInfo/styles'
import { IProfessional } from 'types/domain'
import { Container, ProfessionalAvatar } from './styles'

interface IProps {
  professional: IProfessional
}

export function Card({ professional }: IProps) {
  const { summary, name } = professional
  const router = useRouter()

  return (
    <Container>
      <Link href={`/professional/${name}`}>
        <ProfessionalAvatar isClickable={router && router.pathname === '/'}>
          <ProfessionalInfo {...professional} />
          <Summary>{summary}</Summary>
        </ProfessionalAvatar>
      </Link>
      <DesktopOnly>
        <Calendar availabilitySlots={professional.availabilitySlots} />
      </DesktopOnly>
    </Container>
  )
}
