import Axios from 'axios'

const RESOURCE_NAME = 'http://api-projectmanagement.deploy:8080/project';

export default{
	getAll()
	{
		return Axios.get(RESOURCE_NAME);
	},

	find(id)
	{
		return Axios.get(`${RESOURCE_NAME}/${id}`);
	},

	store(request)
	{
		return Axios.post(`${RESOURCE_NAME}/store`,request);
	},

	update(id,request)
	{
		return Axios.patch(`${RESOURCE_NAME}/update/${id}`,request);
	},

	delete(id)
	{
		return Axios.delete(`${RESOURCE_NAME}/delete/${id}`);
	}
}