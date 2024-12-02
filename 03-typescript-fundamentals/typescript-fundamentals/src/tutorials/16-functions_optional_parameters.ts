// FUNCTIONS - DEFAULT PARAMETERS
function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scorePenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);
