package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestFrame {

    @Test
    void testScoreNoThrows() {
        Frame frame = new Frame();
        assertEquals(0, frame.getScore());
    }

    @Test
    void testAddOneThrow() {
        Frame frame = new Frame();
        frame.add(5);
        assertEquals(5, frame.getScore());
    }
}
