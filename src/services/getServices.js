export const getServices = async () => {
  const res = await fetch(`${process.env.BASE_URL}/services/api/getAll`);
  const services = await res.json();
  return services;
};

export const getServiceDetails = async (id) => {
  const res = await fetch(`${process.env.BASE_URL}/services/api/${id}`);
  const services = await res.json();
  return services;
};
