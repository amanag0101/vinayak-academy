import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";

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
        padding: "48px",
      }}
    >
      <FormControl fullWidth>
        <InputLabel>Select Subject</InputLabel>
        <Select value={selectedSubject} onChange={handleSubjectChange}>
          {studentRecord.subjects.map((subject) => (
            <MenuItem key={uuidv4()} value="math">
              {subject}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label="Doubt description..."
        multiline
        rows={4}
        value={doubtText}
        onChange={handleDoubtTextChange}
        fullWidth
        sx={{ margin: "16px 0" }}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ marginBottom: "16px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSendDoubt}
        fullWidth
      >
        Submit
      </Button>
    </Box>
  );
};
