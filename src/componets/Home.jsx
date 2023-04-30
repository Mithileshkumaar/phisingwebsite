import { Grid, Stack, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";

export default function Home() {
      const [ip, setip] = useState(0);
      const [urllenght, seturllenght] = useState(0);
      const [age, setAge] = useState(0);
      const [traffic, setTraffic] = useState(0);
      const [domainRegistrationLenght, setDomainRegistrationLenght] = useState(0);
      const [op, setOp] = useState(null)

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
                                    let vars = [[ip, age, traffic, domainRegistrationLenght, urllenght]];
                                    fetch('http://127.0.0.1:5000/predict', {
                                          method: 'POST',
                                          body: JSON.stringify({
                                                ip:vars
                                          }),
                                          headers: {
                                            'Content-type': 'application/json; charset=UTF-8',
                                          },
                                        })
                                           .then((response) => response.json())
                                           .then((data) => {
                                              setOp(data['output'][0]);
                                           })
                                           .catch((err) => {
                                              console.log(err.message);
                                           });
                              }} variant="contained">Submit</Button>
                              {op === null?<p></p>: op === 1? <p>this website is safe to use</p>:<p>this is not safe use</p>}
                        </Stack>

                  </Grid>
            </div>
      )
}