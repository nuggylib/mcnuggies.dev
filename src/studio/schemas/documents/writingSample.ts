import { richTextFieldConfig, summaryRichTextFieldConfig } from "../../shared";

export default {
  name: `writingSample`,
  title: `Writing Sample`,
  type: `document`,
  fields: [
    {
      name: `title`,
      title: `Title`,
      type: `string`,
      validation: (Rule) => Rule.required(),
    },
    {
      name: `tag`,
      title: `Tag`,
      type: `string`,
      validation: (Rule) => Rule.required(),
    },
    {
      name: `description`,
      validation: (Rule) => Rule.required(),
      title: `Description`,
      type: `array`,
      of: [
        {
          title: `Block`,
          type: `block`,
          styles: [{ title: `Normal`, value: `normal` }],
          lists: [],
        },
      ],
    },
    {
      name: `url`,
      title: `URL`,
      type: `string`,
      validation: (Rule) => Rule.required(),
    },
    // A creator does not have to have a writingSample, but a writingSample MUST be
    // linked to a creator.
    {
      name: `creator`,
      title: `Creator`,
      type: `reference`,
      to: [{ type: `creator` }],
      validation: (Rule) => Rule.required(),
    },
    // A writingSample may or may not be linked to an employer
    {
      name: `employer`,
      title: `Company`,
      type: `reference`,
      to: [{ type: `employer` }],
    },
  ],
};
