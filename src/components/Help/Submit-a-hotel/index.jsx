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


const SubmitAHotel = () => {   
  
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
            <h2>Soumettre votre hotel</h2>

            <div className="contact-form">
              <Formik
                  initialValues={{ name: '', address: '', email: '', message: '' }}
                  validate={values => {
                    const errors = {};
                    if (!values.name) {
                      errors.name = 'Veuillez saisir le nom de votre hôtel';
                    }
                    if (!values.address) {
                        errors.address = `Veuillez saisir l'adresse de votre hôtel`;
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
                    <label htmlFor="name">Nom de l'hôtel :</label>
                    <Field type="text" name="name" placeholder="Nom de votre hôtel" />
                    <ErrorMessage name="name" component="p" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">Adresse de votre hôtel :</label>
                    <Field type="text" name="address" placeholder="Adresse de votre hôtel" />
                    <ErrorMessage name="address" component="p" />
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

            <Link to="/" className='main-btn'>Retour à l'accueil</Link>

            <Dialog open={open} onClose={handleToClose}>
                <DialogTitle>{"Hôtel soumis avec succès !"}</DialogTitle>
                <DialogContent>
                <Typography>
                    Nous vous remercions pour la soumission de votre hôtel et nous y répondrons dans les plus brefs délais.
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
export default SubmitAHotel