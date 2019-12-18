import React from 'react'
import { Container } from 'components/common'
import contact from 'assets/illustrations/contact.svg'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'
import { ContactButtons } from './ContactButtons'

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
      {/* <ContactButtons/> */}
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m Brad" />
    </Thumbnail>
  </Wrapper>
)
