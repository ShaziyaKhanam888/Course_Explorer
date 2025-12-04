export function getProgress() {
  return JSON.parse(localStorage.getItem("progress")) || {};
}

export function saveProgress(progress) {
  localStorage.setItem("progress", JSON.stringify(progress));
}

export function toggleSubtopicProgress(topicId, subtopicId) {
  const progress = getProgress();

  if (!progress[topicId]) progress[topicId] = {};

  progress[topicId][subtopicId] = !progress[topicId][subtopicId];

  saveProgress(progress);
  return progress;
}
