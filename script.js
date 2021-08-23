// document.getElementById('login_submit').addEventListener('click', function () {
//     const email = document.getElementById('email').value;
//     const pass = document.getElementById('pass').value;
//     window.location.href = 'banking.html';
// });


function balance_calc(input_id, show, balance_show) {

    let amount = document.getElementById(input_id).value;


    console.log(amount);

    console.log(typeof amount);

    if (amount < 0 || amount == NaN || amount == 'string') {
        alert('enter a positive amount');
        document.getElementById(input_id).value = '';
        return;
    }
    amount = parseInt(amount);

    document.getElementById(input_id).value = '';

    let screen_show = document.getElementById(show).innerText;

    screen_show = parseInt(screen_show);

    screen_show += amount;

    document.getElementById(show).innerText = screen_show;

    let balance = document.getElementById(balance_show).innerText;

    balance = parseInt(balance);

    if (input_id == 'deposit-amount') {
        balance += amount;
    } else {
        balance -= amount;
    }

    document.getElementById(balance_show).innerText = balance;

}
document.getElementById('deposit-button').addEventListener('click', function () {

    balance_calc('deposit-amount', 'deposit-show', 'balance-show');

});

document.getElementById('withdraw-button').addEventListener('click', function () {

    balance_calc('withdraw-amount', 'withdraw-show', 'balance-show');

});

