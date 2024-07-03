import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
};

export default function UserList({ users, onEdit, onDelete }) {
    return (
        <div style={containerStyle}>
            {/* Mapping setiap pengguna menjadi card */}
            {users.map((user) => (
                <Card key={user.id} style={{ width: '18rem', margin: '10px' }}>
                    <Card.Body>
                        <Card.Title>{user.fullName}</Card.Title>
                        <Card.Text>
                            <strong>Email:</strong> {user.email}<br />
                            <strong>Phone:</strong> {user.phone}
                        </Card.Text>
                        {/* Tombol Edit untuk setiap card pengguna */}
                        <Button variant="primary" onClick={() => onEdit(user)}>Edit</Button>
                        {/* Tombol Delete untuk menghapus pengguna */}
                        <Button variant="danger" style={{ marginLeft: '10px' }} onClick={() => onDelete(user)}>Delete</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}
