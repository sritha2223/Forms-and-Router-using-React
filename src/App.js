import './App.css';
import EmployeeFeedbackForm from './components/employeeRegistratonForm';
import StudentRegistrationForm from './components/StudentRegistrationForm';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Form Management</h1>

        {/* Tab Navigation */}
        <div className="tabs">
          <Link to="/student" className="tab-link"> 
            Student Registration
          </Link>
          <Link to="/employee" className="tab-link"> 
            Employee Feedback
          </Link>
        </div>
        {/*{Routes */}
       <Routes>
          <Route path="/" element={<Navigate to="/student" />} />
          <Route path="/student" element={<StudentRegistrationForm />} />
          <Route path="/employee" element={<EmployeeFeedbackForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
