// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core/InputBase';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// import DirectionsIcon from '@material-ui/icons/Directions';
// import { Card, Typography } from '@material-ui/core';
// import { Website } from './docs/data';

// export default class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.onChangeSearch = this.onChangeSearch.bind(this);

//     this.state = {
//       website: Website,
//       search: '',
//     };
//   }

//   onChangeSearch(e) {
//     this.setState({
//       search: e.target.value,
//     });
//   }

//   render() {
//     return (
//       <div style={{ marginLeft: '2em', marginTop: '2em', marginRight: '2em' }}>
//         <Paper
//           component="form"
//           style={{
//             padding: '2px 4px',
//             display: 'flex',
//             alignItems: 'center',
//             width: 400,
//           }}
//         >
//           <InputBase
//             style={{
//               marginLeft: '1em',
//               flex: 1,
//             }}
//             placeholder="Search"
//             inputProps={{ 'aria-label': 'search' }}
//           />
//           <IconButton
//             type="submit"
//             style={{
//               padding: 10,
//             }}
//             aria-label="search"
//           >
//             <SearchIcon />
//           </IconButton>
//           <Divider
//             style={{
//               height: 28,
//               margin: 4,
//             }}
//             orientation="vertical"
//           />
//           <IconButton
//             color="primary"
//             style={{
//               padding: 10,
//             }}
//             aria-label="directions"
//           >
//             <DirectionsIcon />
//           </IconButton>
//         </Paper>
//         <br />
//         <br />
//         <div>
//           <Card>
//             {this.state.website.map(({ title, MadeBy, href }) => {
//               return (
//                 <Card
//                   key={href}
//                   style={{
//                     marginLeft: '1em',
//                     marginRight: '1em',
//                     marginBottom: '1.8em',
//                   }}
//                 >
//                   <Link to={href}>
//                     <Typography>
//                       {title}, by {MadeBy}
//                     </Typography>
//                   </Link>
//                 </Card>
//               );
//             })}
//           </Card>
//         </div>
//       </div>
//     );
//   }
// }

import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { Card, Typography } from '@material-ui/core';
import { Website } from './docs/data';

export default function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? Website
    : Website.filter((person) =>
        person.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <div style={{ marginLeft: '2em', marginTop: '2em', marginRight: '2em' }}>
      <Paper
        component="form"
        style={{
          padding: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 400,
        }}
      >
        <InputBase
          style={{
            marginLeft: '1em',
            flex: 1,
          }}
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton
          type="submit"
          style={{
            padding: 10,
          }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <Divider
          style={{
            height: 28,
            margin: 4,
          }}
          orientation="vertical"
        />
        <IconButton
          color="primary"
          style={{
            padding: 10,
          }}
          aria-label="directions"
        >
          <DirectionsIcon />
        </IconButton>
      </Paper>
      <br />
      <br />
      <div>
        <Card>
          {results.map((items) => {
            return (
              <Card
                key={items.href}
                style={{
                  marginLeft: '1em',
                  marginRight: '1em',
                  marginBottom: '1.8em',
                }}
              >
                <Link to={items.href}>
                  <Typography>
                    {items.title}, by {items.MadeBy}
                  </Typography>
                </Link>
              </Card>
            );
          })}
        </Card>
      </div>
    </div>
  );
}
