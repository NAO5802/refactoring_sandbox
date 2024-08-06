export function printOwing(invoice) {
    function printBanner() {
        console.log("***********************");
        console.log("**** Customer Owes ****");
        console.log("***********************");
    }

    printBanner();

    function calculateOutstanding(invoice) {
        let outstanding = 0;
        for (const o of invoice.orders) {
            outstanding += o.amount;
        }
        return outstanding;
    }

    // 未払い金の計算 （calculate outstanding）
    const outstanding = calculateOutstanding(invoice);

    // 締め日の記録（record due date）
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

    function printDetails() {
        console.log(`name: ${invoice.customer}`);
        console.log(`amount: ${outstanding}`);
        console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
    }

    // 明細の印字 （print details）
    printDetails();

    return `***********************\n**** Customer Owes ****\n***********************\nname: ${invoice.customer}\namount: ${outstanding}\ndue: ${invoice.dueDate.toLocaleDateString()}`;
}

class Clock {
    static today = new Date('2024-06-30');
}
