const initState = () => {
    return {
        stateTest: 'isTest',
    }
}

export const state = () => initState();

export const getters = {
    initState: ({ initState }) => initState,
};

export const actions = {
    // actions
}

export const mutations = {
    // mutations
}