<?php

function readFromFile() {
    return explode(PHP_EOL, file_get_contents('input.txt'));
}

function part1() {
    $passports = readFromFile();
    $passport = [];
    $requirements = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
    $validPassports = 0;

    foreach ($passports as $p) {
        if($p) {
            $attrExploded = explode(" ", $p);

            foreach ($attrExploded as $attr) {
                array_push($passport, $attr);
            }
        } else {
            $arrayOfKeys = [];

            foreach ($passport as $line) {
                $explodedKeys = explode(":", $line);
                array_push($arrayOfKeys, $explodedKeys[0]);
            }

            if(!array_diff($requirements, $arrayOfKeys)) {
                $validPassports++;
            }

            $passport = [];
        }
    }

    var_dump($validPassports);
}

function part2() {
    $passports = readFromFile();
    $passport = [];
    $requirements = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
    $hclPattern = "/^(#[a-f0-9]{6})$/";
    $hgtPattern = "/^((15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-3])cm$)|^((59|6[0-9]|7[0-6])in$)/";
    $eclPattern = "/^(amb|blu|brn|gry|grn|hzl|oth)$/";
    $pidPattern = "/^([0-9]{9})$/";
    $validPassports = 0;

    foreach ($passports as $p) {
        if($p) {
            $attrExploded = explode(" ", $p);

            foreach ($attrExploded as $attr) {
                array_push($passport, $attr);
            }
        } else {
            $passportArray = [];

            foreach ($passport as $line) {
                $explodedKeys = explode(":", $line);
                $passportArray[$explodedKeys[0]] = $explodedKeys[1];
            }

            if(count(array_intersect_key(array_flip($requirements), $passportArray)) === count($requirements)) {
                // poop
                if($passportArray['byr'] >= 1920 && $passportArray['byr'] <= 2002) {
                    if($passportArray['iyr'] >= 2010 && $passportArray['iyr'] <= 2020) {
                        if($passportArray['eyr'] >= 2020 && $passportArray['eyr'] <= 2030) {
                            if(preg_match($hgtPattern, $passportArray['hgt'])) {
                                if(preg_match($hclPattern, $passportArray['hcl'])) {
                                    if(preg_match($eclPattern, $passportArray['ecl'])) {
                                        if(preg_match($pidPattern, $passportArray['pid'])) {
                                            var_dump($passportArray);

                                            $validPassports++;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            $passport = [];
        }
    }

    var_dump($validPassports);
}

part1();
part2();