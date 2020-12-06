<?php

function readFromFile() {
    return explode(PHP_EOL, file_get_contents('input.txt'));
}

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
