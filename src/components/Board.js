import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Board extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>{this.props.title}</TableCell>
        <TableCell>{this.props.writer}</TableCell>
        <TableCell>{this.props.date}</TableCell>
        <TableCell>{this.props.views}</TableCell>
      </TableRow>
    );
  }
}

export default Board;
