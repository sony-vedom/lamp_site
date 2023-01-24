export const maxLengthCreator = (maxLength) => {
    return (value) => {
        if (value && value.length > maxLength) return `Максимальная длина –\t ${maxLength} символов`;
        return undefined;
    }
}