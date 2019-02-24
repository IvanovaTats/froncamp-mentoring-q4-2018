import { loadSources } from './apiClient';
import { publishersUrl, articlesUrl } from './configuration';

const getPublishers = async () => {
  try {
    const promise = await loadSources(publishersUrl);
    //const promise = await urlProxy('publisher');
    const publishers = await promise.json();
    const sources = await publishers.sources;

    if (publishers.status === 'error') {
      throw publishers;
    }
    return sources;
  } catch (e) {
    err.default.raiseAlert('failed to load publishers');
  }
};

const pub = async() =>{
  let sources = [];
  sources=  await getPublishers();
  return sources;
}

export { pub };
