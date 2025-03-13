package org.example;

public class Game {
    private int itsScore = 0;
    private int itsCurrentFrame = 1;
    private boolean firstThrowInFrame = true;
    private Scorer itsScorer = new Scorer();

    int score() {
        return scoreForFrame(itsCurrentFrame);
    }

    void add(int pins) {
        itsScorer.addThrow(pins);
        itsScore += pins;
        adjustCurrentFrame(pins);
    }

    private void adjustCurrentFrame(int pins) {
        if (lastBallInFrame(pins)){
            advanceFrame();
        } else {
            firstThrowInFrame = false;
        }
    }

    private boolean lastBallInFrame(int pins) {
        return strike(pins) || !firstThrowInFrame;
    }

    private boolean strike(int pins) {
        return (firstThrowInFrame && pins == 10);
    }

    private void advanceFrame() {
        itsCurrentFrame = Math.min(10, itsCurrentFrame + 1);
    }

    int scoreForFrame(int theFrame) {
        return itsScorer.scoreForFrame(theFrame);
    }
}
