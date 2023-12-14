export const getSavedReviewIds = () => {
    const saveReviewIds = localStorage.getItem('bookReviews')
        ? JSON.parse(localStorage.getItem('bookReviews'))
        : [];

    return saveReviewIds;
};

export const saveReviewIds = (reviewIdArr) => {
    if (reviewIdArr.length) {
        localStorage.setItem('bookReviews', JSON.stringify(reviewIdArr));
    } else {
        localStorage.removeItem('bookReviews');
    }
};

export const removeReviewId = (reviewId) => {
    const saveReviewIds = localStorage.getItem('bookReviews')
        ? JSON.parse(localStorage.getItem('bookReviews'))
        : null;

    if (!saveReviewIds) {
        return false;
    }

    const updatedSavedReviewIds = saveReviewIds?.filter((savedReviewId) => savedReviewId !== reviewId);
    localStorage.setItem('bookReviews', JSON.stringify(updatedSavedReviewIds));

    return true;
};
