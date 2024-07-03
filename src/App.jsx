import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import RegistrationForm from './RegistrationForm';
import UserList from './UserList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    const [users, setUsers] = useState([]); // State untuk menyimpan daftar pengguna
    const [editUser, setEditUser] = useState(null); // State untuk menyimpan pengguna yang sedang diedit

    useEffect(() => {
        // Efek samping untuk mendapatkan data pengguna dari local storage saat komponen dimuat
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []); // Dependensi kosong agar efek samping hanya dijalankan sekali saat komponen dimuat

    const handleFormSubmit = (formData) => {
        let updatedUsers;
        if (formData.id) {
            updatedUsers = users.map(user =>
                user.id === formData.id ? formData : user
            );
        } else {
            updatedUsers = [...users, { ...formData, id: Date.now() }];
        }
        setUsers(updatedUsers); // Perbarui state users

        // Simpan data ke local storage setelah setiap perubahan
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        setEditUser(null); // Hentikan mode edit setelah submit
    };

    const handleEdit = (user) => {
        // Fungsi untuk memulai mode edit pada data pengguna tertentu
        setEditUser(user);
    };

    const handleDelete = (userToDelete) => {
        // Fungsi untuk menghapus pengguna dari daftar
        const updatedUsers = users.filter(user => user.id !== userToDelete.id);
        setUsers(updatedUsers);

        // Simpan data ke local storage setelah setiap perubahan
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">User Registration</h1>
            {/* Komponen Form Registrasi */}
            <RegistrationForm onSubmit={handleFormSubmit} editUser={editUser} />
            <h2 className="text-center mt-5 mb-4">User List</h2>
            {/* Komponen Daftar Pengguna */}
            <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
        </Container>
    );
}

export default App;
