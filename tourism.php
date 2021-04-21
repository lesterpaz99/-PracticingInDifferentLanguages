<?php
function placesRecommendation($condition = '', $question = '') {
  $weather = array("San Pedro Sula" => "hot", "Tegucigalpa" => "mild", "Siguatepeque" => "cold");

  $ubication = array("Atlantida" => "north", "Francisco Morazan" => "center", "Choluteca" => "south", "Gracias a Dios" => "west");

  $tourism = array("Islas de la bahia" => "reef", "Tela" => "sea", "Lago de Yojoa" => "lake");

  switch($condition) {
    case "weather":
      $search = $weather;
      break;
    case "ubication":
      $search = $ubication;
      break;
    case "tourism":
      $search = $tourism;
      break;
    default:
    echo "Welcome to Honduras! :D";
  }
  echo "The perfect place for you in Honduras is: ".array_search($question, $search);
}

placesRecommendation("weather", "cold");