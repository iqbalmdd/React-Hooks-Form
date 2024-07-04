import PropTypes from "prop-types";

const DataList = ({ datas, onEdit, onDelete }) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-5">
            {/* Mapping setiap pengguna menjadi card */}
            {datas.map((data, index) => (
                <div key={index} className="col">
                    <div className="card card-bg shadow-lg">
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{data.year}</h6>
                            <p className="card-text">Studio: {data.studio}</p>
                            <a className="btn btn-sm login-btn text-light me-1" onClick={() => onEdit(data)}>Edit</a>
                            <a className="btn btn-sm btn-danger text-light" onClick={() => onDelete(data)}>Remove</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default DataList;

DataList.propTypes = {
    datas: PropTypes.array.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}