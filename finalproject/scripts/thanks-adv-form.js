const getString = window.location.search;
console.log(getString)

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

const schedName = document.querySelector("#sched-name");
const schedDate = document.querySelector("#sched-date");
const schedTime = document.querySelector("#sched-time");
const schedEmail = document.querySelector("#sched-email");
const schedAge = document.querySelector("#sched-age");
const schedPlatform = document.querySelector("#sched-platform");


schedName.textContent = `${myInfo.get('name')} `;
schedDate.textContent = myInfo.get('date');
schedTime.textContent = myInfo.get('time');
schedEmail.textContent = myInfo.get('email');
schedAge.textContent = myInfo.get('age');
schedPlatform.textContent = myInfo.get('platform');


















const savedValue = localStorage.getItem("platformUse")
const thanksSection = document.querySelector(".thanks");

function dataPlatform(data) {
    if (data === "googlemeet") {
        return `<p>Please Join/Save to this Google Meet Link for the time of our set Schedule:</p>
    <p><span>https://meet.google.com/kec-dqqq-paa</span></p>`
    }
    else if (data === "zoom") {
        return `<p>Please use these information for our zoom class.</p>
            <p>Bright English Speakers is inviting you to a scheduled Zoom <br>

                Topic: Bright English Speakers' Meeting Room<br>
                    Join Zoom Meeting<br>
                        <span>https://us04web.zoom.us/j/6322482326?pwd=VQaObIbDpmB8RdTNkBMhXGWmnBRlw5.1</span><br>

                            Meeting ID: 632 248 2326<br>
                                Passcode: Bcwt3G<br>
                                </p>`
    }
    else {
        return `<p>Bright English Speakers invites you to [Bright English Speakers Meeting Room]<br>
        
        Click the link to join the meeting:<br>
        <span>https://voovmeeting.com/p/7252144781</span><br>
        
        Password: 725-214-4781</p>`
    }
}

function displayPlatform(value) {
    const div = document.createElement("div");
    div.innerHTML = dataPlatform(value);
    thanksSection.append(div);
}

displayPlatform(savedValue)
