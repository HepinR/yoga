const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all batches
router.get('/batches', (req, res) => {
    const query = 'SELECT * FROM batches';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Failed to fetch batches' });
        } else {
            res.json(results);
        }
    });
});

// Test route
router.get('/test', (req, res) => {
    res.json({ message: 'Enrollment routes working' });
});

// Enroll user
router.post('/enroll', async (req, res) => {
    const { name, age, email, phone, batchId } = req.body;

    if (age < 18 || age > 65) {
        return res.status(400).json({ error: 'Age must be between 18 and 65' });
    }

    try {
        db.beginTransaction(async (err) => {
            if (err) throw err;

            // Insert user
            const userQuery = 'INSERT INTO users1 (name, age, email, phone) VALUES (?, ?, ?, ?)';
            db.query(userQuery, [name, age, email, phone], async (err, userResult) => {
                if (err) {
                    return db.rollback(() => {
                        res.status(400).json({ error: 'User creation failed' });
                    });
                }

                const userId = userResult.insertId;

                // Mock payment function
                const paymentResult = {
                    status: 'success',
                    message: 'Payment successful',
                    paymentId: 'PAY_' + Math.random().toString(36).substr(2, 9)
                };

                if (paymentResult.status === 'success') {
                    // Create enrollment
                    const enrollmentQuery = 'INSERT INTO enrollments (user_id, batch_id, enrollment_date, payment_status, payment_id) VALUES (?, ?, CURDATE(), ?, ?)';
                    db.query(enrollmentQuery, [userId, batchId, 'completed', paymentResult.paymentId], (err, enrollResult) => {
                        if (err) {
                            return db.rollback(() => {
                                res.status(400).json({ error: 'Enrollment failed' });
                            });
                        }

                        // Record payment
                        const paymentQuery = 'INSERT INTO payments1 (enrollment_id, amount, payment_status, payment_method, transaction_id) VALUES (?, 500, "completed", "online", ?)';
                        db.query(paymentQuery, [enrollResult.insertId, paymentResult.paymentId], (err) => {
                            if (err) {
                                return db.rollback(() => {
                                    res.status(400).json({ error: 'Payment recording failed' });
                                });
                            }

                            db.commit((err) => {
                                if (err) {
                                    return db.rollback(() => {
                                        res.status(500).json({ error: 'Transaction failed' });
                                    });
                                }
                                res.json({ success: true, message: 'Enrollment successful' });
                            });
                        });
                    });
                } else {
                    db.rollback(() => {
                        res.status(400).json({ error: 'Payment failed' });
                    });
                }
            });
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;