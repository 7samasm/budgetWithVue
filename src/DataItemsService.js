import  axios from 'axios'

const url = 'http://localhost:2020/api/'

export default class DataItemsService {

	static getDataItems() {
		return new Promise(async (resolve,reject) => {
			try
			{
				const res  = await axios.get(`${url}dataItems`)
				const data = res.data;
				resolve(data)
			} catch(err){
				reject(err.message)
			}
		})
	}

	static insertItem(dataItem){
		return axios.post(`${url}dataItem`,dataItem)
	}

	static removeItem(id){
		return axios.delete(`${url}dataItem/${id}`);
	}
}