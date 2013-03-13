#pragma strict
var normalSpeed:int;
var turboSpeed:int;
var laserPrefab:Rigidbody;


function Start () {

}

function Update () {
	//fire laser using leftctrl button
	if(Input.GetKeyDown(KeyCode.LeftControl))
		{
			//to create a laser at the position of the spaceship
			Instantiate(laserPrefab,transform.position,transform.rotation);
		}

	//enable borders using the borders function in BorderController
	BorderController.EnableBorders(transform);

	//rotation of the cube
	transform.Rotate(Vector3.forward * -40 * Input.GetAxis("Horizontal") * Time.deltaTime);
	
	//speed / turbo speed
	if (Input.GetKey(KeyCode.Space))
	{
		transform.Translate(Vector3.up * turboSpeed * Input.GetAxis("Vertical") * Time.deltaTime);
	}
	else
	{
		//if not holding space bar
		transform.Translate(Vector3.up * normalSpeed * Input.GetAxis("Vertical") * Time.deltaTime);
	}

}

function OnBecameInvisible() {

		Destroy(this.gameObject);
		
}