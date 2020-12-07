export default {
    loadOperation ({ state, commit, dispatch, getters }) {
        dispatch("loadWrapper", async () => {
            let {
                count,
                countPerPage,
                page,
                result,
            } = await getters.makeFetch(state.AUTH_TOKEN)

            commit("setCount", count)
            commit("setCountPerPage", countPerPage)
            commit("setPage", page)
            commit("updateOperations", result)

            if (result.length === 0) {
                commit("setContinueLoading", false)
            }
        })
    },

    async loadWrapper ({ commit }, loadFunction) {
        commit("setLoading", true)
        await loadFunction()
        commit("setLoading", false)
    },
}
