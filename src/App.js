import React, { Component } from 'react';
import Board from './components/Board';
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const board = [
  {
    id: 1,
    title: '안녕하세요',
    writer: '홍길동',
    date: '2017-04-05',
    views: '2',
  },
  {
    id: 2,
    title: '안녕하세요',
    writer: '홍길동',
    date: '2017-04-05',
    views: '2',
  },
  {
    id: 3,
    title: '안녕하세요',
    writer: '홍길동',
    date: '2017-04-05',
    views: '2',
  },
];

class App extends Component {
  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {board.map((c) => {
              return <Board key={c.id} id={c.id} title={c.title} writer={c.writer} date={c.date} view={c.view} />;
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default App;
