import { STORY_ARCHIVE } from '../constants/actionTypes';

const INITIAL_STATE = [];

const archiveReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORY_ARCHIVE: {
      return applyArchiveStory(state, action);
    }
    default:
      return state;
  }
};

const applyArchiveStory = (state, action) =>
  !state.includes(action.id) ? [...state, action.id] : state;

export default archiveReducer;
