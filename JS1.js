function check(){

         q1=document.quiz.question1.value;
         q2=document.quiz.question2.value;
         q3=document.quiz.question3.value;
         q4=document.quiz.question4.value;
         q5=document.quiz.question5.value;
        result = q1 + q2 + q3 + q4 +q5;
        document.getElementById("after_submit").style.visibility="visible";

        if (result == "col11food7h4q7") {result2 = "You are Jungkook<br /><img " +
            "src='https://i.pinimg.com/originals/35/58/00/355800515b4b61f3d5908a1f82894f19.jpg' width='30%'  height='30%' />"};
    if (result == "col510food5h2q6") {result2 = "You are V<br /><img " +
        "src='https://lyricstranslate.com/files/styles/large/public/99295bbde4b2f883a66793fd3bd74e0a.jpg?itok=wULELl5u' width='30%'  height='30%' />"};
    if (result == "col213food3h1q5") {result2 = "You are Jimin<br /><img " +
        "src='https://static10.tgstat.ru/channels/_0/0d/0db2e204010400f5c506620adcd1ae68.jpg' width='30%'  height='30%' />"};
    if (result == "col47food2h6q4") {result2 = "You are J-Hope<br /><img " +
        "src='https://cdn.popcake.tv/wp-content/uploads/2018/09/bts-j-hope-cute-and-funny-moment.jpg' width='30%'  height='30%' />"};
    if (result == "col64food1h3q3") {result2 = "You are Jin<br /><img " +
        "src='https://kpopping.com/uploads/documents/LIV_4622_.jpeg' width='30%'  height='30%' />"};
    if (result == "col71food6h5q2") {result2 = "You are RM<br /><img " +
        "src='https://kprofiles.com/wp-content/uploads/2016/08/RM-615x800.jpg' width='30%'  height='30%' />"};
    if (result == "col33food4h7q1") {result2 = "You are Suga<br /><img " +
        "src='https://pm1.narvii.com/6527/8a4f9664dd3c486cfff6303eb15fbec73760a25d_00.jpg' width='30%'  height='30%' />"};
    if (result != "col33food4h7q1" && result !="col71food6h5q2"
    && result != "col64food1h3q3" && result != "col47food2h6q4" && result != "col213food3h1q5"
    && result != "col510food5h2q6" && result != "col11food7h4q7") {result2 = "U'r not a member of BTS"};
    if (result == "") {result2 = " "};

        document.getElementById("messages").innerHTML = result2;

        return false; // required to not refresh the page; just leave this here

}


