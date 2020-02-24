import axios from 'axios'

export async function getProviderInfo() {
  const response = await axios.get(``);
  return response
}

export async function getSpecialityInfo(specialityID) {
  const response = await axios.get(`${specialityID}`);
  return response
}

export async function getPracticeInfo(practiceID) {
  const response = await axios.get(`${practiceID}`);
  return response
}
