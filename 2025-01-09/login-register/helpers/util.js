export const validateFields = (data, fields) => {
    for(const field of fields) {
        if(!data[field]) {
            return false;
        }
    }

    return true;
}