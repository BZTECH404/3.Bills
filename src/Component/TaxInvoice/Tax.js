import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Grid, Typography, Box, Container } from '@material-ui/core';
import { updateField } from '../../action/stepperAction'; // Adjust the path based on your file structure

function Performa() {
  const dispatch = useDispatch();
  const performa = useSelector((state) => state.performa);

  const handleFieldChange = (event) => {
    const { id, value } = event.target;
    dispatch(updateField({ fieldId: id, value }));
  };
  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        minHeight: '100vh',
        width: '80%',  // Increased width to make the form wider
        marginLeft: 'auto',  // Center align the form horizontally
        marginRight: 'auto', // Center align the form horizontally
      }}
    >
      <Box width="100%">
        <Typography variant="h3" gutterBottom>
          TAX INVOICE
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="companyName"
              label="Company Name"
              variant="outlined"
              fullWidth
              value={performa.companyName}
              onChange={handleFieldChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="companyPanNo"
              label="Company Pan No."
              variant="outlined"
              fullWidth
              value={performa.companyPanNo}
              onChange={handleFieldChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="state"
              label="State"
              variant="outlined"
              fullWidth
              value={performa.state}
              onChange={handleFieldChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="invoiceNo"
              label="Invoice No."
              variant="outlined"
              fullWidth
              value={performa.invoiceNo}
              onChange={handleFieldChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="receiverName"
              label="Receiver Name"
              variant="outlined"
              fullWidth
              value={performa.receiverName}
              onChange={handleFieldChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="gstin"
              label="GSTIN"
              variant="outlined"
              fullWidth
              value={performa.gstin}
              onChange={handleFieldChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="receiverAddress"
              label="Receiver Address"
              variant="outlined"
              fullWidth
              value={performa.receiverAddress}
              onChange={handleFieldChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="receiverGstin"
              label="Receiver GSTIN"
              variant="outlined"
              fullWidth
              value={performa.receiverGstin}
              onChange={handleFieldChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="receiverState"
              label="Receiver State"
              variant="outlined"
              fullWidth
              value={performa.receiverState}
              onChange={handleFieldChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="sac_code"
              label="SAC Code"
              variant="outlined"
              fullWidth
              value={performa.sac_code}
              onChange={handleFieldChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="projectNo"
              label="Project No."
              variant="outlined"
              fullWidth
              value={performa.projectNo}
              onChange={handleFieldChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="invoiceDate"
              label="Invoice Date"
              variant="outlined"
              fullWidth
              value={performa.invoiceDate}
              onChange={handleFieldChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="projectReferenceNo"
              label="Project Reference No."
              variant="outlined"
              fullWidth
              value={performa.projectReferenceNo}
              onChange={handleFieldChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField id="workOrderNo"
              label="Work Order No."
              variant="outlined"
              fullWidth
              value={performa.workOrderNo}
              onChange={handleFieldChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="particulars"
              label="Particulars"
              variant="outlined"
              multiline
              fullWidth
              value={performa.particulars}
              onChange={handleFieldChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="amtRs"
              label="AMT. (Rs)"
              variant="outlined"
              fullWidth
              value={performa.amtRs}
              onChange={handleFieldChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="amtWords"
              label="Rs. In Words"
              variant="outlined"
              fullWidth
              value={performa.amtWords}
              onChange={handleFieldChange} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Performa;
