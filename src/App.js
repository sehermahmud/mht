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

function App() {
  return (
    <div>
      <Switch>
        <br />
        <Route path="/" component={Dashboard} />
        <Route path="/grade" component={CreateGrade} />
        <Route path="/edit/:id" component={EditGrade} />
        <Route path="/subject" component={CreateSubject} />
        <Route path="/editSubject/:id" component={EditSubject} />
        <Route path="/sllabys" component={CreateSllabys} />
        <Route path="/editSllabys/:id" component={EditSllabys} />
        <Route path="/school" component={CreateSchool} />
        <Route path="/editSchool/:id" component={EditSchool} />
        <Route path="/teacher" component={CreateTeacher} />
        <Route path="/editTeacher/:id" component={EditTeacher} />
        <Route path="/teacherdetails/:id" component={TeacherDetails} />
        <Route path="/editTeacherBatch/:id" component={EditTeacherBatch} />
        <Route path="/students/allStudents" component={AddStudents} />
        <Route path="/students/addStudent" component={AllStudents} />
        <Route path="/students/ActiveStudents" component={ActiveStudents} />
        <Route path="/students/StudentDetails/:id" component={StudentDetails} />
        <Route path="/editStudent/:id" component={EditStudent} />
        <Route path="/students/batchwise" component={BatchWiseStudents} />
        <Route
          path="/students/batchDetails/:id"
          component={BatchWiseStudentDetails}
        />
        <Route path="/teachers/teacherPayment" component={TeacherPayment} />
        <Route
          path="/teachers/teacherPaymentDetails"
          component={TeacherPaymentDetails}
        />

        <Route path="/teststudents" component={StudentTest} />

        <Route
          path="/students/payments/batchPayment"
          component={BatchPayments}
        />
      </Switch>
    </div>
  );
}

export default App;
