const questions = [
  {
    question: "🧙‍♂️ ¿Qué significa DDL en SQL?",
    options: ["Data Display Language", "Data Definition Language", "Data Description Language", "Data Development Language"],
    answer: 1
  },
  {
    question: "🧠 Una consulta SQL es:",
    options: ["Una instrucción para compilar código", "Una solicitud para recuperar o manipular datos", "Una estructura condicional", "Un tipo de restricción"],
    answer: 1
  },
  {
    question: "🔐 ¿Qué comando permite ingresar como usuario root CON contraseña?",
    options: ["mariadb -root", "mariadb -p root", "mysql login root", "mariadb -u root -p"],
    answer: 3
  },
  {
    question: "🏗️ ¿Qué comando crea una base de datos?",
    options: ["CREATE DB", "MAKE DATABASE", "CREATE DATABASE", "NEW DATABASE"],
    answer: 2
  },
  {
    question: "📂 ¿Qué comando selecciona una base de datos para trabajar?",
    options: ["USE [nombre];", "SELECT [nombre];", "OPEN DATABASE [nombre];", "CHOOSE [nombre];"],
    answer: 0
  },
  {
    question: "💣 ¿Qué comando elimina una tabla existente?",
    options: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "ERASE TABLE"],
    answer: 1
  },
  {
    question: "🔍 ¿Qué comando muestra la estructura de una tabla?",
    options: ["SHOW TABLE estructura;", "DESCRIBE tabla;", "STRUCTURE tabla;", "VIEW tabla;"],
    answer: 1
  },
  {
    question: "🔗 ¿Qué comando permite crear una clave foránea?",
    options: ["FOREIGN KEY", "ADD FOREIGN", "CONSTRAINT FOREIGN", "FOREING KEY"],
    answer: 0
  },
  {
    question: "🧱 ¿Qué comando agrega una columna?",
    options: ["ADD COLUMN", "NEW COLUMN", "ALTER TABLE ADD", "ALTER TABLE ADD COLUMN"],
    answer: 3
  },
  {
    question: "🧹 ¿Qué comando elimina una columna llamada “correo”?",
    options: ["DELETE correo FROM alumnos;", "ALTER TABLE alumnos DROP COLUMN correo;", "DROP correo FROM alumnos;", "REMOVE COLUMN correo;"],
    answer: 1
  },
  {
    question: "📥 ¿Qué comando se usa para agregar registros a una tabla?",
    options: ["ADD INTO", "INSERT INTO", "CREATE INTO", "APPEND INTO"],
    answer: 1
  },
  {
    question: "🧭 ¿Qué hace la cláusula WHERE?",
    options: ["Ordena los resultados", "Filtra registros según una condición", "Crea una tabla", "Agrupa datos"],
    answer: 1
  },
  {
    question: "🔧 ¿Para qué sirve el comando UPDATE?",
    options: ["Elimina un registro", "Modifica una entidad construida", "Borra una tabla llena de registros", "Actualiza uno o varios registros"],
    answer: 3
  },
  {
    question: "📘 ¿Qué significa DML en SQL?",
    options: ["Data Management Language", "Data Modeling Language", "Data Manipulation Language", "Data Monitor Language"],
    answer: 2
  },
  {
    question: "🌀 ¿Qué es una subconsulta en SQL?",
    options: ["Una consulta dentro de otra consulta", "Una tabla temporal", "Un alias de columna", "Una cláusula de ordenamiento"],
    answer: 0
  },
  {
    question: "📚 ¿Qué comando muestra todas las bases de datos existentes?",
    options: ["SHOW DATABASES;", "DISPLAY DATABASES;", "LIST DATABASES;", "SHOW DB;"],
    answer: 0
  },
  {
    question: "🔥 ¿Cómo eliminarías una base de datos llamada “escuela”?",
    options: ["DROP DATABASE escuela;", "DELETE DATABASE escuela;", "REMOVE escuela;", "ERASE DATABASE escuela;"],
    answer: 0
  },
  {
    question: "📦 ¿Cómo se muestran las tablas de una base de datos?",
    options: ["SHOW ALL TABLES;", "DISPLAY TABLES;", "SHOW TABLES;", "LIST TABLES;"],
    answer: 2
  },
  {
    question: "⚔️ ¿Qué hace el INNER JOIN?",
    options: ["Une todas las filas de ambas tablas", "Une solo las filas que cumplen una condición", "Elimina duplicados", "Muestra una tabla"],
    answer: 1
  },
  {
    question: "💥 ¿Qué pasa si se ejecuta un UPDATE sin WHERE?",
    options: ["Actualiza solo un registro", "No ejecuta nada", "Actualiza todos los registros", "Error de sintaxis"],
    answer: 2
  },
  {
    question: "👁️ ¿Qué hace SELECT * FROM empleados?",
    options: ["Describe la tabla", "Muestra todos los datos", "Elimina la tabla", "Agrupa los datos"],
    answer: 1
  },
  {
    question: "🛠️ ¿Qué comando renombra una columna?",
    options: ["RENAME COLUMN nombre TO nombre_alumno;", "ALTER TABLE alumnos RENAME COLUMN nombre TO nombre_alumno;", "ALTER TABLE alumnos CHANGE nombre nombre_alumno;", "ALTER COLUMN nombre TO nombre_alumno;"],
    answer: 2
  },
  {
    question: "🧨 ¿Qué comando elimina la categoría Romance?",
    options: ["DELETE FROM categorias WHERE nombre = 'Romance';", "DROP categoria Romance;", "REMOVE Romance FROM categorias;", "DELETE Romance FROM categorias;"],
    answer: 0
  },
  {
    question: "🌐 ¿Qué comando inicia una sesión en PHP?",
    options: ["start_session();", "session_start();", "begin_session();", "open_session();"],
    answer: 1
  },
  {
    question: "💾 ¿Qué significa $_SESSION['usuario'] = 'Juan';?",
    options: ["Se crea una cookie", "Se almacena un valor en la sesión", "Se imprime el nombre del usuario", "Se borra la sesión"],
    answer: 1
  }
];

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit");

questions.forEach((q, i) => {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");
  questionDiv.innerHTML = `<h3>${i + 1}. ${q.question}</h3>`;
  const optionsDiv = document.createElement("div");
  optionsDiv.classList.add("options");

  q.options.forEach((opt, j) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="q${i}" value="${j}"> ${opt}`;
    optionsDiv.appendChild(label);
  });

  questionDiv.appendChild(optionsDiv);
  quizContainer.appendChild(questionDiv);
});

submitButton.addEventListener("click", () => {
  let score = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) {
      score++;
    }
  });

  let rank = "";
  if (score === 25) {
    rank = "🌟 ¡Eres un Maestro SQL Supremo!";
  } else if (score >= 20) {
    rank = "🔥 ¡Nivel Senpai alcanzado!";
  } else if (score >= 15) {
    rank = "💪 ¡Buen trabajo, aprendiz!";
  } else {
    rank = "😅 Sigue entrenando, joven ninja del código.";
  }

  resultContainer.innerHTML = `Obtuviste ${score}/25 respuestas correctas.<br><strong>${rank}</strong>`;
});
