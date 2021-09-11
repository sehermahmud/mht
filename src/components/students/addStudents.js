import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import StudentPhoto from '../../image/student/StudentPhoto';

const Arraychecked0 = [];
const Arraychecked2 = [];
const Arraychecked3 = [];
const Arraychecked4 = [];

class AddStudents extends Component {
  constructor(props) {
    super(props);

    this.onChangeStudentFullname = this.onChangeStudentFullname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFatherName = this.onChangeFatherName.bind(this);
    this.onChangeMotherName = this.onChangeMotherName.bind(this);
    this.onChangeStudentPhoneNumber =
      this.onChangeStudentPhoneNumber.bind(this);
    this.onChangeGuardianPhoneNumber =
      this.onChangeGuardianPhoneNumber.bind(this);
    this.onChangeSpecialNote = this.onChangeSpecialNote.bind(this);
    this.onChangeStudentPhoto = this.onChangeStudentPhoto.bind(this);
    this.onChangeStudentSchool = this.onChangeStudentSchool.bind(this);
    this.onChangeEducationboard = this.onChangeEducationboard.bind(this);
    this.onChangeStudentSubject = this.onChangeStudentSubject.bind(this);
    this.onChangeBatch0 = this.onChangeBatch0.bind(this);
    this.onChangeBatch1 = this.onChangeBatch1.bind(this);
    this.onChangeBatch2 = this.onChangeBatch2.bind(this);
    this.onChangeBatch3 = this.onChangeBatch3.bind(this);
    this.onChangeBatch4 = this.onChangeBatch4.bind(this);
    this.onChangeBatch5 = this.onChangeBatch5.bind(this);
    this.onChangeBatch6 = this.onChangeBatch6.bind(this);
    this.onChangeBatch7 = this.onChangeBatch7.bind(this);
    this.onChangeBatch8 = this.onChangeBatch8.bind(this);
    this.onChangeBatch9 = this.onChangeBatch9.bind(this);
    this.onChangeBatch10 = this.onChangeBatch10.bind(this);
    this.onChangeBatch11 = this.onChangeBatch11.bind(this);
    this.onChangeBatch12 = this.onChangeBatch12.bind(this);
    this.onChangeBatch13 = this.onChangeBatch13.bind(this);
    this.onChangeBatch14 = this.onChangeBatch14.bind(this);
    this.onChangeBatch15 = this.onChangeBatch15.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeStartDate1 = this.onChangeStartDate1.bind(this);
    this.onChangeStartDate2 = this.onChangeStartDate2.bind(this);
    this.onChangeStartDate3 = this.onChangeStartDate3.bind(this);
    this.onChangeStartDate4 = this.onChangeStartDate4.bind(this);
    this.onChangeStartDate5 = this.onChangeStartDate5.bind(this);
    this.onChangeStartDate6 = this.onChangeStartDate6.bind(this);
    this.onChangeStartDate7 = this.onChangeStartDate7.bind(this);
    this.onChangeStartDate8 = this.onChangeStartDate8.bind(this);
    this.onChangeStartDate9 = this.onChangeStartDate9.bind(this);
    this.onChangeStartDate10 = this.onChangeStartDate10.bind(this);
    this.onChangeStartDate11 = this.onChangeStartDate11.bind(this);
    this.onChangeStartDate12 = this.onChangeStartDate12.bind(this);
    this.onChangeStartDate13 = this.onChangeStartDate13.bind(this);
    this.onChangeStartDate14 = this.onChangeStartDate14.bind(this);
    this.onChangeStartDate15 = this.onChangeStartDate15.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
    this.handleChange7 = this.handleChange7.bind(this);
    this.handleChange8 = this.handleChange8.bind(this);
    this.handleChange9 = this.handleChange9.bind(this);
    this.handleChange10 = this.handleChange10.bind(this);
    this.handleChange11 = this.handleChange11.bind(this);
    this.handleChange12 = this.handleChange12.bind(this);
    this.handleChange13 = this.handleChange13.bind(this);
    this.handleChange14 = this.handleChange14.bind(this);
    this.handleChange15 = this.handleChange15.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.deleteTeacher = this.deleteTeacher.bind(this);

    this.state = {
      studentPermentId: new Date(),
      clicks: JSON.parse(localStorage.getItem('clicks')) || 27001,
      studentFullName: '',
      email: '',
      fatherName: '',
      motherName: '',
      studentPhoneNumber: '',
      guardianPhoneNumber: '',
      specialNote: '',
      studentPhoto: null,
      studentSchool: '',
      sllabys: '',
      subject: '',
      Arraychecked0,
      Arraychecked1: [],
      Arraychecked2,
      Arraychecked3,
      Arraychecked4,
      Arraychecked5: [],
      Arraychecked6: [],
      Arraychecked7: [],
      Arraychecked8: [],
      Arraychecked9: [],
      Arraychecked10: [],
      Arraychecked11: [],
      Arraychecked12: [],
      Arraychecked13: [],
      Arraychecked14: [],
      Arraychecked15: [],
      checked0: false,
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      checked8: false,
      checked9: false,
      checked10: false,
      checked11: false,
      checked12: false,
      checked13: false,
      checked14: false,
      checked15: false,
      schools: [],
      allsllabys: [],
      subjects: [],
      batchs: [],
      Batch: [],
      Batch0: Object.keys(Arraychecked0)[0],
      Batch1: '',
      Batch2: Object.keys(Arraychecked2)[0],
      Batch3: Object.keys(Arraychecked3)[0],
      Batch4: Object.keys(Arraychecked4)[0],
      Batch5: '',
      Batch6: '',
      Batch7: '',
      Batch8: '',
      Batch9: '',
      Batch10: '',
      Batch11: '',
      Batch12: '',
      Batch13: '',
      Batch14: '',
      Batch15: '',
      StartDate0: new Date(),
      StartDate1: new Date(),
      StartDate2: new Date(),
      StartDate3: new Date(),
      StartDate4: new Date(),
      StartDate5: new Date(),
      StartDate6: new Date(),
      StartDate7: new Date(),
      StartDate8: new Date(),
      StartDate9: new Date(),
      StartDate10: new Date(),
      StartDate11: new Date(),
      StartDate12: new Date(),
      StartDate13: new Date(),
      StartDate14: new Date(),
      StartDate15: new Date(),
      batchprice: '',
      batchprice3: '',
    };
  }

  onChange = (event) => {
    this.setState({ Batch0: event.target.value });
  };

  handleChange() {
    this.setState({
      checked0: !this.state.checked0,
    });
  }

  handleChange1() {
    this.setState({
      checked1: !this.state.checked1,
    });
  }

  handleChange2() {
    this.setState({
      checked2: !this.state.checked2,
    });
  }

  handleChange3() {
    this.setState({
      checked3: !this.state.checked3,
    });
  }

  handleChange4() {
    this.setState({
      checked4: !this.state.checked4,
    });
  }

  handleChange5() {
    this.setState({
      checked5: !this.state.checked5,
    });
  }

  handleChange6() {
    this.setState({
      checked6: !this.state.checked6,
    });
  }

  handleChange7() {
    this.setState({
      checked7: !this.state.checked7,
    });
  }

  handleChange8() {
    this.setState({
      checked8: !this.state.checked8,
    });
  }

  handleChange9() {
    this.setState({
      checked9: !this.state.checked9,
    });
  }

  handleChange10() {
    this.setState({
      checked10: !this.state.checked10,
    });
  }

  handleChange11() {
    this.setState({
      checked11: !this.state.checked11,
    });
  }

  handleChange12() {
    this.setState({
      checked12: !this.state.checked12,
    });
  }

  handleChange13() {
    this.setState({
      checked13: !this.state.checked13,
    });
  }

  handleChange14() {
    this.setState({
      checked14: !this.state.checked14,
    });
  }

  handleChange15() {
    this.setState({
      checked15: !this.state.checked15,
    });
  }

  onChangeStudentFullname(e) {
    this.setState({ studentFullName: e.target.value });
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeFatherName(e) {
    this.setState({ fatherName: e.target.value });
  }

  onChangeMotherName(e) {
    this.setState({ motherName: e.target.value });
  }

  onChangeStudentPhoneNumber(e) {
    this.setState({ studentPhoneNumber: e.target.value });
  }

  onChangeGuardianPhoneNumber(e) {
    this.setState({ guardianPhoneNumber: e.target.value });
  }

  onChangeSpecialNote(e) {
    this.setState({ specialNote: e.target.value });
  }

  onChangeStudentPhoto(e) {
    this.setState({ studentPhoto: e.target.value });
  }

  onChangeStudentSchool(e) {
    this.setState({ studentSchool: e.target.value });
  }

  onChangeEducationboard(e) {
    this.setState({ sllabys: e.target.value });
  }

  onChangeStudentSubject(newCurrency) {
    this.setState({
      subject: newCurrency.value,
    });
  }

  onChangeBatch0(e) {
    this.setState({
      Batch0: e.target.value,
    });
  }

  onChangeBatch1(e) {
    this.setState({
      Batch1: e.target.value,
    });
  }

  onChangeBatch2(e) {
    this.setState({
      Batch2: e.target.value,
    });
  }

  onChangeBatch3(e) {
    this.setState({
      Batch3: e.target.value,
    });
  }

  onChangeBatch4(e) {
    this.setState({
      Batch4: e.target.value,
    });
  }

  onChangeBatch5(e) {
    this.setState({
      Batch5: e.target.value,
    });
  }

  onChangeBatch6(e) {
    this.setState({
      Batch6: e.target.value,
    });
  }

  onChangeBatch7(e) {
    this.setState({
      Batch7: e.target.value,
    });
  }

  onChangeBatch8(e) {
    this.setState({
      Batch8: e.target.value,
    });
  }

  onChangeBatch9(e) {
    this.setState({
      Batch9: e.target.value,
    });
  }

  onChangeBatch10(e) {
    this.setState({
      Batch10: e.target.value,
    });
  }

  onChangeBatch11(e) {
    this.setState({
      Batch11: e.target.value,
    });
  }

  onChangeBatch12(e) {
    this.setState({
      Batch12: e.target.value,
    });
  }

  onChangeBatch13(e) {
    this.setState({
      Batch13: e.target.value,
    });
  }

  onChangeBatch14(e) {
    this.setState({
      Batch14: e.target.value,
    });
  }

  onChangeBatch15(e) {
    this.setState({
      Batch15: e.target.value,
    });
  }

  onChangeStartDate(date) {
    this.setState({
      StartDate0: date,
    });
  }

  onChangeStartDate1(date) {
    this.setState({
      StartDate1: date,
    });
  }

  onChangeStartDate2(date) {
    this.setState({
      StartDate2: date,
    });
  }

  onChangeStartDate3(date) {
    this.setState({
      StartDate3: date,
    });
  }

  onChangeStartDate4(date) {
    this.setState({
      StartDate4: date,
    });
  }

  onChangeStartDate5(date) {
    this.setState({
      StartDate5: date,
    });
  }

  onChangeStartDate6(date) {
    this.setState({
      StartDate6: date,
    });
  }

  onChangeStartDate7(date) {
    this.setState({
      StartDate7: date,
    });
  }

  onChangeStartDate8(date) {
    this.setState({
      StartDate8: date,
    });
  }

  onChangeStartDate9(date) {
    this.setState({
      StartDate9: date,
    });
  }

  onChangeStartDate10(date) {
    this.setState({
      StartDate10: date,
    });
  }

  onChangeStartDate11(date) {
    this.setState({
      StartDate11: date,
    });
  }

  onChangeStartDate12(date) {
    this.setState({
      StartDate12: date,
    });
  }

  onChangeStartDate13(date) {
    this.setState({
      StartDate13: date,
    });
  }

  onChangeStartDate14(date) {
    this.setState({
      StartDate14: date,
    });
  }

  onChangeStartDate15(date) {
    this.setState({
      StartDate15: date,
    });
  }

  componentDidMount(id) {
    axios
      .get('https://mht-backend-1.herokuapp.com/schools/')
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            schools: response.data.map((school) => school.school),
          });
        }

        console.log(this.state.schools);
      });

    axios
      .get('https://mht-backend-1.herokuapp.com/sllabys/')
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            allsllabys: response.data.map((sllabys) => sllabys.sllabys),
          });
        }

        console.log(this.state.allsllabys);
      });

    axios
      .get('https://mht-backend-1.herokuapp.com/subjects/')
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            subjects: response.data,
          });
        }

        console.log(this.state.subjects);
      });

    // Batch Physics
    axios
      .get(
        `https://mht-backend-1.herokuapp.com/teachersBatch/5f90440a838fe20a3e1520d6/allTeacherBatch`
      )
      .then((response) => {
        this.setState({
          Arraychecked0: response.data.teacher.teacherBatch.map(
            (batch) => batch
          ),
        });

        console.log(this.state.Arraychecked0);
      });
    // Batch Physics
    axios
      .get(
        `https://mht-backend-1.herokuapp.com/teachersBatch/61189409239d5f00222b86b9/allTeacherBatch`
      )
      .then((response) => {
        this.setState({
          Arraychecked2: response.data.teacher.teacherBatch.map(
            (batch) => batch
          ),
        });

        console.log(this.state.Arraychecked2);
      });
    // Batch Biology
    axios
      .get(
        `https://mht-backend-1.herokuapp.com/teachersBatch/5f904557838fe20a3e1520d9/allTeacherBatch`
      )
      .then((response) => {
        this.setState({
          Arraychecked3: response.data.teacher.teacherBatch.map(
            (batch) => batch
          ),
        });

        console.log(this.state.Arraychecked3);
      });
    // Batch Biology
    axios
      .get(
        `https://mht-backend-1.herokuapp.com/teachersBatch/5f904557838fe20a3e1520d9/allTeacherBatch`
      )
      .then((response) => {
        this.setState({
          Arraychecked15: response.data.teacher.teacherBatch.map(
            (batch) => batch
          ),
        });

        console.log(this.state.Arraychecked15);
      });
    // Batch Chemistry
    axios
      .get(
        `https://mht-backend-1.herokuapp.com/teachersBatch/5f90448a838fe20a3e1520d7/allTeacherBatch `
      )
      .then((response) => {
        this.setState({
          Arraychecked4: response.data.teacher.teacherBatch.map(
            (batch) => batch
          ),
        });

        console.log(this.state.Arraychecked4);
      });

    // Batch Math
    axios
      .get(
        `https://mht-backend-1.herokuapp.com/teachersBatch/5f9045af838fe20a3e1520da/allTeacherBatch`
      )
      .then((response) => {
        if (response.data.teacher.teacherBatch.length > 0) {
          this.setState({
            Arraychecked9: response.data.teacher.teacherBatch.map(
              (batch) => batch
            ),
          });
        }
        console.log(this.state.Arraychecked9);
      });

    axios
      .get(
        `https://mht-backend-1.herokuapp.com/teachersBatch/5f9045af838fe20a3e1520da/allTeacherBatch`
      )
      .then((response) => {
        if (response.data.teacher.teacherBatch.length > 0) {
          this.setState({
            Arraychecked10: response.data.teacher.teacherBatch.map(
              (batch) => batch
            ),
          });
        }

        console.log(this.state.Arraychecked10);
      });

    axios
      .get(
        `https://mht-backend-1.herokuapp.com/teachersBatch/5f9045af838fe20a3e1520da/allTeacherBatch`
      )
      .then((response) => {
        if (response.data.teacher.teacherBatch.length > 0) {
          this.setState({
            Arraychecked11: response.data.teacher.teacherBatch.map(
              (batch) => batch
            ),
          });
        }

        console.log(this.state.Arraychecked11);
      });

    axios
      .get(
        `https://mht-backend-1.herokuapp.com/teachersBatch/5f9045af838fe20a3e1520da/allTeacherBatch`
      )
      .then((response) => {
        if (response.data.teacher.teacherBatch.length > 0) {
          this.setState({
            Arraychecked12: response.data.teacher.teacherBatch.map(
              (batch) => batch
            ),
          });
        }

        console.log(this.state.Arraychecked12);
      });
  }

  onSubmit(e) {
    e.preventDefault();

    const components = [
      this.state.studentPermentId.getFullYear(),
      this.state.studentPermentId.getMonth() + 1,
      // this.state.studentPermentId.getDate(),
      this.setState({ clicks: this.state.clicks + 1 }, () => {
        localStorage.setItem('clicks', JSON.stringify(this.state.clicks));
      }),
    ];

    if (this.state.clicks >= 100000) {
      this.setState({ clicks: this.state.clicks });
    } else {
      this.setState({ clicks: this.state.clicks + 1 });
    }

    // this.setState({ clicks: this.state.clicks + 1 });

    const id = components.join('');

    console.log(id + this.state.clicks);

    const newStudentMid = {
      checked0: this.state.checked0 ? 'Physics' : '',
      checked1: this.state.checked1 ? 'Bengali' : '',
      checked2: this.state.checked2 ? 'English' : '',
      checked3: this.state.checked3 ? 'Biology' : '',
      checked4: this.state.checked4 ? 'Chemistry' : '',
      checked5: this.state.checked5 ? 'Economics' : '',
      checked6: this.state.checked6 ? 'Accounting' : '',
      checked7: this.state.checked7 ? 'Commerce' : '',
      checked8: this.state.checked8 ? 'Business Studies' : '',
      checked9: this.state.checked9 ? 'General Mathematics' : '',
      checked10: this.state.checked10 ? 'Additional Mathematics' : '',
      checked11: this.state.checked11 ? 'Pure Mathematics' : '',
      checked12: this.state.checked12 ? 'Mathematics' : '',
      checked13: this.state.checked13 ? 'Lab-Bio' : '',
      checked14: this.state.checked14 ? 'Programing' : '',
      Batch0:
        this.state.Arraychecked0[this.state.Batch0] === undefined
          ? ''
          : this.state.Arraychecked0[this.state.Batch0].batches2,
      Batch1: this.state.Batch1,
      Batch2:
        this.state.Arraychecked2[this.state.Batch2] === undefined
          ? ''
          : this.state.Arraychecked2[this.state.Batch2].batches2,
      Batch3:
        this.state.Arraychecked3[this.state.Batch3] === undefined
          ? ''
          : this.state.Arraychecked3[this.state.Batch3].batches2,
      Batch4:
        this.state.Arraychecked4[this.state.Batch4] === undefined
          ? ''
          : this.state.Arraychecked4[this.state.Batch4].batches2,
      Batch5: this.state.Batch5,
      Batch6: this.state.Batch6,
      Batch7: this.state.Batch7,
      Batch8: this.state.Batch8,
      Batch9: this.state.Batch9,
      Batch10: this.state.Batch10,
      Batch11: this.state.Batch11,
      Batch12: this.state.Batch12,
      Batch13: this.state.Batch13,
      Batch14: this.state.Batch14,
      StartDate0: this.state.StartDate0,
      StartDate1: this.state.StartDate1,
      StartDate2: this.state.StartDate2,
      StartDate3: this.state.StartDate3,
      StartDate4: this.state.StartDate4,
      StartDate5: this.state.StartDate5,
      StartDate6: this.state.StartDate6,
      StartDate7: this.state.StartDate7,
      StartDate8: this.state.StartDate8,
      StartDate9: this.state.StartDate9,
      StartDate10: this.state.StartDate10,
      StartDate11: this.state.StartDate11,
      StartDate12: this.state.StartDate12,
      StartDate13: this.state.StartDate13,
      StartDate14: this.state.StartDate14,
    };

    const newStudent = {
      studentPermentId: id + this.state.clicks,
      studentFullName: this.state.studentFullName,
      email: this.state.email,
      fatherName: this.state.fatherName,
      motherName: this.state.motherName,
      studentPhoneNumber: this.state.studentPhoneNumber,
      guardianPhoneNumber: this.state.guardianPhoneNumber,
      specialNote: this.state.specialNote,
      studentPhoto: this.state.studentPhoto,
      studentSchool: this.state.studentSchool,
      sllabys: this.state.sllabys,
      checked0: this.state.checked0,
      checked1: this.state.checked1,
      checked2: this.state.checked2,
      checked3: this.state.checked3,
      checked4: this.state.checked4,
      checked5: this.state.checked5,
      checked6: this.state.checked6,
      checked7: this.state.checked7,
      checked8: this.state.checked8,
      checked9: this.state.checked9,
      checked10: this.state.checked10,
      checked11: this.state.checked11,
      checked12: this.state.checked12,
      checked13: this.state.checked13,
      checked14: this.state.checked14,
      Batch0:
        this.state.Arraychecked0[this.state.Batch0] === undefined
          ? ''
          : this.state.Arraychecked0[this.state.Batch0].batches2,
      Batch1: this.state.Batch1,
      Batch2:
        this.state.Arraychecked2[this.state.Batch2] === undefined
          ? ''
          : this.state.Arraychecked2[this.state.Batch2].batches2,
      Batch3:
        this.state.Arraychecked3[this.state.Batch3] === undefined
          ? ''
          : this.state.Arraychecked3[this.state.Batch3].batches2,
      Batch4:
        this.state.Arraychecked4[this.state.Batch4] === undefined
          ? ''
          : this.state.Arraychecked4[this.state.Batch4].batches2,
      Batch5: this.state.Batch5,
      Batch6: this.state.Batch6,
      Batch7: this.state.Batch7,
      Batch8: this.state.Batch8,
      Batch9: this.state.Batch9,
      Batch10: this.state.Batch10,
      Batch11: this.state.Batch11,
      Batch12: this.state.Batch12,
      Batch13: this.state.Batch13,
      Batch14: this.state.Batch14,
      StartDate0: this.state.StartDate0,
      StartDate1: this.state.StartDate1,
      StartDate2: this.state.StartDate2,
      StartDate3: this.state.StartDate3,
      StartDate4: this.state.StartDate4,
      StartDate5: this.state.StartDate5,
      StartDate6: this.state.StartDate6,
      StartDate7: this.state.StartDate7,
      StartDate8: this.state.StartDate8,
      StartDate9: this.state.StartDate9,
      StartDate10: this.state.StartDate10,
      StartDate11: this.state.StartDate11,
      StartDate12: this.state.StartDate12,
      StartDate13: this.state.StartDate13,
      StartDate14: this.state.StartDate14,
      subject: [
        newStudentMid.checked0,
        newStudentMid.checked1,
        newStudentMid.checked2,
        newStudentMid.checked3,
        newStudentMid.checked4,
        newStudentMid.checked5,
        newStudentMid.checked6,
        newStudentMid.checked7,
        newStudentMid.checked8,
        newStudentMid.checked9,
        newStudentMid.checked10,
        newStudentMid.checked11,
        newStudentMid.checked12,
        newStudentMid.checked13,
        newStudentMid.checked14,
      ].filter(Boolean),
      Batch: [
        newStudentMid.Batch0,
        newStudentMid.Batch1,
        newStudentMid.Batch2,
        newStudentMid.Batch3,
        newStudentMid.Batch4,
        newStudentMid.Batch5,
        newStudentMid.Batch6,
        newStudentMid.Batch7,
        newStudentMid.Batch8,
        newStudentMid.Batch9,
        newStudentMid.Batch10,
        newStudentMid.Batch11,
        newStudentMid.Batch12,
        newStudentMid.Batch13,
        newStudentMid.Batch14,
      ].filter(Boolean),
      StartDate: [
        newStudentMid.StartDate0,
        newStudentMid.StartDate1,
        newStudentMid.StartDate2,
        newStudentMid.StartDate3,
        newStudentMid.StartDate4,
        newStudentMid.StartDate5,
        newStudentMid.StartDate6,
        newStudentMid.StartDate7,
        newStudentMid.StartDate8,
        newStudentMid.StartDate9,
        newStudentMid.StartDate10,
        newStudentMid.StartDate11,
        newStudentMid.StartDate12,
        newStudentMid.StartDate13,
        newStudentMid.StartDate14,
      ],
      Batch09: [
        {
          open1:
            this.state.Arraychecked0[this.state.Batch0] === undefined
              ? ''
              : this.state.Arraychecked0[this.state.Batch0].batches2,
          open2:
            this.state.Arraychecked0[this.state.Batch0] === undefined
              ? ''
              : this.state.Arraychecked0[this.state.Batch0].batchPrice,
        },
        {
          open1:
            this.state.Arraychecked2[this.state.Batch2] === undefined
              ? ''
              : this.state.Arraychecked2[this.state.Batch2].batches2,
          open2:
            this.state.Arraychecked2[this.state.Batch2] === undefined
              ? ''
              : this.state.Arraychecked2[this.state.Batch2].batchPrice,
        },
        {
          open1:
            this.state.Arraychecked3[this.state.Batch3] === undefined
              ? ''
              : this.state.Arraychecked3[this.state.Batch3].batches2,
          open2:
            this.state.Arraychecked3[this.state.Batch3] === undefined
              ? ''
              : this.state.Arraychecked3[this.state.Batch3].batchPrice,
        },
        {
          open1:
            this.state.Arraychecked4[this.state.Batch4] === undefined
              ? ''
              : this.state.Arraychecked4[this.state.Batch4].batches2,
          open2:
            this.state.Arraychecked4[this.state.Batch4] === undefined
              ? ''
              : this.state.Arraychecked4[this.state.Batch4].batchPrice,
        },
      ],
    };

    console.log(newStudent);

    axios
      .post(
        'https://mht-backend-1.herokuapp.com/students/addStudent',
        newStudent
      )
      .then((res) => console.log(res.data));
  }

  render() {
    const {
      Arraychecked0,
      Arraychecked2,
      Arraychecked3,
      Arraychecked4,
      Batch0,
      Batch2,
      Batch3,
      Batch4,
    } = this.state;

    const content0 = this.state.checked0 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            value={this.state.Batch0}
            onChange={this.onChangeBatch0}
          >
            <option value="">Choose...</option>
            {/* {this.state.Arraychecked0.map((batch) => {
              return (
                <option key={batch._id} value={batch.batches2}>
                  {batch.batches2}
                  {(this.state.batchprice = batch.batchPrice)}
                  {console.log(this.state.batchprice)}
                </option>
              );
            })} */}
            {Object.keys(Arraychecked0).map((key) => (
              <option key={key} value={key}>
                {Arraychecked0[key].batches2}
              </option>
            ))}
          </select>
        </div>
        <div>
          {Arraychecked0[Batch0] === undefined
            ? console.log('nothing')
            : console.log(
                Arraychecked0[Batch0].batchPrice,
                Arraychecked0[Batch0].batches2
              )}
        </div>
        <div></div>
        <div>
          {Arraychecked0[Batch0] === undefined ? (
            console.log('nothing')
          ) : (
            <div value={this.state.batchprice}>
              {Arraychecked0[Batch0].batchPrice}
            </div>
          )}
        </div>
        <div>{this.state.batchprice}</div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate0}
            onChange={this.onChangeStartDate}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content1 = this.state.checked1 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          >
            {/* {this.state.batchs.map((batch) => {
              return (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              );
            })} */}
            <option value="">Choose...</option>
          </select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate1}
            onChange={this.onChangeStartDate1}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content2 = this.state.checked2 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            value={this.state.Batch2}
            onChange={this.onChangeBatch2}
          >
            <option value="">Choose...</option>
            {/* {this.state.Arraychecked0.map((batch) => {
              return (
                <option key={batch._id} value={batch.batches2}>
                  {batch.batches2}
                  {(this.state.batchprice = batch.batchPrice)}
                  {console.log(this.state.batchprice)}
                </option>
              );
            })} */}
            {Object.keys(Arraychecked2).map((key) => (
              <option key={key} value={key}>
                {Arraychecked2[key].batches2}
              </option>
            ))}
          </select>
        </div>
        <div>
          {Arraychecked2[Batch2] === undefined
            ? console.log('nothing')
            : console.log(
                Arraychecked2[Batch2].batchPrice,
                Arraychecked2[Batch2].batches2
              )}
        </div>
        <div></div>
        <div>
          {Arraychecked2[Batch2] === undefined ? (
            console.log('nothing')
          ) : (
            <div value={this.state.batchprice}>
              {Arraychecked2[Batch2].batchPrice}
            </div>
          )}
        </div>
        <div>{this.state.batchprice}</div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate2}
            onChange={this.onChangeStartDate2}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content3 = this.state.checked3 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            value={this.state.Batch3}
            onChange={this.onChangeBatch3}
          >
            <option value="">Choose...</option>
            {/* {this.state.Arraychecked0.map((batch) => {
              return (
                <option key={batch._id} value={batch.batches2}>
                  {batch.batches2}
                  {(this.state.batchprice = batch.batchPrice)}
                  {console.log(this.state.batchprice)}
                </option>
              );
            })} */}
            {Object.keys(Arraychecked3).map((key) => (
              <option key={key} value={key}>
                {Arraychecked3[key].batches2 === ''}
              </option>
            ))}
          </select>
        </div>
        <div>
          {Arraychecked3[Batch3] === undefined
            ? console.log('nothing')
            : console.log(
                Arraychecked3[Batch3].batchPrice,
                Arraychecked3[Batch3].batches2
              )}
        </div>
        <div></div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate3}
            onChange={this.onChangeStartDate3}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content4 = this.state.checked4 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            value={this.state.Batch4}
            onChange={this.onChangeBatch4}
          >
            <option value="">Choose...</option>
            {/* {this.state.Arraychecked0.map((batch) => {
            return (
              <option key={batch._id} value={batch.batches2}>
                {batch.batches2}
                {(this.state.batchprice = batch.batchPrice)}
                {console.log(this.state.batchprice)}
              </option>
            );
          })} */}
            {Object.keys(Arraychecked4).map((key) => (
              <option key={key} value={key}>
                {Arraychecked4[key].batches2}
              </option>
            ))}
          </select>
        </div>
        <div>
          {Arraychecked4[Batch4] === undefined
            ? console.log('nothing')
            : console.log(
                Arraychecked4[Batch4].batchPrice,
                Arraychecked4[Batch4].batches2
              )}
        </div>
        <div></div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate3}
            onChange={this.onChangeStartDate3}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content5 = this.state.checked5 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          >
            <option value="">Choose...</option>
            {/* {this.state.batchs.map((batch) => {
              return (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              );
            })} */}
          </select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate5}
            onChange={this.onChangeStartDate5}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content6 = this.state.checked6 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          >
            <option value="">Choose...</option>
            {/* {this.state.batchs.map((batch) => {
              return (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              );
            })} */}
          </select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate6}
            onChange={this.onChangeStartDate6}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content7 = this.state.checked7 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          >
            <option value="">Choose...</option>
            {/* {this.state.batchs.map((batch) => {
              return (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              );
            })} */}
          </select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate7}
            onChange={this.onChangeStartDate7}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content8 = this.state.checked8 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          >
            <option value="">Choose...</option>
            {/* {this.state.batchs.map((batch) => {
              return (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              );
            })} */}
          </select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate8}
            onChange={this.onChangeStartDate8}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content9 = this.state.checked9 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          >
            <option value="">Choose...</option>
            {/* {this.state.batchs.map((batch) => {
              return (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              );
            })} */}
          </select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDat9}
            onChange={this.onChangeStartDate9}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content10 = this.state.checked10 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          >
            <option value="">Choose...</option>
            {/* {this.state.batchs.map((batch) => {
              return (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              );
            })} */}
          </select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate10}
            onChange={this.onChangeStartDate10}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content11 = this.state.checked11 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          >
            <option value="">Choose...</option>
            {/* {this.state.batchs.map((batch) => {
              return (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              );
            })} */}
          </select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate11}
            onChange={this.onChangeStartDate11}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content12 = this.state.checked12 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          >
            <option value="">Choose...</option>
            {/* {this.state.batchs.map((batch) => {
              return (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              );
            })} */}
          </select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate12}
            onChange={this.onChangeStartDate12}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content13 = this.state.checked13 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          >
            <option value="">Choose...</option>
            {/* {this.state.batchs.map((batch) => {
              return (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              );
            })} */}
          </select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate13}
            onChange={this.onChangeStartDate13}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content14 = this.state.checked14 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          >
            <option value="">Choose...</option>
            {/* {this.state.batchs.map((batch) => {
              return (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              );
            })} */}
          </select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate14}
            onChange={this.onChangeStartDate14}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const {
      checked0,
      checked1,
      checked2,
      checked3,
      checked4,
      checked5,
      checked6,
      checked7,
      checked8,
      checked9,
      checked10,
      checked11,
      checked12,
      checked13,
      checked14,
    } = this.state;
    const {
      handleChange,
      handleChange1,
      handleChange2,
      handleChange3,
      handleChange4,
      handleChange5,
      handleChange6,
      handleChange7,
      handleChange8,
      handleChange9,
      handleChange10,
      handleChange11,
      handleChange12,
      handleChange13,
      handleChange14,
    } = this;

    const allSubjectList = [
      {
        subject: 'Physics',
        checked: checked0,
        onChange: handleChange,
        content: content0,
      },
      {
        subject: 'Bengali',
        checked: checked1,
        onChange: handleChange1,
        content: content1,
      },
      {
        subject: 'English',
        checked: checked2,
        onChange: handleChange2,
        content: content2,
      },
      {
        subject: 'Biology',
        checked: checked3,
        onChange: handleChange3,
        content: content3,
      },
      {
        subject: 'Chemistry',
        checked: checked4,
        onChange: handleChange4,
        content: content4,
      },
      {
        subject: 'Economics',
        checked: checked5,
        onChange: handleChange5,
        content: content5,
      },
      {
        subject: 'Accounting',
        checked: checked6,
        onChange: handleChange6,
        content: content6,
      },
      {
        subject: 'Commerce',
        checked: checked7,
        onChange: handleChange7,
        content: content7,
      },
      {
        subject: 'Business Studies',
        checked: checked8,
        onChange: handleChange8,
        content: content8,
      },
      {
        subject: 'General Mathematics',
        checked: checked9,
        onChange: handleChange9,
        content: content9,
      },
      {
        subject: 'Additional Mathematics',
        checked: checked10,
        onChange: handleChange10,
        content: content10,
      },
      {
        subject: 'Pure Mathematics',
        checked: checked11,
        onChange: handleChange11,
        content: content11,
      },
      {
        subject: 'Mathematics',
        checked: checked12,
        onChange: handleChange12,
        content: content12,
      },
      {
        subject: 'Lab-Bio',
        checked: checked13,
        onChange: handleChange13,
        content: content13,
      },
      {
        subject: 'Programing',
        checked: checked14,
        onChange: handleChange14,
        content: content14,
      },
    ]
      .filter((linkConfig) => linkConfig)
      .map(({ subject, checked, onChange, content }) => {
        return (
          <div
            key={subject}
            style={{
              marginRight: '60px',
              marginBottom: '0.3em',
              marginTop: '0.3em',
              marginLeft: '20px',
            }}
          >
            <input
              checked={checked}
              onChange={onChange}
              type="checkbox"
              style={{ marginRight: '0.5em' }}
              value={subject}
            />
            <label className="form-check-label">{subject}</label>
            {content}
          </div>
        );
      });

    return (
      <Grid style={{ marginTop: '4em' }}>
        <Typography
          style={{
            marginLeft: '1rem',
            textAlign: 'left',
            float: 'left',
            color: 'white',
          }}
        >
          Student Module
        </Typography>
        <Typography
          style={{
            marginLeft: '1rem',
            textAlign: 'right',
            float: 'right',
            marginRight: '5rem',
            color: 'white',
          }}
        >
          Home-Student-AddStudent
        </Typography>
        <hr
          style={{
            clear: 'both',
            marginBottom: '1em',
            marginTop: '1rem',
            border: '3px solid #00796b',
            background: '#00796b',
            width: '100%',
          }}
        />
        <Card style={{ width: '98%', margin: '1em' }}>
          <CardContent>
            <Typography variant="h6">Create New Students</Typography>
            <hr
              style={{
                marginRight: '0rem',
                marginLeft: '0rem',
                marginTop: '0',
                marginBottom: '1em',
                border: '1px solid #009688',
                background: '#009688',
              }}
            />
            <Grid container direction="row">
              <Grid item container direction="column" sm>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography>Student Fullname</Typography>
                  <input
                    className="form-control"
                    placeholder="student fullname"
                    value={this.state.studentFullName}
                    onChange={this.onChangeStudentFullname}
                  />
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography>Email</Typography>
                  <input
                    className="form-control"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  />
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography>Father's Name</Typography>
                  <input
                    className="form-control"
                    placeholder="father's name"
                    value={this.state.fatherName}
                    onChange={this.onChangeFatherName}
                  />
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography>Mother's Name</Typography>
                  <input
                    className="form-control"
                    placeholder="mother's name"
                    value={this.state.motherName}
                    onChange={this.onChangeMotherName}
                  />
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography>Student's Phone Number</Typography>
                  <input
                    className="form-control"
                    placeholder="student's phone number"
                    value={this.state.studentPhoneNumber}
                    onChange={this.onChangeStudentPhoneNumber}
                  />
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography>Guardian's Phone Number</Typography>
                  <input
                    className="form-control"
                    placeholder="guardian's phone number"
                    value={this.state.guardianPhoneNumber}
                    onChange={this.onChangeGuardianPhoneNumber}
                  />
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography>Special Note</Typography>
                  <input
                    className="form-control"
                    placeholder="special note"
                    value={this.state.specialNote}
                    onChange={this.onChangeSpecialNote}
                  />
                </div>
                <div
                  style={{
                    marginBottom: '1em',
                    marginTop: '1em',
                    width: '12em',
                    height: '12em',
                  }}
                >
                  <StudentPhoto
                    style={{
                      width: '12em',
                      height: '12em',
                      objectFit: 'cover',
                    }}
                    value={this.state.studentPhoto}
                    onChange={this.onChangeStudentPhoto}
                  />
                </div>
              </Grid>
              <Grid item container direction="column" sm>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <label>School</label>
                  <select
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                    value={this.state.studentSchool}
                    onChange={this.onChangeStudentSchool}
                  >
                    <option value="">Choose...</option>
                    {this.state.schools.map(function (school) {
                      return (
                        <option key={school} value={school}>
                          {school}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <label>Sllabys</label>
                  <select
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                    value={this.state.sllabys}
                    onChange={this.onChangeEducationboard}
                  >
                    <option value="">Choose...</option>
                    {this.state.allsllabys.map(function (sllabys) {
                      return (
                        <option key={sllabys} value={sllabys}>
                          {sllabys}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <Typography variant="h5">Choose Subject</Typography>
                <div>{allSubjectList}</div>
              </Grid>
            </Grid>
            <Grid>
              <Button
                onClick={this.onSubmit}
                style={{
                  marginLeft: '40em',
                  paddingRight: '15em',
                  paddingLeft: '15em',
                  background: '#4caf50',
                  textAlign: 'center',
                }}
              >
                Submit
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default withRouter(AddStudents);
