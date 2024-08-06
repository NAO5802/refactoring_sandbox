export function printOwing(invoice) {
    printBanner();

    const outstanding = calculateOutstanding(invoice);
    invoice.dueDate = recordDueDate();

    printDetails(invoice, outstanding);

    return printResult(invoice, outstanding);

    function printBanner() {
        console.log("***********************");
        console.log("**** Customer Owes ****");
        console.log("***********************");
    }

    function calculateOutstanding(invoice) {
        let outstanding = 0;
        for (const o of invoice.orders) {
            outstanding += o.amount;
        }
        return outstanding;
    }

    function recordDueDate() {
        const today = Clock.today;
        return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    }

    function printDetails(invoice, outstanding) {
        console.log(`name: ${invoice.customer}`);
        console.log(`amount: ${outstanding}`);
        console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
    }

    function printResult(invoice, outstanding) {
        return `***********************\n**** Customer Owes ****\n***********************\nname: ${invoice.customer}\namount: ${outstanding}\ndue: ${invoice.dueDate.toLocaleDateString()}`;
    }
}

class Clock {
    static today = new Date('2024-06-30');
}
