import CMS from "netlify-cms-app"

import EventsPreview from "./preview-templates/eventsPreview";

import "../styles/styles.scss";

CMS.registerPreviewTemplate("events", EventsPreview);
