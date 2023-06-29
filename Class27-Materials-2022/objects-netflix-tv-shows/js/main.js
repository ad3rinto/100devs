//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShow {
    constructor(title, rating, review, genre) {
        this.title = title
        this.rating = rating
        this.review = review
        this.genre = genre
    }
    printSlogal() {
        console.log("awalokan")
    }
    printTitle() {
        console.log(`${this.title}`)
    }
    printReview() {
        console.log(`${this.review}`)
    }
}


let sha = new NetflixShow("Golden eye", 7, "excellent", "drama")