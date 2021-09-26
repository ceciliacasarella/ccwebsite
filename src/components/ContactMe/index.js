import React from 'react'
import { FormContent, FormH1, FormInput, FormMessage, FormLabel, Form , Icon , Container , FormWrap, Text, FormButton } from './ContactMeElements'

const ContactMe = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">CC</Icon>
                    <FormContent>
                        <Form action="https://formsubmit.co/casarellacecilia@gmail.com" method="POST">
                            <FormH1>ContactMe</FormH1>
                            <FormInput type="hidden" name="_subject" value="New Email daje"></FormInput>
                            <FormLabel htmlFor='for' >Email</FormLabel>
                            <FormInput type='email' name='email' required></FormInput>
                            <FormLabel htmlFor='for' >Nome Completo</FormLabel>
                            <FormInput type='text' name='name' required></FormInput>
                            <FormLabel htmlFor='for' >Message</FormLabel>
                            <FormMessage type='text' name='message' required></FormMessage>
                            <FormButton type='submit'>Send Email</FormButton>
                            <Text>Grazie!</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
            
        </>
    )
}

export default ContactMe
