"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import StonePicker from "./StonePicker";
import { useState } from "react";

function CalculateDailyAllowance() {
  const [genderVal, setGenderVal] = useState(3);
  const [feedingVal, setFeedingVal] = useState(0);
  const [ageVal, setAgeVal] = useState(3);

  const [stonesVal, setStonesVal] = useState(9);

  const [heightVal, setHeightVal] = useState(1);
  const [activeVal, setActiveVal] = useState(0);

  const dailyAllowance =
    genderVal + feedingVal + ageVal + stonesVal + heightVal + activeVal;

  return (
    <Card sx={{ minWidth: 275, margin: 2 }}>
      <CardContent>
        <Typography variant="h4" component="div">
          Daily Ww Old 🏫 Points Allowance
        </Typography>
        <Card sx={{ minWidth: 150, margin: 5 }}>
          <FormControl>
            <FormLabel id="gender-label">Are you</FormLabel>
            <RadioGroup
              aria-labelledby="gender-rg-label"
              defaultValue="3"
              name="gender"
              onChange={(e) => setGenderVal(Number(e.target.value))}
            >
              <FormControlLabel value="3" control={<Radio />} label="Female" />
              <FormControlLabel value="9" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </Card>

        <Card sx={{ minWidth: 150, margin: 5 }}>
          <FormControl>
            <FormLabel id="feeding-label">Are you breastfeeding</FormLabel>
            <RadioGroup
              aria-labelledby="feeding-rg-label"
              defaultValue="0"
              name="feeding"
              onChange={(e) => setFeedingVal(Number(e.target.value))}
            >
              <FormControlLabel value="0" control={<Radio />} label="No" />
              <FormControlLabel
                value="10"
                control={<Radio />}
                label="Yes exclusively"
              />
              <FormControlLabel
                value="5"
                control={<Radio />}
                label="Yes and supplementing with solids"
              />
            </RadioGroup>
          </FormControl>
        </Card>

        <Card sx={{ minWidth: 150, margin: 5 }}>
          <FormControl>
            <FormLabel id="age-label">How old are you</FormLabel>
            <RadioGroup
              aria-labelledby="age-rg-label"
              defaultValue="3"
              name="age"
              onChange={(e) => setAgeVal(Number(e.target.value))}
            >
              <FormControlLabel value="0" control={<Radio />} label="No" />
              <FormControlLabel value="5" control={<Radio />} label="16-20" />
              <FormControlLabel value="4" control={<Radio />} label="21-35" />

              <FormControlLabel value="3" control={<Radio />} label="36-50" />
              <FormControlLabel value="2" control={<Radio />} label="51-65" />
              <FormControlLabel value="1" control={<Radio />} label="Over 65" />
            </RadioGroup>
          </FormControl>
        </Card>

        <Card sx={{ minWidth: 150, margin: 5 }}>
          <FormControl>
            <FormLabel id="stones-label">
              Your weight in stones, ignore pounds{" "}
            </FormLabel>
            <StonePicker stones={stonesVal} handle={setStonesVal} />
          </FormControl>
        </Card>

        <Card sx={{ minWidth: 150, margin: 5 }}>
          <FormControl>
            <FormLabel id="height-label">Your height</FormLabel>
            <RadioGroup
              aria-labelledby="height-rg-label"
              defaultValue="1"
              name="height"
              onChange={(e) => setHeightVal(Number(e.target.value))}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Under 5ft 4ins"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="5ft 4ins or above"
              />
            </RadioGroup>
          </FormControl>
        </Card>

        <Card sx={{ minWidth: 150, margin: 5 }}>
          <FormControl>
            <FormLabel id="active-label">
              Do you spend most of your time
            </FormLabel>
            <RadioGroup
              aria-labelledby="active-rg-label"
              defaultValue="0"
              name="active"
              onChange={(e) => setActiveVal(Number(e.target.value))}
            >
              <FormControlLabel value="0" control={<Radio />} label="Sitting" />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Standing"
              />
              <FormControlLabel value="4" control={<Radio />} label="Walking" />
              <FormControlLabel
                value="6"
                control={<Radio />}
                label="Physical Hard work"
              />
            </RadioGroup>
          </FormControl>
        </Card>

        <Card sx={{ minWidth: 150, margin: 5 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              My Daily Ww Old 🏫 Points Allowance is {dailyAllowance}
            </Typography>
          </CardContent>
        </Card>

        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          My daily points
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CalculateDailyAllowance;
