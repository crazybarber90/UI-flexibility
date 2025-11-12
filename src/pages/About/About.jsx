import {
  Container,
  Card,
  Title,
  SectionContaner,
  TeamContaner,
} from './about.styled.js'
import { team } from '../../assets/data.js'
import { useState } from 'react'
import TeamMember from '../../components/TeamMember/TeamMember.jsx'

const About = () => {
  console.log('DATA', team)

  const [openIndex, setOpenIndex] = useState(null)

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Container>
      <Title>About Us</Title>
      <Card>
        <p>
          We are a digital agency building modern interfaces. We combine product
          thinking, design systems and frontend engineering
        </p>
      </Card>
      <Card>
        <p>
          Our team blends design thinking and high-end technology to build
          products that are as beautiful as they are functional. Every detail
          matters to us.
        </p>
      </Card>
      <Card>
        <p>
          We collaborate closely with our clients, turning ideas into scalable
          solutions. Transparency and creativity are at the heart of everything
          we do.
        </p>
      </Card>
      <Card>
        <p>
          Our developers love clean code, optimized performance, and stunning
          animations. We bring interfaces to life with motion and personality.
        </p>
      </Card>

      <Card>
        <p>
          From startups to global brands, we help businesses express themselves
          digitally through strategy, design, and technology.
        </p>
      </Card>

      <SectionContaner>
        <Title>Our Team</Title>
        <TeamContaner>
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              shortDesc={member.shortDesc}
              fullDesc={member.fullDesc}
              image={member.image}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </TeamContaner>
      </SectionContaner>
    </Container>
  )
}

export default About
