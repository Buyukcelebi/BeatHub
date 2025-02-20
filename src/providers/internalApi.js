const MUSICAI_API_BASE_URL = 'https://orca-app-ljgnu.ondigitalocean.app';

export default internalApi = {
  search: async (query, countryCode = 'TR') => {
    try {
      const response = await fetch(
        `${MUSICAI_API_BASE_URL}/api/search?query=${encodeURIComponent(query)}&countryCode=${countryCode}&source=youtube`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      console.log('search response', data);
      return data?.results;
    } catch (error) {
      console.error('MusicAI search error:', error);
      throw error;
    }
  },
};

export const fetchCoverList = async (locale = 'EN') => {
  const response = await fetch(`${MUSICAI_API_BASE_URL}/api/cover-list?locale=${locale}`);
  const data = await response?.json();
  return data?.covers || [];
};

export const musicaiApi = async (query) => {
  try {
    const response = await axios.get(`${MUSICAI_API_BASE_URL}/search`, {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error('MusicAI search error:', error);
    throw error;
  }
};

export const createCover = async (modelId, ytId) => {
  try {
    const response = await fetch(
      `${MUSICAI_API_BASE_URL}/api/create-cover/?modelId=${modelId}&ytId=${ytId}`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to create cover');
    }

    return data;
  } catch (error) {
    console.error('Error creating cover:', error);
    throw error;
  }
};

export const getCover = async (coverId) => {
  try {
    const response = await fetch(`${MUSICAI_API_BASE_URL}/api/get-cover/${coverId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cover:', error);
    throw error;
  }
};

export const generateMusic = async (prompt, duration = 10, genre = 'rock') => {
  try {
    const response = await fetch(
      `${MUSICAI_API_BASE_URL}/api/generate-music?prompt=${encodeURIComponent(
        prompt
      )}&duration=${duration}&genre=${encodeURIComponent(genre)}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error generating music:', error);
    throw error;
  }
};

export const checkMusicStatus = async (musicId) => {
  try {
    // Eğer musicId bir nesneyse içinden ID'yi al
    const realMusicId = typeof musicId === 'object' && musicId !== null ? musicId.id : musicId;

    console.log('Final musicId:', realMusicId);

    const response = await fetch(`${MUSICAI_API_BASE_URL}/api/music/${realMusicId}`);
    console.log(`Fetching URL: ${MUSICAI_API_BASE_URL}/api/music/${realMusicId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error checking music status:', error);
    throw error;
  }
};
