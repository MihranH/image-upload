import axios from 'axios';

export async function uploadImage(data) {
    try {
        const result = await axios.post('/api/v1/images/upload-image', data);
        return result.data;
    } catch (error) {
        return false;
    }
}

export async function addImage(url, actions) {
    try {
        await axios.post('/api/v1/images/add', { url, actions });
        return true;
    } catch (error) {
        return false;
    }
}

export async function getAllImages() {
    try {
        const result = await axios.get('/api/v1/images');
        return result.data;
    } catch (error) {
        return false;
    }    
}

export async function deleteImgById(id) {
    try {
        await axios.delete(`/api/v1/images/${id}`);
        return true;
    } catch (error) {
        return false;
    } 
}