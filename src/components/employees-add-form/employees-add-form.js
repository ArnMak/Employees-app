import './employees-add-form.css';

const EmloyeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавить сотрудника</h3>
            <form 
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label" 
                    placeholder="Имя"/>
                <input type="text"
                    className="form-control new-post-label" 
                    placeholder="З/П в $"/>
                
                <button type='submit'
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
};

export default EmloyeesAddForm;

