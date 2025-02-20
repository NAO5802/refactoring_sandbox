package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestFrame {

    @Test
    void testScoreNoThrows() {
        Frame frame = new Frame();
        assertEquals(0, frame.getScore());
    }
}
