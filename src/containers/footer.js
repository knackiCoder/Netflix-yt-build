import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
   return (
      <Footer>
         <Footer.Title>Question? Contact us.</Footer.Title>
         <Footer.Break />
         <Footer.Row>
            <Footer.Column>
               <Footer.Link href="#">FAQ</Footer.Link>
               <Footer.Link href="#">investor Relations</Footer.Link>
               <Footer.Link href="#">Ways to Watch</Footer.Link>
               <Footer.Link href="#">Cooperate Information</Footer.Link>
               <Footer.Link href="#">Netflix Originals</Footer.Link>
            </Footer.Column>

            <Footer.Column>
               <Footer.Link href="#">Help Center</Footer.Link>
               <Footer.Link href="#">Jobs</Footer.Link>
               <Footer.Link href="#">Term of Use</Footer.Link>
               <Footer.Link href="#">Contact us</Footer.Link>
            </Footer.Column>

            <Footer.Column>
               <Footer.Link href="#">Account</Footer.Link>
               <Footer.Link href="#">Redeem Gift Cards</Footer.Link>
               <Footer.Link href="#">Privacy</Footer.Link>
               <Footer.Link href="#">Speed Test</Footer.Link>
            </Footer.Column>

            <Footer.Column>
               <Footer.Link href="#">Media Center</Footer.Link>
               <Footer.Link href="#">But Gift Cards</Footer.Link>
               <Footer.Link href="#">Cookie preferences</Footer.Link>
               <Footer.Link href="#">Legal Notices</Footer.Link>
            </Footer.Column>
         </Footer.Row>
         <Footer.Break />
         <Footer.Text>Netflix United Kingdom</Footer.Text>
      </Footer>
   )
}