import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/LandingPage.css';

export  default function LandingPage() {
  const navigate = useNavigate(); 

  return (
    <div className="landing-container">
      <Card className="LandingCard">
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" className="land-title">
            Smart Attendance System using RFID and IoT
          </Typography>
          <Typography variant="body2" className="land-para">
            An automated attendance tracking system using RFID technology and IoT, ensuring accuracy, efficiency, and real-time monitoring.
          </Typography>
        </CardContent>
        
        {/* Navigation Buttons for Different User Roles */}
        <CardActions className="landing-card-actions">
          <Button 
            className="landing-custom-button" 
            onClick={() => navigate('/admin-login')}
          >
            Admin
          </Button>
          <Button 
            className="landing-custom-button-1" 
            onClick={() => navigate('/teacher-login')}
          >
            Teacher
          </Button>
          <Button 
            className="landing-custom-button-3" 
            onClick={() => navigate('/student-login')}
          >
            Student
          </Button>
          <Button 
            className="landing-custom-button-4" 
            onClick={() => navigate('/parent-login')}
          >
            Parent
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
