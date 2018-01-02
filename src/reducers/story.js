import { STORIES_ADD } from '../constants/actionTypes';

const INITIAL_STATE = [];

const storyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORIES_ADD:
      return applyAddStories(state, action);
    default:
      return state;
  }
};

const applyAddStories = (state, action) => action.stories;

export default storyReducer;
