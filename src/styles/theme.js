import { generateMedia } from "styled-media-query";

export const customMedia = generateMedia({
    desktop: "1170px",
    tablet: "992px",
    mobile: "768px"
});

export default {
    colors: {
        titleLogo: '#5cb85c',
        titleMenu: '#AAAAAA',
        titleMenuActive: '#000000',
        titleMenuHover: '#4F4F4F',
        titleWhite: '#ffffff',
        errorMessages: '#B30F0F',
        spanSilver: '#bbb',
        paginatorHover: '#DADADA',
        popularTags: '#818a91',
        popularTagsBackground: '#f3f3f3',
        backgroundArticleUser: '#333',
        backgroundArticle: '#ccc',
    }
}