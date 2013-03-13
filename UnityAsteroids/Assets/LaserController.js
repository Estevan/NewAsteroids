#pragma strict

var laserSpeed:int;


function Start () {

}

function Update () {

	//all the laser needs is forward motion
	transform.Translate(Vector3.up*laserSpeed*Time.deltaTime);

}