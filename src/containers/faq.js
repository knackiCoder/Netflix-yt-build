import React from "react";
import faqsData from '../fixtures/faqs.json'
import { Accordion } from "../components";
import OptForm from "../components/opt-form";

export const FaqsContainer = () => {
   return (
      <Accordion>
         <Accordion.Title>Frequently asked questions</Accordion.Title>
         {faqsData.map(res => (
            <Accordion.Item key={res.id}>
               <Accordion.Header>{res.header}</Accordion.Header>
               <Accordion.Body>{res.body}</Accordion.Body>
            </Accordion.Item>
         ))}
         <OptForm>
            <OptForm.Input placeholder='Email address' />
            <OptForm.Button>Try it Now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
         </OptForm>
      </Accordion>
   )
}

