import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateGrade from './components/grade/nav/addGradenav';
import EditGrade from './components/grade/nav/editGrade';
import CreateSubject from './components/subject/nav/subjects';
import EditSubject from './components/subject/nav/editSubjects';
import CreateSllabys from './components/sllabys.js/nav/sllabys';
import EditSllabys from './components/sllabys.js/nav/editSllabys';
import CreateSchool from './components/school/nav/school';
import EditSchool from './components/school/nav/editSchool';
import CreateTeacher from './components/teacher/nav/teacher';
import EditTeacher from './components/teacher/nav/editTeacher';
import TeacherDetails from './components/teacher/nav/teacherDetails';
import TeacherPayment from './components/teacher/nav/teacherPayment';
import TeacherPaymentDetails from './components/teacher/nav/teacherPaymentDetails';
import EditTeacherBatch from './components/teacher/nav/editBatch';
import AddStudents from './components/students/nav/addStudents';
import AllStudents from './components/students/nav/allStudents';
import ActiveStudents from './components/students/nav/ActiveStudents';
import StudentDetails from './components/students/nav/StudentDetails';
import EditStudent from './components/students/nav/editStudent';
import BatchWiseStudents from './components/students/nav/batchWiseStudent';
import BatchWiseStudentDetails from './components/students/nav/batchWiseStudentDetails';
import StudentTest from './components/students/Studenttest';
import BatchPayments from './components/students/payment/nav/batchPayments';
import OtherPayments from './components/students/payment/nav/otherPayments';
import BatchPaymentReporting from './components/reporting/batchPaymentNav';
import OthersPaymentReporting from './components/reporting/othersPaymentNav';
import AllUser from './components/user/nav/alluser';
import CreateUser from './components/user/nav/createuser';
import EditUser from './components/user/nav/edituser';
import Loginpage from './components/user/loginpage';
import Dashboard from './components/home/DashboardNav';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <React.Fragment>
      {currentUser ? (
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
          <Route path="/user/allUser">
            <AllUser />
          </Route>
          <Route path="/user/createUser">
            <CreateUser />
          </Route>
          <Route path="/user/editUser/:id">
            <EditUser />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Loginpage />
        </Switch>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
