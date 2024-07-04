import { useEffect, useState } from "react";
import RegistrationForm from "./components/RegistrationForm.jsx";
import DataList from "./components/DataList.jsx";

function Data() {
    const [datas, setDatas] = useState([]); // State untuk menyimpan daftar pengguna
    const [data, setData] = useState(null); // State untuk menyimpan pengguna yang sedang diedit

    useEffect(() => {
        // Efek samping untuk mendapatkan data pengguna dari storage saat komponen dimuat
        const storedDatas = JSON.parse(sessionStorage.getItem('datas')) || [];
        // const storedDatas = JSON.parse(localStorage.getItem('datas')) || [];
        setDatas(storedDatas);
    }, []); // Dependensi kosong agar efek samping hanya dijalankan sekali saat komponen dimuat

    const handleFormSubmit = (formData) => {
        let updatedDatas;
        if (formData.id) {
            updatedDatas = datas.map(data =>
                data.id === formData.id ? formData : data
            );
        } else {
            updatedDatas = [...datas, { ...formData, id: Date.now() }];
        }
        setDatas(updatedDatas); // Perbarui state datas

        // Simpan data ke storage setelah setiap perubahan
        sessionStorage.setItem('datas', JSON.stringify(updatedDatas));
        // localStorage.setItem('datas', JSON.stringify(updatedDatas));

        setData(null); // Hentikan mode edit setelah submit
    };

    const handleEdit = (data) => {
        // Fungsi untuk memulai mode edit pada data pengguna tertentu
        setData(data);
    };

    const handleDelete = (dataToDelete) => {
        // Fungsi untuk menghapus pengguna dari daftar
        const updatedDatas = datas.filter(data => data.id !== dataToDelete.id);
        setDatas(updatedDatas);

        // Simpan data ke local storage setelah setiap perubahan
        sessionStorage.setItem('datas', JSON.stringify(updatedDatas));
        // localStorage.setItem('datas', JSON.stringify(updatedDatas));
    };

    return (
        <div className="container my-5 text-light">
            <h1 className="text-center mb-4">MyAnimeRegistration</h1>
            {/* Komponen Form Registrasi */}
            <RegistrationForm onSubmit={handleFormSubmit} editForm={data} />
            <h2 className="text-center mt-5 mb-4">MyAnimeList</h2>
            {/* Komponen Daftar Pengguna */}
            <DataList datas={datas} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}

export default Data;