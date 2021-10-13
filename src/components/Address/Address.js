import './address.css';
import { NavLink } from 'react-router-dom';
import loader from '../grid.svg';
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
  TablePagination,
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
    backgroundColor: '#2d3549',
    color: theme.palette.getContrastText(theme.palette.primary.dark),
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

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="address">
      <h1>Random Addresses</h1>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeaderCell}>Name</TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Address
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>Email</TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Username
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.length === 0 && (
                <img className="svgLoader" src={loader} alt="svg loader" />
              )}
              {userData &&
                userData
                  .sort((a, b) => {
                    if (a.name.last < b.name.last) return -1;
                    else if (a.name.last === b.name.last) return 0;
                    else return 1;
                  })
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user) => (
                    <TableRow key={user.cell} className="tableRow">
                      <NavLink to={`/users/${user.cell}`}>
                        <TableCell>
                          <img
                            src={user.picture.thumbnail}
                            alt="user profile"
                          />
                        </TableCell>
                        <TableCell>{`${user.name.first} ${user.name.last}`}</TableCell>
                      </NavLink>
                      <TableCell>{`${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`}</TableCell>
                      <TableCell>{`${user.email}`}</TableCell>
                      <TableCell>{`${user.login.username}`}</TableCell>
                    </TableRow>
                  ))}
            </TableBody>
            <TablePagination
              rowsPerPageOptions={[5, 10, 20]}
              count={userData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Address;
