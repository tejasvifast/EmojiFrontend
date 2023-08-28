import { map } from "lodash";
import { useState } from "react";
const emojis = [
  { name: "Grinning Face", emoji: "😀", unicode: "\u{1F600}", utf8: "&#x1F600;", html: "&#128512;", url: "%F0%9F%98%80" },
  { name: "Smiling Face with Smiling Eyes", emoji: "😄", unicode: "\u{1F604}", utf8: "&#x1F604;", html: "&#128516;", url: "%F0%9F%98%84" },
  { name: "Face with Tears of Joy", emoji: "😂", unicode: "\u{1F602}", utf8: "&#x1F602;", html: "&#128514;", url: "%F0%9F%98%82" },
  { name: "Rolling on the Floor Laughing", emoji: "🤣", unicode: "\u{1F923}", utf8: "&#x1F923;", html: "&#129315;", url: "%F0%9F%A4%A3" },
  { name: "Slightly Smiling Face", emoji: "🙂", unicode: "\u{1F642}", utf8: "&#x1F642;", html: "&#128578;", url: "%F0%9F%99%82" },
  { name: "Winking Face", emoji: "😉", unicode: "\u{1F609}", utf8: "&#x1F609;", html: "&#128521;", url: "%F0%9F%98%89" },
  { name: "Smiling Face with Heart-Eyes", emoji: "😍", unicode: "\u{1F60D}", utf8: "&#x1F60D;", html: "&#128525;", url: "%F0%9F%98%8D" },
  { name: "Face Blowing a Kiss", emoji: "😘", unicode: "\u{1F618}", utf8: "&#x1F618;", html: "&#128536;", url: "%F0%9F%98%98" },
  { name: "Kissing Face", emoji: "😗", unicode: "\u{1F617}", utf8: "&#x1F617;", html: "&#128535;", url: "%F0%9F%98%97" },
  { name: "Kissing Face with Closed Eyes", emoji: "😚", unicode: "\u{1F61A}", utf8: "&#x1F61A;", html: "&#128538;", url: "%F0%9F%98%9A" },
  { name: "Face with Tongue", emoji: "😛", unicode: "\u{1F61B}", utf8: "&#x1F61B;", html: "&#128539;", url: "%F0%9F%98%9B" },
  { name: "Winking Face with Tongue", emoji: "😜", unicode: "\u{1F61C}", utf8: "&#x1F61C;", html: "&#128540;", url: "%F0%9F%98%9C" },
  { name: "Zany Face", emoji: "🤪", unicode: "\u{1F92A}", utf8: "&#x1F92A;", html: "&#129322;", url: "%F0%9F%A4%AA" },
  { name: "Face with Raised Eyebrow", emoji: "🤨", unicode: "\u{1F928}", utf8: "&#x1F928;", html: "&#129320;", url: "%F0%9F%A4%A8" },
  { name: "Face with Monocle", emoji: "🧐", unicode: "\u{1F9D0}", utf8: "&#x1F9D0;", html: "&#129488;", url: "%F0%9F%A7%90" },
  { name: "Sunglasses", emoji: "😎", unicode: "\u{1F60E}", utf8: "&#x1F60E;", html: "&#128526;", url: "%F0%9F%98%8E" },
  { name: "Star-Struck", emoji: "🤩", unicode: "\u{1F929}", utf8: "&#x1F929;", html: "&#129321;", url: "%F0%9F%A4%A9" },
  { name: "Grinning Face with Big Eyes", emoji: "😃", unicode: "\u{1F603}", utf8: "&#x1F603;", html: "&#128515;", url: "%F0%9F%98%83" },
  { name: "Grinning Face with Smiling Eyes", emoji: "😄", unicode: "\u{1F604}", utf8: "&#x1F604;", html: "&#128516;", url: "%F0%9F%98%84" },
  { name: "Beaming Face with Smiling Eyes", emoji: "😁", unicode: "\u{1F601}", utf8: "&#x1F601;", html: "&#128513;", url: "%F0%9F%98%81" },
  { name: "Grinning Squinting Face", emoji: "😆", unicode: "\u{1F606}", utf8: "&#x1F606;", html: "&#128518;", url: "%F0%9F%98%86" },
  { name: "Grinning Face with Sweat", emoji: "😅", unicode: "\u{1F605}", utf8: "&#x1F605;", html: "&#128517;", url: "%F0%9F%98%85" },
  { name: "Slightly Smiling Face", emoji: "🙂", unicode: "\u{1F642}", utf8: "&#x1F642;", html: "&#128578;", url: "%F0%9F%99%82" },
  { name: "Smiling Face with Halo", emoji: "😇", unicode: "\u{1F607}", utf8: "&#x1F607;", html: "&#128519;", url: "%F0%9F%98%87" },
  { name: "Winking Face", emoji: "😉", unicode: "\u{1F609}", utf8: "&#x1F609;", html: "&#128521;", url: "%F0%9F%98%89" },
  { name: "Smiling Face with Smiling Eyes", emoji: "😊", unicode: "\u{1F60A}", utf8: "&#x1F60A;", html: "&#128522;", url: "%F0%9F%98%8A" },
  { name: "Face Blowing a Kiss", emoji: "😘", unicode: "\u{1F618}", utf8: "&#x1F618;", html: "&#128536;", url: "%F0%9F%98%98" },
  { name: "Kissing Face", emoji: "😗", unicode: "\u{1F617}", utf8: "&#x1F617;", html: "&#128535;", url: "%F0%9F%98%97" },
  { name: "Kissing Face with Closed Eyes", emoji: "😚", unicode: "\u{1F61A}", utf8: "&#x1F61A;", html: "&#128538;", url: "%F0%9F%98%9A" },
  { name: "Smiling Face with Hearts", emoji: "🥰", unicode: "\u{1F970}", utf8: "&#x1F970;", html: "&#129392;", url: "%F0%9F%A5%B0" },
  { name: "Smiling Face with Heart-Eyes", emoji: "😍", unicode: "\u{1F60D}", utf8: "&#x1F60D;", html: "&#128525;", url: "%F0%9F%98%8D" },
  { name: "Face with Symbols on Mouth", emoji: "🤬", unicode: "\u{1F92C}", utf8: "&#x1F92C;", html: "&#129324;", url: "%F0%9F%A4%AC" },
  { name: "Face with Medical Mask", emoji: "😷", unicode: "\u{1F637}", utf8: "&#x1F637;", html: "&#128567;", url: "%F0%9F%98%B7" },
  { name: "Face with Thermometer", emoji: "🤒", unicode: "\u{1F912}", utf8: "&#x1F912;", html: "&#129298;", url: "%F0%9F%A4%92" },
  { name: "Face with Open Mouth and Cold Sweat", emoji: "😰", unicode: "\u{1F630}", utf8: "&#x1F630;", html: "&#128560;", url: "%F0%9F%98%B0" },
  { name: "Face Screaming in Fear", emoji: "😱", unicode: "\u{1F631}", utf8: "&#x1F631;", html: "&#128561;", url: "%F0%9F%98%B1" },
  { name: "Flushed Face", emoji: "😳", unicode: "\u{1F633}", utf8: "&#x1F633;", html: "&#128563;", url: "%F0%9F%98%B3" },
  { name: "Drooling Face", emoji: "🤤", unicode: "\u{1F924}", utf8: "&#x1F924;", html: "&#129316;", url: "%F0%9F%A4%A4" },
  { name: "Lying Face", emoji: "🤥", unicode: "\u{1F925}", utf8: "&#x1F925;", html: "&#129317;", url: "%F0%9F%A4%A5" },
  { name: "Shushing Face", emoji: "🤫", unicode: "\u{1F92B}", utf8: "&#x1F92B;", html: "&#129307;", url: "%F0%9F%A4%AB" },
  { name: "Thinking Face", emoji: "🤔", unicode: "\u{1F914}", utf8: "&#x1F914;", html: "&#129316;", url: "%F0%9F%A4%94" },
  { name: "Zipper-Mouth Face", emoji: "🤐", unicode: "\u{1F910}", utf8: "&#x1F910;", html: "&#129312;", url: "%F0%9F%A4%90" },
  { name: "Face with Raised Eyebrow", emoji: "🤨", unicode: "\u{1F928}", utf8: "&#x1F928;", html: "&#129320;", url: "%F0%9F%A4%A8" },
  { name: "Neutral Face", emoji: "😐", unicode: "\u{1F610}", utf8: "&#x1F610;", html: "&#128528;", url: "%F0%9F%98%90" },
  { name: "Expressionless Face", emoji: "😑", unicode: "\u{1F611}", utf8: "&#x1F611;", html: "&#128529;", url: "%F0%9F%98%91" },
  { name: "Hugging Face", emoji: "🤗", unicode: "\u{1F917}", utf8: "&#x1F917;", html: "&#129303;", url: "%F0%9F%A4%97" },
  { name: "Face without Mouth", emoji: "😶", unicode: "\u{1F636}", utf8: "&#x1F636;", html: "&#128566;", url: "%F0%9F%98%B6" },
  { name: "Smirking Face", emoji: "😏", unicode: "\u{1F60F}", utf8: "&#x1F60F;", html: "&#128527;", url: "%F0%9F%98%8F" },
  { name: "Unamused Face", emoji: "😒", unicode: "\u{1F612}", utf8: "&#x1F612;", html: "&#128532;", url: "%F0%9F%98%92" },
  { name: "Face with Cold Sweat", emoji: "😓", unicode: "\u{1F613}", utf8: "&#x1F613;", html: "&#128531;", url: "%F0%9F%98%93" },
  { name: "Pensive Face", emoji: "😔", unicode: "\u{1F614}", utf8: "&#x1F614;", html: "&#128532;", url: "%F0%9F%98%94" },
  { name: "Confounded Face", emoji: "😖", unicode: "\u{1F616}", utf8: "&#x1F616;", html: "&#128534;", url: "%F0%9F%98%96" },
  { name: "Disappointed Face", emoji: "😞", unicode: "\u{1F61E}", utf8: "&#x1F61E;", html: "&#128542;", url: "%F0%9F%98%9E" },
  { name: "Worried Face", emoji: "😟", unicode: "\u{1F61F}", utf8: "&#x1F61F;", html: "&#128543;", url: "%F0%9F%98%9F" },
  { name: "Angry Face", emoji: "😠", unicode: "\u{1F620}", utf8: "&#x1F620;", html: "&#128544;", url: "%F0%9F%98%A0" },
  { name: "Pouting Face", emoji: "😡", unicode: "\u{1F621}", utf8: "&#x1F621;", html: "&#128545;", url: "%F0%9F%98%A1" },
  { name: "Angry Face with Horns", emoji: "😈", unicode: "\u{1F608}", utf8: "&#x1F608;", html: "&#128520;", url: "%F0%9F%98%88" },
  { name: "Angry Face with Open Mouth and Cold Sweat", emoji: "😓", unicode: "\u{1F620}", utf8: "&#x1F620;", html: "&#128544;", url: "%F0%9F%98%A4" },
  { name: "Knocked-Out Face", emoji: "😵", unicode: "\u{1F635}", utf8: "&#x1F635;", html: "&#128565;", url: "%F0%9F%98%B5" },
  { name: "Face with Head-Bandage", emoji: "🤕", unicode: "\u{1F915}", utf8: "&#x1F915;", html: "&#129301;", url: "%F0%9F%A4%95" },
  { name: "Nauseated Face", emoji: "🤢", unicode: "\u{1F922}", utf8: "&#x1F922;", html: "&#129314;", url: "%F0%9F%A4%A2" },
  { name: "Face with Open Mouth Vomiting", emoji: "🤮", unicode: "\u{1F92E}", utf8: "&#x1F92E;", html: "&#129326;", url: "%F0%9F%A4%AE" },
  { name: "Sneezing Face", emoji: "🤧", unicode: "\u{1F927}", utf8: "&#x1F927;", html: "&#129319;", url: "%F0%9F%A4%A7" },
  { name: "Hot Face", emoji: "🥵", unicode: "\u{1F975}", utf8: "&#x1F975;", html: "&#129365;", url: "%F0%9F%A5%B5" },
  { name: "Cold Face", emoji: "🥶", unicode: "\u{1F976}", utf8: "&#x1F976;", html: "&#129366;", url: "%F0%9F%A5%B6" },
  { name: "Woozy Face", emoji: "🥴", unicode: "\u{1F974}", utf8: "&#x1F974;", html: "&#129364;", url: "%F0%9F%A5%B4" },
  { name: "Dizzy Face", emoji: "😵‍💫", unicode: "\u{1F635}\u{200D}\u{1F4AB}", utf8: "&#x1F635;&#x200D;&#x1F4AB;", html: "&#128565;&#x200D;&#x1F4AB;", url: "%F0%9F%98%B5%E2%80%8D%F0%9F%92%AB" },
  { name: "Exploding Head", emoji: "🤯", unicode: "\u{1F92F}", utf8: "&#x1F92F;", html: "&#129327;", url: "%F0%9F%A4%AF" },
  { name: "Cowboy Hat Face", emoji: "🤠", unicode: "\u{1F920}", utf8: "&#x1F920;", html: "&#129312;", url: "%F0%9F%A4%A0" },
  { name: "Party Face", emoji: "🥳", unicode: "\u{1F973}", utf8: "&#x1F973;", html: "&#129363;", url: "%F0%9F%A5%B3" },
  { name: "Smiling Face with Hearts", emoji: "🥰", unicode: "\u{1F970}", utf8: "&#x1F970;", html: "&#129392;", url: "%F0%9F%A5%B0" },
  { name: "Nerd Face", emoji: "🤓", unicode: "\u{1F913}", utf8: "&#x1F913;", html: "&#129299;", url: "%F0%9F%A4%93" },
  { name: "Smiling Face with Halo", emoji: "😇", unicode: "\u{1F607}", utf8: "&#x1F607;", html: "&#128519;", url: "%F0%9F%98%87" },
  { name: "Cow Face", emoji: "🐮", unicode: "\u{1F42E}", utf8: "&#x1F42E;", html: "&#128046;", url: "%F0%9F%90%AE" },
  { name: "Pig Face", emoji: "🐷", unicode: "\u{1F437}", utf8: "&#x1F437;", html: "&#128055;", url: "%F0%9F%90%B7" },
  { name: "Pig Nose", emoji: "🐽", unicode: "\u{1F43D}", utf8: "&#x1F43D;", html: "&#128061;", url: "%F0%9F%90%BD" },
  { name: "Frog Face", emoji: "🐸", unicode: "\u{1F438}", utf8: "&#x1F438;", html: "&#128056;", url: "%F0%9F%90%B8" },
  { name: "Cat Face", emoji: "😺", unicode: "\u{1F63A}", utf8: "&#x1F63A;", html: "&#128570;", url: "%F0%9F%98%BA" },
  { name: "Zombie", emoji: "🧟", unicode: "\u{1F9DF}", utf8: "&#x1F9DF;", html: "&#129471;", url: "%F0%9F%A7%9F" },
  { name: "Genie", emoji: "🧞", unicode: "\u{1F9DE}", utf8: "&#x1F9DE;", html: "&#129470;", url: "%F0%9F%A7%9E" },
  { name: "Merperson", emoji: "🧜", unicode: "\u{1F9DC}", utf8: "&#x1F9DC;", html: "&#129468;", url: "%F0%9F%A7%9C" },
  { name: "Vampire", emoji: "🧛", unicode: "\u{1F9DB}", utf8: "&#x1F9DB;", html: "&#129467;", url: "%F0%9F%A7%9B" },
  { name: "Elf", emoji: "🧝", unicode: "\u{1F9DD}", utf8: "&#x1F9DD;", html: "&#129469;", url: "%F0%9F%A7%9D" },
  { name: "Person with Skullcap", emoji: "🧑‍🦰", unicode: "\u{1F9D1}\u{200D}\u{1F9B0}", utf8: "&#x1F9D1;&#x200D;&#x1F9B0;", html: "&#129473;&#x200D;&#x1F9B0;", url: "%F0%9F%A7%91%E2%80%8D%F0%9F%A6%B0" },
  { name: "Person with Veil", emoji: "👰‍♀️", unicode: "\u{1F470}\u{200D}\u{2640}\u{FE0F}", utf8: "&#x1F470;&#x200D;&#x2640;&#xFE0F;", html: "&#128112;&#x200D;&#x2640;&#xFE0F;", url: "%F0%9F%91%B0%E2%80%8D%E2%99%80%EF%B8%8F" },
  { name: "Man in Tuxedo", emoji: "🤵", unicode: "\u{1F935}", utf8: "&#x1F935;", html: "&#129333;", url: "%F0%9F%A4%B5" },
  { name: "Person with Headscarf", emoji: "🧕", unicode: "\u{1F9D5}", utf8: "&#x1F9D5;", html: "&#129477;", url: "%F0%9F%A7%95" },
  { name: "Bearded Person", emoji: "🧔", unicode: "\u{1F9D4}", utf8: "&#x1F9D4;", html: "&#129476;", url: "%F0%9F%A7%94" },
  { name: "Mage", emoji: "🧙", unicode: "\u{1F9D9}", utf8: "&#x1F9D9;", html: "&#129465;", url: "%F0%9F%A7%99" },
  { name: "Fairy", emoji: "🧚", unicode: "\u{1F9DA}", utf8: "&#x1F9DA;", html: "&#129466;", url: "%F0%9F%A7%9A" },
  { name: "Alien", emoji: "👽", unicode: "\u{1F47D}", utf8: "&#x1F47D;", html: "&#128125;", url: "%F0%9F%91%BD" },
  { name: "Robot Face", emoji: "🤖", unicode: "\u{1F916}", utf8: "&#x1F916;", html: "&#129302;", url: "%F0%9F%A4%96" },
  { name: "Pile of Poo", emoji: "💩", unicode: "\u{1F4A9}", utf8: "&#x1F4A9;", html: "&#128169;", url: "%F0%9F%92%A9" },
  { name: "Ghost", emoji: "👻", unicode: "\u{1F47B}", utf8: "&#x1F47B;", html: "&#128123;", url: "%F0%9F%91%BB" },
  { name: "Alien Monster", emoji: "👾", unicode: "\u{1F47E}", utf8: "&#x1F47E;", html: "&#128126;", url: "%F0%9F%91%BE" },
  { name: "Robot", emoji: "🤖", unicode: "\u{1F916}", utf8: "&#x1F916;", html: "&#129302;", url: "%F0%9F%A4%96" },
  { name: "Clown Face", emoji: "🤡", unicode: "\u{1F921}", utf8: "&#x1F921;", html: "&#129313;", url: "%F0%9F%A4%A1" },
  { name: "Ogre", emoji: "👹", unicode: "\u{1F479}", utf8: "&#x1F479;", html: "&#128121;", url: "%F0%9F%91%B9" },
  { name: "Goblin", emoji: "👺", unicode: "\u{1F47A}", utf8: "&#x1F47A;", html: "&#128122;", url: "%F0%9F%91%BA" },
  { name: "Skull", emoji: "💀", unicode: "\u{1F480}", utf8: "&#x1F480;", html: "&#128128;", url: "%F0%9F%92%80" },
  { name: "Skull and Crossbones", emoji: "☠️", unicode: "\u{2620}\u{FE0F}", utf8: "&#x2620;&#xFE0F;", html: "&#9760;&#xFE0F;", url: "%E2%98%A0%EF%B8%8F" },
  { name: "Alien", emoji: "👽", unicode: "\u{1F47D}", utf8: "&#x1F47D;", html: "&#128125;", url: "%F0%9F%91%BD" },
  { name: "Alien Monster", emoji: "👾", unicode: "\u{1F47E}", utf8: "&#x1F47E;", html: "&#128126;", url: "%F0%9F%91%BE" },
  { name: "Angry Devil", emoji: "😈", unicode: "\u{1F47F}", utf8: "&#x1F47F;", html: "&#128127;", url: "%F0%9F%91%BF" },
  { name: "Angry Face with Horns", emoji: "😠", unicode: "\u{1F620}", utf8: "&#x1F620;", html: "&#128544;", url: "%F0%9F%98%A0" },
  { name: "Orc", emoji: "👹", unicode: "\u{1F479}", utf8: "&#x1F479;", html: "&#128121;", url: "%F0%9F%91%B9" },
  { name: "Joker", emoji: "🃏", unicode: "\u{1F0CF}", utf8: "&#x1F0CF;", html: "&#127183;", url: "%F0%9F%83%8F" },
  { name: "Pirate Flag", emoji: "🏴‍☠️", unicode: "\u{1F3F4}\u{200D}\u{2620}\u{FE0F}", utf8: "&#x1F3F4;&#x200D;&#x2620;&#xFE0F;", html: "&#127988;&#x200D;&#x2620;&#xFE0F;", url: "%F0%9F%8F%B4%E2%80%8D%E2%98%A0%EF%B8%8F" },
  { name: "Japanese Ogre", emoji: "👹", unicode: "\u{1F479}", utf8: "&#x1F479;", html: "&#128121;", url: "%F0%9F%91%B9" },
  { name: "Japanese Goblin", emoji: "👺", unicode: "\u{1F47A}", utf8: "&#x1F47A;", html: "&#128122;", url: "%F0%9F%91%BA" },
  { name: "Radioactive", emoji: "☢️", unicode: "\u{2622}\u{FE0F}", utf8: "&#x2622;&#xFE0F;", html: "&#9762;&#xFE0F;", url: "%E2%98%A2%EF%B8%8F" },
  { name: "Biohazard", emoji: "☣️", unicode: "\u{2623}\u{FE0F}", utf8: "&#x2623;&#xFE0F;", html: "&#9763;&#xFE0F;", url: "%E2%98%A3%EF%B8%8F" },
  { name: "Person with Veil", emoji: "👰‍♀️", unicode: "\u{1F470}\u{200D}\u{2640}\u{FE0F}", utf8: "&#x1F470;&#x200D;&#x2640;&#xFE0F;", html: "&#128112;&#x200D;&#x2640;&#xFE0F;", url: "%F0%9F%91%B0%E2%80%8D%E2%99%80%EF%B8%8F" },
  { name: "Man in Tuxedo", emoji: "🤵", unicode: "\u{1F935}", utf8: "&#x1F935;", html: "&#129333;", url: "%F0%9F%A4%B5" },
  { name: "Person with Headscarf", emoji: "🧕", unicode: "\u{1F9D5}", utf8: "&#x1F9D5;", html: "&#129477;", url: "%F0%9F%A7%95" },
  { name: "Woman in Tuxedo", emoji: "🤵‍♀️", unicode: "\u{1F935}\u{200D}\u{2640}\u{FE0F}", utf8: "&#x1F935;&#x200D;&#x2640;&#xFE0F;", html: "&#129333;&#x200D;&#x2640;&#xFE0F;", url: "%F0%9F%A4%B5%E2%80%8D%E2%99%80%EF%B8%8F" },
  { name: "Mage", emoji: "🧙", unicode: "\u{1F9D9}", utf8: "&#x1F9D9;", html: "&#129465;", url: "%F0%9F%A7%99" },
  { name: "Fairy", emoji: "🧚", unicode: "\u{1F9DA}", utf8: "&#x1F9DA;", html: "&#129466;", url: "%F0%9F%A7%9A" },
  { name: "Vampire", emoji: "🧛", unicode: "\u{1F9DB}", utf8: "&#x1F9DB;", html: "&#129467;", url: "%F0%9F%A7%9B" },
  { name: "Merperson", emoji: "🧜", unicode: "\u{1F9DC}", utf8: "&#x1F9DC;", html: "&#129468;", url: "%F0%9F%A7%9C" },
  { name: "Elf", emoji: "🧝", unicode: "\u{1F9DD}", utf8: "&#x1F9DD;", html: "&#129469;", url: "%F0%9F%A7%9D" },
  { name: "Genie", emoji: "🧞", unicode: "\u{1F9DE}", utf8: "&#x1F9DE;", html: "&#129470;", url: "%F0%9F%A7%9E" },
  { name: "Zombie", emoji: "🧟", unicode: "\u{1F9DF}", utf8: "&#x1F9DF;", html: "&#129471;", url: "%F0%9F%A7%9F" },
  { name: "Person in Steamy Room", emoji: "🧖", unicode: "\u{1F9D6}", utf8: "&#x1F9D6;", html: "&#129478;", url: "%F0%9F%A7%96" },
  { name: "Person Climbing", emoji: "🧗", unicode: "\u{1F9D7}", utf8: "&#x1F9D7;", html: "&#129479;", url: "%F0%9F%A7%97" },
  { name: "Person in Lotus Position", emoji: "🧘", unicode: "\u{1F9D8}", utf8: "&#x1F9D8;", html: "&#129480;", url: "%F0%9F%A7%98" },
  { name: "Brain", emoji: "🧠", unicode: "\u{1F9E0}", utf8: "&#x1F9E0;", html: "&#129472;", url: "%F0%9F%A7%A0" },
  { name: "Breast-Feeding", emoji: "🤱", unicode: "\u{1F931}", utf8: "&#x1F931;", html: "&#129329;", url: "%F0%9F%A4%B1" },
  { name: "Biking", emoji: "🚴", unicode: "\u{1F6B4}", utf8: "&#x1F6B4;", html: "&#128692;", url: "%F0%9F%9A%B4" },
  { name: "Mountain Biking", emoji: "🚵", unicode: "\u{1F6B5}", utf8: "&#x1F6B5;", html: "&#128693;", url: "%F0%9F%9A%B5" },
  { name: "Cartwheeling", emoji: "🤸", unicode: "\u{1F938}", utf8: "&#x1F938;", html: "&#129336;", url: "%F0%9F%A4%B8" },
  { name: "Wrestling", emoji: "🤼", unicode: "\u{1F93C}", utf8: "&#x1F93C;", html: "&#129340;", url: "%F0%9F%A4%BC" },
  { name: "Water Polo", emoji: "🤽", unicode: "\u{1F93D}", utf8: "&#x1F93D;", html: "&#129341;", url: "%F0%9F%A4%BD" },
  { name: "Handball", emoji: "🤾", unicode: "\u{1F93E}", utf8: "&#x1F93E;", html: "&#129342;", url: "%F0%9F%A4%BE" },
];

const Smilyface = () => {
  const [emoji, setEmoji] = useState(
    {
      name: "Grinning Face",
      emoji: "😀",
      unicode: "\u{1F600}",
      utf8: "&#x1F600;",
      html: "&#128512;",
      url: "%F0%9F%98%80"
    }
  )   //backgroundColor:'#194D33'
  const [rotate, setRotate] = useState('')

  return <div style={{ borderRadius: '20px', margin: '10px' }}>
    {emoji && <div style={{ borderRadius: '20px', margin: '10px', backgroundColor: 'pink', padding: '20px' }}>
      <h4>Emoji Details</h4>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontWeight: '100px' }}> Name : {emoji.name}</span>
        <span> Unicode : {emoji.unicode}</span>
        <span> UTF8 : {emoji.utf8}</span>
        <span> Html Code : {emoji.html}</span>
        <span> Url Code : {emoji.url}</span>
      </div>
    </div>
    }
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {map(emojis, (el) => {
        return <div
          className={rotate===el.html ? 'headingEmoji' : ''}
          style={{ width: '40px', height: '40px' }}
          onClick={() => {
            setEmoji(el)
            setRotate(el.html)
          }}
        >
          <span style={rotate===el.html ? { fontSize: '35px' }:{ fontSize: '25px' }} >{el.unicode}
          </span>
        </div>
      })}
    </div>
  </div>
}

export default Smilyface;