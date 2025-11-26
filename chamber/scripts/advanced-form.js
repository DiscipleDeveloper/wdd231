

const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

const thanksDiv = document.querySelector("#adv-form");



thanksDiv.innerHTML = `
<p>Dear <strong>${myInfo.get('first-name')} ${myInfo.get('last-name')}</strong>,</p><br>
<p>We are delighted to have you as a part of our Chamber team. We will be sending updates to <strong>${myInfo.get('email')}</strong> for chamber notifications.</p>
<p>We will also call you personally and send SMS for reminders of speacial meetings to <strong>${myInfo.get('phone-number')}</strong> which is your phone number.</p>
<p>We acknowledge your company named <strong>"${myInfo.get('business-name')}"</strong> as a part of our group.</p>
<p>You have a <strong>${myInfo.get('membership')}</strong> membership. Expect the benefits of your subscription.</p>
<br><p>Sincerely,</p><p>San Mateo Chamber of Commerce Admin</p><p>Form received at <strong>${myInfo.get('timestamp')}</strong></p>`; 