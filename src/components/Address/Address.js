import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: '10px 10px',
    maxWidth: 950,
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
    fontWeight: 'bold',
    color: theme.palette.secondary.dark,
  },
  status: {
    fontWeight: 'bold',
    fontSize: '0.75rem',
    color: 'white',
    backgroundColor: 'grey',
    borderRadius: 8,
    padding: '3px 10px',
    display: 'inline-block',
  },
}));

const Address = ({ userData }) => {
  const classes = useStyles();

  return (
    <div className="address">
      <h1>Random Addresses</h1>
      <p>This is the address page</p>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeaderCell}>Image</TableCell>
                <TableCell className={classes.tableHeaderCell}>Name</TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Address
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData
                .sort((a, b) => {
                  if (a.name.last < b.name.last) return -1;
                  else if (a.name.last === b.name.last) return 0;
                  else return 1;
                })
                .map((user) => (
                  <TableRow key={user.cell}>
                    <TableCell>
                      <img src={user.picture.thumbnail} alt="user profile" />
                    </TableCell>
                    <TableCell>{`${user.name.first} ${user.name.last}`}</TableCell>
                    <TableCell>{`${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Address;
