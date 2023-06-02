var refRate = ["6 месяцев - 20%", "1 год - 22%","1,5 года - 15%","2 года - 10%"];
var urgRate = ["3 месяца - 20%", "6 месяцев - 22%","9 месяцев - 23%","1 год - 24%","1,5 года - 18%", "2 года - 15%"];

window.fillCombobox = function()
{
  document.getElementById("termType").options.length = 1;
  var depType = document.getElementById("depType").value
  switch(depType)
  {
    case "1":
      for(i=0; i<refRate.length; i++)
        {
          var tmp = document.createElement("option");
          tmp.text = refRate[i];
          document.getElementById("termType").appendChild(tmp);
        }
      break;
    case "2":
      for(i=0; i<urgRate.length; i++)
        {
          var tmp = document.createElement("option");
          tmp.text = urgRate[i];
          document.getElementById("termType").appendChild(tmp);
        }
      break;
  }
}

window.Calc = function() {

  var typeDeposite = document.getElementById("depType").value;
  var timeDeposite = document.getElementById("termType").value;
  var inputValue = Number(document.querySelector("input[name='depAmount']").value);
  var deposite;

  if(typeDeposite == 1)
    deposite = "пополняемый";
  else if(typeDeposite == 2)
    deposite = "срочный";
    
  if(typeDeposite == 1)
  {
    switch(timeDeposite)
    {
    case "6 месяцев - 20%":
      document.querySelector('.Calc').innerHTML = "Вклад " + deposite + " на срок " + timeDeposite + " на сумму " + inputValue + " руб. " +" В конце срока вы получите " + Math.round(inputValue * 1.20) + " руб.";
      break;
    case "1 год - 22%":
      document.querySelector('.Calc').innerHTML = "Вклад " + deposite + " на срок " + timeDeposite + " на сумму " + inputValue + " руб." + " В конце срока вы получите " + Math.round(inputValue * 1.22) + " руб.";
      break;
    case "1,5 года - 15%":
      document.querySelector('.Calc').innerHTML = "Вклад " + deposite + " на срок " + timeDeposite + " на сумму " + inputValue + " руб." + " В конце срока вы получите " + Math.round(inputValue * 1.15) + " руб.";
      break;
    case "2 года - 10%":
      document.querySelector('.Calc').innerHTML = "Вклад " + deposite + " на срок " + timeDeposite + " на сумму " + inputValue + " руб." + " В конце срока вы получите " + Math.round(inputValue * 1.10) + " руб.";
      break;  
    }
  }
   if(typeDeposite == 2)
  {
    switch(timeDeposite)
    {
    case "3 месяца - 20%":
      document.querySelector('.Calc').innerHTML = "Вклад " + deposite + " на срок " + timeDeposite + " на сумму " + inputValue + " руб." + " В конце срока вы получите " + Math.round(inputValue * 1.20) + " руб.";
      break;
    case "6 месяцев - 22%":
      document.querySelector('.Calc').innerHTML = "Вклад " + deposite + " на срок " + timeDeposite + " на сумму " + inputValue + " руб." + " В конце срока вы получите " + Math.round(inputValue * 1.22) + " руб.";
      break;
    case "9 месяцев - 23%":
      document.querySelector('.Calc').innerHTML = "Вклад " + deposite + " на срок " + timeDeposite + " на сумму " + inputValue + " руб." + " В конце срока вы получите " + Math.round(inputValue * 1.23) + " руб.";
      break;
    case "1 год - 24%":
      document.querySelector('.Calc').innerHTML = "Вклад " + deposite + " на срок " + timeDeposite + " на сумму " + inputValue + " руб." + " В конце срока вы получите " + Math.round(inputValue * 1.24) + " руб.";
      break;
    case "1,5 года - 18%":
      document.querySelector('.Calc').innerHTML = "Вклад " + deposite + " на срок " + timeDeposite + " на сумму " + inputValue + " руб." + " В конце срока вы получите " + Math.round(inputValue * 1.18) + " руб.";
      break; 
    case "2 года - 15%":
      document.querySelector('.Calc').innerHTML = "Вклад " + deposite + " на срок " + timeDeposite + " на сумму " + inputValue + " руб." + " В конце срока вы получите " + Math.round(inputValue * 1.15) + " руб.";
      break;   
    }
  }
}