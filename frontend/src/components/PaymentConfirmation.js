import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
    Paper,
    Divider
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PaymentConfirmation = ({ open, onClose, enrollmentDetails }) => {
    if (!enrollmentDetails) return null;

    return (
        <Dialog 
            open={open} 
            onClose={onClose} 
            maxWidth="sm" 
            fullWidth
            PaperProps={{
                sx: {
                    background: 'linear-gradient(135deg, #1a2c42 0%, #2c3e50 100%)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                }
            }}
        >
            <DialogTitle sx={{ textAlign: 'center' }}>
                <CheckCircleIcon 
                    sx={{ 
                        fontSize: 64, 
                        color: '#4caf50',
                        filter: 'drop-shadow(0 0 10px rgba(76, 175, 80, 0.5))',
                        mb: 2
                    }} 
                />
                <Typography 
                    variant="h5" 
                    sx={{ 
                        color: '#2196f3',
                        textShadow: '0 0 10px rgba(33, 150, 243, 0.3)',
                        fontWeight: 600
                    }}
                >
                    Enrollment Successful!
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Paper 
                    elevation={0} 
                    sx={{ 
                        p: 3, 
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px'
                    }}
                >
                    <Typography 
                        variant="h6" 
                        gutterBottom
                        sx={{ 
                            color: '#81d4fa',
                            borderBottom: '1px solid rgba(129, 212, 250, 0.3)',
                            pb: 1,
                            mb: 2
                        }}
                    >
                        Enrollment Details
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <DetailRow label="Name" value={enrollmentDetails.name} />
                        <DetailRow label="Batch Time" value={enrollmentDetails.batchTime} />
                        <DetailRow label="Enrollment Date" value={enrollmentDetails.enrollmentDate} />
                        <DetailRow label="Amount Paid" value="₹500" />
                        <DetailRow 
                            label="Status" 
                            value="Payment Completed" 
                            valueColor="#4caf50"
                        />
                    </Box>
                </Paper>
                <Typography 
                    variant="body2" 
                    sx={{ 
                        mt: 2, 
                        textAlign: 'center',
                        color: 'rgba(129, 212, 250, 0.7)'
                    }}
                >
                    A confirmation email has been sent to {enrollmentDetails.email}
                </Typography>
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
                <Button 
                    onClick={onClose} 
                    variant="contained"
                    fullWidth
                    sx={{
                        background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
                        color: 'white',
                        fontWeight: 500,
                        '&:hover': {
                            background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
                        }
                    }}
                >
                    Done
                </Button>
            </DialogActions>
        </Dialog>
    );
};

// Helper component for detail rows
const DetailRow = ({ label, value, valueColor = '#81d4fa' }) => (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            <strong>{label}:</strong>
        </Typography>
        <Typography sx={{ color: valueColor }}>
            {value}
        </Typography>
    </Box>
);

export default PaymentConfirmation;
