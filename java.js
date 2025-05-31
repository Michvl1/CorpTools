    lapsDisplay.textContent = `Laps: ${laps} / 3`;
    if (laps >= 3) {
      stopGame();
    }
  }
} else {
  crossedLine = false;
}
