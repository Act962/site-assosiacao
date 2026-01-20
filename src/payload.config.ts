import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { pt } from "@payloadcms/translations/languages/pt";
import { it } from "@payloadcms/translations/languages/it";
import { en } from "@payloadcms/translations/languages/en";
import { es } from "@payloadcms/translations/languages/es";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users.ts";
import { Media } from "./collections/Media.ts";
import { News } from "./collections/News/config.ts";
import { Categories } from "./collections/Categories/config.ts";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, News, Categories],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || "",
  }),
  sharp,
  plugins: [],
  i18n: {
    supportedLanguages: { pt, it, en, es },
    fallbackLanguage: "pt",
  },
  localization: {
    locales: [
      {
        code: "pt",
        label: "Português",
      },
      {
        code: "it",
        label: "Italiano",
      },
      {
        code: "en",
        label: "Inglês",
      },
      {
        code: "es",
        label: "Espanhol",
      },
    ],
    defaultLocale: "pt",
    // defaultLocalePublishOption: "all",
    // fallback: true,
  },
});
