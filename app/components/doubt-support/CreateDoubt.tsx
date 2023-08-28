import React, { useState } from "react";
import {
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
  Typography,
} from "@mui/material";

export const CreateDoubt = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [doubtText, setDoubtText] = useState("");
  const [doubtImage, setDoubtImage] = useState(null);
  const studentRecord = {
    class: "Xth",
    subjects: ["Maths", "Physics", "Chemistry", "Biology"],
  };
  const handleSubjectChange = (event: any) => {
    setSelectedSubject(event.target.value);
  };

  const handleDoubtTextChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDoubtText(event.target.value);
  };

  const handleImageUpload = (event: any) => {
    // Handle image upload and set the doubtImage state
    const uploadedImage = event.target.files[0];
    setDoubtImage(uploadedImage);
  };

  const handleSendDoubt = () => {
    // Logic to send the doubt (e.g., send data to an API)
    const doubtData = {
      subject: selectedSubject,
      text: doubtText,
      image: doubtImage,
    };
    // Implement your sending logic here
    console.log("Sending Doubt:", doubtData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minWidth: "70vw",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container justifyContent="center">
        <Box
          sx={{
            padding: "50px",
            backgroundColor: "lightgrey",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            margin: "11vh",
          }}
        >
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Class : {studentRecord.class}
          </Typography>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel>Subject</InputLabel>
            <Select
              value={selectedSubject}
              onChange={handleSubjectChange}
              label="Subject"
            >
              {studentRecord.subjects.map((subject) => (
                <MenuItem value="math">{subject}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Doubt Text"
            multiline
            rows={4}
            value={doubtText}
            onChange={handleDoubtTextChange}
            fullWidth
            sx={{ marginBottom: "16px" }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ marginBottom: "16px", display: "block" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendDoubt}
            fullWidth
          >
            Send Doubt
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};
