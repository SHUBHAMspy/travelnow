// This is actually a class which implements features of your api
class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const location = this.queryStr.location ? {
            address: {
                $regex: this.queryStr.location,
                $options: "i"
            }
        } : {}

        console.log(location);
        console.log(this.query);
        this.query = this.query.find({ ...location })
        console.log(this.query);

        return this;
    }

    filter(){
        const queryCopy = {...this.queryString};
        const ignore = ['location','page'];
        console.log(queryCopy);
        ignore.forEach(el => delete queryCopy[el]);

        this.query= this.query.find(queryCopy);
        return this;

    }

    pagination(roomsPerPage){
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = roomsPerPage * (currentPage - 1);

        this.query = this.query.limit(roomsPerPage).skip(skip);
        return this;
    }
}

export default ApiFeatures;
