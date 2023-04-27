import axios from "axios";

export const getAsyncData = async (
  urlType: "forecast" | "search",
  params: string
) => {
  try {
    const response = await axios.post(
      `http://api.weatherapi.com/v1/${urlType}.json?key=cbbd9779f73640bf97f65834232704&${params}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
