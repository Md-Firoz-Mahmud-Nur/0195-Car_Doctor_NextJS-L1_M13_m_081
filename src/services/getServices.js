import axios from "axios";

export const getServices = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/services/api/getAll`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getServiceDetails = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/services/api/${id}`,
    );
    console.log("res", res);
    return res.data;
  } catch (error) {
    console.log("res", error);
    return {};
  }
};
