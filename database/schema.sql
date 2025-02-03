CREATE DATABASE hyogaDB;

USE hyogaDB;

-- Users table
CREATE TABLE users1 (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT check_age CHECK (age >= 18 AND age <= 65)
);

-- Batches table
CREATE TABLE batches (
    id INT PRIMARY KEY AUTO_INCREMENT,
    time_slot VARCHAR(50) NOT NULL,
    capacity INT DEFAULT 50,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Enrollments table
CREATE TABLE enrollments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    batch_id INT,
    enrollment_date DATE NOT NULL,
    payment_status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    amount DECIMAL(10,2) DEFAULT 500.00,
    payment_id VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users1(id),
    FOREIGN KEY (batch_id) REFERENCES batches(id)
);

-- Payments table
CREATE TABLE payments1 (
    id INT PRIMARY KEY AUTO_INCREMENT,
    enrollment_id INT,
    amount DECIMAL(10,2) NOT NULL,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    payment_status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    payment_method VARCHAR(50),
    transaction_id VARCHAR(100),
    FOREIGN KEY (enrollment_id) REFERENCES enrollments(id)
);

-- Insert default batch times
INSERT INTO batches (time_slot) VALUES 
('6-7AM'),
('7-8AM'),
('8-9AM'),
('5-6PM');