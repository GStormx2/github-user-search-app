const months = {
    "01" : "Jan",
    "02" : "Feb",
    "03" : "Mar",
    "04" : "Apr",
    "05" : "May",
    "06" : "Jun",
    "07" : "Jul",
    "08" : "Aug",
    "09" : "Sep",
    "10" : "Oct",
    "11" : "Nov",
    "12" : "Dec",

}

export const user = {
    name: String,
    avatar: String,
    username: String,
    bio: String,
    repos: Number,
    followers: Number,
    following: Number,
    location: String,
    website: String,
    twitter: String,
    organization: [],
    joined_date: String,
    setJoinedDate: function(input) {
        const splitString = input.split('T')[0].split('-');
        const date = `Joined ${splitString[2]} ${months[splitString[1]]} ${splitString[0]}`;
        this.joined_date = date;
        return date;
    }

}