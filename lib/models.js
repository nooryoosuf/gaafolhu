import models from '../data/models.json';

export function getAllModels() {
  return models;
}

export function getModelBySlug(slug) {
  return models.find((m) => m.slug === slug);
}

export function getCategories() {
  return ['All', ...new Set(models.map((m) => m.category))];
}
