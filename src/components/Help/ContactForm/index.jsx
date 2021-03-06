import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom'

import Dialog from "@mui/material/Dialog";
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

import { Formik, Form, Field, ErrorMessage } from 'formik';


const ContactForm = () => {   
  
      // Open a modal to display success message
      const [open, setOpen] = useState(false);

      const handleClickToOpen = () => {
        setOpen(true);
      };
      
      const handleToClose = () => {
        setOpen(false);
      };

    return (
        <section id="Contact">
            <h2>Nous Contacter</h2>

            <div className="contact-form">
              <Formik
                  initialValues={{ username: '', email: '', message: '' }}
                  validate={values => {
                    const errors = {};
                    if (!values.username) {
                      errors.username = 'Veuillez saisir votre nom';
                    }
                    if (!values.email) {
                      errors.email = 'Une adresse e-mail est requise';
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                      errors.email = `L'adresse e-mail n'est pas valide`;
                    }
                    if (!values.message) {
                      errors.message = 'Veuillez saisir votre message';
                    }
                    return errors;
                  }}
                  onSubmit={(values, 
                    { setSubmitting, resetForm }) => {
                      setTimeout(() => {
                        handleClickToOpen();
                        setSubmitting(false);
                        resetForm();
                      }, 400);
                  }}
                >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="username">Nom :</label>
                    <Field type="text" name="username" placeholder="Votre nom" />
                    <ErrorMessage name="username" component="p" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <Field type="email" name="email" placeholder="Votre adresse e-mail"/>
                    <ErrorMessage name="email" component="p" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message :</label>
                    <Field type="text" name="message" placeholder="Votre message" />
                    <ErrorMessage name="message" component="p" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className='main-btn form-btn'>
                    Envoyer
                  </button>
                </Form>
              )}
              </Formik>
            </div>

            <Link to="/" className='main-btn'>Retour ?? l'accueil</Link>

            <Dialog open={open} onClose={handleToClose}>
                <DialogTitle>{"Message envoy?? avec succ??s !"}</DialogTitle>
                <DialogContent>
                <Typography>
                    Nous vous remercions pour votre message et nous y r??pondrons dans les plus brefs d??lais.
                </Typography>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleToClose} 
                        color="primary" autoFocus>
                    Fermer
                </Button>
                </DialogActions>
            </Dialog>
        </section>
    );
}
export default ContactForm