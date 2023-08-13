import React, { useState } from 'react';
import { Typography, SpeedDial, SpeedDialIcon, SpeedDialAction, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

export default function FacultySessionPage({ sessionlist }) {
    const parentStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        border: '1px solid #ccc',
        padding: '10px',
        cursor: 'pointer'
    };

    const childStyle = {
        flex: 1,
        textAlign: 'center',
    };

    const [openSpeedDial, setOpenSpeedDial] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [rangeInput, setRangeInput] = useState('');
    const [startTime, setstartTime] = useState('');
    const [endTime, SetendTime] = useState('');
    const [Date, setDate] = useState('');
    const actions = [
        { icon: <AddIcon />, name: 'Create Session' },
        // Add more actions as needed
    ];

    const handleSpeedDialOpen = () => {
        setOpenSpeedDial(true);
    };

    const handleSpeedDialClose = () => {
        setOpenSpeedDial(false);
    };

    const handleActionClick = () => {
        handleSpeedDialClose();
        // Open the dialog when a SpeedDialAction is clicked
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };
    const handleRangeInputChange = (event) => {
        setRangeInput(event.target.value);
    };
    const handleStartTimeChange = (event) => {
        setstartTime(event.target.value);
    };
    const handleEndTimeChange = (event) => {
        SetendTime(event.target.value);
    };
    const handleDateChange = (event) => {
        setDate(event.target.value);
    };
    const handleSubmit = () => {
        // Handle the submitted value (rangeInput) here
        console.log('Submitted value:', rangeInput);
        handleDialogClose(); // Close the dialog after submitting
    };

    return (
        <div className="FacultySessionPage" style={{ backgroundColor: "whitesmoke", paddingTop: '70px', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
                className="banner"
                style={{
                    position: 'relative',
                    width: '910px',
                    maxWidth: '90%',
                    height: '30%',
                    border: '1px solid #ccc',
                    backgroundColor: '#ffffff',
                    marginBottom: '2%',
                    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px', // Adding box shadow for 3D effect
                }}
            >
                <Typography variant="body1" style={{ position: 'absolute', bottom: 10, left: 10 }}>
                    Artificial Intelligence
                </Typography>
                <Typography variant="body1" style={{ position: 'absolute', bottom: 30, left: 10 }}>
                    CS330
                </Typography>
            </div>

            <div className="content" style={{ margin: 'auto', width: '920px', maxWidth: '90%' }}>
                {sessionlist.map(item => (
                    <div style={parentStyle}>
                        <div style={childStyle}>{item.Session}</div>
                        <div style={childStyle}>{item.Date}</div>
                        <div style={childStyle}>{item.StartTime}</div>
                        <div style={childStyle}>{item.EndTime}</div>
                        
                    </div>
                ))}
            </div>

            {/* Position the SpeedDial at the bottom right corner */}
            <div className="speed-dial" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                <SpeedDial
                    ariaLabel="SpeedDial example"
                    icon={<SpeedDialIcon />}
                    onClose={handleSpeedDialClose}
                    onOpen={handleSpeedDialOpen}
                    open={openSpeedDial}
                    direction="up" // Change direction as needed
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={handleActionClick}
                        />
                    ))}
                </SpeedDial>
            </div>
            {/* Dialog for the pop-up */}
            <Dialog
                open={openDialog}
                onClose={handleDialogClose}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
            >
                <DialogTitle id="dialog-title">{"Create Session"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="dialog-description">
                        <TextField
                            label="Enter the range (in metres):"
                            variant="filled"
                            value={rangeInput}
                            onChange={handleRangeInputChange}
                            fullWidth
                        />
        
                        <TextField
                            label="Start Time"
                            type = "time"
                            variant="filled"
                            value={startTime}
                            onChange={handleStartTimeChange}
                            fullWidth
                        />
                        <TextField
                            label="End Time"
                            type = "time"
                            variant="filled"
                            value={endTime}
                            onChange={handleEndTimeChange}
                            fullWidth
                        />
                        <TextField
                            // label="Date"
                            type = "date"
                            variant="filled"
                            value={Date}
                            onChange={handleDateChange}
                            fullWidth
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
