import * as React from 'react';
import { Typography} from '@mui/material';

export default function SessionPage({ sessionlist }) {
    const parentStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        border: '1px solid #ccc',
        padding: '10px',
      };
    
      const childStyle = {
        flex: 1,
        textAlign: 'center',
        // border: '1px solid #ccc', 
      };
    return (
        <div className="SessionPage" style={{  paddingTop: '70px', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <div
                className="banner"
                style={{
                    position: 'relative',   
                    width: '910px',
                    maxWidth:'90%',
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
                <div style={childStyle}>{item.Time}</div>
                <div style={{ flex: 1, textAlign: 'center', color: item.Remark === 'P' ? 'green' : 'red' }}>{item.Remark}</div>
            </div>
            ))}
            </div>
        </div>
    );
}