//Dữ liệu tạm cho đến lúc kết nối với Firebase

export default tempData = [
    {
        id: 1,
        name: "Plan a trip",
        color: "#24A6D9",
        todos: [
            {
                title: "Book a flight",
                completed: false
            },
            {
                title: "Passport check",
                completed: false
            },
            {
                title: "Reverse hotel room",
                completed: true
            },
            {
                title: "Pack luggage",
                completed: false
            }
        ]
    },
    {
        id: 2,
        name: "Errands",
        color: "#8022D9",
        todos: [
            {
                title: "Buy milk",
                completed: true
            },
            {
                title: "Make a video",
                completed: true
            },
            {
                title: "Take dog for a walk",
                completed: true
            }
        ]
    },
    {
        id: 3,
        name: "Birthday party",
        color: "#595BD9",
        todos: [
            {
                title: "Get balloons",
                completed: true
            },
            {
                title: "Send invitations",
                completed: true
            },
            {
                title: "Make dinner reservation",
                completed: false
            }
        ]
    }
];