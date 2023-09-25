import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://etege-api.onrender.com/v1/",
});

export const login = async (data) => {
  try {
    console.log("api call")

    const request = await apiInstance.post('auth/login',data)
    console.log(request.status)

    if (request.status === 200) {
      return request.data;
    }
  } catch (e) {
    console.log(e);
  }

  return [];
};

// export const getVoteCounts = async () => {
//   try {
//     const request = await axios.get(
//       `https://leza-award-backend-api.proudmushroom-13eba283.francecentral.azurecontainerapps.io/vote/api/vote`
//       // options
//     );

//     if (request.status === 200) {
//       return request.data;
//     }
//   } catch (e) {
//     console.log(e);
//   }

//   return [];
// };

// export const getVoteCountByCategory = async (id) => {
//   try {
//     const request = await axios.get(
//       `https://leza-award-backend-api.proudmushroom-13eba283.francecentral.azurecontainerapps.io/vote/api/vote?category_id=${id}`
//       // options
//     );
//     if (request.status === 200) {
//       return request.data;
//     }
//   } catch (e) {
//     console.log(e);
//   }

//   return [];
// };
