package org.example;

public class Game {
    private int itsScore = 0;
    private int[] itsThrows = new int[21];

    int score() {
        return itsScore;
    }

    void add(int pins) {
        itsScore += pins;
    }

    int scoreForFrame(int theFrame) {
        int ball = 0;
        int score = 0;
        for(int currentFrame = 0; currentFrame < theFrame; currentFrame++) {
            int firstThrow = itsThrows[ball++];
            int secondThrow = itsThrows[ball++];
            score += firstThrow + secondThrow;
        }
        return score;
    }
}
