import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'; // Mengimport komponen Form dari react-bootstrap
import Button from 'react-bootstrap/Button'; // Mengimport komponen Button dari react-bootstrap

const RegistrationForm = ({ onSubmit, editUser }) => {
    const [formData, setFormData] = useState({ fullName: '', email: '', phone: '' }); // State formData untuk menyimpan data formulir

    useEffect(() => {
        if (editUser) {
            setFormData(editUser); // Efek samping: Mengisi formData dengan data editUser saat komponen dimuat atau editUser berubah
        }
    }, [editUser]); // Menggunakan editUser sebagai dependensi, sehingga efek samping hanya terjadi saat editUser berubah

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value }); // Memperbarui state formData saat nilai input berubah
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Mencegah pengiriman formulir secara default (refresh halaman)
        onSubmit(formData); // Menjalankan onSubmit dengan formData sebagai argumen
        setFormData({ fullName: '', email: '', phone: '' }); // Mengosongkan formData setelah formulir disubmit
    };

    return (
        <Form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: 'auto' }}>
            {/* Form Group untuk field Full Name */}
            <Form.Group controlId="formFullName">
                <Form.Label>Full Name:</Form.Label>
                <Form.Control
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required // Input ini wajib diisi
                />
            </Form.Group>
            {/* Form Group untuk field Email */}
            <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required // Input ini wajib diisi
                />
            </Form.Group>
            {/* Form Group untuk field Phone */}
            <Form.Group controlId="formPhone">
                <Form.Label>Phone:</Form.Label>
                <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required // Input ini wajib diisi
                />
            </Form.Group>
            {/* Tombol Submit atau Update */}
            <Button variant="primary" type="submit">
                {editUser ? 'Update' : 'Submit'} {/* Teks tombol bergantung pada mode edit atau submit */}
            </Button>
        </Form>
    );
};

export default RegistrationForm;
