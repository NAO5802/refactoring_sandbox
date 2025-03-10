package org.example;

public class Game {
    private int itsScore = 0;
    private int[] itsThrows = new int[21];
    private int itsCurrentThrow = 0;
    private int itsCurrentFrame = 1;
    private boolean firstThrow = true;


    int score() {
        return scoreForFrame(getCurrentFrame() - 1);
    }

    void add(int pins) {
        itsThrows[itsCurrentThrow++] = pins;
        itsScore += pins;
        adjustCurrentFrame(pins);
    }

    private void adjustCurrentFrame(int pins) {
        if (firstThrow == true) {
            if (pins == 10) { // ストライク
                itsCurrentFrame++;
            } else {
                firstThrow = false;
            }
        } else {
            firstThrow = true;
            itsCurrentFrame++;
        }
    }

    int scoreForFrame(int theFrame) {
        int ball = 0;
        int score = 0;
        for (int currentFrame = 0; currentFrame < theFrame; currentFrame++) {
            int firstThrow = itsThrows[ball++];
            if (firstThrow == 10) { // ストライク
                score += 10 + itsThrows[ball] + itsThrows[ball + 1];
            } else {
                int secondThrow = itsThrows[ball++];
                int frameScore = firstThrow + secondThrow;
                if (frameScore == 10) {
                    score += frameScore + itsThrows[ball];
                } else {
                    score += frameScore;
                }
            }
        }
        return score;
    }

    int getCurrentFrame() {
        return itsCurrentFrame;
    }
}
