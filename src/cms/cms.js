import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import CalendarPagePreview from "./preview-templates/CalendarPagePreview";
import EnvisionPagePreview from "./preview-templates/EnvisionPagePreview";
import SocialPagePreview from "./preview-templates/SocialPagePreview";
import ProfessionalPagePreview from "./preview-templates/ProfessionalPagePreview";
import OutreachPagePreview from "./preview-templates/OutreachPagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";
import EventsCompPreview from "./preview-templates/EventsCompPreview";
import SponsorsCompPreview from "./preview-templates/SponsorsCompPreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("home", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("calendar", CalendarPagePreview);
CMS.registerPreviewTemplate("envision", EnvisionPagePreview);
CMS.registerPreviewTemplate("social", SocialPagePreview);
CMS.registerPreviewTemplate("professional", ProfessionalPagePreview);
CMS.registerPreviewTemplate("outreach", OutreachPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
CMS.registerPreviewTemplate("recent-events", EventsCompPreview);
CMS.registerPreviewTemplate("sponsors", SponsorsCompPreview);
