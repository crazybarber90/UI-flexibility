import styled from 'styled-components'

export const Container = styled.main`
  padding: 70px 48px;
  color: var(--text);
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    /* padding: 24px; */
  }
`

export const Card = styled.div`
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
  width: 80%;
  max-width: 80%;

  &:hover {
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0 12px 40px rgba(0, 224, 198, 0.35);
    border-color: var(--primary);
    background: linear-gradient(
      180deg,
      rgba(18, 24, 24, 0.8),
      rgba(18, 24, 24, 0.5)
    );
  }

  p {
    line-height: 1.6;
    font-size: 0.95rem;
    color: var(--sub);
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`

export const SectionContaner = styled.div`
  width: '80%';
  margin-top: 48px;
`

export const TeamContaner = styled.div`
  display: flex;
  justify-content: center;
  min-height: 350px;
  align-items: center;
  gap: 54px;
  flex-wrap: wrap;
`

export const Title = styled.h1`
  color: var(--primary);
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`
