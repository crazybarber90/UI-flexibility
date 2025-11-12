import { useState, useRef, useEffect } from 'react'
import {
  MemberContainer,
  Name,
  Details,
  Image,
  Spans,
} from './TeamMember.styled.js'

const TeamMember = ({ name, shortDesc, image, fullDesc, isOpen, onClick }) => {
  const contentRef = useRef(null)
  const [maxHeight, setMaxHeight] = useState(0)

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight)
    } else {
      setMaxHeight(0)
    }
  }, [isOpen])

  return (
    <MemberContainer onClick={onClick}>
      <Image src={image} alt={name} />
      <Name>{name}</Name>
      <Spans>Click to see details</Spans>
      <Details ref={contentRef} style={{ maxHeight }}>
        {fullDesc}
      </Details>
    </MemberContainer>
  )
}

export default TeamMember
