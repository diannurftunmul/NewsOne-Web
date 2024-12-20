import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    savedNews: JSON.parse(localStorage.getItem('savedNews')) || [],
};

const savedSlice = createSlice({
    name: 'saved',
    initialState,
    reducers: {
        saveNews: (state, action) => {
            const news = action.payload;

            if (!state.savedNews.some((item) => item.web_url === news.web_url)) {
                state.savedNews.push(news);
                localStorage.setItem('savedNews', JSON.stringify(state.savedNews));
            }
        },
        unsaveNews: (state, action) => {
            // Hapus berita dari savedNews
            state.savedNews = state.savedNews.filter(
                (news) => news.web_url !== action.payload.web_url
            );
            localStorage.setItem('savedNews', JSON.stringify(state.savedNews));
        },
    },
});

export const { saveNews, unsaveNews } = savedSlice.actions;
export default savedSlice.reducer;
