import React, { useState } from 'react';
import { TextField, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function Login() {
    const [activeTab, setActiveTab] = useState('login');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [organization, setOrganization] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const backgroundImageUrl =
        'https://architectureforlondon.com/wp-content/uploads/2021/02/feasibility-study-building-massing.jpg';

    const containerStyle = {
        minHeight: '100vh', // Ensures the container takes up full height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#141b2d', // Optional background color for the entire container
    };

    const leftSectionStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };

    const formStyle = {
        width: '100%',
        maxWidth: '500px',
        padding: '40px',
        backgroundColor: '#f4f4f4',
        borderRadius: '20px',
        border: '5px solid #43ce9e',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const inputStyle = {
        width: '100%',
        marginBottom: '15px',
    };

    const submitButtonStyle = {
        width: '100%',
        padding: '15px',
        borderRadius: '10px',
        backgroundColor: '#43ce9e',
        color: 'white',
        cursor: 'pointer',
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
    
        const staticCredentials = {
          email: "Bhole123@gmail.com",  
          password: "Bhole@123",     
        };
    
        if (email === staticCredentials.email && password === staticCredentials.password) {
          console.log('Login successful!');
          localStorage.setItem('isLoggedIn', 'yes'); // Store login status in localStorage
          navigate('/collecting'); // Redirect to protected route
        } else {
          console.error('Invalid email or password.');
        }
    
        setLoading(false);
      };


    return (
        <Grid container style={containerStyle}>
            <Grid item xs={false} sm={6} md={6} style={leftSectionStyle}></Grid>
            <Grid
                item
                xs={12}
                sm={6}
                md={6}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Paper style={formStyle} elevation={3}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                        <Button
                            variant={activeTab === 'login' ? 'contained' : 'outlined'}
                            onClick={() => setActiveTab('login')}
                            style={{
                                marginRight: '20px',
                                backgroundColor: activeTab === 'login' ? '#43ce9e' : 'transparent',
                                color: activeTab === 'login' ? 'white' : '#43ce9e',
                                borderRadius: '5px',
                            }}
                        >
                            Login
                        </Button>
                        <Button
                            variant={activeTab === 'register' ? 'contained' : 'outlined'}
                            onClick={() => setActiveTab('register')}
                            style={{
                                backgroundColor: activeTab === 'register' ? '#43ce9e' : 'transparent',
                                color: activeTab === 'register' ? 'white' : '#43ce9e',
                                borderRadius: '5px',
                            }}
                        >
                            Register
                        </Button>
                    </div>
                    <form onSubmit={handleFormSubmit}>
                        <TextField
                            type="email"
                            label="Email"
                            style={inputStyle}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {activeTab === 'register' && (
                            <>
                                <TextField
                                    type="tel"
                                    label="Phone"
                                    style={inputStyle}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                                <TextField
                                    type="text"
                                    label="Organization"
                                    style={inputStyle}
                                    value={organization}
                                    onChange={(e) => setOrganization(e.target.value)}
                                    required
                                />
                            </>
                        )}
                        <TextField
                            type="password"
                            label="Password"
                            style={inputStyle}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            style={submitButtonStyle}
                            disabled={loading}
                        >
                            {loading ? 'Processing...' : activeTab === 'login' ? 'Login' : 'Register'}
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Login;
