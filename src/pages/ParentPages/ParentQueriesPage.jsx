import React, { useState } from "react";
import { Card, CardContent, Typography, TextField, Button, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import ParentNav from "./ParentNav";
import "../../styles/ParentQueries.css";

const ParentQueriesPage = () => {
  const [query, setQuery] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = () => {
    if (query.trim() !== "") {
      setSuccessMessage(true);
      setQuery(""); // Clear input after submission
    }
  };

  return (
    <>
      <ParentNav />
      <div className="parent-queries-container">
        <Card className="parent-queries-card">
          <CardContent>
            <Typography variant="h4" className="query-title">Contact Teachers/Admins</Typography>
            <Typography variant="body1" className="query-description">
              If you have any concerns regarding your child's attendance, please send a message to the school administration.
            </Typography>
            <TextField
              label="Type your query..."
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              className="query-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="query-submit-container">
  <Button variant="contained" className="query-submit" onClick={handleSubmit}>
    Send Query
  </Button>
</div>

          </CardContent>
        </Card>

        <Snackbar
          open={successMessage}
          autoHideDuration={3000}
          onClose={() => setSuccessMessage(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <MuiAlert onClose={() => setSuccessMessage(false)} severity="success" variant="filled">
            ✅ Query sent successfully!
          </MuiAlert>
        </Snackbar>
      </div>
    </>
  );
};

export default ParentQueriesPage;
