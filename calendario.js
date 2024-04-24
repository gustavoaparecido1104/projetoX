document.addEventListener("DOMContentLoaded", function() {
  var calendarDiv = document.getElementById("calendar");
  
  // Array de eventos de transmissão
  var events = [
    { date: "Sex., 12 de Abr., 21:00", eventName: "NBA - Memphis Grizzlies x Los Angeles Lakers" },
    { date: "Sáb., 13 de Abr., 18:30", eventName: "1ª Rodada Brasileirão Série A - Criciúma x Juventude" },
    { date: "Sáb., 13 de Abr., 18:30", eventName: "1ª Rodada Brasileirão Série A - Internacional x Bahia" },
    { date: "Sáb., 13 de Abr., 08:30", eventName: "Masters de Monte Carlo - Stefanos Tsitsipas x Jannik Sinner" },
    { date: "Dom., 14 de Abr., 14:40", eventName: "MLB - New York Mets x Kansas City Royals" },
    { date: "Dom., 17 de Abr., 16:00", eventName: "Champions League - Manchester City x Real Madrid" },
    { date: "Dom., 17 de Abr., 16:00", eventName: "Champions League - Bayern Munchen x Arsenal" },
    { date: "Dom., 21 de Abr., 04:00", eventName: "GP da Fórmula 1 - Xangaí" },
    { date: "Sáb., 27 de Abr., 20:00", eventName: "UFC Fight Night / Peso Mosca - Matheus Nicolau x Alex Perez" },
    { date: "Dom., 5 De Mai., 17:00", eventName: "GP da Fórmula 1 - Miami" },

    // Adicione mais eventos conforme necessário
  ];

  // Função para exibir os eventos no calendário
  function renderCalendarEvents() {
    var calendarHTML = "";
    events.forEach(function(event) {
      calendarHTML += '<div class="event"><div class="event-date">' + event.date + '</div><div class="event-name">' + event.eventName + '</div></div>';
    });
    calendarDiv.innerHTML = calendarHTML;
  }

  renderCalendarEvents();
});
