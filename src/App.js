import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateGrade from './components/grade/addGrade';
import EditGrade from './components/grade/editGrade';
import CreateSubject from './components/subject/subject';
import EditSubject from './components/subject/editSubject';
import CreateSllabys from './components/sllabys.js/sllabys';
import EditSllabys from './components/sllabys.js/editSllabys';
import CreateSchool from './components/school/school';
import EditSchool from './components/school/editSchool';
import CreateTeacher from './components/teacher/teacher';
import EditTeacher from './components/teacher/editTeacher';
import TeacherDetails from './components/teacher/teacherDetails';
import EditTeacherBatch from './components/teacher/editBatch';
import AddStudents from './components/students/addStudents';
import Dashboard from './components/Dashboard';
import AllStudents from './components/students/allStudents';
import ActiveStudents from './components/students/ActiveStudents';
import StudentDetails from './components/students/StudentDetails';
import EditStudent from './components/students/editStudent';
import BatchWiseStudents from './components/students/batchWiseStudent';
import BatchWiseStudentDetails from './components/students/batchWiseStudentDetails';
import TeacherPayment from './components/teacher/teacherPayment';
import TeacherPaymentDetails from './components/teacher/teacherPaymentDetails';
import StudentTest from './components/students/Studenttest';
import BatchPayments from './components/students/payment/batchPayments';
import OtherPayments from './components/students/payment/otherPayments';
import BatchPaymentReporting from './components/reporting/batchPaymentNav';
import OthersPaymentReporting from './components/reporting/othersPaymentNav';
import AllUser from './components/user/nav/alluser'
import CreateUser from './components/user/nav/createuser'
import EditUser from './components/user/nav/edituser'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/grade">
            <CreateGrade />
          </Route>
          <Route path="/edit/:id" component={EditGrade} />
          <Route path="/subject">
            <CreateSubject />
          </Route>
          <Route path="/editSubject/:id">
            <EditSubject />
          </Route>
          <Route path="/sllabys">
            <CreateSllabys />
          </Route>
          <Route path="/editSllabys/:id">
            <EditSllabys />
          </Route>
          <Route path="/school">
            <CreateSchool />
          </Route>
          <Route path="/editSchool/:id">
            <EditSchool />
          </Route>
          <Route path="/teacher">
            <CreateTeacher />
          </Route>
          <Route path="/editTeacher/:id">
            <EditTeacher />
          </Route>
          <Route path="/teacherdetails/:id">
            <TeacherDetails />
          </Route>
          <Route path="/editTeacherBatch/:id">
            <EditTeacherBatch />
          </Route>
          <Route path="/students/addStudent">
            <AddStudents />
          </Route>
          <Route path="/students/allStudents">
            <AllStudents />
          </Route>
          <Route path="/students/activeStudents">
            <ActiveStudents />
          </Route>
          <Route path="/students/StudentDetails/:id">
            <StudentDetails />
          </Route>
          <Route path="/editStudent/:id">
            <EditStudent />
          </Route>
          <Route path="/students/batchwise">
            <BatchWiseStudents />
          </Route>
          <Route path="/students/batchDetails/:id">
            <BatchWiseStudentDetails />
          </Route>
          <Route path="/teachers/teacherPayment">
            <TeacherPayment />
          </Route>
          <Route path="/teachers/teacherPaymentDetails">
            <TeacherPaymentDetails />
          </Route>
          <Route path="/teststudents">
            <StudentTest />
          </Route>
          <Route path="/students/payments/batchPayment">
            <BatchPayments />
          </Route>
          <Route path="/students/payments/otherspaymentreporting">
            <OtherPayments />
          </Route>
          <Route path="/reporting/batchpaymentreporting">
            <BatchPaymentReporting />
          </Route>
          <Route path="/reporting/otherspaymentreporting">
            <OthersPaymentReporting />
          </Route>
          <Route path="/user/allUser"><AllUser /></Route>
          <Route path="/user/createUser"><CreateUser /></Route>
          <Route path="/user/editUser/:id"><EditUser /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
