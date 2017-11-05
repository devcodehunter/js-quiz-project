

function getResult() {

	var totalQues=5;
	var score = 0;

	var q1 = document.forms['quiz']['q1'].value,
	q2 = document.forms['quiz']['q2'].value,
	q3 = document.forms['quiz']['q3'].value,
	q4 = document.forms['quiz']['q4'].value,
	q5 = document.forms['quiz']['q5'].value;

	//Basic Form Validation
	for(var i=1; i<=totalQues; i++){
		if(eval('q'+i) === null || eval('q'+i) === ''){
		alert('You missed question '+i);
		return false;
		}
	}

	// Set Correct Answer

	var answer= ["b","a","d","b","d"];

	for(var i=1; i <= totalQues; i++){
		if(eval('q'+i) === answer[i-1]){
			score++;
		}
	}



	//Display Data
	var result="<p>You have scored "+score+" out of "+totalQues+"</p>";
	document.getElementById("demo").innerHTML = result;

	return false;
}

