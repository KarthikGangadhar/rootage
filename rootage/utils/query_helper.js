'use strict';

const GetFilterQuery = (queryParams) => {
    let query = {};
    let yearsFilter = {};
    let categoryFilter = {};
    return new Promise((resolve) => {
        if (queryParams && Object.keys(queryParams).length > 0) {
            if (queryParams.year && queryParams.category) {
                let years = queryParams.year.split(';');
                if (years && years.length > 0) {
                    let yearsQuery = years.reduce((filetered, year) => {
                        return [...filetered, {
                            'year': year
                        }];
                    }, []);
                    yearsFilter = {
                        '$or': yearsQuery
                    };
                }

                let categories = queryParams.category.split(';');
                if (categories && categories.length > 0) {
                    let categoryQuery = categories.reduce((filetered, category) => {
                        return [...filetered, {
                            'category': category
                        }];
                    }, []);
                    categoryFilter = {
                        '$or': categoryQuery
                    };
                }

                query = {
                    '$and': [yearsFilter, categoryFilter]
                };
                resolve(query);
            } else if (queryParams.year && !queryParams.category) {
                let years = queryParams.year.split(';');
                if (years && years.length > 0) {
                    let yearsQuery = years.reduce((filetered, year) => {
                        return [...filetered, {
                            'year': year
                        }];
                    }, []);
                    yearsFilter = {
                        '$or': yearsQuery
                    };
                }
                resolve(yearsFilter);
            } else if (!queryParams.year && queryParams.category) {
                let categories = queryParams.category.split(';');
                if (categories && categories.length > 0) {
                    let categoryQuery = categories.reduce((filetered, category) => {
                        return [...filetered, {
                            'category': category
                        }];
                    }, []);
                    categoryFilter = {
                        '$or': categoryQuery
                    };
                }
                resolve(categoryFilter);
            } else {
                resolve({});
            }
        } else {
            resolve({});
        }
    }).catch(err => {
        console.error(err);
    });
};

module.exports = {
    getFilterQuery: GetFilterQuery
};
