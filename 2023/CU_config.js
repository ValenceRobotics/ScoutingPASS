var config_data = `
{
  "enable_google_sheets": true,
  "title": "Valence Robotics Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "gsCol": "scouter",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "gsCol": "event",
      "type": "event",
      "defaultValue": "2022carv",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "gsCol": "match_level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "de": "Double Elimination<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "gsCol": "match_num",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "gsCol": "robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "gsCol": "team_num",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "gsCol": "auto_start_position",
      "code": "as",
      "type": "field_image",
      "filename": "2023/field_image.png"
    }
  ],
  "auton": [
    { "name": "Mobility?",
      "gsCol": "mobility",
      "code": "am",
      "type": "bool"
    },
    { "name": "High Cube Scored",
      "gsCol": "a_high_cube_scored",
      "code": "auh",
      "type": "counter"
    },
    { "name": "Medium Cube Scored",
      "gsCol": "a_medium_cube_scored",
      "code": "aum",
      "type": "counter"
    },
    { "name": "Low Cube Scored",
      "gsCol": "a_low_cube_scored",
      "code": "aul",
      "type": "counter"
    },
    { "name": "High Cone Scored",
      "gsCol": "a_high_cone_scored",
      "code": "aoh",
      "type": "counter"
    },
    { "name": "Medium Cone Scored",
      "gsCol": "a_medium_cone_scored",
      "code": "aom",
      "type": "counter"
    },
    { "name": "Low Cone Scored",
      "gsCol": "a_low_cone_scored",
      "code": "aol",
      "type": "counter"
    },
    { "name": "Docked",
      "gsCol": "docked",
      "code": "ad",
      "type":"radio",
      "choices": {
        "d": "Docked (not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "teleop": [
    { "name": "Cycle Timer",
      "gsCol": "cycle_timer",
      "code": "tct",
      "type": "cycle"
    },
    { "name": "High Cube Scored",
      "gsCol": "t_high_cube_scored",
      "code": "tuh",
      "type": "counter"
    },
    { "name": "Medium Cube Scored",
      "gsCol": "t_medium_cube_scored",
      "code": "tum",
      "type": "counter"
    },
    { "name": "Low Cube Scored",
      "gsCol": "t_low_cube_scored",
      "code": "tul",
      "type": "counter"
    },
    { "name": "High Cone Scored",
      "gsCol": "t_high_cone_scored",
      "code": "toh",
      "type": "counter"
    },
    { "name": "Medium Cone Scored",
      "gsCol": "t_medium_cone_scored",
      "code": "tom",
      "type": "counter"
    },
    { "name": "Low Cone Scored",
      "gsCol": "t_low_cone_scored",
      "code": "tol",
      "type": "counter"
    },
    { "name": "Feeder Count",
      "gsCol": "feeder_count",
      "code": "tfc",
      "type": "counter"
    },
    { "name": "Was Defended",
      "gsCol": "was_defended",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Smart Placement (creates Links)",
      "gsCol": "smart_placement",
      "code": "lnk",
      "type": "bool"
    },
    { "name": "Cargo Intake From",
      "gsCol": "cargo_intake_from",
      "code": "cif",
      "type": "radio",
      "choices": {
        "t": "Substation<br>",
        "g": "Ground<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Docking Timer",
      "gsCol": "docking_timer",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Final Status",
      "gsCol": "final_status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "d": "Docked (Not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "# of alliance bots docked/engaged",
      "gsCol": "num_alliance_bots_docked",
      "code": "cn",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "gsCol": "driver_skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Links Scored",
      "gsCol": "links_scored",
      "code": "ls",
      "type": "counter"
    },
    { "name": "Defense Rating",
      "gsCol": "defense_rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Swerve drive?",
    "gsCol": "swerve_drive",
      "code": "sd",
      "type": "bool"
    },
    { "name": "Speed Rating",
      "gsCol": "speed_rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Tipped",
      "gsCol": "died_tipped",
      "code": "d",
      "type": "bool"
    },
    { "name": "Avoided coopertition",
      "gsCol": "avoided_coopertition",
      "code": "coo",
      "type": "bool"
    },
    { "name": "Make good alliance partner?",
      "gsCol": "make_good_alliance_partner",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "gsCol": "comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 50
    },
    { "name": "Confidence Rating",
      "gsCol": "confidence_rating",
      "code": "cnf",
      "type": "radio",
      "choices": {
        "v": "Very Confident<br>",
        "a": "Average<br>",
        "n": "Not Confident"
        },
      "defaultValue": "a"
    }
  ]
}`;
