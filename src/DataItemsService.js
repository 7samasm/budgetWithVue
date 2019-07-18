import  axios from 'axios'
import concat from 'lodash/fp/concat'

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

	static getDataItemsByType(type){
		return new Promise(async (resolve,reject) => {
			try {
				const res = await axios.get(`${url}dataItems/${type}`)
				const data = res.data;
				resolve(data)
			} catch(e) {
				reject(e.message)
			}
		})
	}
	static getTenRecordsForEachType(){
		return new Promise(async (resolve,reject) => {
			let incomes,expences,dataItems = []
			try {
	            incomes   =  await DataItemsService.getDataItemsByType('inc')
	            expences  =  await DataItemsService.getDataItemsByType('exp')
	            dataItems = concat(incomes,expences)
	            resolve(dataItems)
			} catch(e) {
				reject(e.message)
			}
		})
	}
}