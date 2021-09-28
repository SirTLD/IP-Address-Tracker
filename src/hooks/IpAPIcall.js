export const userIpSearch = async (userQuery) => {
  const URL_PATH = `
      https://geo.ipify.org/api/v1?apiKey=at_n7KZsfggQnIAEce406OJbCzW488XO&ipAddress=${userQuery}`;

  try {
    const { data } = await fetch(URL_PATH);

    return data;
  } catch (error) {
    throw error;
  }
};
