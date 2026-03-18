import { existsSync, mkdirSync } from "fs";
import { writeFile, readFile } from "fs/promises";
import { join } from "path";

const UPLOAD_DIR = join(process.cwd(), "uploads");

// Ensure upload directory exists
if (!existsSync(UPLOAD_DIR)) {
  mkdirSync(UPLOAD_DIR, { recursive: true });
}

export function generateFileKey(fileName: string): string {
  return `uploads/${Date.now()}-${fileName.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
}

export async function saveFile(
  fileKey: string,
  buffer: Buffer,
  contentType: string
): Promise<void> {
  const fileName = fileKey.replace("uploads/", "");
  const filePath = join(UPLOAD_DIR, fileName);
  await writeFile(filePath, buffer);
}

export async function getFileFromLocal(
  fileKey: string
): Promise<Buffer | null> {
  const fileName = fileKey.replace("uploads/", "");
  const filePath = join(UPLOAD_DIR, fileName);
  try {
    return await readFile(filePath);
  } catch {
    return null;
  }
}

export function getImageUrl(fileKey: string): string {
  return `/api/images/${encodeURIComponent(fileKey)}`;
}
