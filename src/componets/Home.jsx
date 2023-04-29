import { Grid, Stack, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";

export default function Home() {
      const [ip, setip] = useState(0);
      const [urllenght, seturllenght] = useState(0);
      const [age, setAge] = useState(0);
      const [traffic, setTraffic] = useState(0);
      const [domainRegistrationLenght, setDomainRegistrationLenght] = useState(0);

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
                                          setip(parseInt(event.target.value));
                                    }}
                              />
                              <Typography variant="p">
                                    URL Length
                              </Typography>
                              <TextField
                                    sx={{ width: { lg: '55ch', xs: '30ch' } }}
                                    id="outlined-uncontrolled"
                                    onChange={(event) => {
                                          if(event.target.value >50){
                                                seturllenght(-1)
                                          }else{
                                                seturllenght(1);
                                          } 
                                    }}
                              />
                              <Typography variant="p">
                                    Domain registeration length(in years)
                              </Typography>
                              <TextField
                                    sx={{ width: { lg: '55ch', xs: '30ch' } }}
                                    id="outlined-uncontrolled"
                                    label="eg: 6 months - 0.5"
                                    onChange={(event) => {
                                          if(event.target.value < 1){
                                                setDomainRegistrationLenght(-1)
                                          }else{
                                                setDomainRegistrationLenght(1);
                                          } 
                                    }}
                              />
                              <Typography variant="p">
                                    age of domain
                              </Typography>
                              <TextField
                                    sx={{ width: { lg: '55ch', xs: '30ch' } }}
                                    id="outlined-uncontrolled"
                                    label="in months"
                                    onChange={(event) => {
                                          if(event.target.value < 1){
                                                setAge(-1)
                                          }else{
                                                setAge(1);
                                          } 
                                    }}
                              />
                              <Typography variant="p">
                                    web traffic
                              </Typography>
                              <TextField
                                    sx={{ width: { lg: '55ch', xs: '30ch' } }}
                                    id="outlined-uncontrolled"
                                    label=""
                                    onChange={(event) => {
                                          if(event.target.value < 100){
                                                setTraffic(-1)
                                          }else{
                                                setTraffic(1);
                                          } 
                                    }}
                              />
                              <Button sx={{ backgroundColor: 'purple' }} onClick={()=>{
                                    let vars = [ip, age, traffic, domainRegistrationLenght, urllenght];
                                    console.log(vars)
                              }} variant="contained">Submit</Button>

                        </Stack>

                  </Grid>
            </div>
      )
}