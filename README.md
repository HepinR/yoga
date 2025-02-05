# Yoga Class Enrollment System

A full-stack web application for managing yoga class enrollments. Users can register for monthly yoga classes, select preferred batch timings, and make payments.

## Live Demo 
live web: [https://yogafront.netlify.app]
- Frontend: [https://yogafront.netlify.app]
- Backend: [https://yogabackend-4h6l.onrender.com]

## Features
- User registration with age validation (18-65 years)
- Batch selection (4 slots available)
- Monthly payment processing
- Responsive design
- Form validation
- Error handling
- Payment confirmation

## Tech Stack
### Frontend
- React.js
- Material-UI
- Axios for API calls
- React Hooks for state management

### Backend
- Node.js
- Express.js
- PostgreSQL
- Cors for cross-origin requests

### ER Diagram Representation

[USERS]
- id (PK)
- name
- age
- email
- phone
- created_at
    |
    | 1:N
    ↓
[ENROLLMENTS]
- id (PK)
- user_id (FK)
- batch_id (FK)
- enrollment_date
- payment_amount
- payment_status
    ↑
    | N:1
    |
[BATCHES]
- id (PK)
- time_slot
- capacity
- current_enrollments
- created_at


## API Endpoints
- `GET /api/batches` - Get all available batches
- `POST /api/enroll` - Register new enrollment
- `GET /api/enrollments` - Get all enrollments

## Assumptions Made
1. Users can only enroll for one month at a time
2. Payment is fixed at ₹500 per month
3. Batch timings are fixed
4. Users can only enroll in one batch per month
5. No authentication required for MVP

## Future Enhancements
1. User authentication
2. Payment gateway integration
3. Email notifications
4. Batch capacity management
5. Attendance tracking
6. Subscription renewal system

## Cloud Architecture
The application follows a microservices architecture:
- Frontend hosted on Netlify (Static hosting)
- Backend API on Render (Node.js service)
- Database on Render (PostgreSQL)

## Performance Optimizations
1. Database indexing on frequently queried fields
2. Connection pooling for database operations
3. React component optimization using useMemo and useCallback
4. Error boundary implementation
5. Proper loading states and error handling

## Security Measures
1. Input validation
2. SQL injection prevention
3. CORS configuration
4. Rate limiting
5. Environment variable protection  
