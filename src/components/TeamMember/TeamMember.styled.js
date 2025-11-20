import styled from 'styled-components'

export const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(18, 24, 24, 0.6),
    rgba(18, 24, 24, 0.4)
  );
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.35s ease;
  cursor: pointer;
  width: 250px;
  min-height: 220px;
  text-align: center;
  margin-bottom: 2rem;

  &:hover {
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0 2px 8px rgba(0, 224, 198, 0.35);
    border: 0.1px solid rgba(0, 224, 198, 0.35);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 12px;
  border: 2px solid var(--primary);
`

export const Name = styled.h3`
  font-family: 'Poppins', sans-serif;
  color: var(--primary);
  margin-bottom: 8px;
`

export const Spans = styled.span`
  line-height: 1.6;
  font-size: 12px;
  color: var(--sub);
`

export const Details = styled.div`
  font-family: 'Inter', sans-serif;
  color: var(--sub);
  font-size: 0.9rem;
  margin-top: 8px;
  overflow: hidden;
  transition: max-height 0.35s ease;
  width: 100%;
`
export const Something = styled.div`
  background: var(--color-card);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  color: var(--color-text);
  box-shadow: var(--shadow-soft);
`
