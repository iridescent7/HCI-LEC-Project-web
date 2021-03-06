var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

function randGen() {
    return Math.floor(Math.random() * 5);
}

function sentenceGen() {
    var rand1 = Math.floor(Math.random() * 10);
    var rand2 = Math.floor(Math.random() * 10);
    var rand3 = Math.floor(Math.random() * 10);
    var rand4 = Math.floor(Math.random() * 10);
    var rand5 = Math.floor(Math.random() * 10);
    var rand6 = Math.floor(Math.random() * 10);
    var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";

    return content;
};

var firstName = ["Alpha", "Beta", "Delta", "Gamma", "Epsilon", "Code", "Tech"];
var lastName = ["Company"];

function nameGen() {
    var len1 = firstName.length;
    var len2 = lastName.length;
    var rand1 = Math.floor(Math.random() * len1);
    var rand2 = Math.floor(Math.random() * len2);

    return firstName[rand1] + " " + lastName[rand2];
}

var repList = ["Tokyo, Japan","Seoul, South Korea","Bangkok, Thailand","Mumbai, India","Singapore","Jakarta, Indonesia"];
function repGen() {
    var len1 = repList.length;
    var rand1 = Math.floor(Math.random() * len1);
    return repList[rand1];
}

var jobList = ["Back End Developer","Front End Developer","Project Team Leader","Database Administrator","System Analyst","Mobile Programmer", "Game Developer"];
function jobGen() {
    var len1 = jobList.length;
    var rand1 = Math.floor(Math.random() * len1);
    return jobList[rand1];
}

var jobCount = 0;
var curr = 0;


function printCount() {
    $(".result-count").html("<b>Showing <i>" + curr + "</i> out of <i>" + teamCount + "</i> teams.</b>");
}

$(document).ready(function () {
    jobCount = Math.floor(Math.random() * 80) + 25;

    for(i = 0 ; i < jobCount; i++){
        
        entry = `
        <tr>
            <td class="jobPos">` + jobGen() + `</td>
            <td>` + nameGen() + `</td>
            <td>` + repGen() + `</td>
            <td>` + sentenceGen() + `</td>
            <td><Button class="btn btn-common">Apply</Button></td>
        </tr>`
        $("table tbody").append(entry);
    }
    curr = jobCount;
    printCount();
});


$("#searchTable").keyup(function() {
    var value = this.value.toLowerCase();
    curr = 0;
    $("table").find("tr").each(function(index) {
        if (!index) return;
        var name = $(this).find("td.jobPos").text().toLowerCase();
        var cond = name.indexOf(value) !== -1
        $(this).toggle(cond);
        if(cond) curr++;
    });
    printCount();
});