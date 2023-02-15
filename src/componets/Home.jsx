import { Grid, Stack, TextField, Typography, Button } from "@mui/material"

export default function Home() {
      return (
            <div>
                  <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{ minHeight: '100vh' }}
                  >

                        <Stack spacing={2}>
                              <Typography variant="p">
                                    Having a ip address
                              </Typography>
                              <TextField
                                    sx={{ width: { lg: '55ch', xs: '30ch' } }}
                                    id="outlined-controlled"
                                    label="0 - no, 1 - yes"
                                    // value={name}
                                    onChange={(event) => {
                                          // setName(event.target.value);
                                    }}
                              />
                              <Typography variant="p">
                                    URL Length
                              </Typography>
                              <TextField
                                    sx={{ width: { lg: '55ch', xs: '30ch' } }}
                                    id="outlined-uncontrolled"
                              />
                              <Typography variant="p">
                                    Domain registeration length
                              </Typography>
                              <TextField
                                    sx={{ width: { lg: '55ch', xs: '30ch' } }}
                                    id="outlined-uncontrolled"
                                    label=""
                              />
                              <Typography variant="p">
                                    age of domain
                              </Typography>
                              <TextField
                                    sx={{ width: { lg: '55ch', xs: '30ch' } }}
                                    id="outlined-uncontrolled"
                                    label="in months"
                              />
                              <Typography variant="p">
                                    web traffic
                              </Typography>
                              <TextField
                                    sx={{ width: { lg: '55ch', xs: '30ch' } }}
                                    id="outlined-uncontrolled"
                                    label=""
                              />
                              <Button sx={{ backgroundColor: 'purple' }} variant="contained">Submit</Button>

                        </Stack>

                  </Grid>
            </div>
      )
}