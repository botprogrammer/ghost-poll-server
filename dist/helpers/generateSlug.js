"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSlug = generateSlug;
function generateSlug(title) {
    const slug = title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "") // Remove special characters
        .replace(/\s+/g, "-") // Replace spaces with dashes
        .replace(/-+/g, "-"); // Remove duplicate dashes
    const uniqueId = Math.random().toString(36).substring(2, 6); // Generate short unique ID
    return `${slug}-${uniqueId}`;
}
