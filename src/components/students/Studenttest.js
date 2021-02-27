import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      studentPernentId: new Date(),
      clicks: 27000,
      show: true,
      clicks1: 0,
      clicks2: 0,
      clicks4: JSON.parse(localStorage.getItem('clicks4')) || 27000,
      isVisible: true,
    };
  }

  // IncrementItem = () => {
  //   const components = [
  //     this.state.studentPernentId.getFullYear(),
  //     this.state.studentPernentId.getMonth() + 1,
  //     // this.state.studentPernentId.getDate(),
  //     this.setState({ clicks4: this.state.click4 + 1 }, () => {
  //       localStorage.setItem('clicks4', JSON.stringify(this.state.clicks4));
  //     }),
  //   ];

  //   if (this.state.clicks4 >= 100000) {
  //     this.setState({ clicks4: this.state.clicks4 });
  //   } else {
  //     this.setState({ clicks4: this.state.clicks4 + 1 });
  //   }

  //   const id = components.join('' + this.state.clicks4);

  //   // this.setState({ clicks: this.state.clicks + 1 });

  //   console.log(id + this.state.clicks4);
  // };

  onSubmit(e) {
    e.preventDefault();

    const components = [
      this.state.studentPernentId.getFullYear(),
      this.state.studentPernentId.getMonth() + 1,
      // this.state.studentPernentId.getDate(),
      this.setState({ clicks4: this.state.click4 + 1 }, () => {
        localStorage.setItem('clicks4', JSON.stringify(this.state.clicks4));
      }),
    ];

    if (this.state.clicks4 >= 100000) {
      this.setState({ clicks4: this.state.clicks4 });
    } else {
      this.setState({ clicks4: this.state.clicks4 + 1 });
    }

    // this.setState({ clicks: this.state.clicks + 1 });

    const id = components.join('');

    console.log(id + this.state.clicks4);

    // axios
    //   .post('http://localhost:4000/students/addStudent', newStudent)
    //   .then((res) => console.log(res.data));
  }

  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const components = [
      this.state.studentPernentId.getFullYear(),
      this.state.studentPernentId.getMonth() + 1,
      // this.state.studentPernentId.getDate(),
    ];

    // this.setState({ clicks: this.state.clicks + 1 });

    const id = components.join('');

    return (
      <div style={{ background: 'white' }}>
        <button onClick={this.onSubmit}>Add Students</button>
        <button onClick={this.ToggleClick}>
          {this.state.show ? 'Hide number' : 'Show number'}
        </button>
        {this.state.show ? <h2>{id + this.state.clicks4}</h2> : ''}
      </div>
    );
  }
}

export default App;

// œ ∑ ´ ® † ¥ ¨ ˆ ø π
// å ß ∂ ƒ © ˙ ∆ ˚ ¬
//  ≈ ç √ ∫ ˜µ

// ¡ ™ £ ¢ ∞ § ¶ • ª º – ≠ “ ‘

//
