export default (state, action) => {
    switch (action.type) {
        case "ASCENDING_DEATHS":
            return {
                ...state,
                countriesData: state.countriesData.sort((a, b) => a["deaths"] - b["deaths"])
            }

        case "DESCENDING_DEATHS":
            return {
                ...state,
                countriesData: state.countriesData.sort((a, b) => b["deaths"] - a["deaths"])
            }

        case "FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                countriesData: action.payload
            }

        case "FETCH_ERROR":
            return {
                ...state,
                loading: true,
                error: "ERORR!"
            }

        default:
            return state;
    }
} 