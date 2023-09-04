import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../empoloyees-list/employees-list';
import EmloyeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';


function App() {

    const data = [
        {name: 'John Smith', salary: 800, increase: true, id: 1},
        {name: 'Alex Jones', salary: 3000, increase: true, id: 2},
        {name: 'Kate Wilson', salary: 5000, increase: true, id: 3}
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmloyeesAddForm/>
        </div>
    );
}

export default App;