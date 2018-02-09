// Get user data
  function getUserData() {

    // Save name
    var name = document.getElementById("text_name").value;

    // Save gender
    var male = 2;
    var female = 1;
    var gender = 0;
    if (document.getElementById("genderFemale").checked == true) {
      gender = female;
    } else if (document.getElementById("genderMale").checked == true) {
      gender = male;
    }
    //Save age
    var age = document.getElementById("userAge").value;

    //Save weight
    var weight = document.getElementById("userWeight").value;

    alert("Bonjour " + name + gender + age + weight);

  }
