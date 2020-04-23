import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function secsToDate(length){
  var date = new Date(0);
  date.setSeconds(length); 
  return date.toISOString().substr(11, 8);
}

function parseFromTo(dir){
  return dir.slice(0,dir.indexOf('@'));
}


export default function DenseTable(props) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">From</TableCell>
            <TableCell align="right">To</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.voicemails.map((vm) => (
            <TableRow key={vm.media_id}>
              <TableCell align="right">{vm.folder}</TableCell>
              <TableCell align="right">{parseFromTo(vm.from)}</TableCell>
              <TableCell align="right">{parseFromTo(vm.to)}</TableCell>
              <TableCell align="right">{secsToDate(vm.length)}</TableCell>
              <TableCell align="right"><button onClick={(e) => props.setFolder(e,vm,'new')}>New</button>
              <button onClick={(e) => props.setFolder(e,vm,'saved')}>Save</button>
              <button onClick={(e)=> props.setFolder(e,vm,'deleted')}> Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}