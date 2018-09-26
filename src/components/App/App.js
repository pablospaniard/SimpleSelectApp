import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { Button, Paper, Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'

import { Applied, Interviewing, Hired } from '../'
import { Spinner } from '../UI'

const StyledGrid = styled(Grid)`
  display: flex;
  align-items: middle;
  justify-content: center;
`

class App extends Component {
  state = {
    persons: {},
    step: 0,
    loading: true,
    selected: [],
    hired: []
  }

  componentDidMount = () => {
    axios
      .get(' https://randomuser.me/api/?nat=gb&results=5')
      .then(res => {
        this.setState({ persons: res.data, loading: false })
      })
      .catch(err => console.log(err))
  }

  onSelectandler = email => {
    const { selected } = this.state
    if (selected.indexOf(email) === -1) {
      const newSelected = selected
      newSelected.push(email)
      this.setState({ selected: newSelected })
    } else {
      const newSelected = selected
      const index = selected.indexOf(email)
      newSelected.splice(index, 1)
      this.setState({ selected: newSelected })
    }
  }

  onHiredHandler = email => {
    const { hired } = this.state
    if (hired.indexOf(email) === -1) {
      const newHired = hired
      newHired.push(email)
      this.setState({ hired: newHired })
    } else {
      const newHired = hired
      const index = hired.indexOf(email)
      newHired.splice(index, 1)
      this.setState({ hired: newHired })
    }
  }

  onNext = () => {
    const { step } = this.state
    this.setState({ step: step + 1 })
  }

  onPreviuos = () => {
    const { step } = this.state
    if (step === 1) {
      this.setState({ step: step - 1, selected: [] })
    }
    if (step === 2) {
      this.setState({ step: step - 1, hired: [] })
    }
  }

  render() {
    const { step, persons, loading, selected, hired } = this.state
    let content

    if (loading) {
      content = <Spinner />
    }

    if (!loading) {
      switch (step) {
        case 0:
          content = (
            <Fragment>
              <Typography variant="headline" style={{ padding: '20px' }}>
                Applied
              </Typography>
              <Applied
                persons={persons.results}
                onChangeHandler={this.onSelectandler}
              />
            </Fragment>
          )
          break

        case 1:
          content = (
            <Fragment>
              <Typography variant="headline" style={{ padding: '20px' }}>
                Interviewing
              </Typography>
              <Interviewing
                persons={persons.results}
                onChangeHandler={this.onHiredHandler}
                selected={selected}
              />
            </Fragment>
          )
          break

        case 2:
          content = (
            <Fragment>
              <Typography variant="headline" style={{ padding: '20px' }}>
                Hired
              </Typography>
              <Hired persons={persons.results} hired={hired} />
            </Fragment>
          )
          break

        default:
          break
      }
    }

    return (
      <Grid container>
        <StyledGrid item xs={2}>
          {this.state.step === 0 ? null : (
            <Button color="primary" onClick={this.onPreviuos}>
              Previuos
            </Button>
          )}
        </StyledGrid>
        <Grid item xs={8}>
          <Paper>{content}</Paper>
        </Grid>
        <StyledGrid item xs={2}>
          {this.state.step === 2 ||
          (selected.length === 0 && this.state.step === 1) ? null : (
            <Button color="secondary" onClick={this.onNext}>
              Next
            </Button>
          )}
        </StyledGrid>
      </Grid>
    )
  }
}

export default App
