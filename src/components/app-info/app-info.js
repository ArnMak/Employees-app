import './app-info.css';

const AppInfo = ({onEmployeesCount, onIncreaseCount}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в нашей компании X</h1>
            <h2>Число наших сотрудников: {onEmployeesCount}</h2>
            <h2>Премию в этом месяце получат: {onIncreaseCount}</h2>
        </div>
    );
};

export default AppInfo;