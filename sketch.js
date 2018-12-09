var myData;
var sunday, monday, tuesday, wednesday, thursday, friday, saturday;
var one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone, twentytwo, twentythree, zero;
var sunday2, monday2, tuesday2, wednesday2, thursday2, friday2, saturday2;
var one2, two2, three2, four2, five2, six2, seven2, eight2, nine2, ten2, eleven2, twelve2, thirteen2, fourteen2, fifteen2, sixteen2, seventeen2, eighteen2, nineteen2, twenty2, twentyone2, twentytwo2, twentythree2, zero2;
var pg1, pg0, pg2, pg1Su, pg1Mo, pg1Tu, pg1We, pg1Th, pg1Fr, pg1Sa, pg1CNC, pg2CNC, pgM;
var latitude = [];
var longitude = [];
var badge;
var oneNC, twoNC, threeNC, fourNC, fiveNC, sixNC, sevenNC, eightNC, nineNC, tenNC, elevenNC, twelveNC, thirteenNC, fourteenNC, fifteenNC, sixteenNC, seventeenNC, eighteenNC, nineteenNC, twentyNC, twentyoneNC, twentytwoNC, twentythreeNC, zeroNC;
var oneC, twoC, threeC, fourC, fiveC, sixC, sevenC, eightC, nineC, tenC, elevenC, twelveC, thirteenC, fourteenC, fifteenC, sixteenC, seventeenC, eighteenC, nineteenC, twentyC, twentyoneC, twentytwoC, twentythreeC, zeroC;
var sundayA, mondayA, tuesdayA, wenesdayA, thursdayA, fridayA, saturdayA;
var sundayNC, sundayC, mondayNC, mondayC, tuesdayNC, tuesdayC, wednesdayNC, wednesdayC, thursdayNC, thursdayC, fridayNC, fridayC, saturdayNC, saturdayC;
var count;
var mapImg;
var smallLo = 180;
var largeLo = -180;
var arrow;

var smallLa = 180;
var largeLa = -180;

function preload() {
  badge = loadImage("badge-01.png");
  mapImg = loadImage("Map.png");
  arrow = loadImage("badge-02.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadJSON("https://data.sfgov.org/resource/nwbb-fxkq.json", gotData);
  textFont(loadFont("Kanit-Regular.ttf"));
  // badge = loadImage("badge-01.png");
  // mapImg = loadImage("Map.png");
  one = 0;
  two = 0;
  three = 0;
  four = 0;
  five = 0;
  six = 0;
  seven = 0;
  eight = 0;
  nine = 0;
  ten = 0;
  eleven = 0;
  twelve = 0;
  thirteen = 0;
  fourteen = 0;
  fifteen = 0;
  sixteen = 0;
  seventeen = 0;
  eighteen = 0;
  nineteen = 0;
  twenty = 0;
  twentyone = 0;
  twentytwo = 0;
  twentythree = 0;
  zero = 0;
  oneC = 0;
  twoC = 0;
  threeC = 0;
  fourC = 0;
  fiveC = 0;
  sixC = 0;
  sevenC = 0;
  eightC = 0;
  nineC = 0;
  tenC = 0;
  elevenC = 0;
  twelveC = 0;
  thirteenC = 0;
  fourteenC = 0;
  fifteenC = 0;
  sixteenC = 0;
  seventeenC = 0;
  eighteenC = 0;
  nineteenC = 0;
  twentyC = 0;
  twentyoneC = 0;
  twentytwoC = 0;
  twentythreeC = 0;
  zeroC = 0;
  oneNC = 0;
  twoNC = 0;
  threeNC = 0;
  fourNC = 0;
  fiveNC = 0;
  sixNC = 0;
  sevenNC = 0;
  eightNC = 0;
  nineNC = 0;
  tenNC = 0;
  elevenNC = 0;
  twelveNC = 0;
  thirteenNC = 0;
  fourteenNC = 0;
  fifteenNC = 0;
  sixteenNC = 0;
  seventeenNC = 0;
  eighteenNC = 0;
  nineteenNC = 0;
  twentyNC = 0;
  twentyoneNC = 0;
  twentytwoNC = 0;
  twentythreeNC = 0;
  zeroNC = 0;
  one2 = 0;
  two2 = 0;
  three2 = 0;
  four2 = 0;
  five2 = 0;
  six2 = 0;
  seven2 = 0;
  eight2 = 0;
  nine2 = 0;
  ten2 = 0;
  eleven2 = 0;
  twelve2 = 0;
  thirteen2 = 0;
  fourteen2 = 0;
  fifteen2 = 0;
  sixteen2 = 0;
  seventeen2 = 0;
  eighteen2 = 0;
  nineteen2 = 0;
  twenty2 = 0;
  twentyone2 = 0;
  twentytwo2 = 0;
  twentythree2 = 0;
  zero2 = 0;
  sunday = 0;
  monday = 0;
  tuesday = 0;
  wednesday = 0;
  thursday = 0;
  friday = 0;
  saturday = 0;
  sunday2 = 0;
  monday2 = 0;
  tuesday2 = 0;
  wednesday2 = 0;
  thursday2 = 0;
  friday2 = 0;
  saturday2 = 0;
  sundayC = 0;
  mondayC = 0;
  tuesdayC = 0;
  wednesdayC = 0;
  thursdayC = 0;
  fridayC = 0;
  saturdayC = 0;
  sundayNC = 0;
  mondayNC = 0;
  tuesdayNC = 0;
  wednesdayNC = 0;
  thursdayNC = 0;
  fridayNC = 0;
  saturdayNC = 0;

  count = 30;

  sundayA = 650;
  mondayA = 650;
  tuesdayA = 650;
  wednesdayA = 650;
  thursdayA = 650;
  fridayA = 650;
  saturdayA = 650;

  pg1 = false;
  pg1Su = false;
  pg0 = true;
  pg2 = false;
  pg1Mo = false;
  pg1Tu = false;
  pg1We = false;
  pg1Th = false;
  pg1Fr = false;
  pg1Sa = false;
  pg1CNC = false;
  pg2CNC = false;
  pgM = false;

  noStroke();
}

function gotData(data) {
  myData = data;
  //text(myData[2].incident_day_of_week,250,250);
  for (var i = 0; i < myData.length; i++) {
    if (myData[i].incident_day_of_week == "Monday") {
      monday++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        mondayC++;
      } else {
        mondayNC++;
      }

    }
    if (myData[i].incident_day_of_week == "Tuesday") {
      tuesday++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        tuesdayC++;
      } else {
        tuesdayNC++;
      }
    }
    if (myData[i].incident_day_of_week == "Wednesday") {
      wednesday++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        wednesdayC++;
      } else {
        wednesdayNC++;
      }
    }
    if (myData[i].incident_day_of_week == "Thursday") {
      thursday++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        thursdayC++;
      } else {
        thursdayNC++;
      }
    }
    if (myData[i].incident_day_of_week == "Friday") {
      friday++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        fridayC++;
      } else {
        fridayNC++;
      }
    }
    if (myData[i].incident_day_of_week == "Saturday") {
      saturday++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        saturdayC++;
      } else {
        saturdayNC++;
      }
    }
    if (myData[i].incident_day_of_week == "Sunday") {
      sunday++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        sundayC++;
      } else {
        sundayNC++;
      }
    }
  }
  for (var i = 0; i < myData.length; i++) {
    if (split(myData[i].incident_time, ":")[0] == "00") {
      zero++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        zeroC++;
      } else {
        zeroNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "01") {
      one++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        oneC++;
      } else {
        oneNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "02") {
      two++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        twoC++;
      } else {
        twoNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "03") {
      three++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        threeC++;
      } else {
        threeNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "04") {
      four++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        fourC++;
      } else {
        fourNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "05") {
      five++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        fiveC++;
      } else {
        fiveNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "06") {
      six++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        sixC++;
      } else {
        sixNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "07") {
      seven++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        sevenC++;
      } else {
        sevenNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "08") {
      eight++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        eightC++;
      } else {
        eightNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "09") {
      nine++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        nineC++;
      } else {
        nineNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "10") {
      ten++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        tenC++;
      } else {
        tenNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "11") {
      eleven++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        elevenC++;
      } else {
        elevenNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "12") {
      twelve++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        twelveC++;
      } else {
        twelveNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "13") {
      thirteen++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        thirteenC++;
      } else {
        thirteenNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "14") {
      fourteen++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        fourteenC++;
      } else {
        fourteenNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "15") {
      fifteen++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        fifteenC++;
      } else {
        fifteenNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "16") {
      sixteen++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        sixteenC++;
      } else {
        sixteenNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "17") {
      seventeen++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        seventeenC++;
      } else {
        seventeenNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "18") {
      eighteen++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        eighteenC++;
      } else {
        eighteenNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "19") {
      nineteen++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        nineteenC++;
      } else {
        nineteenNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "20") {
      twenty++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        twentyC++;
      } else {
        twentyNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "21") {
      twentyone++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        twentyoneC++;
      } else {
        twentyoneNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "22") {
      twentytwo++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        twentytwoC++;
      } else {
        twentytwoNC++;
      }
    }
    if (split(myData[i].incident_time, ":")[0] == "23") {
      twentythree++;
      if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
        twentythreeC++;
      } else {
        twentythreeNC++;
      }
    }
  }
  for (var i = 0; i < myData.length; i++) {
    latitude[i] = myData[i].latitude;
    longitude[i] = myData[i].longitude;
    if (longitude[i] > largeLo)
      largeLo = longitude[i];
    else if (longitude[i] < smallLo)
      smallLo = longitude[i];
    if (latitude[i] > largeLa)
      largeLa = latitude[i];
    else if (latitude[i] < smallLa)
      smallLa = latitude[i];
  }
  //  rect(50,50,sunday,50);
  //  text(sunday, 50,50); text("sunday",100,50);
  //  text(monday, 50,150);text("monday",100,150);
  //  text(tuesday, 50,250);text("tuesday",100,250);
  //  text(wednesday, 50,350);text("wednesday",100,350);
  //  text(thursday, 50,450);text("thursday",100,450);
  //  text(friday, 50,550);text("friday",100,550);
  //  text(saturday, 50,650);text("saturday",100,650);
}

function resetValues() {
  sunday2 = 0;
  monday2 = 0;
  tuesday2 = 0;
  wednesday2 = 0;
  thursday2 = 0;
  friday2 = 0;
  saturday2 = 0;

  one2 = 0;
  two2 = 0;
  three2 = 0;
  four2 = 0;
  five2 = 0;
  six2 = 0;
  seven2 = 0;
  eight2 = 0;
  nine2 = 0;
  ten2 = 0;
  eleven2 = 0;
  twelve2 = 0;
  thirteen2 = 0;
  fourteen2 = 0;
  fifteen2 = 0;
  sixteen2 = 0;
  seventeen2 = 0;
  eighteen2 = 0;
  nineteen2 = 0;
  twenty2 = 0;
  twentyone2 = 0;
  twentytwo2 = 0;
  twentythree2 = 0;
  zero2 = 0;

  count = 30;

  sundayA = 650;
  mondayA = 650;
  tuesdayA = 650;
  wednesdayA = 650;
  thursdayA = 650;
  fridayA = 650;
  saturdayA = 650;
}

function draw() {
  if (myData) {
    if (pg0) {

      background(98, 101, 127);
      image(badge, 275, 0);
      textSize(60);
      fill(255);
      text("SFPD Incident Reports: 2018", 125, 150);
      textSize(30);
      fill(255);
      rect(150, 300, 200, 50);
      rect(700, 300, 200, 50);
      rect(425, 400, 200, 50);
      fill(0);
      text("Day of Week", 715, 335);
      text("Time of Day", 165, 335);
      text("Map", 490, 435);
      if (mouseIsPressed && mouseX >= 700 && mouseX <= 900 && mouseY >= 300 && mouseY <= 350) {
        resetValues();
        pg0 = false;
        pg1 = true;
      }
      if (mouseIsPressed && mouseX >= 150 && mouseX <= 350 && mouseY >= 300 && mouseY <= 350) {
        resetValues();
        pg0 = false;
        pg2 = true;
      }
      if (mouseIsPressed && mouseX >= 425 && mouseX <= 625 && mouseY >= 400 && mouseY <= 450) {
        resetValues();
        pg0 = false;
        pgM = true;
      }

    }
    if (pgM) {
      background(98, 101, 127);
      image(badge, 275, 0);
      //  rect(100, 100, 1000, 700);
      image(mapImg, 445 - 430, 380 - 500, 1632,1400);
      fill(0);
      rect(20,190,400,120);
      fill(255);
      text("Violent incidents:", 40,230);
      text("Non-Violent incidents:",40,280);
      fill(255, 50, 50);
      ellipse(390,220,30,30);
      fill(50, 50, 255);
      ellipse(390,270,30,30);
      // fill(0);
      // text(mouseX, 900, 100);
      // text(mouseY, 200, 100);
      for (var i = 0; i < myData.length; i++) {
        if (myData[i].incident_category == "Offences Against The Family And Children" || myData[i].incident_category == "Assault" || myData[i].incident_category == "Weapons Offense" || myData[i].incident_category == "Robbery" || myData[i].incident_category == "Arson" || myData[i].incident_category == "Sex Offense") {
          fill(255, 50, 50);
        } else {
          fill(50, 50, 255);
        }
        ellipse(map(latitude[i], smallLa, largeLa, 510, 1442, true), map(longitude[i], smallLo, largeLo, 110, 910, true), 10, 10);
      }
      // fill(255);
      // image(arrow,15,15);
      image(arrow,15,15);
      if (mouseIsPressed && mouseX >= 10 && mouseX <= 110 && mouseY >= 10 && mouseY <= 110) {
        resetValues();
        pgM = false;
        pg0 = true;
      }
    }
    if (pg1) {
      background(98, 101, 127);
      count++;
      image(badge, 275, 0);
      if (sunday2 < sunday)
        sunday2++;
      if (saturday2 < saturday)
        saturday2++;
      if (monday2 < monday)
        monday2++;
      if (tuesday2 < tuesday)
        tuesday2++;
      if (wednesday2 < wednesday)
        wednesday2++;
      if (thursday2 < thursday)
        thursday2++;
      if (friday2 < friday)
        friday2++;
      noStroke();
      textSize(24);
      if (mouseX >= 150 && mouseX <= 200 && mouseY <= 650 && mouseY >= 650 - sunday2 * 2)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(150, 650, 50, -sunday2 * 2);
      text(sunday2, 155, 650 - sunday2 * 2);
      if (mouseX >= 250 && mouseX <= 300 && mouseY <= 650 && mouseY >= 650 - monday2 * 2)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(250, 650, 50, -monday2 * 2);
      text(monday2, 255, 650 - monday2 * 2);
      if (mouseX >= 350 && mouseX <= 400 && mouseY <= 650 && mouseY >= 650 - tuesday2 * 2)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(350, 650, 50, -tuesday2 * 2);
      text(tuesday2, 355, 650 - tuesday2 * 2);
      if (mouseX >= 450 && mouseX <= 500 && mouseY <= 650 && mouseY >= 650 - wednesday2 * 2)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(450, 650, 50, -wednesday2 * 2);
      text(wednesday2, 455, 650 - wednesday2 * 2);
      if (mouseX >= 550 && mouseX <= 600 && mouseY <= 650 && mouseY >= 650 - thursday2 * 2)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(550, 650, 50, -thursday2 * 2);
      text(thursday2, 555, 650 - thursday2 * 2);
      if (mouseX >= 650 && mouseX <= 700 && mouseY <= 650 && mouseY >= 650 - friday2 * 2)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(650, 650, 50, -friday2 * 2);
      text(friday2, 655, 650 - friday2 * 2);
      if (mouseX >= 750 && mouseX <= 800 && mouseY <= 650 && mouseY >= 650 - saturday2 * 2)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(750, 650, 50, -saturday2 * 2);
      text(saturday2, 755, 650 - saturday2 * 2);



      fill(0);
      ellipse(175, 650, 75, 75);
      fill(255);
      textSize(40);
      text("Su", 152, 665);
      fill(0);
      ellipse(275, 650, 75, 75);
      fill(255);
      textSize(40);
      text("Mo", 252, 665);
      fill(0);
      ellipse(375, 650, 75, 75);
      fill(255);
      textSize(40);
      text("Tu", 352, 665);
      fill(0);
      ellipse(475, 650, 75, 75);
      fill(255);
      textSize(40);
      text("We", 448, 665);
      fill(0);
      ellipse(575, 650, 75, 75);
      fill(255);
      textSize(40);
      text("Th", 552, 665);
      fill(0);
      ellipse(675, 650, 75, 75);
      fill(255);
      textSize(40);
      text("Fr", 652, 665);
      fill(0);
      ellipse(775, 650, 75, 75);
      fill(255);
      textSize(40);
      text("Sa", 752, 665);
      image(arrow,15,15);
      fill(255);
      textSize(40);
      text("Day of the week", 300, 750);
      push();
      translate(100, 500);
      rotate(radians(-90));
      text("# of incidents", 0, 0);
      pop();
      fill(255);
      rect(50, 725, 200, 50);
      rect(700, 725, 400, 50);
      fill(0);
      text("Total", 70, 760);
      text("Violent/Non-Violent", 710, 760);


      if (mouseX >= 150 && mouseX <= 200 && mouseY <= 650 && mouseY >= 650 - sunday2 * 2) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(sunday2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 250 && mouseX <= 300 && mouseY <= 650 && mouseY >= 650 - monday2 * 2) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(monday2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 350 && mouseX <= 400 && mouseY <= 650 && mouseY >= 650 - tuesday2 * 2) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(tuesday2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 450 && mouseX <= 500 && mouseY <= 650 && mouseY >= 650 - wednesday2 * 2) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(wednesday2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 550 && mouseX <= 600 && mouseY <= 650 && mouseY >= 650 - thursday2 * 2) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(thursday2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 650 && mouseX <= 700 && mouseY <= 650 && mouseY >= 650 - friday2 * 2) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(friday2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 750 && mouseX <= 800 && mouseY <= 650 && mouseY >= 650 - saturday2 * 2) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(saturday2, mouseX + 85, mouseY + 60);
      }

      if (mouseIsPressed && mouseX >= 50 && mouseX <= 250 && mouseY >= 725 && mouseY <= 775) {
        pg1 = false;
        pg1 = true;
      }
      if (mouseIsPressed && mouseX >= 700 && mouseX <= 1100 && mouseY >= 725 && mouseY <= 775) {
        pg1 = false;
        pg1CNC = true;
      }
      if (mouseIsPressed && mouseX >= 10 && mouseX <= 110 && mouseY >= 10 && mouseY <= 110) {
        resetValues();
        pg1 = false;
        pg0 = true;
      }
    }
    if (pg1CNC) {
      background(98, 101, 127);
      image(badge, 275, 0);
      if (sunday2 < sunday)
        sunday2++;
      if (saturday2 < saturday)
        saturday2++;
      if (monday2 < monday)
        monday2++;
      if (tuesday2 < tuesday)
        tuesday2++;
      if (wednesday2 < wednesday)
        wednesday2++;
      if (thursday2 < thursday)
        thursday2++;
      if (friday2 < friday)
        friday2++;
      noStroke();
      textSize(24);


      // rect(150, 650, 50, -sunday2 * 2);
      // text(sunday2, 155, 650 - sunday2 * 2);
      // if(mouseX>=250&&mouseX<=300&&mouseY<=650&&mouseY>=650-monday2*2)
      //   fill(250,100,100);
      // else {
      //   fill(150, 50,50);
      // }

      //SUNDAY RED
      if (mouseX >= 150 && mouseX <= 200 && mouseY <= 650 - sundayNC * 2 && mouseY >= (650 - (sunday2 * 2)) - (sundayC * 2))
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(sundayC, 155, 650 - sunday2 * 2);
      rect(150, 650, 50, (-sundayC * 2) - sundayNC * 2);


      if (mouseX >= 150 && mouseX <= 200 && mouseY <= 650 && mouseY >= 650 - (sunday2 * 2) + (sundayC * 2))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(150, 650, 50, -sundayNC * 2);
      //SUNDAY BLUE
      if (mouseX >= 150 && mouseX <= 200 && mouseY <= 650 && mouseY >= 650 - (sunday2 * 2) + (sundayC * 2))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(sundayNC, 155, 675 - sunday2 * 2 + (sundayC * 2));


      // fill(150, 150, 255);
      // text(sundayNC, 155, 675 - sunday2 * 2 + (sundayC * 2));
      // fill(sunday2, sunday2 / 4, sunday2 / 4);
      // text(sundayC, 155, 650 - sunday2 * 2);

      //
      // fill(monday2, monday2 / 4, monday2 / 4);
      // rect(250, 650, 50, (-mondayC * 2) - mondayNC * 2);
      // fill(monday2 / 4, monday2 / 4, monday2);
      // rect(250, 650, 50, -mondayNC * 2);
      // fill(monday2, monday2 / 4, monday2 / 4);
      // text(mondayC, 255, 650 - monday2 * 2);
      // fill(150, 150, 255);
      // text(mondayNC, 255, 675 - monday2 * 2 + (mondayC * 2));

      //monday RED
      if (mouseX >= 250 && mouseX <= 300 && mouseY <= 650 - mondayNC * 2 && mouseY >= (650 - (monday2 * 2)) - (mondayC * 2))
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(mondayC, 255, 650 - monday2 * 2);
      rect(250, 650, 50, (-mondayC * 2) - mondayNC * 2);


      if (mouseX >= 250 && mouseX <= 300 && mouseY <= 650 && mouseY >= 650 - (monday2 * 2) + (mondayC * 2))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(250, 650, 50, -mondayNC * 2);
      //monday BLUE
      if (mouseX >= 250 && mouseX <= 300 && mouseY <= 650 && mouseY >= 650 - (monday2 * 2) + (mondayC * 2))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(mondayNC, 255, 675 - monday2 * 2 + (mondayC * 2));


      // fill(tuesday2, tuesday2 / 4, tuesday2 / 4);
      // rect(350, 650, 50, (-tuesdayC * 2) - tuesdayNC * 2);
      // fill(tuesday2 / 4, tuesday2 / 4, tuesday2);
      // rect(350, 650, 50, -tuesdayNC * 2);
      // fill(tuesday2, tuesday2 / 4, tuesday2 / 4);
      // text(tuesdayC, 355, 650 - tuesday2 * 2);
      // fill(150, 150, 255);
      // text(tuesdayNC, 355, 675 - tuesday2 * 2 + (tuesdayC * 2));


      //tuesday RED
      if (mouseX >= 350 && mouseX <= 400 && mouseY <= 650 - tuesdayNC * 2 && mouseY >= (650 - (tuesday2 * 2)) - (tuesdayC * 2))
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(tuesdayC, 355, 650 - tuesday2 * 2);
      rect(350, 650, 50, (-tuesdayC * 2) - tuesdayNC * 2);


      if (mouseX >= 350 && mouseX <= 400 && mouseY <= 650 && mouseY >= 650 - (tuesday2 * 2) + (tuesdayC * 2))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(350, 650, 50, -tuesdayNC * 2);
      //tuesday BLUE
      if (mouseX >= 350 && mouseX <= 400 && mouseY <= 650 && mouseY >= 650 - (tuesday2 * 2) + (tuesdayC * 2))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(tuesdayNC, 355, 675 - tuesday2 * 2 + (tuesdayC * 2));


      // fill(wednesday2, wednesday2 / 4, wednesday2 / 4);
      // rect(450, 650, 50, (-wednesdayC * 2) - wednesdayNC * 2);
      // fill(wednesday2 / 4, wednesday2 / 4, wednesday2);
      // rect(450, 650, 50, -wednesdayNC * 2);
      // fill(wednesday2, wednesday2 / 4, wednesday2 / 4);
      // text(wednesdayC, 455, 650 - wednesday2 * 2);
      // fill(150, 150, 255);
      // text(wednesdayNC, 455, 675 - wednesday2 * 2 + (wednesdayC * 2));

      //wednesday RED
      if (mouseX >= 450 && mouseX <= 500 && mouseY <= 650 - wednesdayNC * 2 && mouseY >= (650 - (wednesday2 * 2)) - (wednesdayC * 2))
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(wednesdayC, 455, 650 - wednesday2 * 2);
      rect(450, 650, 50, (-wednesdayC * 2) - wednesdayNC * 2);


      if (mouseX >= 450 && mouseX <= 500 && mouseY <= 650 && mouseY >= 650 - (wednesday2 * 2) + (wednesdayC * 2))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(450, 650, 50, -wednesdayNC * 2);
      //wednesday BLUE
      if (mouseX >= 450 && mouseX <= 500 && mouseY <= 650 && mouseY >= 650 - (wednesday2 * 2) + (wednesdayC * 2))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(wednesdayNC, 455, 675 - wednesday2 * 2 + (wednesdayC * 2));


      // fill(thursday2, thursday2 / 4, thursday2 / 4);
      // rect(550, 650, 50, (-thursdayC * 2) - thursdayNC * 2);
      // fill(thursday2 / 4, thursday2 / 4, thursday2);
      // rect(550, 650, 50, -thursdayNC * 2);
      //
      // fill(thursday2, thursday2 / 4, thursday2 / 4);
      // text(thursdayC, 555, 650 - thursday2 * 2);
      // fill(150, 150, 255);
      // text(thursdayNC, 555, 675 - thursday2 * 2 + (thursdayC * 2));


      //thursday RED
      if (mouseX >= 550 && mouseX <= 600 && mouseY <= 650 - thursdayNC * 2 && mouseY >= (650 - (thursday2 * 2)) - (thursdayC * 2))
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(thursdayC, 555, 650 - thursday2 * 2);
      rect(550, 650, 50, (-thursdayC * 2) - thursdayNC * 2);


      if (mouseX >= 550 && mouseX <= 600 && mouseY <= 650 && mouseY >= 650 - (thursday2 * 2) + (thursdayC * 2))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(550, 650, 50, -thursdayNC * 2);
      //thursday BLUE
      if (mouseX >= 550 && mouseX <= 600 && mouseY <= 650 && mouseY >= 650 - (thursday2 * 2) + (thursdayC * 2))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(thursdayNC, 555, 675 - thursday2 * 2 + (thursdayC * 2));


      // fill(friday2, friday2 / 4, friday2 / 4);
      // rect(650, 650, 50, (-fridayC * 2) - fridayNC * 2);
      // fill(friday2 / 4, friday2 / 4, friday2);
      // rect(650, 650, 50, -fridayNC * 2);
      // fill(friday2, friday2 / 4, friday2 / 4);
      // text(fridayC, 655, 650 - friday2 * 2);
      // fill(150, 150, 255);
      // text(fridayNC, 655, 675 - friday2 * 2 + (fridayC * 2));

      //friday RED
      if (mouseX >= 650 && mouseX <= 700 && mouseY <= 650 - fridayNC * 2 && mouseY >= (650 - (friday2 * 2)) - (fridayC * 2))
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(fridayC, 655, 650 - friday2 * 2);
      rect(650, 650, 50, (-fridayC * 2) - fridayNC * 2);


      if (mouseX >= 650 && mouseX <= 700 && mouseY <= 650 && mouseY >= 650 - (friday2 * 2) + (fridayC * 2))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(650, 650, 50, -fridayNC * 2);
      //friday BLUE
      if (mouseX >= 650 && mouseX <= 700 && mouseY <= 650 && mouseY >= 650 - (friday2 * 2) + (fridayC * 2))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(fridayNC, 655, 675 - friday2 * 2 + (fridayC * 2));

      // fill(saturday2, saturday2 / 4, saturday2 / 4);
      // rect(750, 650, 50, (-saturdayC * 2) - saturdayNC * 2);
      // fill(saturday2 / 4, saturday2 / 4, saturday2);
      // rect(750, 650, 50, -saturdayNC * 2);
      //
      // fill(saturday2, saturday2 / 4, saturday2 / 4);
      // text(saturdayC, 755, 650 - saturday2 * 2);
      // fill(150, 150, 255);
      // text(saturdayNC, 755, 675 - saturday2 * 2 + (saturdayC * 2));

      //saturday RED
      if (mouseX >= 750 && mouseX <= 800 && mouseY <= 650 - saturdayNC * 2 && mouseY >= (650 - (saturday2 * 2)) - (saturdayC * 2))
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(saturdayC, 755, 650 - saturday2 * 2);
      rect(750, 650, 50, (-saturdayC * 2) - saturdayNC * 2);


      if (mouseX >= 750 && mouseX <= 800 && mouseY <= 650 && mouseY >= 650 - (saturday2 * 2) + (saturdayC * 2))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(750, 650, 50, -saturdayNC * 2);
      //saturday BLUE
      if (mouseX >= 750 && mouseX <= 800 && mouseY <= 650 && mouseY >= 650 - (saturday2 * 2) + (saturdayC * 2))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(saturdayNC, 755, 675 - saturday2 * 2 + (saturdayC * 2));

      fill(0);
      ellipse(175, 650, 75, 75);
      fill(255);
      textSize(40);
      text("Su", 152, 665);
      fill(0);
      ellipse(275, 650, 75, 75);
      fill(255);
      textSize(40);
      text("Mo", 252, 665);
      fill(0);
      ellipse(375, 650, 75, 75);
      fill(255);
      textSize(40);
      text("Tu", 352, 665);
      fill(0);
      ellipse(475, 650, 75, 75);
      fill(255);
      textSize(40);
      text("We", 448, 665);
      fill(0);
      ellipse(575, 650, 75, 75);
      fill(255);
      textSize(40);
      text("Th", 552, 665);
      fill(0);
      ellipse(675, 650, 75, 75);
      fill(255);
      textSize(40);
      text("Fr", 652, 665);
      fill(0);
      ellipse(775, 650, 75, 75);
      fill(255);
      textSize(40);
      text("Sa", 752, 665);
      image(arrow,15,15);
      fill(255);
      textSize(40);
      text("Day of the week", 300, 750);
      push();
      translate(100, 500);
      rotate(radians(-90));
      text("# of incidents", 0, 0);
      pop();
      fill(255);
      rect(50, 725, 200, 50);
      rect(700, 725, 400, 50);
      fill(0);
      text("Total", 70, 760);
      text("Violent/Non-Violent", 710, 760);


      if (mouseX >= 150 && mouseX <= 200 && mouseY <= 650 - sundayNC * 2 && mouseY >= (650 - (sunday2 * 2)) - (sundayC * 2)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(sundayC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 150 && mouseX <= 200 && mouseY <= 650 && mouseY >= 650 - (sunday2 * 2) + (sundayC * 2)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(sundayNC, mouseX + 85, mouseY + 60);
      }

      if (mouseX >= 250 && mouseX <= 300 && mouseY <= 650 - mondayNC * 2 && mouseY >= (650 - (monday2 * 2)) - (mondayC * 2)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(mondayC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 250 && mouseX <= 300 && mouseY <= 650 && mouseY >= 650 - (monday2 * 2) + (mondayC * 2)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(mondayNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 350 && mouseX <= 400 && mouseY <= 650 - tuesdayNC * 2 && mouseY >= (650 - (tuesday2 * 2)) - (tuesdayC * 2)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(tuesdayC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 350 && mouseX <= 400 && mouseY <= 650 && mouseY >= 650 - (tuesday2 * 2) + (tuesdayC * 2)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(tuesdayNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 450 && mouseX <= 500 && mouseY <= 650 - wednesdayNC * 2 && mouseY >= (650 - (wednesday2 * 2)) - (wednesdayC * 2)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(wednesdayC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 450 && mouseX <= 500 && mouseY <= 650 && mouseY >= 650 - (wednesday2 * 2) + (wednesdayC * 2)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(wednesdayNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 550 && mouseX <= 600 && mouseY <= 650 - thursdayNC * 2 && mouseY >= (650 - (thursday2 * 2)) - (thursdayC * 2)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(thursdayC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 550 && mouseX <= 600 && mouseY <= 650 && mouseY >= 650 - (thursday2 * 2) + (thursdayC * 2)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(thursdayNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 650 && mouseX <= 700 && mouseY <= 650 - fridayNC * 2 && mouseY >= (650 - (friday2 * 2)) - (fridayC * 2)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(fridayC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 650 && mouseX <= 700 && mouseY <= 650 && mouseY >= 650 - (friday2 * 2) + (fridayC * 2)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(fridayNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 750 && mouseX <= 800 && mouseY <= 650 - saturdayNC * 2 && mouseY >= (650 - (saturday2 * 2)) - (saturdayC * 2)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(saturdayC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 750 && mouseX <= 800 && mouseY <= 650 && mouseY >= 650 - (saturday2 * 2) + (saturdayC * 2)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(saturdayNC, mouseX + 85, mouseY + 60);
      }



      // if (mouseIsPressed && mouseX >= 700 && mouseX <= 1100 && mouseY >= 725 && mouseY <= 775) {
      //   pg1CNC = false;
      //   pg1CNC = true;
      // }
      if (mouseIsPressed && mouseX >= 50 && mouseX <= 250 && mouseY >= 725 && mouseY <= 775) {
        pg1CNC = false;
        pg1 = true;
      }

      if (mouseIsPressed && mouseX >= 10 && mouseX <= 110 && mouseY >= 10 && mouseY <= 110) {

        resetValues();
        pg1CNC = false;
        pg0 = true;
      }
    }
    if (pg2) {
      background(98, 101, 127);
      image(badge, 275, 0);
      if (zero2 < zero)
        zero2++;
      if (one2 < one)
        one2++;
      if (two2 < two)
        two2++;
      if (three2 < three)
        three2++;
      if (four2 < four)
        four2++;
      if (five2 < five)
        five2++;
      if (six2 < six)
        six2++;
      if (seven2 < seven)
        seven2++;
      if (eight2 < eight)
        eight2++;
      if (nine2 < nine)
        nine2++;
      if (ten2 < ten)
        ten2++;
      if (eleven2 < eleven)
        eleven2++;
      if (twelve2 < twelve)
        twelve2++;
      if (thirteen2 < thirteen)
        thirteen2++;
      if (fourteen2 < fourteen)
        fourteen2++;
      if (fifteen2 < fifteen)
        fifteen2++;
      if (sixteen2 < sixteen)
        sixteen2++;
      if (seventeen2 < seventeen)
        seventeen2++;
      if (eighteen2 < eighteen)
        eighteen2++;
      if (nineteen2 < nineteen)
        nineteen2++;
      if (twenty2 < twenty)
        twenty2++;
      if (twentyone2 < twentyone)
        twentyone2++;
      if (twentytwo2 < twentytwo)
        twentytwo2++;
      if (twentythree2 < twentythree)
        twentythree2++;
      noStroke();
      textSize(20);
      if (mouseX >= 50 && mouseX <= 90 && mouseY <= 450 && mouseY >= 450 - zero2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(50, 450, 40, -zero2 * 4);
      text(zero2, 50, 450 - zero2 * 4);

      if (mouseX >= 100 && mouseX <= 140 && mouseY <= 450 && mouseY >= 450 - one2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(100, 450, 40, -one2 * 4);
      text(one2, 100, 450 - one2 * 4);

      if (mouseX >= 150 && mouseX <= 190 && mouseY <= 450 && mouseY >= 450 - two2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(150, 450, 40, -two2 * 4);
      text(two2, 150, 450 - two2 * 4);

      if (mouseX >= 200 && mouseX <= 240 && mouseY <= 450 && mouseY >= 450 - three2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(200, 450, 40, -three2 * 4);
      text(three2, 200, 450 - three2 * 4);

      if (mouseX >= 250 && mouseX <= 290 && mouseY <= 450 && mouseY >= 450 - four2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(250, 450, 40, -four2 * 4);
      text(four2, 250, 450 - four2 * 4);
      if (mouseX >= 300 && mouseX <= 340 && mouseY <= 450 && mouseY >= 450 - five2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(300, 450, 40, -five2 * 4);
      text(five2, 300, 450 - five2 * 4);
      if (mouseX >= 350 && mouseX <= 390 && mouseY <= 450 && mouseY >= 450 - six2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(350, 450, 40, -six2 * 4);
      text(six2, 350, 450 - six2 * 4);
      if (mouseX >= 400 && mouseX <= 440 && mouseY <= 450 && mouseY >= 450 - seven2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(400, 450, 40, -seven2 * 4);
      text(seven2, 400, 450 - seven2 * 4);
      if (mouseX >= 450 && mouseX <= 490 && mouseY <= 450 && mouseY >= 450 - eight2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(450, 450, 40, -eight2 * 4);
      text(eight2, 450, 450 - eight2 * 4);
      if (mouseX >= 500 && mouseX <= 540 && mouseY <= 450 && mouseY >= 450 - nine2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(500, 450, 40, -nine2 * 4);
      text(nine2, 500, 450 - nine2 * 4);
      if (mouseX >= 550 && mouseX <= 590 && mouseY <= 450 && mouseY >= 450 - ten2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(550, 450, 40, -ten2 * 4);
      text(ten2, 550, 450 - ten2 * 4);
      if (mouseX >= 600 && mouseX <= 640 && mouseY <= 450 && mouseY >= 450 - eleven2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(600, 450, 40, -eleven2 * 4);
      text(eleven2, 600, 450 - eleven2 * 4);
      if (mouseX >= 650 && mouseX <= 690 && mouseY <= 450 && mouseY >= 450 - twelve2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(650, 450, 40, -twelve2 * 4);
      text(twelve2, 650, 450 - twelve2 * 4);
      if (mouseX >= 700 && mouseX <= 740 && mouseY <= 450 && mouseY >= 450 - thirteen2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(700, 450, 40, -thirteen2 * 4);
      text(thirteen2, 700, 450 - thirteen2 * 4);
      if (mouseX >= 750 && mouseX <= 790 && mouseY <= 450 && mouseY >= 450 - fourteen2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(750, 450, 40, -fourteen2 * 4);
      text(fourteen2, 750, 450 - fourteen2 * 4);
      if (mouseX >= 800 && mouseX <= 840 && mouseY <= 450 && mouseY >= 450 - fifteen2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(800, 450, 40, -fifteen2 * 4);
      text(fifteen2, 800, 450 - fifteen2 * 4);
      if (mouseX >= 850 && mouseX <= 890 && mouseY <= 450 && mouseY >= 450 - sixteen2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(850, 450, 40, -sixteen2 * 4);
      text(sixteen2, 850, 450 - sixteen2 * 4);
      if (mouseX >= 900 && mouseX <= 940 && mouseY <= 450 && mouseY >= 450 - seventeen2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(900, 450, 40, -seventeen2 * 4);
      text(seventeen2, 900, 450 - seventeen2 * 4);
      if (mouseX >= 950 && mouseX <= 990 && mouseY <= 450 && mouseY >= 450 - eighteen2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(950, 450, 40, -eighteen2 * 4);
      text(eighteen2, 950, 450 - eighteen2 * 4);
      if (mouseX >= 1000 && mouseX <= 1040 && mouseY <= 450 && mouseY >= 450 - nineteen2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(1000, 450, 40, -nineteen2 * 4);
      text(nineteen2, 1000, 450 - nineteen2 * 4);
      if (mouseX >= 1050 && mouseX <= 1090 && mouseY <= 450 && mouseY >= 450 - twenty2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(1050, 450, 40, -twenty2 * 4);
      text(twenty2, 1050, 450 - twenty2 * 4);

      if (mouseX >= 1100 && mouseX <= 1140 && mouseY <= 450 && mouseY >= 450 - twentyone2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(1100, 450, 40, -twentyone2 * 4);
      text(twentyone2, 1100, 450 - twentyone2 * 4);

      if (mouseX >= 1150 && mouseX <= 1190 && mouseY <= 450 && mouseY >= 450 - twentytwo2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(1150, 450, 40, -twentytwo2 * 4);
      text(twentytwo2, 1150, 450 - twentytwo2 * 4);

      if (mouseX >= 1200 && mouseX <= 1240 && mouseY <= 450 && mouseY >= 450 - twentythree2 * 4)
        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      rect(1200, 450, 40, -twentythree2 * 4);
      text(twentythree2, 1200, 450 - twentythree2 * 4);

      fill(0);
      ellipse(70, 450, 40, 40);
      fill(255);
      textSize(20);
      text("00", 57, 457);
      fill(0);
      ellipse(120, 450, 40, 40);
      fill(255);
      textSize(20);
      text("01", 107, 457);
      fill(0);
      ellipse(170, 450, 40, 40);
      fill(255);
      textSize(20);
      text("02", 157, 455);
      fill(0);
      ellipse(220, 450, 40, 40);
      fill(255);
      textSize(20);
      text("03", 207, 455);
      fill(0);
      ellipse(270, 450, 40, 40);
      fill(255);
      textSize(20);
      text("04", 257, 455);
      fill(0);
      ellipse(320, 450, 40, 40);
      fill(255);
      textSize(20);
      text("05", 307, 455);
      fill(0);
      ellipse(370, 450, 40, 40);
      fill(255);
      textSize(20);
      text("06", 357, 455);
      fill(0);
      ellipse(420, 450, 40, 40);
      fill(255);
      textSize(20);
      text("07", 407, 455);
      fill(0);
      ellipse(470, 450, 40, 40);
      fill(255);
      textSize(20);
      text("08", 457, 455);

      fill(0);
      ellipse(520, 450, 40, 40);
      fill(255);
      textSize(20);
      text("09", 507, 455);
      fill(0);
      ellipse(570, 450, 40, 40);
      fill(255);
      textSize(20);
      text("10", 557, 455);
      fill(0);
      ellipse(620, 450, 40, 40);
      fill(255);
      textSize(20);
      text("11", 607, 455);
      fill(0);
      ellipse(670, 450, 40, 40);
      fill(255);
      textSize(20);
      text("12", 657, 455);
      fill(0);
      ellipse(720, 450, 40, 40);
      fill(255);
      textSize(20);
      text("13", 707, 455);
      fill(0);
      ellipse(770, 450, 40, 40);
      fill(255);
      textSize(20);
      text("14", 757, 455);
      fill(0);
      ellipse(820, 450, 40, 40);
      fill(255);
      textSize(20);
      text("15", 807, 455);
      fill(0);
      ellipse(870, 450, 40, 40);
      fill(255);
      textSize(20);
      text("16", 857, 455);
      fill(0);
      ellipse(920, 450, 40, 40);
      fill(255);
      textSize(20);
      text("17", 907, 455);
      fill(0);
      ellipse(970, 450, 40, 40);
      fill(255);
      textSize(20);
      text("18", 957, 455);
      fill(0);
      ellipse(1020, 450, 40, 40);
      fill(255);
      textSize(20);
      text("19", 1007, 455);
      fill(0);
      ellipse(1070, 450, 40, 40);
      fill(255);
      textSize(20);
      text("20", 1057, 455);
      fill(0);
      ellipse(1120, 450, 40, 40);
      fill(255);
      textSize(20);
      text("21", 1107, 455);
      fill(0);
      ellipse(1170, 450, 40, 40);
      fill(255);
      textSize(20);
      text("22", 1157, 455);
      fill(0);
      ellipse(1220, 450, 40, 40);
      fill(255);
      textSize(20);
      text("23", 1207, 455);
      fill(255);
      image(arrow,15,15);
      fill(255);
      textSize(40);
      text("Time of day (every hour)", 360, 520);
      push();
      translate(40, 430);
      rotate(radians(-90));
      text("# of incidents", 0, 0);
      pop();
      fill(255);
      rect(50, 500, 200, 50);
      rect(900, 500, 400, 50);
      fill(0);
      text("Total", 70, 540);
      text("Violent/Non-Violent", 910, 535);

      if (mouseX >= 50 && mouseX <= 90 && mouseY <= 450 && mouseY >= 450 - zero2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(zero2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 100 && mouseX <= 140 && mouseY <= 450 && mouseY >= 450 - one2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(one2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 150 && mouseX <= 190 && mouseY <= 450 && mouseY >= 450 - two2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(two2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 200 && mouseX <= 240 && mouseY <= 450 && mouseY >= 450 - three2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(three2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 250 && mouseX <= 290 && mouseY <= 450 && mouseY >= 450 - four2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(four2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 300 && mouseX <= 340 && mouseY <= 450 && mouseY >= 450 - five2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(five2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 350 && mouseX <= 390 && mouseY <= 450 && mouseY >= 450 - six2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(six2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 400 && mouseX <= 440 && mouseY <= 450 && mouseY >= 450 - seven2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(seven2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 450 && mouseX <= 490 && mouseY <= 450 && mouseY >= 450 - eight2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(eight2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 500 && mouseX <= 540 && mouseY <= 450 && mouseY >= 450 - nine2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(nine2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 550 && mouseX <= 590 && mouseY <= 450 && mouseY >= 450 - ten2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(ten2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 600 && mouseX <= 640 && mouseY <= 450 && mouseY >= 450 - eleven2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(eleven2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 650 && mouseX <= 690 && mouseY <= 450 && mouseY >= 450 - twelve2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(twelve2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 700 && mouseX <= 740 && mouseY <= 450 && mouseY >= 450 - thirteen2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(thirteen2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 750 && mouseX <= 790 && mouseY <= 450 && mouseY >= 450 - fourteen2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(fourteen2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 800 && mouseX <= 840 && mouseY <= 450 && mouseY >= 450 - fifteen2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(fifteen2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 850 && mouseX <= 890 && mouseY <= 450 && mouseY >= 450 - sixteen2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(sixteen2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 900 && mouseX <= 940 && mouseY <= 450 && mouseY >= 450 - seventeen2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(seventeen2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 950 && mouseX <= 990 && mouseY <= 450 && mouseY >= 450 - eighteen2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(eighteen2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 1000 && mouseX <= 1040 && mouseY <= 450 && mouseY >= 450 - nineteen2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(nineteen2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 1050 && mouseX <= 1090 && mouseY <= 450 && mouseY >= 450 - twenty2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(twenty2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 1100 && mouseX <= 1140 && mouseY <= 450 && mouseY >= 450 - twentyone2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(twentyone2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 1150 && mouseX <= 1190 && mouseY <= 450 && mouseY >= 450 - twentytwo2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(twentytwo2, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 1200 && mouseX <= 1240 && mouseY <= 450 && mouseY >= 450 - twentythree2 * 4) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 200, 75);
        fill(255);
        text("Total incidents:", mouseX + 15, mouseY + 30);
        text(twentythree2, mouseX + 85, mouseY + 60);
      }


      if (mouseIsPressed && mouseX >= 900 && mouseX <= 1300 && mouseY >= 500 && mouseY <= 550) {
        pg2CNC = true;
        pg2 = false;
      }
      if (mouseIsPressed && mouseX >= 10 && mouseX <= 110 && mouseY >= 10 && mouseY <= 110) {
        pg2 = false;
        pg0 = true;
      }
    }
    if (pg2CNC) {
      background(98, 101, 127);
      image(badge, 275, 0);
      if (zero2 < zero)
        zero2++;
      if (one2 < one)
        one2++;
      if (two2 < two)
        two2++;
      if (three2 < three)
        three2++;
      if (four2 < four)
        four2++;
      if (five2 < five)
        five2++;
      if (six2 < six)
        six2++;
      if (seven2 < seven)
        seven2++;
      if (eight2 < eight)
        eight2++;
      if (nine2 < nine)
        nine2++;
      if (ten2 < ten)
        ten2++;
      if (eleven2 < eleven)
        eleven2++;
      if (twelve2 < twelve)
        twelve2++;
      if (thirteen2 < thirteen)
        thirteen2++;
      if (fourteen2 < fourteen)
        fourteen2++;
      if (fifteen2 < fifteen)
        fifteen2++;
      if (sixteen2 < sixteen)
        sixteen2++;
      if (seventeen2 < seventeen)
        seventeen2++;
      if (eighteen2 < eighteen)
        eighteen2++;
      if (nineteen2 < nineteen)
        nineteen2++;
      if (twenty2 < twenty)
        twenty2++;
      if (twentyone2 < twentyone)
        twentyone2++;
      if (twentytwo2 < twentytwo)
        twentytwo2++;
      if (twentythree2 < twentythree)
        twentythree2++;
      noStroke();
      textSize(20);

      if (mouseX >= 50 && mouseX <= 90 && mouseY <= 450 - (zeroNC * 4) && mouseY >= 450 - (zero2 * 4) - (zeroC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(zeroC, 50, 450 - zero2 * 4);
      rect(50, 450, 40, (-zeroC * 4) - zeroNC * 4);

      if (mouseX >= 50 && mouseX <= 90 && mouseY <= 450 && mouseY >= 450 - (zero2 * 4) + (zeroC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(50, 450, 40, -zeroNC * 4);

      if (mouseX >= 50 && mouseX <= 90 && mouseY <= 450 && mouseY >= 450 - (zero2 * 4) + (zeroC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(zeroNC, 50, 465 - zero2 * 4 + (zeroC * 4));

      // if (mouseX >= 50 && mouseX <= 90 && mouseY <= 450 && mouseY >= 450 - zero2*4)
      //   fill(250, 100, 100);
      // else {
      //   fill(150, 50, 50);
      // }
      // fill(zero2, zero2 / 4, zero2 / 4);
      // rect(50, 450, 40, (-zeroC * 4) - zeroNC * 4);
      // fill(zero2 / 4, zero2 / 4, zero2);
      // rect(50, 450, 40, -zeroNC * 4);
      // fill(150, 150, 255);
      // text(zeroNC, 50, 465 - zero2 * 4 + (zeroC * 4));
      // fill(zero2, zero2 / 4, zero2 / 4);
      // text(zeroC, 50, 450 - zero2 * 4);

      if (mouseX >= 100 && mouseX <= 140 && mouseY <= 450 - (oneNC * 4) && mouseY >= 450 - (one2 * 4) - (oneC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(oneC, 100, 450 - one2 * 4);
      rect(100, 450, 40, (-oneC * 4) - oneNC * 4);

      if (mouseX >= 100 && mouseX <= 140 && mouseY <= 450 && mouseY >= 450 - (one2 * 4) + (oneC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(100, 450, 40, -oneNC * 4);

      if (mouseX >= 100 && mouseX <= 140 && mouseY <= 450 && mouseY >= 450 - (one2 * 4) + (oneC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(oneNC, 100, 465 - one2 * 4 + (oneC * 4));

      // fill(one2, one2 / 4, one2 / 4);
      // rect(100, 450, 40, (-oneC * 4) - oneNC * 4);
      // fill(one2 / 4, one2 / 4, one2);
      // rect(100, 450, 40, -oneNC * 4);
      // fill(150, 150, 255);
      // text(oneNC, 100, 465 - one2 * 4 + (oneC * 4));
      // fill(one2, one2 / 4, one2 / 4);
      // text(oneC, 100, 450 - one2 * 4);

      if (mouseX >= 150 && mouseX <= 190 && mouseY <= 450 - (twoNC * 4) && mouseY >= 450 - (two2 * 4) - (twoC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(twoC, 150, 450 - two2 * 4);
      rect(150, 450, 40, (-twoC * 4) - twoNC * 4);

      if (mouseX >= 150 && mouseX <= 190 && mouseY <= 450 && mouseY >= 450 - (two2 * 4) + (twoC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(150, 450, 40, -twoNC * 4);

      if (mouseX >= 150 && mouseX <= 190 && mouseY <= 450 && mouseY >= 450 - (two2 * 4) + (twoC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(twoNC, 150, 465 - two2 * 4 + (twoC * 4));

      // fill(two2, two2 / 4, two2 / 4);
      // rect(150, 450, 40, (-twoC * 4) - twoNC * 4);
      // fill(two2 / 4, two2 / 4, two2);
      // rect(150, 450, 40, -twoNC * 4);
      // fill(150, 150, 255);
      // text(twoNC, 150, 465 - two2 * 4 + (twoC * 4));
      // fill(two2, two2 / 4, two2 / 4);
      // text(twoC, 150, 450 - two2 * 4);

      if (mouseX >= 200 && mouseX <= 240 && mouseY <= 450 - (threeNC * 4) && mouseY >= 450 - (three2 * 4) - (threeC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(threeC, 200, 450 - three2 * 4);
      rect(200, 450, 40, (-threeC * 4) - threeNC * 4);

      if (mouseX >= 200 && mouseX <= 240 && mouseY <= 450 && mouseY >= 450 - (three2 * 4) + (threeC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(200, 450, 40, -threeNC * 4);

      if (mouseX >= 200 && mouseX <= 240 && mouseY <= 450 && mouseY >= 450 - (three2 * 4) + (threeC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(threeNC, 200, 465 - three2 * 4 + (threeC * 4));

      // fill(three2, three2 / 4, three2 / 4);
      // rect(200, 450, 40, (-threeC * 4) - threeNC * 4);
      // fill(three2 / 4, three2 / 4, three2);
      // rect(200, 450, 40, -threeNC * 4);
      // fill(150, 150, 255);
      // text(threeNC, 200, 465 - three2 * 4 + (threeC * 4));
      // fill(three2, three2 / 4, three2 / 4);
      // text(threeC, 200, 450 - three2 * 4);

      if (mouseX >= 250 && mouseX <= 290 && mouseY <= 450 - (fourNC * 4) && mouseY >= 450 - (four2 * 4) - (fourC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(fourC, 250, 450 - four2 * 4);
      rect(250, 450, 40, (-fourC * 4) - fourNC * 4);

      if (mouseX >= 250 && mouseX <= 290 && mouseY <= 450 && mouseY >= 450 - (four2 * 4) + (fourC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(250, 450, 40, -fourNC * 4);

      if (mouseX >= 250 && mouseX <= 290 && mouseY <= 450 && mouseY >= 450 - (four2 * 4) + (fourC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(fourNC, 250, 465 - four2 * 4 + (fourC * 4));

      // fill(four2, four2 / 4, four2 / 4);
      // rect(250, 450, 40, (-fourC * 4) - fourNC * 4);
      // fill(four2 / 4, four2 / 4, four2);
      // rect(250, 450, 40, -fourNC * 4);
      // fill(150, 150, 255);
      // text(fourNC, 250, 465 - four2 * 4 + (fourC * 4));
      // fill(four2, four2 / 4, four2 / 4);
      // text(fourC, 250, 450 - four2 * 4);

      if (mouseX >= 300 && mouseX <= 340 && mouseY <= 450 - (fiveNC * 4) && mouseY >= 450 - (five2 * 4) - (fiveC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(fiveC, 300, 450 - five2 * 4);
      rect(300, 450, 40, (-fiveC * 4) - fiveNC * 4);

      if (mouseX >= 300 && mouseX <= 340 && mouseY <= 450 && mouseY >= 450 - (five2 * 4) + (fiveC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(300, 450, 40, -fiveNC * 4);

      if (mouseX >= 300 && mouseX <= 340 && mouseY <= 450 && mouseY >= 450 - (five2 * 4) + (fiveC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(fiveNC, 300, 465 - five2 * 4 + (fiveC * 4));

      // fill(five2, five2 / 4, five2 / 4);
      // rect(300, 450, 40, (-fiveC * 4) - fiveNC * 4);
      // fill(five2 / 4, five2 / 4, five2);
      // rect(300, 450, 40, -fiveNC * 4);
      // fill(150, 150, 255);
      // text(fiveNC, 300, 465 - five2 * 4 + (fiveC * 4));
      // fill(five2, five2 / 4, five2 / 4);
      // text(fiveC, 300, 450 - five2 * 4);

      if (mouseX >= 350 && mouseX <= 390 && mouseY <= 450 - (sixNC * 4) && mouseY >= 450 - (six2 * 4) - (sixC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(sixC, 350, 450 - six2 * 4);
      rect(350, 450, 40, (-sixC * 4) - sixNC * 4);

      if (mouseX >= 350 && mouseX <= 390 && mouseY <= 450 && mouseY >= 450 - (six2 * 4) + (sixC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(350, 450, 40, -sixNC * 4);

      if (mouseX >= 350 && mouseX <= 390 && mouseY <= 450 && mouseY >= 450 - (six2 * 4) + (sixC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(sixNC, 350, 465 - six2 * 4 + (sixC * 4));

      // fill(six2, six2 / 4, six2 / 4);
      // rect(350, 450, 40, (-sixC * 4) - sixNC * 4);
      // fill(six2 / 4, six2 / 4, six2);
      // rect(350, 450, 40, -sixNC * 4);
      // fill(150, 150, 255);
      // text(sixNC, 350, 465 - six2 * 4 + (sixC * 4));
      // fill(six2, six2 / 4, six2 / 4);
      // text(sixC, 350, 450 - six2 * 4);

      if (mouseX >= 400 && mouseX <= 440 && mouseY <= 450 - (sevenNC * 4) && mouseY >= 450 - (seven2 * 4) - (sevenC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(sevenC, 400, 450 - seven2 * 4);
      rect(400, 450, 40, (-sevenC * 4) - sevenNC * 4);

      if (mouseX >= 400 && mouseX <= 440 && mouseY <= 450 && mouseY >= 450 - (seven2 * 4) + (sevenC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(400, 450, 40, -sevenNC * 4);

      if (mouseX >= 400 && mouseX <= 440 && mouseY <= 450 && mouseY >= 450 - (seven2 * 4) + (sevenC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(sevenNC, 400, 465 - seven2 * 4 + (sevenC * 4));

      // fill(seven2, seven2 / 4, seven2 / 4);
      // rect(400, 450, 40, (-sevenC * 4) - sevenNC * 4);
      // fill(seven2 / 4, seven2 / 4, seven2);
      // rect(400, 450, 40, -sevenNC * 4);
      // fill(150, 150, 255);
      // text(sevenNC, 400, 465 - seven2 * 4 + (sevenC * 4));
      // fill(seven2, seven2 / 4, seven2 / 4);
      // text(sevenC, 400, 450 - seven2 * 4);

      if (mouseX >= 450 && mouseX <= 490 && mouseY <= 450 - (eightNC * 4) && mouseY >= 450 - (eight2 * 4) - (eightC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(eightC, 450, 450 - eight2 * 4);
      rect(450, 450, 40, (-eightC * 4) - eightNC * 4);

      if (mouseX >= 450 && mouseX <= 490 && mouseY <= 450 && mouseY >= 450 - (eight2 * 4) + (eightC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(450, 450, 40, -eightNC * 4);

      if (mouseX >= 450 && mouseX <= 490 && mouseY <= 450 && mouseY >= 450 - (eight2 * 4) + (eightC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(eightNC, 450, 465 - eight2 * 4 + (eightC * 4));

      // fill(eight2, eight2 / 4, eight2 / 4);
      // rect(450, 450, 40, (-eightC * 4) - eightNC * 4);
      // fill(eight2 / 4, eight2 / 4, eight2);
      // rect(450, 450, 40, -eightNC * 4);
      // fill(150, 150, 255);
      // text(eightNC, 450, 465 - eight2 * 4 + (eightC * 4));
      // fill(eight2, eight2 / 4, eight2 / 4);
      // text(eightC, 450, 450 - eight2 * 4);

      if (mouseX >= 500 && mouseX <= 540 && mouseY <= 450 - (nineNC * 4) && mouseY >= 450 - (nine2 * 4) - (nineC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(nineC, 500, 450 - nine2 * 4);
      rect(500, 450, 40, (-nineC * 4) - nineNC * 4);

      if (mouseX >= 500 && mouseX <= 540 && mouseY <= 450 && mouseY >= 450 - (nine2 * 4) + (nineC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(500, 450, 40, -nineNC * 4);

      if (mouseX >= 500 && mouseX <= 540 && mouseY <= 450 && mouseY >= 450 - (nine2 * 4) + (nineC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(nineNC, 500, 465 - nine2 * 4 + (nineC * 4));

      // fill(nine2, nine2 / 4, nine2 / 4);
      // rect(500, 450, 40, (-nineC * 4) - nineNC * 4);
      // fill(nine2 / 4, nine2 / 4, nine2);
      // rect(500, 450, 40, -nineNC * 4);
      // fill(150, 150, 255);
      // text(nineNC, 500, 465 - nine2 * 4 + (nineC * 4));
      // fill(nine2, nine2 / 4, nine2 / 4);
      // text(nineC, 500, 450 - nine2 * 4);

      if (mouseX >= 550 && mouseX <= 590 && mouseY <= 450 - (tenNC * 4) && mouseY >= 450 - (ten2 * 4) - (tenC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(tenC, 550, 450 - ten2 * 4);
      rect(550, 450, 40, (-tenC * 4) - tenNC * 4);

      if (mouseX >= 550 && mouseX <= 590 && mouseY <= 450 && mouseY >= 450 - (ten2 * 4) + (tenC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(550, 450, 40, -tenNC * 4);

      if (mouseX >= 550 && mouseX <= 590 && mouseY <= 450 && mouseY >= 450 - (ten2 * 4) + (tenC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(tenNC, 550, 465 - ten2 * 4 + (tenC * 4));

      // fill(ten2, ten2 / 4, ten2 / 4);
      // rect(550, 450, 40, (-tenC * 4) - tenNC * 4);
      // fill(ten2 / 4, ten2 / 4, ten2);
      // rect(550, 450, 40, -tenNC * 4);
      // fill(150, 150, 255);
      // text(tenNC, 550, 465 - ten2 * 4 + (tenC * 4));
      // fill(ten2, ten2 / 4, ten2 / 4);
      // text(tenC, 550, 450 - ten2 * 4);

      if (mouseX >= 600 && mouseX <= 640 && mouseY <= 450 - (elevenNC * 4) && mouseY >= 450 - (eleven2 * 4) - (elevenC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(elevenC, 600, 450 - eleven2 * 4);
      rect(600, 450, 40, (-elevenC * 4) - elevenNC * 4);

      if (mouseX >= 600 && mouseX <= 640 && mouseY <= 450 && mouseY >= 450 - (eleven2 * 4) + (elevenC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(600, 450, 40, -elevenNC * 4);

      if (mouseX >= 600 && mouseX <= 640 && mouseY <= 450 && mouseY >= 450 - (eleven2 * 4) + (elevenC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(elevenNC, 600, 465 - eleven2 * 4 + (elevenC * 4));

      // fill(eleven2, eleven2 / 4, eleven2 / 4);
      // rect(600, 450, 40, (-elevenC * 4) - elevenNC * 4);
      // fill(eleven2 / 4, eleven2 / 4, eleven2);
      // rect(600, 450, 40, -elevenNC * 4);
      // fill(150, 150, 255);
      // text(elevenNC, 600, 465 - eleven2 * 4 + (elevenC * 4));
      // fill(eleven2, eleven2 / 4, eleven2 / 4);
      // text(elevenC, 600, 450 - eleven2 * 4);

      if (mouseX >= 650 && mouseX <= 690 && mouseY <= 450 - (twelveNC * 4) && mouseY >= 450 - (twelve2 * 4) - (twelveC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(twelveC, 650, 450 - twelve2 * 4);
      rect(650, 450, 40, (-twelveC * 4) - twelveNC * 4);

      if (mouseX >= 650 && mouseX <= 690 && mouseY <= 450 && mouseY >= 450 - (twelve2 * 4) + (twelveC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(650, 450, 40, -twelveNC * 4);

      if (mouseX >= 650 && mouseX <= 690 && mouseY <= 450 && mouseY >= 450 - (twelve2 * 4) + (twelveC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(twelveNC, 650, 465 - twelve2 * 4 + (twelveC * 4));
      //
      // fill(twelve2, twelve2 / 4, twelve2 / 4);
      // rect(650, 450, 40, (-twelveC * 4) - twelveNC * 4);
      // fill(twelve2 / 4, twelve2 / 4, twelve2);
      // rect(650, 450, 40, -twelveNC * 4);
      // fill(150, 150, 255);
      // text(twelveNC, 650, 465 - twelve2 * 4 + (twelveC * 4));
      // fill(twelve2, twelve2 / 4, twelve2 / 4);
      // text(twelveC, 650, 450 - twelve2 * 4);
      //

      if (mouseX >= 700 && mouseX <= 740 && mouseY <= 450 - (thirteenNC * 4) && mouseY >= 450 - (thirteen2 * 4) - (thirteenC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(thirteenC, 700, 450 - thirteen2 * 4);
      rect(700, 450, 40, (-thirteenC * 4) - thirteenNC * 4);

      if (mouseX >= 700 && mouseX <= 740 && mouseY <= 450 && mouseY >= 450 - (thirteen2 * 4) + (thirteenC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(700, 450, 40, -thirteenNC * 4);

      if (mouseX >= 700 && mouseX <= 740 && mouseY <= 450 && mouseY >= 450 - (thirteen2 * 4) + (thirteenC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(thirteenNC, 700, 465 - thirteen2 * 4 + (thirteenC * 4));
      // fill(thirteen2, thirteen2 / 4, thirteen2 / 4);
      // rect(700, 450, 40, (-thirteenC * 4) - thirteenNC * 4);
      // fill(thirteen2 / 4, thirteen2 / 4, thirteen2);
      // rect(700, 450, 40, -thirteenNC * 4);
      // fill(150, 150, 255);
      // text(thirteenNC, 700, 465 - thirteen2 * 4 + (thirteenC * 4));
      // fill(thirteen2, thirteen2 / 4, thirteen2 / 4);
      // text(thirteenC, 700, 450 - thirteen2 * 4);
      //
      if (mouseX >= 750 && mouseX <= 790 && mouseY <= 450 - (fourteenNC * 4) && mouseY >= 450 - (fourteen2 * 4) - (fourteenC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(fourteenC, 750, 450 - fourteen2 * 4);
      rect(750, 450, 40, (-fourteenC * 4) - fourteenNC * 4);

      if (mouseX >= 750 && mouseX <= 790 && mouseY <= 450 && mouseY >= 450 - (fourteen2 * 4) + (fourteenC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(750, 450, 40, -fourteenNC * 4);

      if (mouseX >= 750 && mouseX <= 790 && mouseY <= 450 && mouseY >= 450 - (fourteen2 * 4) + (fourteenC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(fourteenNC, 750, 465 - fourteen2 * 4 + (fourteenC * 4));
      // fill(fourteen2, fourteen2 / 4, fourteen2 / 4);
      // rect(750, 450, 40, (-fourteenC * 4) - fourteenNC * 4);
      // fill(fourteen2 / 4, fourteen2 / 4, fourteen2);
      // rect(750, 450, 40, -fourteenNC * 4);
      // fill(150, 150, 255);
      // text(fourteenNC, 750, 465 - fourteen2 * 4 + (fourteenC * 4));
      // fill(fourteen2, fourteen2 / 4, fourteen2 / 4);
      // text(fourteenC, 750, 450 - fourteen2 * 4);
      //
      if (mouseX >= 800 && mouseX <= 840 && mouseY <= 450 - (fifteenNC * 4) && mouseY >= 450 - (fifteen2 * 4) - (fifteenC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(fifteenC, 800, 450 - fifteen2 * 4);
      rect(800, 450, 40, (-fifteenC * 4) - fifteenNC * 4);

      if (mouseX >= 800 && mouseX <= 840 && mouseY <= 450 && mouseY >= 450 - (fifteen2 * 4) + (fifteenC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(800, 450, 40, -fifteenNC * 4);

      if (mouseX >= 800 && mouseX <= 840 && mouseY <= 450 && mouseY >= 450 - (fifteen2 * 4) + (fifteenC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(fifteenNC, 800, 465 - fifteen2 * 4 + (fifteenC * 4));
      // fill(fifteen2, fifteen2 / 4, fifteen2 / 4);
      // rect(800, 450, 40, (-fifteenC * 4) - fifteenNC * 4);
      // fill(fifteen2 / 4, fifteen2 / 4, fifteen2);
      // rect(800, 450, 40, -fifteenNC * 4);
      // fill(150, 150, 255);
      // text(fifteenNC, 800, 465 - fifteen2 * 4 + (fifteenC * 4));
      // fill(fifteen2, fifteen2 / 4, fifteen2 / 4);
      // text(fifteenC, 800, 450 - fifteen2 * 4);
      if (mouseX >= 850 && mouseX <= 890 && mouseY <= 450 - (sixteenNC * 4) && mouseY >= 450 - (sixteen2 * 4) - (sixteenC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(sixteenC, 850, 450 - sixteen2 * 4);
      rect(850, 450, 40, (-sixteenC * 4) - sixteenNC * 4);

      if (mouseX >= 850 && mouseX <= 890 && mouseY <= 450 && mouseY >= 450 - (sixteen2 * 4) + (sixteenC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(850, 450, 40, -sixteenNC * 4);

      if (mouseX >= 850 && mouseX <= 890 && mouseY <= 450 && mouseY >= 450 - (sixteen2 * 4) + (sixteenC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(sixteenNC, 850, 465 - sixteen2 * 4 + (sixteenC * 4));
      //
      // fill(sixteen2, sixteen2 / 4, sixteen2 / 4);
      // rect(850, 450, 40, (-sixteenC * 4) - sixteenNC * 4);
      // fill(sixteen2 / 4, sixteen2 / 4, sixteen2);
      // rect(850, 450, 40, -sixteenNC * 4);
      // fill(150, 150, 255);
      // text(sixteenNC, 850, 465 - sixteen2 * 4 + (sixteenC * 4));
      // fill(sixteen2, sixteen2 / 4, sixteen2 / 4);
      // text(sixteenC, 850, 450 - sixteen2 * 4);
      if (mouseX >= 900 && mouseX <= 940 && mouseY <= 450 - (seventeenNC * 4) && mouseY >= 450 - (seventeen2 * 4) - (seventeenC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(seventeenC, 900, 450 - seventeen2 * 4);
      rect(900, 450, 40, (-seventeenC * 4) - seventeenNC * 4);

      if (mouseX >= 900 && mouseX <= 940 && mouseY <= 450 && mouseY >= 450 - (seventeen2 * 4) + (seventeenC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(900, 450, 40, -seventeenNC * 4);

      if (mouseX >= 900 && mouseX <= 940 && mouseY <= 450 && mouseY >= 450 - (seventeen2 * 4) + (seventeenC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(seventeenNC, 900, 465 - seventeen2 * 4 + (seventeenC * 4));
      //
      // fill(seventeen2, seventeen2 / 4, seventeen2 / 4);
      // rect(900, 450, 40, (-seventeenC * 4) - seventeenNC * 4);
      // fill(seventeen2 / 4, seventeen2 / 4, seventeen2);
      // rect(900, 450, 40, -seventeenNC * 4);
      // fill(150, 150, 255);
      // text(seventeenNC, 900, 465 - seventeen2 * 4 + (seventeenC * 4));
      // fill(seventeen2, seventeen2 / 4, seventeen2 / 4);
      // text(seventeenC, 900, 450 - seventeen2 * 4);

      if (mouseX >= 950 && mouseX <= 990 && mouseY <= 450 - (eighteenNC * 4) && mouseY >= 450 - (eighteen2 * 4) - (eighteenC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(eighteenC, 950, 450 - eighteen2 * 4);
      rect(950, 450, 40, (-eighteenC * 4) - eighteenNC * 4);

      if (mouseX >= 950 && mouseX <= 990 && mouseY <= 450 && mouseY >= 450 - (eighteen2 * 4) + (eighteenC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(950, 450, 40, -eighteenNC * 4);

      if (mouseX >= 950 && mouseX <= 990 && mouseY <= 450 && mouseY >= 450 - (eighteen2 * 4) + (eighteenC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(eighteenNC, 950, 465 - eighteen2 * 4 + (eighteenC * 4));

      // fill(eighteen2, eighteen2 / 4, eighteen2 / 4);
      // rect(950, 450, 40, (-eighteenC * 4) - eighteenNC * 4);
      // fill(eighteen2 / 4, eighteen2 / 4, eighteen2);
      // rect(950, 450, 40, -eighteenNC * 4);
      // fill(150, 150, 255);
      // text(eighteenNC, 950, 465 - eighteen2 * 4 + (eighteenC * 4));
      // fill(eighteen2, eighteen2 / 4, eighteen2 / 4);
      // text(eighteenC, 950, 450 - eighteen2 * 4);
      //
      if (mouseX >= 1000 && mouseX <= 1040 && mouseY <= 450 - (nineteenNC * 4) && mouseY >= 450 - (nineteen2 * 4) - (nineteenC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(nineteenC, 1000, 450 - nineteen2 * 4);
      rect(1000, 450, 40, (-nineteenC * 4) - nineteenNC * 4);

      if (mouseX >= 1000 && mouseX <= 1040 && mouseY <= 450 && mouseY >= 450 - (nineteen2 * 4) + (nineteenC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(1000, 450, 40, -nineteenNC * 4);

      if (mouseX >= 1000 && mouseX <= 1040 && mouseY <= 450 && mouseY >= 450 - (nineteen2 * 4) + (nineteenC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(nineteenNC, 1000, 465 - nineteen2 * 4 + (nineteenC * 4));
      // fill(nineteen2, nineteen2 / 4, nineteen2 / 4);
      // rect(1000, 450, 40, (-nineteenC * 4) - nineteenNC * 4);
      // fill(nineteen2 / 4, nineteen2 / 4, nineteen2);
      // rect(1000, 450, 40, -nineteenNC * 4);
      // fill(150, 150, 255);
      // text(nineteenNC, 1000, 465 - nineteen2 * 4 + (nineteenC * 4));
      // fill(nineteen2, nineteen2 / 4, nineteen2 / 4);
      // text(nineteenC, 1000, 450 - nineteen2 * 4);

      if (mouseX >= 1050 && mouseX <= 1090 && mouseY <= 450 - (twentyNC * 4) && mouseY >= 450 - (twenty2 * 4) - (twentyC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(twentyC, 1050, 450 - twenty2 * 4);
      rect(1050, 450, 40, (-twentyC * 4) - twentyNC * 4);

      if (mouseX >= 1050 && mouseX <= 1090 && mouseY <= 450 && mouseY >= 450 - (twenty2 * 4) + (twentyC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(1050, 450, 40, -twentyNC * 4);

      if (mouseX >= 1050 && mouseX <= 1090 && mouseY <= 450 && mouseY >= 450 - (twenty2 * 4) + (twentyC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(twentyNC, 1050, 465 - twenty2 * 4 + (twentyC * 4));
      //
      // fill(twenty2, twenty2 / 4, twenty2 / 4);
      // rect(1050, 450, 40, (-twentyC * 4) - twentyNC * 4);
      // fill(twenty2 / 4, twenty2 / 4, twenty2);
      // rect(1050, 450, 40, -twentyNC * 4);
      // fill(150, 150, 255);
      // text(twentyNC, 1050, 465 - twenty2 * 4 + (twentyC * 4));
      // fill(twenty2, twenty2 / 4, twenty2 / 4);
      // text(twentyC, 1050, 450 - twenty2 * 4);
      if (mouseX >= 1100 && mouseX <= 1140 && mouseY <= 450 - (twentyoneNC * 4) && mouseY >= 450 - (twentyone2 * 4) - (twentyoneC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(twentyoneC, 1100, 450 - twentyone2 * 4);
      rect(1100, 450, 40, (-twentyoneC * 4) - twentyoneNC * 4);

      if (mouseX >= 1100 && mouseX <= 1140 && mouseY <= 450 && mouseY >= 450 - (twentyone2 * 4) + (twentyoneC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(1100, 450, 40, -twentyoneNC * 4);

      if (mouseX >= 1100 && mouseX <= 1140 && mouseY <= 450 && mouseY >= 450 - (twentyone2 * 4) + (twentyoneC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(twentyoneNC, 1100, 465 - twentyone2 * 4 + (twentyoneC * 4));
      //
      // fill(twentyone2, twentyone2 / 4, twentyone2 / 4);
      // rect(1100, 450, 40, (-twentyoneC * 4) - twentyoneNC * 4);
      // fill(twentyone2 / 4, twentyone2 / 4, twentyone2);
      // rect(1100, 450, 40, -twentyoneNC * 4);
      // fill(150, 150, 255);
      // text(twentyoneNC, 1100, 465 - twentyone2 * 4 + (twentyoneC * 4));
      // fill(twentyone2, twentyone2 / 4, twentyone2 / 4);
      // text(twentyoneC, 1100, 450 - twentyone2 * 4);
      if (mouseX >= 1150 && mouseX <= 1190 && mouseY <= 450 - (twentytwoNC * 4) && mouseY >= 450 - (twentytwo2 * 4) - (twentytwoC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(twentytwoC, 1150, 450 - twentytwo2 * 4);
      rect(1150, 450, 40, (-twentytwoC * 4) - twentytwoNC * 4);

      if (mouseX >= 1150 && mouseX <= 1190 && mouseY <= 450 && mouseY >= 450 - (twentytwo2 * 4) + (twentytwoC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(1150, 450, 40, -twentytwoNC * 4);

      if (mouseX >= 1150 && mouseX <= 1190 && mouseY <= 450 && mouseY >= 450 - (twentytwo2 * 4) + (twentytwoC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(twentytwoNC, 1150, 465 - twentytwo2 * 4 + (twentytwoC * 4));
      //
      // fill(twentytwo2, twentytwo2 / 4, twentytwo2 / 4);
      // rect(1150, 450, 40, (-twentytwoC * 4) - twentytwoNC * 4);
      // fill(twentytwo2 / 4, twentytwo2 / 4, twentytwo2);
      // rect(1150, 450, 40, -twentytwoNC * 4);
      // fill(150, 150, 255);
      // text(twentytwoNC, 1150, 465 - twentytwo2 * 4 + (twentytwoC * 4));
      // fill(twentytwo2, twentytwo2 / 4, twentytwo2 / 4);
      // text(twentytwoC, 1150, 450 - twentytwo2 * 4);
      if (mouseX >= 1200 && mouseX <= 1240 && mouseY <= 450 - (twentythreeNC * 4) && mouseY >= 450 - (twentythree2 * 4) - (twentythreeC * 4))

        fill(250, 100, 100);
      else {
        fill(150, 50, 50);
      }
      text(twentythreeC, 1200, 450 - twentythree2 * 4);
      rect(1200, 450, 40, (-twentythreeC * 4) - twentythreeNC * 4);

      if (mouseX >= 1200 && mouseX <= 1240 && mouseY <= 450 && mouseY >= 450 - (twentythree2 * 4) + (twentythreeC * 4))
        fill(100, 100, 250);
      else {
        fill(50, 50, 150);
      }
      rect(1200, 450, 40, -twentythreeNC * 4);

      if (mouseX >= 1200 && mouseX <= 1240 && mouseY <= 450 && mouseY >= 450 - (twentythree2 * 4) + (twentythreeC * 4))
        fill(250, 250, 250);
      else {
        fill(150, 150, 250);
      }
      text(twentythreeNC, 1200, 465 - twentythree2 * 4 + (twentythreeC * 4));
      //
      // fill(twentythree2, twentythree2 / 4, twentythree2 / 4);
      // rect(1200, 450, 40, (-twentythreeC * 4) - twentythreeNC * 4);
      // fill(twentythree2 / 4, twentythree2 / 4, twentythree2);
      // rect(1200, 450, 40, -twentythreeNC * 4);
      // fill(150, 150, 255);
      // text(twentythreeNC, 1200, 465 - twentythree2 * 4 + (twentythreeC * 4));
      // fill(twentythree2, twentythree2 / 4, twentythree2 / 4);
      // text(twentythreeC, 1200, 450 - twentythree2 * 4);

      fill(0);
      ellipse(70, 450, 40, 40);
      fill(255);
      textSize(20);
      text("00", 57, 457);
      fill(0);
      ellipse(120, 450, 40, 40);
      fill(255);
      textSize(20);
      text("01", 107, 457);
      fill(0);
      ellipse(170, 450, 40, 40);
      fill(255);
      textSize(20);
      text("02", 157, 455);
      fill(0);
      ellipse(220, 450, 40, 40);
      fill(255);
      textSize(20);
      text("03", 207, 455);
      fill(0);
      ellipse(270, 450, 40, 40);
      fill(255);
      textSize(20);
      text("04", 257, 455);
      fill(0);
      ellipse(320, 450, 40, 40);
      fill(255);
      textSize(20);
      text("05", 307, 455);
      fill(0);
      ellipse(370, 450, 40, 40);
      fill(255);
      textSize(20);
      text("06", 357, 455);
      fill(0);
      ellipse(420, 450, 40, 40);
      fill(255);
      textSize(20);
      text("07", 407, 455);
      fill(0);
      ellipse(470, 450, 40, 40);
      fill(255);
      textSize(20);
      text("08", 457, 455);

      fill(0);
      ellipse(520, 450, 40, 40);
      fill(255);
      textSize(20);
      text("09", 507, 455);
      fill(0);
      ellipse(570, 450, 40, 40);
      fill(255);
      textSize(20);
      text("10", 557, 455);
      fill(0);
      ellipse(620, 450, 40, 40);
      fill(255);
      textSize(20);
      text("11", 607, 455);
      fill(0);
      ellipse(670, 450, 40, 40);
      fill(255);
      textSize(20);
      text("12", 657, 455);
      fill(0);
      ellipse(720, 450, 40, 40);
      fill(255);
      textSize(20);
      text("13", 707, 455);
      fill(0);
      ellipse(770, 450, 40, 40);
      fill(255);
      textSize(20);
      text("14", 757, 455);
      fill(0);
      ellipse(820, 450, 40, 40);
      fill(255);
      textSize(20);
      text("15", 807, 455);
      fill(0);
      ellipse(870, 450, 40, 40);
      fill(255);
      textSize(20);
      text("16", 857, 455);
      fill(0);
      ellipse(920, 450, 40, 40);
      fill(255);
      textSize(20);
      text("17", 907, 455);
      fill(0);
      ellipse(970, 450, 40, 40);
      fill(255);
      textSize(20);
      text("18", 957, 455);
      fill(0);
      ellipse(1020, 450, 40, 40);
      fill(255);
      textSize(20);
      text("19", 1007, 455);
      fill(0);
      ellipse(1070, 450, 40, 40);
      fill(255);
      textSize(20);
      text("20", 1057, 455);
      fill(0);
      ellipse(1120, 450, 40, 40);
      fill(255);
      textSize(20);
      text("21", 1107, 455);
      fill(0);
      ellipse(1170, 450, 40, 40);
      fill(255);
      textSize(20);
      text("22", 1157, 455);
      fill(0);
      ellipse(1220, 450, 40, 40);
      fill(255);
      textSize(20);
      text("23", 1207, 455);
      fill(255);
      image(arrow,15,15);
      fill(255);
      textSize(40);
      text("Time of day (every hour)", 360, 520);
      push();
      translate(40, 430);
      rotate(radians(-90));
      text("# of incidents", 0, 0);
      pop();
      fill(255);
      rect(50, 500, 200, 50);
      rect(900, 500, 400, 50);
      fill(0);
      text("Total", 70, 540);
      text("Violent/Non-Violent", 910, 535);
      if (mouseX >= 50 && mouseX <= 90 && mouseY <= 450 - (zeroNC * 4) && mouseY >= 450 - (zero2 * 4) - (zeroC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(zeroC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 50 && mouseX <= 90 && mouseY <= 450 && mouseY >= 450 - (zero2 * 4) + (zeroC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(zeroNC, mouseX + 85, mouseY + 60);

      }
      if (mouseX >= 100 && mouseX <= 140 && mouseY <= 450 - (oneNC * 4) && mouseY >= 450 - (one2 * 4) - (oneC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(oneC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 100 && mouseX <= 140 && mouseY <= 450 && mouseY >= 450 - (one2 * 4) + (oneC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(oneNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 150 && mouseX <= 190 && mouseY <= 450 - (twoNC * 4) && mouseY >= 450 - (two2 * 4) - (twoC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(twoC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 150 && mouseX <= 190 && mouseY <= 450 && mouseY >= 450 - (two2 * 4) + (twoC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(twoNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 200 && mouseX <= 240 && mouseY <= 450 - (threeNC * 4) && mouseY >= 450 - (three2 * 4) - (threeC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(threeC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 200 && mouseX <= 240 && mouseY <= 450 && mouseY >= 450 - (three2 * 4) + (threeC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(threeNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 250 && mouseX <= 290 && mouseY <= 450 - (fourNC * 4) && mouseY >= 450 - (four2 * 4) - (fourC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(fourC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 250 && mouseX <= 290 && mouseY <= 450 && mouseY >= 450 - (four2 * 4) + (fourC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(fourNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 300 && mouseX <= 340 && mouseY <= 450 - (fiveNC * 4) && mouseY >= 450 - (five2 * 4) - (fiveC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(fiveC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 300 && mouseX <= 340 && mouseY <= 450 && mouseY >= 450 - (five2 * 4) + (fiveC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(fiveNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 350 && mouseX <= 390 && mouseY <= 450 - (sixNC * 4) && mouseY >= 450 - (six2 * 4) - (sixC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(sixC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 350 && mouseX <= 390 && mouseY <= 450 && mouseY >= 450 - (six2 * 4) + (sixC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(sixNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 400 && mouseX <= 440 && mouseY <= 450 - (sevenNC * 4) && mouseY >= 450 - (seven2 * 4) - (sevenC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(sevenC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 400 && mouseX <= 440 && mouseY <= 450 && mouseY >= 450 - (seven2 * 4) + (sevenC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(sevenNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 450 && mouseX <= 490 && mouseY <= 450 - (eightNC * 4) && mouseY >= 450 - (eight2 * 4) - (eightC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(eightC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 450 && mouseX <= 490 && mouseY <= 450 && mouseY >= 450 - (eight2 * 4) + (eightC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(eightNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 500 && mouseX <= 540 && mouseY <= 450 - (nineNC * 4) && mouseY >= 450 - (nine2 * 4) - (nineC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(nineC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 500 && mouseX <= 540 && mouseY <= 450 && mouseY >= 450 - (nine2 * 4) + (nineC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(nineNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 550 && mouseX <= 590 && mouseY <= 450 - (tenNC * 4) && mouseY >= 450 - (ten2 * 4) - (tenC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(tenC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 550 && mouseX <= 590 && mouseY <= 450 && mouseY >= 450 - (ten2 * 4) + (tenC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(tenNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 600 && mouseX <= 640 && mouseY <= 450 - (elevenNC * 4) && mouseY >= 450 - (eleven2 * 4) - (elevenC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(elevenC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 600 && mouseX <= 640 && mouseY <= 450 && mouseY >= 450 - (eleven2 * 4) + (elevenC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(elevenNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 650 && mouseX <= 690 && mouseY <= 450 - (twelveNC * 4) && mouseY >= 450 - (twelve2 * 4) - (twelveC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(twelveC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 650 && mouseX <= 690 && mouseY <= 450 && mouseY >= 450 - (twelve2 * 4) + (twelveC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(twelveNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 700 && mouseX <= 740 && mouseY <= 450 - (thirteenNC * 4) && mouseY >= 450 - (thirteen2 * 4) - (thirteenC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(thirteenC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 700 && mouseX <= 740 && mouseY <= 450 && mouseY >= 450 - (thirteen2 * 4) + (thirteenC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(thirteenNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 750 && mouseX <= 790 && mouseY <= 450 - (fourteenNC * 4) && mouseY >= 450 - (fourteen2 * 4) - (fourteenC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(fourteenC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 750 && mouseX <= 790 && mouseY <= 450 && mouseY >= 450 - (fourteen2 * 4) + (fourteenC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(fourteenNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 800 && mouseX <= 840 && mouseY <= 450 - (fifteenNC * 4) && mouseY >= 450 - (fifteen2 * 4) - (fifteenC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(fifteenC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 800 && mouseX <= 840 && mouseY <= 450 && mouseY >= 450 - (fifteen2 * 4) + (fifteenC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(fifteenNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 850 && mouseX <= 890 && mouseY <= 450 - (sixteenNC * 4) && mouseY >= 450 - (sixteen2 * 4) - (sixteenC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(sixteenC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 850 && mouseX <= 890 && mouseY <= 450 && mouseY >= 450 - (sixteen2 * 4) + (sixteenC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(sixteenNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 900 && mouseX <= 940 && mouseY <= 450 - (seventeenNC * 4) && mouseY >= 450 - (seventeen2 * 4) - (seventeenC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(seventeenC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 900 && mouseX <= 940 && mouseY <= 450 && mouseY >= 450 - (seventeen2 * 4) + (seventeenC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(seventeenNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 950 && mouseX <= 990 && mouseY <= 450 - (eighteenNC * 4) && mouseY >= 450 - (eighteen2 * 4) - (eighteenC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(eighteenC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 950 && mouseX <= 990 && mouseY <= 450 && mouseY >= 450 - (eighteen2 * 4) + (eighteenC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(eighteenNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 1000 && mouseX <= 1040 && mouseY <= 450 - (nineteenNC * 4) && mouseY >= 450 - (nineteen2 * 4) - (nineteenC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(nineteenC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 1000 && mouseX <= 1040 && mouseY <= 450 && mouseY >= 450 - (nineteen2 * 4) + (nineteenC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(nineteenNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 1050 && mouseX <= 1090 && mouseY <= 450 - (twentyNC * 4) && mouseY >= 450 - (twenty2 * 4) - (twentyC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(twentyC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 1050 && mouseX <= 1090 && mouseY <= 450 && mouseY >= 450 - (twenty2 * 4) + (twentyC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(twentyNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 1100 && mouseX <= 1140 && mouseY <= 450 - (twentyoneNC * 4) && mouseY >= 450 - (twentyone2 * 4) - (twentyoneC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(twentyoneC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 1100 && mouseX <= 1140 && mouseY <= 450 && mouseY >= 450 - (twentyone2 * 4) + (twentyoneC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(twentyoneNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 1150 && mouseX <= 1190 && mouseY <= 450 - (twentytwoNC * 4) && mouseY >= 450 - (twentytwo2 * 4) - (twentytwoC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 230, 75);
        fill(255);
        text("Violent incidents:", mouseX + 15, mouseY + 30);
        text(twentytwoC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 1150 && mouseX <= 1190 && mouseY <= 450 && mouseY >= 450 - (twentytwo2 * 4) + (twentytwoC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(twentytwoNC, mouseX + 85, mouseY + 60);
      }
      if (mouseX >= 1200 && mouseX <= 1240 && mouseY <= 450 - (twentythreeNC * 4) && mouseY >= 450 - (twentythree2 * 4) - (twentythreeC * 4)) {
      textSize(24);
      fill(0);
      rect(mouseX, mouseY, 230, 75);
      fill(255);
      text("Violent incidents:", mouseX + 15, mouseY + 30);
      text(twentythreeC, mouseX + 85, mouseY + 60);}
      if (mouseX >= 1200 && mouseX <= 1240 && mouseY <= 450 && mouseY >= 450 - (twentythree2 * 4) + (twentythreeC * 4)) {
        textSize(24);
        fill(0);
        rect(mouseX, mouseY, 280, 75);
        fill(255);
        text("Non-Violent incidents:", mouseX + 15, mouseY + 30);
        text(twentythreeNC, mouseX + 85, mouseY + 60);
      }


      if (mouseIsPressed && mouseX >= 50 && mouseX <= 250 && mouseY >= 500 && mouseY <= 550) {
        pg2CNC = false;
        pg2 = true;
      }
      if (mouseIsPressed && mouseX >= 10 && mouseX <= 110 && mouseY >= 10 && mouseY <= 110) {
        pg2CNC = false;
        pg0 = true;
      }
    }
  }
}
