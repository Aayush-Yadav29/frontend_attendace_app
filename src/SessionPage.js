import * as React from 'react';
import { Typography, Avatar, ListItemAvatar, ListItemText, Divider, ListItem, List } from '@mui/material';

export default function SessionPage() {
    return (
        <div className="SessionPage" style={{ backgroundColor: 'cyan', paddingTop: '70px',height:'100vh',display:'flex', flexDirection:'column',alignItems: 'center'}}>

            <div className="banner" style={{ position: 'relative', width: '60%', height: '30%', border: '1px solid #ccc', backgroundColor: '#ffffff',marginBottom:'2%'}}>
                <Typography
                    variant="body1"
                    style={{ position: 'absolute', bottom: 10, left: 10 }}
                >
                    Artificial Intelligence
                </Typography>
                <Typography
                    variant="body1"
                    style={{ position: 'absolute', bottom: 30, left: 10 }}
                >
                    CS330
                </Typography>
            </div>
            <List sx={{
                width: '60%', bgcolor: 'background.paper'}}>
                <ListItem alignItems="center">
                    Session 1
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Time
                    </Typography>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="center">
                    <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    to Scott, Alex, Jennifer
                                </Typography>
                                {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                
                
    
        
               
            </List>
        </div>
    );
}