import { ConstructionOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const isEmailValid = (email) => {
    const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;
    if (emailPattern.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    //to check if all form value is valid
    if (name && subject && message && isEmailValid(email)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }

    return () => {};
  }, [name, email, subject, message]);

  const sendEmail = (name, email, subject, message) => {
    const body = {
      template_params: {
        name,
        email,
        subject,
        message,
      },
      accessToken: "Bf9Dl77SC47coPGQ7Ew3y",
      service_id: "service_y6i3yt6",
      user_id: "ybxiO1M4YKAENg0hy",
      template_id: "portfolio_template",
    };

    const api = "https://api.emailjs.com/api/v1.0/email/send";
    fetch(api, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <Box
      component="section"
      id="contact"
      px={8}
      pt={12}
      sx={{
        width: "100%",
        height: "100vh",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">Keep in touch!</Typography>
      <Card sx={{ maxWidth: 500 }}>
        <CardContent>
          <Box component="form" id="contactForm">
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></TextField>
              </Grid>

              <Grid xs={12} sm={6} item>
                <TextField
                  label="Email"
                  id="email"
                  fullWidth
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Subject"
                  id="subject"
                  fullWidth
                  required
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Message"
                  id="message"
                  rows={6}
                  fullWidth
                  required
                  multiline
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></TextField>
              </Grid>
              <Grid xs={12} item>
                {isFormValid && (
                  <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    onClick={() => {
                      sendEmail(name, email, subject, message);
                    }}
                  >
                    Send
                  </Button>
                )}
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contact;

// sx={{
//   '& .MuiTextField-root': { m: 1, width: '25ch' },
// }}
// noValidate
// autoComplete="off"
