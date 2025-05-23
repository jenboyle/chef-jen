"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import StonePicker from "./StonePicker";
import { useState } from "react";
import AllowanceLabel from "./AllowanceLabel";

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
            <AllowanceLabel>Are you</AllowanceLabel>
            <RadioGroup
              aria-labelledby="gender-rg-label"
              defaultValue="3"
              name="gender"
              sx={{ marginLeft: 1 }}
              onChange={(e) => setGenderVal(Number(e.target.value))}
            >
              <FormControlLabel value="3" control={<Radio />} label="Female" />
              <FormControlLabel value="9" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </Card>

        <Card sx={{ minWidth: 150, margin: 5 }}>
          <FormControl>
            <AllowanceLabel>Are you breastfeeding</AllowanceLabel>
            <RadioGroup
              aria-labelledby="feeding-rg-label"
              defaultValue="0"
              name="feeding"
              sx={{ marginLeft: 1 }}
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
            <AllowanceLabel>Your age bracket</AllowanceLabel>
            <RadioGroup
              aria-labelledby="age-rg-label"
              defaultValue="3"
              name="age"
              sx={{ marginLeft: 1 }}
              onChange={(e) => setAgeVal(Number(e.target.value))}
            >
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
            <AllowanceLabel>
              Your weight in stones, ignore pounds
            </AllowanceLabel>
            <StonePicker stones={stonesVal} handle={setStonesVal} />
          </FormControl>
        </Card>

        <Card sx={{ minWidth: 150, margin: 5 }}>
          <FormControl>
            <AllowanceLabel>Your height</AllowanceLabel>
            <RadioGroup
              aria-labelledby="height-rg-label"
              defaultValue="1"
              name="height"
              sx={{ marginLeft: 1 }}
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
            <AllowanceLabel>Do you spend most of your time</AllowanceLabel>
            <RadioGroup
              aria-labelledby="active-rg-label"
              defaultValue="0"
              name="active"
              sx={{ marginLeft: 1 }}
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
                label="Physical Hard Work"
              />
            </RadioGroup>
          </FormControl>
        </Card>

        <Card
          sx={{
            minWidth: 150,
            margin: 5,
            background:
              "linear-gradient(0deg, rgba(242,238,153,1) 16%, rgba(230,235,194,1) 87%)",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              My Daily Ww Old 🏫 Points Allowance is{" "}
              <strong>{dailyAllowance}</strong>
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "text.secondary", fontSize: 14 }}
              component="div"
            >
              Calculate your points allowance again when: your weight changes
              stone OR you change age bracket OR you change daily activity OR
              you begin or stop breastfeeding
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
