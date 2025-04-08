// require('dotenv').config();
// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Email Sending Route
// app.post('/send-email', async (req, res) => {
//     const { name, email, message } = req.body;

//     let transporter = nodemailer.createTransport({
//         service: 'gmail', // Change this if using another email provider
//         auth: {
//             user: process.env.EMAIL_USER, 
//             pass: process.env.EMAIL_PASS
//         }
//     });

//     let mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: 'info@oraappstech.com', // Change this to the recipient's email
//         subject: 'New Contact Form Submission',
//         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ success: true, message: 'Email sent successfully!' });
//     } catch (error) {
//         res.status(500).json({ success: false, message: 'Error sending email', error });
//     }
// });

// // Start the Server
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });


// server.js
const PORT = process.env.PORT || 5000;
const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db'); // Use our database key

app.use(express.json());
app.use(cors()); // Allow frontend to talk to us



// When frontend asks "Show me jobs", we get from database
app.get('/api/jobs', async (req, res) => {
  const [jobs] = await pool.query('SELECT * FROM jobs');
  res.json(jobs);
});

app.listen(PORT, () => {
  console.log(`Backend door is open at port ${PORT} 🚪`);
});

app.get('/', (req, res) => {
    res.send('Backend is working! 🚀');
  });