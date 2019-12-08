$(document).ready(function() {
  $("#menu").bind("click", function() {
    $("#mainnav ul").slideToggle();
  });

  $(window).resize(function() {
    var w = $(window).width();
    if (w > 945) {
      $("#mainnav ul").removeAttr("style");
    }
  });

  $(".book-img1").bind("click", function(event) {
    $(".book-details").addClass("show-details");
    $(".book-details").html(
      "Purple Hibiscus is an exquisite novel about the emotional turmoil of adolescence, the powerful bonds of family, and the bright promise of freedom. Fifteen-year-old Kambili and her older brother Jaja lead a privileged life in Enugu, Nigeria. They live in a beautiful house, with a caring family, and attend an exclusive missionary school. They're completely shielded from the troubles of the world. Yet, as Kambili reveals in her tender-voiced account, things are less perfect than they appear. Although her Papa is generous and well respected, he is fanatically religious and tyrannical at home—a home that is silent and suffocating."
    );
  });
  $(".book-img2").bind("click", function(event) {
    $(".book-details").addClass("show-details");
    $(".book-details").html(
      "Half of a Yellow Sun is a tremendously evocative novel of the promise, hope, and disappointment of the Biafran war.With effortless grace, celebrated author Chimamanda Ngozi Adichie illuminates a seminal moment in modern African history: Biafra's impassioned struggle to establish an independent republic in southeastern Nigeria during the late 1960s. We experience this tumultuous decade alongside five unforgettable characters: Ugwu, a thirteen-year-old houseboy who works for Odenigbo, a university professor full of revolutionary zeal; Olanna, the professor’s beautiful young mistress who has abandoned her life in Lagos for a dusty town and her lover’s charm; and Richard, a shy young Englishman infatuated with Olanna’s willful twin sister Kainene. "
    );
  });

  $(".book-img3").bind("click", function(event) {
    $(".book-details").addClass("show-details");
    $(".book-details").html(
      "In the international bestseller, Thinking, Fast and Slow, Daniel Kahneman, the renowned psychologist and winner of the Nobel Prize in Economics, takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical. The impact of overconfidence on corporate strategies, the difficulties of predicting what will make us happy in the future, the profound effect of cognitive biases on everything from playing the stock market to planning our next vacation—each of these can be understood only by knowing how the two systems shape our judgments and decisions. "
    );
  });
  $(".book-img4").bind("click", function(event) {
    $(".book-details").addClass("show-details");
    $(".book-details").html(
      "Things Fall Apart is the first of three novels in Chinua Achebe's critically acclaimed African Trilogy. It is a classic narrative about Africa's cataclysmic encounter with Europe as it establishes a colonial presence on the continent. Told through the fictional experiences of Okonkwo, a wealthy and fearless Igbo warrior of Umuofia in the late 1800s, Things Fall Apart explores one man's futile resistance to the devaluing of his Igbo traditions by British political andreligious forces and his despair as his community capitulates to the powerful new order. "
    );
  });
});
