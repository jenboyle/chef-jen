export function getPoints(cal: number, satFat: number) {
  switch (cal) {
    case 20:
      if (satFat < 2) {
        return 0.5;
      } else {
        return 1;
      }
      break;
    case 40:
      if (satFat < 1) {
        return 0.5;
      } else if (satFat < 3) {
        return 1;
      } else {
        return 1.5;
      }
      break;
    case 60:
      if (satFat < 2) {
        return 1;
      } else if (satFat < 4) {
        return 1.5;
      } else if (satFat < 6) {
        return 2;
      } else {
        return 2.5;
      }
      break;
    case 80:
      if (satFat == 0) {
        return 1;
      } else if (satFat < 2.5) {
        return 1.5;
      } else if (satFat < 4.5) {
        return 2;
      } else if (satFat < 7) {
        return 2.5;
      } else {
        return 3;
      }
      break;
    case 100:
      if (satFat < 2) {
        return 1.5;
      } else if (satFat < 3.5) {
        return 2;
      } else if (satFat < 6) {
        return 2.5;
      } else if (satFat < 8) {
        return 3;
      } else if (satFat < 10) {
        return 3.5;
      } else {
        return 4;
      }
      break;
    case 120:
      if (satFat == 0) {
        return 1.5;
      } else if (satFat < 2.5) {
        return 2;
      } else if (satFat < 4.5) {
        return 2.5;
      } else if (satFat < 7) {
        return 3;
      } else if (satFat < 9) {
        return 3.5;
      } else if (satFat < 12) {
        return 4;
      } else {
        return 4.5;
      }
      break;
    case 140:
      if (satFat < 1) {
        return 2;
      } else if (satFat < 3) {
        return 2.5;
      } else if (satFat < 5) {
        return 3;
      } else if (satFat < 7) {
        return 3.5;
      } else if (satFat < 9) {
        return 4;
      } else if (satFat < 12) {
        return 4.5;
      } else if (satFat == 12) {
        return 5;
      } else {
        return 5.5;
      }
      break;
    case 160:
      if (satFat < 2) {
        return 2.5;
      } else if (satFat < 4) {
        return 3;
      } else if (satFat < 6) {
        return 3.5;
      } else if (satFat < 8) {
        return 4;
      } else if (satFat < 10) {
        return 4.5;
      } else if (satFat == 10) {
        return 5;
      } else if (satFat == 12) {
        return 5.5;
      } else if (satFat == 14) {
        return 6;
      } else {
        return 6.5;
      }
      break;

    case 180:
      if (satFat < 1) {
        return 2.5;
      } else if (satFat < 3) {
        return 3;
      } else if (satFat < 5) {
        return 3.5;
      } else if (satFat < 7) {
        return 4;
      } else if (satFat < 9) {
        return 4.5;
      } else if (satFat < 12) {
        return 5;
      } else if (satFat == 12) {
        return 5.5;
      } else if (satFat == 14) {
        return 6;
      } else if (satFat == 16) {
        return 6.5;
      } else if (satFat == 18) {
        return 7;
      } else {
        return 7.5;
      }
      break;
    case 200:
      if (satFat < 2) {
        return 3;
      } else if (satFat < 4) {
        return 3.5;
      } else if (satFat < 6) {
        return 4;
      } else if (satFat < 8) {
        return 4.5;
      } else if (satFat < 10) {
        return 5;
      } else if (satFat == 10) {
        return 5.5;
      } else if (satFat == 12) {
        return 6;
      } else if (satFat == 14) {
        return 6.5;
      } else if (satFat == 16) {
        return 7;
      } else if (satFat == 18) {
        return 7.5;
      } else {
        return 8;
      }
      break;
    case 220:
      if (satFat == 0) {
        return 3;
      } else if (satFat < 2.5) {
        return 3.5;
      } else if (satFat < 4.5) {
        return 4;
      } else if (satFat < 7) {
        return 4.5;
      } else if (satFat < 9) {
        return 5;
      } else if (satFat < 12) {
        return 5.5;
      } else if (satFat == 12) {
        return 6;
      } else if (satFat == 14) {
        return 6.5;
      } else if (satFat == 16) {
        return 7;
      } else if (satFat == 18) {
        return 7.5;
      } else {
        return 8;
      }
      break;
    case 240:
      if (satFat < 1.5) {
        return 3.5;
      } else if (satFat < 3.5) {
        return 4;
      } else if (satFat < 6) {
        return 4.5;
      } else if (satFat < 8) {
        return 5;
      } else if (satFat < 10) {
        return 5.5;
      } else if (satFat == 10) {
        return 6;
      } else if (satFat == 12) {
        return 6.5;
      } else if (satFat == 14) {
        return 7;
      } else if (satFat == 16) {
        return 7.5;
      } else if (satFat == 18) {
        return 8;
      } else {
        return 8.5;
      }
      break;
    case 260:
      if (satFat < 2.5) {
        return 4;
      } else if (satFat < 4.5) {
        return 4.5;
      } else if (satFat < 7) {
        return 5;
      } else if (satFat < 9) {
        return 5.5;
      } else if (satFat < 12) {
        return 6;
      } else if (satFat == 12) {
        return 6.5;
      } else if (satFat == 14) {
        return 7;
      } else if (satFat == 16) {
        return 7.5;
      } else if (satFat == 18) {
        return 8;
      } else {
        return 8.5;
      }
      break;
    case 280:
      if (satFat < 1) {
        return 4;
      } else if (satFat < 3) {
        return 4.5;
      } else if (satFat < 5) {
        return 5;
      } else if (satFat < 7) {
        return 5.5;
      } else if (satFat < 9) {
        return 6;
      } else if (satFat < 12) {
        return 6.5;
      } else if (satFat == 12) {
        return 7;
      } else if (satFat == 14) {
        return 7.5;
      } else if (satFat == 16) {
        return 8;
      } else if (satFat == 18) {
        return 8.5;
      } else {
        return 9;
      }
      break;
    case 300:
      if (satFat < 2) {
        return 4.5;
      } else if (satFat < 4) {
        return 5;
      } else if (satFat < 6) {
        return 5.5;
      } else if (satFat < 8) {
        return 6;
      } else if (satFat < 10) {
        return 6.5;
      } else if (satFat == 10) {
        return 7;
      } else if (satFat == 12) {
        return 7.5;
      } else if (satFat == 14) {
        return 8;
      } else if (satFat == 16) {
        return 8.5;
      } else if (satFat == 18) {
        return 9;
      } else {
        return 9.5;
      }
      break;
    case 320:
      if (satFat < 1) {
        return 4.5;
      } else if (satFat < 3) {
        return 5;
      } else if (satFat < 5) {
        return 5.5;
      } else if (satFat < 7) {
        return 6;
      } else if (satFat < 9) {
        return 6.5;
      } else if (satFat < 12) {
        return 7;
      } else if (satFat == 12) {
        return 7.5;
      } else if (satFat == 14) {
        return 8;
      } else if (satFat == 16) {
        return 8.5;
      } else if (satFat == 18) {
        return 9;
      } else {
        return 9.5;
      }
      break;
    case 340:
      if (satFat < 1) {
        return 4.5;
      } else if (satFat < 2) {
        return 5;
      } else if (satFat < 4) {
        return 5.5;
      } else if (satFat < 6) {
        return 6;
      } else if (satFat < 8) {
        return 6.5;
      } else if (satFat < 10) {
        return 7;
      } else if (satFat == 10) {
        return 7.5;
      } else if (satFat == 12) {
        return 8;
      } else if (satFat == 14) {
        return 8.5;
      } else if (satFat == 16) {
        return 9;
      } else if (satFat == 18) {
        return 9.5;
      } else {
        return 10;
      }
      break;
    case 360:
      if (satFat == 0) {
        return 5;
      } else if (satFat < 2.5) {
        return 5.5;
      } else if (satFat < 4.5) {
        return 6;
      } else if (satFat < 7) {
        return 6.5;
      } else if (satFat < 9) {
        return 7;
      } else if (satFat == 12) {
        return 8;
      } else if (satFat == 14) {
        return 8.5;
      } else if (satFat == 16) {
        return 9;
      } else if (satFat == 18) {
        return 9.5;
      } else {
        return 10;
      }
      break;
    case 380:
      if (satFat < 1.5) {
        return 5.5;
      } else if (satFat < 3.5) {
        return 6;
      } else if (satFat < 6) {
        return 6.5;
      } else if (satFat < 8) {
        return 7;
      } else if (satFat < 10) {
        return 7.5;
      } else if (satFat == 10) {
        return 8;
      } else if (satFat == 12) {
        return 8.5;
      } else if (satFat == 14) {
        return 9;
      } else if (satFat == 16) {
        return 9.5;
      } else if (satFat == 18) {
        return 10;
      } else {
        return 10.5;
      }
      break;
    case 400:
      if (satFat == 0) {
        return 5.5;
      } else if (satFat < 2.5) {
        return 6;
      } else if (satFat < 4.5) {
        return 6.5;
      } else if (satFat < 7) {
        return 7;
      } else if (satFat < 9) {
        return 7.5;
      } else if (satFat < 12) {
        return 8;
      } else if (satFat == 12) {
        return 8.5;
      } else if (satFat == 14) {
        return 9;
      } else if (satFat == 16) {
        return 9.5;
      } else if (satFat == 18) {
        return 10;
      } else {
        return 10.5;
      }
      break;
    default:
      return 0;
  }
  return 0;
}
