import { schema } from "normalizr";
import EntityType from "./entity-types";

const countries = new schema.Entity(EntityType.countries, undefined, { "idAttribute": "code" });
const experienceLevels = new schema.Entity(EntityType.experienceLevels);
const jobCategories = new schema.Entity(EntityType.experienceLevels);
const jobDurations = new schema.Entity(EntityType.jobDurations);
const projects = new schema.Entity(EntityType.projects);
const contracts = new schema.Entity(EntityType.contracts);
const pendingContracts = new schema.Entity(EntityType.pendingContracts);

export default {
	countries,
	experienceLevels,
	jobCategories,
	jobDurations,
	projects,
	contracts,
	pendingContracts
};
