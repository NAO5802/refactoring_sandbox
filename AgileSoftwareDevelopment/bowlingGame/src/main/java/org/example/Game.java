package org.example;

public class Game {
    private int itsScore = 0;
    private int itsCurrentFrame = 1;
    private boolean firstThrowInFrame = true;
    private Scorer itsScorer = new Scorer();

    int score() {
        return scoreForFrame(getCurrentFrame() - 1);
    }

    void add(int pins) {
        itsScorer.addThrow(pins);
        itsScore += pins;
        adjustCurrentFrame(pins);
    }

    private void adjustCurrentFrame(int pins) {
        if (firstThrowInFrame){
            if(!adjustFrameForStrike(pins)){
                firstThrowInFrame = false;
            }
        } else {
            firstThrowInFrame = true;
            advanceFrame();
        }
    }

    private boolean adjustFrameForStrike(int pins) {
        if (pins == 10) { // ストライク
            advanceFrame();
            return true;
        }
        return false;
    }

    private void advanceFrame() {
        itsCurrentFrame = Math.min(11, itsCurrentFrame + 1);
    }

    int scoreForFrame(int theFrame) {
        return itsScorer.scoreForFrame(theFrame);
    }

    int getCurrentFrame() {
        return itsCurrentFrame;
    }
}
