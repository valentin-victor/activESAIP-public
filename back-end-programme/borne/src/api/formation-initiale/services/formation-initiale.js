'use strict';

/**
 * formation-initiale service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::formation-initiale.formation-initiale');
