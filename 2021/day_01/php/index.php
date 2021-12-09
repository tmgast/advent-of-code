<?php

$_INPUT = explode(PHP_EOL, file_get_contents(__DIR__.'/../data.txt'));
$mini = array_slice($_INPUT, 1);
$counter = 0;

array_map(function($last, $next){
  global $counter;
  if($last<$next){
    $counter +=1;
  }
}, $_INPUT, $mini);


print_r("solution 1: ".$counter.PHP_EOL);


$container = [];
$counter = 0;


array_map(function($val){
  global $container, $counter;
  array_push($container, $val);

  if(count($container)===4){
    //add first 3
    $last = array_slice($container, 0, 3);
    //
    //add last 3
    $next = array_slice($container, 1);

    //
    //compare and add if increase
    if(array_sum($next) > array_sum($last)){
      $counter +=1;
    }

    //
    //remove first
    array_shift($container);
  }
}, $_INPUT);

print_r("solution 2: ".$counter.PHP_EOL);
