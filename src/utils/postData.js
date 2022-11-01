import axios from "axios";

async function postData(url = "", data = {}) {
  const response = await axios.post(url, data);

  console.log({ response });

  return response.data;
}

export default postData;
