export default {
    setLoading (state, isLoading) {
        state.isLoading = isLoading
    },

    setContinueLoading (state, isContinueLoading) {
        state.isContinueLoading = isContinueLoading
    },

    setCount (state, count) {
        state.count = count
    },

    setCountPerPage (state, countPerPage) {
        state.countPerPage = countPerPage
    },

    setPage (state, page) {
        state.page = page
    },

    updateOperations (state, operations) {
        state.operations = state.operations.concat(operations)
    },
}
