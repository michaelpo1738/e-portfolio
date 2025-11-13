import axios from 'axios';

const EMAIL_API_URL = 'https://api.example.com/send-email'; // Replace with your email service API URL

export const sendEmail = async (emailData) => {
    try {
        const response = await axios.post(EMAIL_API_URL, emailData);
        return response.data;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};