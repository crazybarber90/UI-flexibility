import styled from 'styled-components'

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.lg};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => theme.shadows.soft};
`

export default function Example() {
  return <Card>This is a themed card</Card>
}
