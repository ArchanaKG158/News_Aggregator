import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: { "X-Api-Key": process.env.REACT_APP_NEWSAPI_KEY },
});

const guardianApi = axios.create({
  baseURL: "https://content.guardianapis.com",
  headers: { "X-Api-Key": process.env.REACT_APP_GUARDIAN_KEY },
});

const newsApiOrg = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: { "X-Api-Key": process.env.REACT_APP_NEWSAPIORG_KEY },
});

export const newsArticles = async (query, source, category, country) => {
  let response;
  try {
    switch (source) {
      case "newsapi":
        response = await newsApi.get("/everything", {
          params: { q: query, category },
        });
        break;
      case "guardian":
        response = await guardianApi.get("/search", {
          params: { q: query || "news", section: category },
        });
        break;
      case "newsapiorg":
        response = await newsApiOrg.get("/top-headlines", {
          params: { q: query, country, category },
        });
        break;
      default:
        response = { data: { articles: [] } };
    }
    //     console.log(response.data.articles, "Fetched Articles");
    //     return response.data.articles;
    //   } catch (error) {
    //     console.error(
    //       "Error fetching articles:",
    //       error.response ? error.response.data : error.message
    //     );
    //     return [];
    //   }
    // };

    // entire response
    console.log(response.data, "Full API Response");

    // if articles exist
    if (response.data && response.data.articles) {
      console.log(response.data.articles, "Fetched Articles");
      return response.data.articles;
    } else {
      console.warn("No articles found in the API response");
      return [];
    }
  } catch (error) {
    console.error(
      "Error fetching articles:",
      error.response ? error.response.data : error.message
    );
    return [];
  }
};
