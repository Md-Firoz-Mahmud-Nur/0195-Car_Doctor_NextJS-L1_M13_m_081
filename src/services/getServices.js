import axios from "axios";

export const getServices = async () => {
  try {
    const res = await axios.get(`${process.env.BASE_URL}/services/api/getAll`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getServiceDetails = async (id) => {
  const res = await fetch();
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }
  const services = await res.json();
  return services;
};

export const getServicesDetails = async (id) => {
  try {
    const res = await axios.get(`${process.env.BASE_URL}/services/api/${id}`);
    return res.data;
  } catch (error) {
    return {};
  }
};
