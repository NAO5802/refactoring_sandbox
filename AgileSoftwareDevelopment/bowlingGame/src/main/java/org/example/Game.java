package org.example;

public class Game {
    private int itsScore = 0;

    int score() {
        return itsScore;
    }

    void add(int pins) {
        itsScore += pins;
    }

    int scoreForFrame(int frame) {
        return 0;
    }
}
