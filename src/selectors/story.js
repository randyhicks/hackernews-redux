const isNotArchived = archiveIds => story =>
  !archiveIds.includes(story.objectID);

const getReadableStories = ({ storyState, archiveState }) =>
  storyState.filter(isNotArchived(archiveState));

export { getReadableStories };
