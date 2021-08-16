// document.getElementById('login_submit').addEventListener('click', function () {
//     const email = document.getElementById('email').value;
//     const pass = document.getElementById('pass').value;
//     window.location.href = 'banking.html';
// });


document.getElementById('deposit-button').addEventListener('click', function () {

    let deposit_amount = document.getElementById('deposit-amount').value;

    deposit_amount = parseInt(deposit_amount);

    document.getElementById('deposit-amount').innerText = '';

    document.getElementById('deposit-show').innerText = deposit_amount;

    let deposit_balance = document.getElementById('balance-show').innerText;

    deposit_balance = parseInt(deposit_balance);

    deposit_balance += deposit_amount;

    document.getElementById('balance-show').innerText = deposit_balance;

});

