import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, FormGroup, FormLabel, FormControl, FormCheck } from 'react-bootstrap';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreement: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    toast.success('Registration successful!');
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreement: false,
    });
  };

  const handleInputChange = (event) => {
    const { id, value, type, checked } = event.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [id]: val });
  };

  return (
    <div>
      <div style={{ backgroundColor: '#1890ff', padding: '10px 0' }}>
        <h1 style={{ color: 'white', textAlign: 'center' }}>Register yourself</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <div style={{ width: '30%', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img
              src="/images/RegImg.png"
              alt="Registration Image"
              style={{ width: '100%', height: 'auto', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
            />
          </div>
          <Form onSubmit={handleSubmit}>
            <FormGroup controlId="username">
              <FormLabel>Username</FormLabel>
              <FormControl
                type="text"
                placeholder="Enter username"
                required
                value={formData.username}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup controlId="email">
              <FormLabel>Email</FormLabel>
              <FormControl
                type="email"
                placeholder="Enter email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup controlId="password">
              <FormLabel>Password</FormLabel>
              <FormControl
                type="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup controlId="confirmPassword">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl
                type="password"
                placeholder="Confirm password"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup controlId="agreement">
              <FormCheck>
                <FormCheck.Input
                  type="checkbox"
                  required
                  checked={formData.agreement}
                  onChange={handleInputChange}
                />
                <FormCheck.Label>
                  I have read the <a href="/terms">agreement</a>
                </FormCheck.Label>
              </FormCheck>
            </FormGroup>

            <div style={{ textAlign: 'center' }}>
              <Button type="submit" variant="primary">
                Register
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
