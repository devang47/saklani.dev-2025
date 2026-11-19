// Exhaustive check: the AI never loses and always picks an empty square.
// Run: pnpm test
import assert from "node:assert";
import { calculateAITurn, checkWinner, GAME_STATE, SPACE_STATE } from "./Ai.ts";

let games = 0;
const play = (grid: string[], moves: number) => {
  for (let i = 0; i < 9; i++) {
    if (grid[i] !== SPACE_STATE.EMPTY) continue;
    const g = [...grid];
    g[i] = SPACE_STATE.PLAYER;
    let result = checkWinner(g, moves + 1);
    assert.notStrictEqual(result?.winner, GAME_STATE.PLAYER_WON, `player won: ${g}`);
    if (result) { games++; continue; }

    const ai = calculateAITurn(g, moves + 1);
    assert.strictEqual(g[ai], SPACE_STATE.EMPTY, `AI picked taken square ${ai}: ${g}`);
    g[ai] = SPACE_STATE.AI;
    result = checkWinner(g, moves + 2);
    if (result) { games++; continue; }
    play(g, moves + 2);
  }
};

play(Array(9).fill(SPACE_STATE.EMPTY), 0);
console.log(`ok: AI unbeaten across ${games} games`);
