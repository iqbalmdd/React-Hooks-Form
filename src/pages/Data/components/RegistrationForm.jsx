import { useState, useEffect } from 'react';
import PropTypes from "prop-types";

const RegistrationForm = ({ onSubmit, editForm }) => {
    const [form, setForm] = useState({
        title: '',
        year: '',
        studio: ''
    });

    useEffect(() => {
        if (editForm) {
            setForm(editForm); // Efek samping: Mengisi formData dengan data editForm saat komponen dimuat atau editForm berubah
        }
    }, [editForm]); // Menggunakan editForm sebagai dependensi, sehingga efek samping hanya terjadi saat editForm berubah

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        }); // Memperbarui state formData saat nilai input berubah
    };

    const reset = () => {
        setForm({
            title: '',
            year: '',
            studio: '',
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Mencegah pengiriman formulir secara default (refresh halaman)
        onSubmit(form); // Menjalankan onSubmit dengan formData sebagai argumen
        reset(); // Mengosongkan formData setelah formulir disubmit
    };

    return (
        <form className="login-form shadow-lg p-5 w-100 rounded-5" onSubmit={handleSubmit}>
            {/* Form Group untuk field Full Name */}
            <div className="mb-3">
                <label className="mb-1" htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="form-control"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Title"
                    required // Input ini wajib diisi
                />
            </div>
            {/* Form Group untuk field Year */}
            <div className="mb-3">
                <label className="mb-1" htmlFor="year">Year</label>
                <input
                    type="year"
                    name="year"
                    id="year"
                    className="form-control"
                    value={form.year}
                    onChange={handleChange}
                    placeholder="Year"
                    required // Input ini wajib diisi
                />
            </div>
            {/* Form Group untuk field Studio */}
            <div className="mb-3">
                <label className="mb-1" htmlFor="studio">Studio</label>
                <input
                    type="tel"
                    name="studio"
                    id="studio"
                    className="form-control"
                    value={form.studio}
                    onChange={handleChange}
                    placeholder="Studio"
                    required // Input ini wajib diisi
                />
            </div>
            <button type="submit" className="btn login-btn mt-4 w-100 text-light">
                {editForm ? 'Update' : 'Submit'} {/* Teks tombol bergantung pada mode edit atau submit */}
            </button>
        </form>
    );
}

export default RegistrationForm;

RegistrationForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    editForm: PropTypes.bool,
}