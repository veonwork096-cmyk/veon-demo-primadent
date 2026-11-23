// Real photos of the clinic (downloaded from the client's current site, cropped 4:5 / 3:2 without filters).
import pryima from "../assets/img/doc-pryima.jpg";
import skyrchuk from "../assets/img/doc-skyrchuk.jpg";
import bora from "../assets/img/doc-bora.jpg";
import kostenko from "../assets/img/doc-kostenko.jpg";
import type { ImageMetadata } from "astro";
import type { DoctorId } from "./clinic";

export const portraits: Record<DoctorId, ImageMetadata> = { pryima, skyrchuk, bora, kostenko };
