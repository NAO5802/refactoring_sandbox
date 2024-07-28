import { expect, test } from 'vitest'
import {statement, sum} from "./chapter1"

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('statement', () => {
    const invoice = [
        {
            "customer": "BigCo",
            "performances": [
                {
                    "playID": "hamlet",
                    "audience": 55
                },
                {
                    "playID": "as−like",
                    "audience": 35
                },
                {
                    "playID": "othello",
                    "audience": 40
                }
            ]
        }
    ]
    const plays = {
        "hamlet": {
            "name": "Hamlet",
            "type": "tragedy"
        },
        "as−like": {
            "name": "As You Like It",
            "type": "comedy"
        },
        "othello": {
            "name": "Othello",
            "type": "tragedy"
        }
    }
    expect(statement(invoice[0], plays)).toBe("Statement for BigCo\n Hamlet: $650.00 (55 seats)\n As You Like It: $580.00 (35 seats)\n Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n")
})



