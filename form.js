function reserveFormSubmit(form) {
    /* receive all form data needed */

    if(!validateYearDoB(form.yearDoB.value)) {
        return false;
    }

    if(!validateMonthDoB(form.monthDoB.value)) {
        return false;
    }

    if(!validateDayDoB(form.dayDoB.value)) {
        return false;
    }

    if(!validatePhoneNum(form.phoneNum.value)) {
        return false;
    }

    if(!validateQty(form.quantity.value)) {
        return false;
    }

    if(!validateAddress(form.address.value)) {
        return false;
    }

    console.log(form.bikeProduct.value);
    console.log(form.bikeColor.value);
    console.log(form.quantity.value);
    console.log(document.getElementById('extraGuarantee').checked);
    console.log(document.getElementById('antiCarat').checked);
    console.log(document.getElementById('memberCard').checked);
    console.log(form.comments.value);
    console.log(form.firstName.value);
    console.log(form.lastName.value);
    console.log(form.emailAddress.value);
    console.log(form.address.value);
    console.log(form.phoneNum.value);
    console.log(form.dayDoB.value);
    console.log(form.monthDoB.value);
    console.log(form.yearDoB.value);
    console.log(form.yearDoB.value);
    console.log(form.gender.value);
    console.log(form.payment.value);

    alert('Thank you for reserving! YBIKE will contact you as soon as possible when your desired motorcycle(s) is ready to shipping.')
    return true;
}

/* validasi 1: Tahun lahir untuk mengecek umur pembeli; pembeli harus lebih dari 17 tahun 
sesuai aturan hukum mengenai mengendarai kendaraan bermotor */

function validateYearDoB(data) {
    var currentYear = 2021
    var ageOfDriving = 17

    var verifyYear = currentYear - ageOfDriving

    if(data > verifyYear) {
        alert('We are sorry. You are not allowed to buy motorcycle due to your age! Please come back if you are already old enough. Thank you for your cooperation.');
        return false;
    }
    else {
        return true;
    }
}

/* validasi 2: Bulan lahir, bulan (yang termasuk number), harus berupa 01 hingga 12.
Di luar itu, validasi akan menyatakan data tersebut tidak valid */

function validateMonthDoB(data) {

    if(data > 12 || data < 1) {
        document.getElementById('errorMonth').style.display = 'block';
        document.getElementById('errorMonth').value = 'Please input month information by number in MM format, from 01 to 12.';
        return false;
    }
    else {
        return true;
    }
}

/* validasi 3: Hari lahir, hari (yang termasuk number), harus berupa 01 hingga 31.
Di luar itu, validasi akan menyatakan data tersebut tidak valid */

function validateDayDoB(data) {
    if(data > 31 || data < 1) {
        document.getElementById('errorDay').style.display = 'block';
        document.getElementById('errorDay').value = 'Please input day information by number in DD format, from 01 to 31.';
        return false;
    }
    else {
        return true;
    }
}

/* validasi 4: Nomor telepon tidak boleh lebih dari 15 angka dan tidak boleh kurang dari 9 angka */

function validatePhoneNum(data) {
    if(data.length > 15 || data.length < 9) {
        document.getElementById('errorPhone').style.display = 'block';
        document.getElementById('errorPhone').value = 'Phone number must be nine to fifteen numbers.';
        return false;
    }
    else {
        return true;
    }
}

/* validasi 5: Nomor telepon tidak boleh lebih dari 15 angka dan tidak boleh kurang dari 9 angka */

function validateQty(data) {
    if(data < 0) {
        document.getElementById('errorMinusQty').style.display = 'block';
        document.getElementById('errorMinusQty').value = 'Quantity are not allowed to be minus.';
        return false;
    }
    else if(data == 0) {
        document.getElementById('errorZeroQty').style.display = 'block';
        document.getElementById('errorZeroQty').value = 'Quantity are not allowed to be zero.';
        return false;
    }
    else {
        return true;
    }
}

/* validasi 6: Address must not be less than 10 characters */

function validateAddress(data) {
    if(data.length < 10) {
        document.getElementById('errorAddress').style.display = 'block';
        document.getElementById('errorAddress').value = 'Address sent are too short. It must be more than ten characters.';
        return false;
    }
    else {
        return true;
    }
}