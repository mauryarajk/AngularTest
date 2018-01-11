<?php

$url = "http://www.webservicex.net/globalweather.asmx?WSDL";
$client = new SoapClient($url);
$fcs = $client->__getFunctions();
// echo '<pre>';
var_dump($fcs);
$param =  array('CountryName' => 'Spain');
$res = $client->GetCitiesByCountry($param);
print_r($res);
// echo $res = $client->getLeadDetails('All');
echo 'Done';




?>