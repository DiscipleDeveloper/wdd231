const spotlight = document.querySelector(".spotlight");

async function getMemberData() {
    const response = await fetch("data/members.json");
    const data = await response.json();

    let filteredMembers = data.members.filter(member => [2, 3].includes(member.membershipLvl));
    let spotlightMembers = filteredMembers.sort(() => Math.random() - 0.5).slice(0, 2);   

    console.table(spotlightMembers);
    displayMember(spotlightMembers)

}

getMemberData()

function displayMember(members) {
    members.forEach(member => {
        let memberCard = document.createElement("section");

        let name = document.createElement("h3");
        name.textContent = member.name;

        let phoneNo = document.createElement("p");
        phoneNo.textContent = member.phone;

        let address = document.createElement("p");
        address.textContent = `Address: ${member.address}`;

        let website = document.createElement("p");
        website.innerHTML = `<a href="${member.url}">Click to Visit ${member.name} Website</a>`;

        let logo = document.createElement("img");
        logo.setAttribute("src", member.brandLogo);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "70");
        logo.setAttribute("height", "70");
        logo.setAttribute("alt", "Logo of a member company");

        let mType;
        if (member.membershipLvl === 1) {
            mType = `Standard`;
        }

        else if (member.membershipLvl === 2) {
            mType = `Silver`;
        }

        else {
            mType = `Gold`;
        }
        let membership = document.createElement("p");
        membership.textContent = `Membership: ${mType}`;


        memberCard.appendChild(logo);
        memberCard.appendChild(name);
        memberCard.appendChild(phoneNo);
        memberCard.appendChild(address);
        memberCard.appendChild(website);
        memberCard.appendChild(membership);

        spotlight.appendChild(memberCard);
    })
}
