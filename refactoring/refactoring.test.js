import {expect, test, describe} from 'vitest'
import {statement} from "./chapter1"
import createStatementData from "./createStatementData";

describe('chapter1', () => {
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

    test('statement', () => {
        expect(statement(invoice[0], plays)).toBe("Statement for BigCo\n Hamlet: $650.00 (55 seats)\n As You Like It: $580.00 (35 seats)\n Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n")
    })

    test('createStatementData', () => {
        const expected = {
            customer: 'BigCo',
            performances: [
                {
                    playID: 'hamlet',
                    audience: 55,
                    play: {
                        "name": "Hamlet",
                        "type": "tragedy"
                    },
                    amount: 65000,
                    volumeCredits: 25
                },
                {
                    playID: 'as−like',
                    audience: 35,
                    play: {
                        "name": "As You Like It",
                        "type": "comedy"
                    },
                    amount: 58000,
                    volumeCredits: 12
                },
                {
                    playID: 'othello',
                    audience: 40,
                    play: {
                        "name": "Othello",
                        "type": "tragedy"
                    },
                    amount: 50000,
                    volumeCredits: 10
                }
            ],
            totalAmount: 173000,
            totalVolumeCredits: 47
        }
        expect(createStatementData(invoice[0], plays)).toEqual(expected)
    })
})



