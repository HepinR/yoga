import React, { useState, useEffect } from 'react';
import {
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Paper,
    Typography,
    Alert,
    Stepper,
    Step,
    StepLabel,
    Box,
    CircularProgress,
    Card,
    CardContent
} from '@mui/material';
import PaymentConfirmation from './PaymentConfirmation';
import axios from 'axios';

const steps = ['Personal Details', 'Select Batch', 'Payment'];

const EnrollmentForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        phone: '',
        batchId: ''
    });
    const [batches, setBatches] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [enrollmentDetails, setEnrollmentDetails] = useState(null);

    useEffect(() => {
        fetchBatches();
    }, []);
    
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:5001';

    const fetchBatches = async () => {
        try {
            console.log('Fetching batches from:',  `${API_URL}/api/batches`);
            const response = await axios.get(`${API_URL}/api/batches`);
            console.log('Batches response:', response.data);
            setBatches(response.data);
        } catch (err) {
            console.error('Error fetching batches:', err);
            setError('Failed to fetch batch times');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/enroll`, formData);
            if (response.data.success) {
                const selectedBatch = batches.find(b => b.id === parseInt(formData.batchId));
                setEnrollmentDetails({
                    ...formData,
                    batchTime: selectedBatch?.time_slot,
                    paymentId: response.data.paymentId,
                    enrollmentDate: new Date().toLocaleDateString()
                });
                setShowConfirmation(true);
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Enrollment failed');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleNext = () => {
        if (validateStep(activeStep)) {
            setActiveStep((prevStep) => prevStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const validateStep = (step) => {
        switch (step) {
            case 0:
                if (!formData.name || !formData.age || !formData.email || !formData.phone) {
                    setError('Please fill all required fields');
                    return false;
                }
                if (formData.age < 18 || formData.age > 65) {
                    setError('Age must be between 18 and 65');
                    return false;
                }
                break;
            case 1:
                if (!formData.batchId) {
                    setError('Please select a batch');
                    return false;
                }
                break;
            default:
                break;
        }
        setError('');
        return true;
    };

    const renderStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <Box className="form-container">
                        <TextField
                            fullWidth
                            label="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                            sx={{ mb: 2}}
                        />
                        <TextField
                            fullWidth
                            label="Age"
                            name="age"
                            type="number"
                            value={formData.age}
                            onChange={handleChange}
                            required
                            helperText="Age must be between 18 and 65"
                            sx={{ mb: 2,
                                '& .MuiFormHelperText-root': {
                                color: '#ffffff'
                                }
                             }}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                            sx={{ mb: 2}}
                        />
                        <TextField
                            fullWidth
                            label="Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            autoComplete="tel"
                            sx={{ mb: 2}}
                        />
                    </Box>
                );
            case 1:
                return (
                    <Box className="form-container">
                        <FormControl fullWidth>
                            <InputLabel sx={{ color: '#81d4fa' }}>
                                Select Batch Time
                            </InputLabel>
                            <Select
                                name="batchId"
                                value={formData.batchId}
                                onChange={handleChange}
                                required
                                
                            >
                                {batches.map((batch) => (
                                    <MenuItem key={batch.id} value={batch.id}>
                                        {batch.time_slot}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                );
            case 2:
                return (
                    <Card className="payment-info" sx={{ bgcolor: 'rgba(129, 212, 250, 0.05)' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom sx={{ color: '#81d4fa' }}>
                                Payment Details
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#ffffff' }} gutterBottom>
                                Monthly Fee: ₹500
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#ffffff' }}>
                                Selected Batch: {batches.find(b => b.id === parseInt(formData.batchId))?.time_slot}
                            </Typography>
                        </CardContent>
                    </Card>
                );
            default:
                return null;
        }
    };

    return (
        <Box sx={{ mt: 4, mb: 4 }}>
            <Paper elevation={3} className="form-container">
                <Typography variant="h4" className="form-title"
                    sx={{ 
                        color: '#87CEEB',
                        textShadow: '0 0 10px rgba(135, 206, 235, 0.3)'
                    }}
                >
                    Yoga Class Enrollment
                </Typography>

                <Typography variant="subtitle1" className="form-subtitle"
                    sx={{ 
                        color: '#87CEEB',
                        mb: 2
                    }}
                >
                    Join our yoga classes for better health and peace of mind
                </Typography>

                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}

                <Stepper activeStep={activeStep} className="stepper-container">
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <form onSubmit={handleSubmit}>
                    {renderStepContent(activeStep)}

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            variant="outlined"
                        >
                            Back
                        </Button>
                        {activeStep === steps.length - 1 ? (
                            <Button
                                variant="contained"
                                onClick={handleSubmit}
                                disabled={loading}
                            >
                                {loading ? (
                                    <CircularProgress size={24} color="inherit" />
                                ) : (
                                    'Complete Payment'
                                )}
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                onClick={handleNext}
                            >
                                Next
                            </Button>
                        )}
                    </Box>
                </form>
            </Paper>

            <PaymentConfirmation
                open={showConfirmation}
                onClose={() => {
                    setShowConfirmation(false);
                    setFormData({
                        name: '',
                        age: '',
                        email: '',
                        phone: '',
                        batchId: ''
                    });
                    setActiveStep(0);
                }}
                enrollmentDetails={enrollmentDetails}
            />
        </Box>
    );
};

export default EnrollmentForm;
