import axios from 'axios';

export async function getImageLogs(imageId) {
    try {
        const result = await axios.get(`/api/v1/logs/${imageId}`);
        return result.data;
    } catch (error) {
        return false;
    }    
}
