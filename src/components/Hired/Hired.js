import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
})

const Hired = props => {
  const { persons, classes, hired } = props

  if (hired.length === 0) {
    return (
      <Typography variant="subheading" style={{ padding: '20px' }}>
        You not selected any candidates...
      </Typography>
    )
  } else
    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Foto</TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>CellPhone</TableCell>
            <TableCell>Nationality</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {persons.map(person => {
            if (hired.indexOf(person.email) >= 0) {
              return (
                <TableRow key={person.id.value}>
                  <TableCell>
                    <img src={`${person.picture.thumbnail}`} alt="foto" />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {`${person.name.first} ${person.name.last}`}
                  </TableCell>
                  <TableCell>{person.email}</TableCell>
                  <TableCell>{person.cell}</TableCell>
                  <TableCell>{person.nat}</TableCell>
                </TableRow>
              )
            } else return null
          })}
        </TableBody>
      </Table>
    )
}

Hired.propTypes = {
  persons: PropTypes.array.isRequired,
  classes: PropTypes.object,
  hired: PropTypes.array.isRequired
}

export default withStyles(styles)(Hired)
