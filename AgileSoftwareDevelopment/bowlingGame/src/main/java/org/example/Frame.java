package org.example;

public class Frame {

    private int itsScore = 0;

    int getScore(){
        return itsScore;
    }

    void add(int pins) {
        itsScore += pins;
    }
}
