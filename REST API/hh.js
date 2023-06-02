const div = document.querySelector("#vacancies");
const button = document.querySelector('button');
const inputBox = document.querySelector("#input");

const renderContent = (response) => {
    const { data } = response;
    div.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        var newDiv = document.createElement('div');
        var textDiv = document.createElement('div');
        var buttonDiv = document.createElement('div');
        var name = document.createElement('label');

        newDiv.className = "inner";
        textDiv.className = "text";
        buttonDiv.className = "button";
        newDiv.append(textDiv, buttonDiv);

        name.className = "name";
        name.innerHTML = data.items[i].name;
        textDiv.append(name);
        
        var employer = document.createElement('label');
        employer.innerHTML = " " + data.items[i].employer.name;
        textDiv.append(employer);
        textDiv.append(document.createElement('br'));

        var salary = document.createElement('label');
        if(data.items[i].salary != null)
        {
            if (data.items[i].salary.from != null)
            {
                salary.innerHTML = " от " + data.items[i].salary.from;
            }
            if (data.items[i].salary.to != null)
            {
                salary.innerHTML += " до " + data.items[i].salary.to;
            }
            salary.innerHTML += " руб";
            
        }
        else{
            salary.innerHTML = " Не указана";
        }
        textDiv.append(salary);
        textDiv.append(document.createElement('br'));

        var experience = document.createElement('label');
        experience.innerHTML = "Опыт работы: " + data.items[i].experience.name;
        textDiv.append(experience);
        textDiv.append(document.createElement('br'));

        var form = document.createElement('form');
        form.action = data.items[i].alternate_url;
        form.target = "_blank"
        buttonDiv.append(form);

        var link = document.createElement('button');
        link.innerHTML = "Перейти";
        link.className = "link";
        form.append(link);
        
        div.append(newDiv);
    }
}

button.onclick = function() {
     axios
    .get(`https://api.hh.ru/vacancies?text=${inputBox.value}&per_page=10&area=4`) 
    .then(renderContent);
}

