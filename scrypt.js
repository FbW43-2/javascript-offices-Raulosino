class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.position = null;
        this.office = null;
        this.company = null;
        this.building = null;
    }

    displayInfo() {
        console.log("\n* - - - - - Employee info - - - - - *");
        console.log("Name: " + this.name)
        console.log("Position: " + this.position)
        if (this.hasCompany()) {
            console.log("Company: " + this.company.name);
        }
        else {
            console.log("Company: no company assigned yet")
        }
        if (this.hasOffice()) {
            console.log("Office: " + this.office.name);
        } else {
            console.log("Office: no office assigned yet");
        }
        if (this.hasBuilding()) {
            console.log("Building: " + this.building.name);
        }
        else {
            console.log("Building: No building assigned yet");
        }
    }

    hasOffice() {
        if (this.office != null) {
            return true;
        }
        return false;
    }

    hasCompany() {
        if (this.company != null) {
            return true;
        }
        return false;
    }

    hasBuilding() {
        if (this.building != null) {
            return true;
        }
        return false;
    }
}

class Programmer extends Person {
    constructor(name, age) {
        super(name, age);
        this.position = "Programmer";
    }
}

class Boss extends Person {
    constructor(name, age) {
        super(name, age);
        this.subordinates = [];
    }
}

class Office {
    constructor(name, ...programmers) {
        if (!programmers || programmers.length < 2 || programmers.length > 6) {
            throw new Error("An office needs at least 2 and maximum 6 programmers.");
        }
        this.name = name;
        this.company = null;
        this.boss = null;
        this.programmers = [];
        this.addProgrammers(...programmers);
        this.building = null;
    }

    assignCompany(company) {
        company.addOffice(this);
    }

    dissociateCompany() {
        if (!this.hasCompany()) {
            console.log("\nError: the office " + this.name + " does not have a company assign to it.");
            return;
        }
        this.company.dissociateOffice(this);
    }

    assignBoss(boss) {
        if (boss.hasOffice) {
            throw new Error("The boss " + boss.name + " already has an office assign " + boss.office);
        }
        this.Boss = boss;
    }

    addProgrammers(...programmers) {
        if (this.programmers.length + programmers.length > 6) {
            throw new Error("You can't add that many programmers, space left in office: " + this.programmers.length - 6);
        }
        if (this.spanLimitReached()) {
            throw new Error("This office do not have space left for new programmers.");
        }
        for (let i = 0; i < programmers.length; i++) {
            if (programmers[i].hasOffice()) {
                console.log("\nERROR: The programmer " + programmers[i].name + " has not been added, it already belongs to the office: " + programmers[i].office.name)
            } else {
                programmers[i].company = this.company;
                programmers[i].building = this.building;
                programmers[i].office = this;
                this.programmers.push(programmers[i]);
            }
        }
    }

    removeProgrammer(programmer) {
        if (programmer.office != this) {
            throw new Error("The programmer " + programmer.name + " does not belong to this company");
        }
        for (var i = 0; i < this.programmers.length; i++) {
            if (this.programmers[i] == programmer) {
                this.programmers.splice(i, 1);
            }
        }
        programmer.company = null;
        programmer.office = null;
        programmer.building = null;
    }

    displayInfo() {
        console.log("\n* - - - - - Office info - - - - - *");
        console.log("Office name: " + this.name);
        if (this.hasCompany()) {
            console.log("Company: " + this.company.name);
        } else {
            console.log("Company: Not assigned yet");
        }
        if (this.hasBoss()) {
            console.log("Boss: " + this.boss.name)
        } else {
            console.log("Office boss: Not assigned yet.")
        }
        let array = [];
        for (let x of this.programmers) {
            array.push(x.name);
        }
        console.log("Programmers: " + array);
        if (this.hasBuilding()) {
            console.log("Office building: " + this.building.name);
        } else {
            console.log("Office building: Not assigned yet.")
        }
    }

    hasCompany() {
        if (this.company != null) {
            return true;
        }
        return false;
    }

    hasBoss() {
        if (this.boss != null) {
            return true;
        }
        return false;
    }

    hasBuilding() {
        if (this.building != null) {
            return true;
        }
        return false;
    }

    spanLimitReached() {
        if (this.programmers.length >= 6) {
            return true;
        }
        return false;
    }
}

class Company {

    constructor(name) {
        this.name = name;
        this.building = null;
        this.offices = [];
    }

    addOffice(office) {
        if (office.hasCompany()) {
            throw new Error("The office " + office.name + " already has a company assigned: " + office.company)
        }
        if (office.hasBoss()) {
            office.boss.company = this.name;
        }
        for (let i = 0; i < office.programmers.length; i++) {
            office.programmers[i].company = this;
            office.programmers[i].office = office;
        }
        this.offices.push(office);
        office.company = this;
    }

    dissociateOffice(office) {
        for (var i = 0; i < this.offices.length; i++) {
            if (this.offices[i] === office) {
                for (let x = 0; x < office.programmers.length; x++) {
                    office.programmers[i].company = null;
                }
                if (office.hasBoss()) {
                    office.boss.company = null;
                }
                office.company = null;
                this.offices.splice(i, 1);
                i--;
            }
        }
    }

    moveProgrammer(origin, target, programmer) {
        if (origin.company != this || target.company != this) {
            throw new Error("You can't move a programmer that belongs to a different company");
        }
    }

    removeProgrammer(programmer) {
        if (programmer.company != this) {
            throw new Error("The programmer " + programmer.name + " does not belong to this company");
        }
        programmer.office.removeProgrammer(programmer);
    }


}


let programmer1 = new Programmer("Raul", 26);
let programmer2 = new Programmer("Mariana", 30);
let programmer3 = new Programmer("Heriberto", 40);
let programmer4 = new Programmer("Abdullah", 30);
let programmer5 = new Programmer("Florin", 30);
let programmer6 = new Programmer("Kinjal", 25);
let programmer7 = new Programmer("Sara", 20);
let boss1 = new Boss("Marko", 30);

programmer1.displayInfo();
let officeA = new Office("Office A", programmer1, programmer2);
programmer1.displayInfo();
officeA.displayInfo();

let DCI = new Company("DCI");
DCI.addOffice(officeA);

officeA.addProgrammers(programmer3);
programmer3.displayInfo();

