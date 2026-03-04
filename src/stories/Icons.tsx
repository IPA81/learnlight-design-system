import React from 'react';

// Figma asset URLs (valid for 7 days from generation)
const assets: Record<string, string> = {
  spinner: 'https://www.figma.com/api/mcp/asset/7f5fc681-9312-4d25-92ca-b3cc884fb680',
  linkedin: 'https://www.figma.com/api/mcp/asset/033fd635-a61e-4d8c-89ea-2d3b62e2ccbb',
  graduationCap: 'https://www.figma.com/api/mcp/asset/fad37c64-f0f4-4efd-9bf4-555df981124e',
  cameraOff: 'https://www.figma.com/api/mcp/asset/65c838dd-f3e6-42ba-b8e0-68e466a189d0',
  video: 'https://www.figma.com/api/mcp/asset/de17a720-0080-41ce-97f2-8cdc0c1e7ef7',
  cameraOnSolid: 'https://www.figma.com/api/mcp/asset/82232d23-7d75-485d-85e0-9aaf70cdc084',
  endConversation: 'https://www.figma.com/api/mcp/asset/2e0d649d-2a4c-434b-8f58-adb6d1dcae4b',
  endConversationSolid: 'https://www.figma.com/api/mcp/asset/0b9c01bd-f01e-4502-b418-f9c148cb29c6',
  volumeSlash: 'https://www.figma.com/api/mcp/asset/69471096-a31f-4185-9ad7-76f85945d690',
  volume: 'https://www.figma.com/api/mcp/asset/82097d7e-9595-4988-addd-afb474a6e755',
  volumeSolid: 'https://www.figma.com/api/mcp/asset/ce226bee-7b81-43f9-aef2-1f9acc2d9818',
  subtitlesSlash: 'https://www.figma.com/api/mcp/asset/df4375af-27db-418b-8830-7873281ab78f',
  subtitles: 'https://www.figma.com/api/mcp/asset/ab07fc38-6faf-4f0e-8e7e-9b5da2f0c65e',
  subtitlesSolid: 'https://www.figma.com/api/mcp/asset/c3ac5631-3a04-4b66-8129-95f27b2b8025',
  microphoneSlash: 'https://www.figma.com/api/mcp/asset/4f120ce6-3060-4e6c-aeea-8f0687b04a9e',
  microphone: 'https://www.figma.com/api/mcp/asset/ad35bd31-f71e-4ad9-94b5-00b46f9088b8',
  microphoneSolid: 'https://www.figma.com/api/mcp/asset/a2494d66-7483-40c4-addf-449125b81465',
  arrowTrendDown: 'https://www.figma.com/api/mcp/asset/fa10a9f2-006f-4176-9b10-4b8f93508408',
  arrowUp: 'https://www.figma.com/api/mcp/asset/fea8d527-be00-40b3-963a-be7f50c3d7d5',
  arrowDown: 'https://www.figma.com/api/mcp/asset/6f93f88a-6cbb-4ab3-98c2-c1813fecdfa7',
  arrowLeft: 'https://www.figma.com/api/mcp/asset/89079a2f-f21a-4e56-9d03-2e33e4d195db',
  arrowRight: 'https://www.figma.com/api/mcp/asset/6c106e65-7ac0-4193-98f1-92d44816513b',
  logout: 'https://www.figma.com/api/mcp/asset/e41d3199-2fc7-40a4-b318-087a1df1f227',
  sortDefault: 'https://www.figma.com/api/mcp/asset/b33babb2-34d6-468c-aa36-a7141efbfe49',
  shuffle: 'https://www.figma.com/api/mcp/asset/3dd16609-60e1-4e73-96dd-45e62e139053',
  exchange: 'https://www.figma.com/api/mcp/asset/cdc885d0-8e48-4bab-b892-27c5d1e3a421',
  chevronDouble: 'https://www.figma.com/api/mcp/asset/317d8f80-11e2-4bf5-aaaa-d2fd25d94b9b',
  sortDesc: 'https://www.figma.com/api/mcp/asset/601122e6-99d3-4853-81a3-5f812a3d61e7',
  sortAsc: 'https://www.figma.com/api/mcp/asset/1520684e-d56e-4572-a6b9-96752510d28f',
  caretUp: 'https://www.figma.com/api/mcp/asset/9a09e330-47ec-4b3f-a9e8-742f746aac37',
  caretRight: 'https://www.figma.com/api/mcp/asset/55e463b7-3c60-45ed-a827-8583da1c85ea',
  caretDown: 'https://www.figma.com/api/mcp/asset/00005d3c-c18a-4ffa-818a-b1a5cb9e4ed4',
  chevronRight: 'https://www.figma.com/api/mcp/asset/2b7c4f43-6c86-4fc3-aca7-f8a71fe55bcf',
  chevronLeft: 'https://www.figma.com/api/mcp/asset/9a55a78f-6f6a-4985-aa6b-d37cabbe1b90',
  chevronUp: 'https://www.figma.com/api/mcp/asset/5da0b70a-c4c8-47db-885d-8e1820c2dfab',
  chevronDown: 'https://www.figma.com/api/mcp/asset/d18cfa55-ce5a-401b-beee-6dd693401663',
  arrowRightToLine: 'https://www.figma.com/api/mcp/asset/5eda8d26-f7bd-4525-8686-9024859dd322',
  arrowLeftToLine: 'https://www.figma.com/api/mcp/asset/4df4de28-230a-458e-8b7d-3fbd5ffd65f8',
  arrowDownArrowUp: 'https://www.figma.com/api/mcp/asset/ce0cbe28-421c-4873-af91-66de05b58b82',
  expand: 'https://www.figma.com/api/mcp/asset/599b5b10-3635-4f44-827b-db3aeae3538b',
  tutorial: 'https://www.figma.com/api/mcp/asset/0eee20aa-8a49-4578-8f88-206a4a567669',
  fullScreen: 'https://www.figma.com/api/mcp/asset/71c5a53b-0e96-4ad1-bd87-4181aee4a545',
  all: 'https://www.figma.com/api/mcp/asset/6ada2e14-4513-4858-b147-fb91594d1100',
  filters: 'https://www.figma.com/api/mcp/asset/1c49ef3c-b291-49a6-bacb-0a08220d6cde',
  vocabulary: 'https://www.figma.com/api/mcp/asset/204f5aa0-b4b4-46f9-b924-3eb24b3f9f93',
  blockQuestion: 'https://www.figma.com/api/mcp/asset/61aea261-8c4f-4d72-a82c-5131d55129e5',
  streak: 'https://www.figma.com/api/mcp/asset/4dbba1c3-fc12-4fe8-82af-40462c831f6b',
  certificate: 'https://www.figma.com/api/mcp/asset/5d102644-3185-4171-88bd-bb914cc7f9a9',
  mobile: 'https://www.figma.com/api/mcp/asset/5986bebf-c226-4550-8767-3055d8c721a8',
  globe: 'https://www.figma.com/api/mcp/asset/523e3b0c-6f5d-436a-8935-ab478b158d35',
  videoPip: 'https://www.figma.com/api/mcp/asset/bfd95412-0d90-465b-91db-318811b74b64',
  sideBySide: 'https://www.figma.com/api/mcp/asset/fce7f9d0-7a8e-4cb3-ac35-7273a26feff6',
  skip: 'https://www.figma.com/api/mcp/asset/0ffcf87e-a416-40ac-b38d-8044c8f495ed',
  ccFilled: 'https://www.figma.com/api/mcp/asset/332f1d72-a97e-40ec-bf03-5bf55ab9f427',
  cc: 'https://www.figma.com/api/mcp/asset/b07aa0c2-1f83-4639-a27a-debf37144781',
  health: 'https://www.figma.com/api/mcp/asset/0e6f1a68-6769-4f81-a93d-357c0aec4f51',
  business: 'https://www.figma.com/api/mcp/asset/c9cb2e48-5837-486c-9697-9e589d2202bb',
  travel: 'https://www.figma.com/api/mcp/asset/093497e7-e2c1-4964-9776-1757d04a7746',
  aiIndicator: 'https://www.figma.com/api/mcp/asset/965ff7b6-935c-4126-b1fa-8c091d9935d0',
  link: 'https://www.figma.com/api/mcp/asset/0e8c4a3d-bc7a-485a-bc98-089223fea0f8',
  settings: 'https://www.figma.com/api/mcp/asset/430ce501-f264-4d7c-b0bd-e94c634498c4',
  fileArrowDown: 'https://www.figma.com/api/mcp/asset/06a4a0bd-7b23-479a-90d9-ab7338412633',
  slidersSimple: 'https://www.figma.com/api/mcp/asset/1373d61a-3370-4ecc-94ba-11829e058fa1',
  gripVertical: 'https://www.figma.com/api/mcp/asset/8f12fd29-8dc0-484d-ad29-26cb5784ffa7',
  barsFilter: 'https://www.figma.com/api/mcp/asset/4b10d97e-3773-43ec-8a5b-2e3cbbf63737',
  layerGroup: 'https://www.figma.com/api/mcp/asset/17170ec5-9f0d-4169-9681-3e94f2d55b05',
  columns: 'https://www.figma.com/api/mcp/asset/2115f309-1000-4583-9c39-5ef03e167a8d',
  tableList: 'https://www.figma.com/api/mcp/asset/560cfb56-47a7-4428-9727-60bcc59cfcf8',
  houseRegularFull: 'https://www.figma.com/api/mcp/asset/fdbc307a-2414-45d0-a11e-71cbe7e79e75',
  scheduled: 'https://www.figma.com/api/mcp/asset/e0200918-bc98-4718-9e64-7467762049a6',
  emoji: 'https://www.figma.com/api/mcp/asset/b7d7f151-20d3-49fa-a316-5eab3a89ab60',
  report: 'https://www.figma.com/api/mcp/asset/be249da2-93de-4e04-bff2-bd52bc10ce27',
  likeActive: 'https://www.figma.com/api/mcp/asset/07dfd74c-43eb-44d7-94b1-f7776e69b5aa',
  like: 'https://www.figma.com/api/mcp/asset/810ce090-2e8d-4701-a178-a897eb68edde',
  programDetails2: 'https://www.figma.com/api/mcp/asset/e553d531-d4cc-46ae-803a-30d5cd4655c7',
  copy: 'https://www.figma.com/api/mcp/asset/9a02988d-bac1-4c74-be6f-3329b4be6e8b',
  learningGuideOld: 'https://www.figma.com/api/mcp/asset/3064a0b7-87a2-44a0-9bb6-1dee01a7c5c8',
  learningGuide: 'https://www.figma.com/api/mcp/asset/2ccd9b58-e31d-41ae-aecf-862d8f00733b',
  play: 'https://www.figma.com/api/mcp/asset/bc5bec97-a440-4903-8121-1d28478c9a58',
  hint: 'https://www.figma.com/api/mcp/asset/fd28b306-2d0c-4cc4-a1cb-41c1654b11e7',
  hide: 'https://www.figma.com/api/mcp/asset/975ac7ce-f290-4882-9357-165eaaf89eb2',
  show: 'https://www.figma.com/api/mcp/asset/ab361ff9-4808-4ca9-ab7e-be7212e29d99',
  selfGood: 'https://www.figma.com/api/mcp/asset/f01a67c3-14ca-45ad-90b8-46aaf621595e',
  ratingFilled: 'https://www.figma.com/api/mcp/asset/dccd67d2-981f-49ea-906a-8d7ce0a7e722',
  pageView: 'https://www.figma.com/api/mcp/asset/ef52b8cc-ab19-4750-9f58-5eafa4648c45',
  selfAverage: 'https://www.figma.com/api/mcp/asset/88b2e970-ae79-418e-baec-85e5398363e4',
  reviews: 'https://www.figma.com/api/mcp/asset/cafaf4ec-ec24-444c-8e03-e65269a36ee7',
  ratingEmpty: 'https://www.figma.com/api/mcp/asset/611a9976-1627-448a-a5f0-1432423d58d6',
  selfBad: 'https://www.figma.com/api/mcp/asset/ca618587-9b07-4a95-b143-064be9ed3c39',
  print: 'https://www.figma.com/api/mcp/asset/107af90e-d811-4056-9499-10a1c5c014b6',
  dotsMenu: 'https://www.figma.com/api/mcp/asset/dd9e425f-1ee7-4dfd-8ba3-2b080090e862',
  helpNew: 'https://www.figma.com/api/mcp/asset/6e8fa215-2dcd-46a2-9b5e-66072f8685f0',
  pen: 'https://www.figma.com/api/mcp/asset/3204c0e1-dbc8-4cde-b3a3-fd1e67291fba',
  metrics: 'https://www.figma.com/api/mcp/asset/00db78ad-9df3-4a66-a907-a8a7541c865d',
  close: 'https://www.figma.com/api/mcp/asset/3b064261-9ec5-444e-bc89-7eaccf71aa18',
  headphones: 'https://www.figma.com/api/mcp/asset/bcef7e5b-72be-402f-8c3e-b38ecc8d0520',
  feedback: 'https://www.figma.com/api/mcp/asset/13e7e55e-cf1e-4140-a1c8-5be436543f75',
  addExpand: 'https://www.figma.com/api/mcp/asset/8974cffa-5838-40ed-b898-0b80a7df1bb9',
  history: 'https://www.figma.com/api/mcp/asset/c1bc75a4-b26e-4577-86b0-37dd57cd7618',
  questionMark: 'https://www.figma.com/api/mcp/asset/4587e965-8ecf-4041-ab00-81cd629f9b61',
  help: 'https://www.figma.com/api/mcp/asset/181fb023-2524-4509-a736-bb3eb89c53e9',
  error: 'https://www.figma.com/api/mcp/asset/82b17c15-e618-4751-896c-fa082b064cab',
  arrowsRightCircle: 'https://www.figma.com/api/mcp/asset/dd4a5089-5cb1-4068-bf1b-b0e4c2efe603',
  timer: 'https://www.figma.com/api/mcp/asset/772d29f4-62a9-410f-951b-7b7d4c8f3fa3',
  warning: 'https://www.figma.com/api/mcp/asset/2ad57040-3821-458f-9978-a7ef587be9f0',
  tutorSupport: 'https://www.figma.com/api/mcp/asset/b6afa582-6879-4a7b-b903-2319ed2abd76',
  info: 'https://www.figma.com/api/mcp/asset/74bed4ed-bc1d-460f-a029-fe6dd83a830c',
  locSmall: 'https://www.figma.com/api/mcp/asset/a41385f4-dba6-412a-a8d5-0736554c31b4',
  orientation: 'https://www.figma.com/api/mcp/asset/4e6cf2c6-80a8-417a-8543-eb08df5c5a6b',
  user: 'https://www.figma.com/api/mcp/asset/3d97bbcd-482f-41b7-bf31-3c08c1460dab',
  dot: 'https://www.figma.com/api/mcp/asset/e68a0ee3-8e23-4477-95f6-1e768984df65',
  good: 'https://www.figma.com/api/mcp/asset/c060f93c-c9be-4401-964a-93bae2353f39',
  lockOpen: 'https://www.figma.com/api/mcp/asset/844742dc-838a-4fb2-b7a7-2fcb790b514c',
  lockBig: 'https://www.figma.com/api/mcp/asset/c2bc3e4a-f970-41d3-8d04-3c2bd9bb4392',
  circleExclamation: 'https://www.figma.com/api/mcp/asset/9428bd44-290f-451d-ab39-f42e8c448983',
  bad: 'https://www.figma.com/api/mcp/asset/b6a8d99f-2d88-40aa-bcac-78f88fca8a65',
  menuHamburger: 'https://www.figma.com/api/mcp/asset/abbaa69a-cff9-46e3-8b33-3b16ead2b20c',
  translator: 'https://www.figma.com/api/mcp/asset/0193f0a3-16f4-4357-9f9d-0e370144b66e',
  delete: 'https://www.figma.com/api/mcp/asset/caf7bb98-20dd-4cda-96a4-4e4aa65958dc',
  tools: 'https://www.figma.com/api/mcp/asset/5b0ce59f-5138-49c5-bf15-2ceccb3adcc1',
  playbackSpeed: 'https://www.figma.com/api/mcp/asset/c430ff1d-268d-4175-8c25-99e5cc96a2bc',
  stop: 'https://www.figma.com/api/mcp/asset/31ad4aed-4d36-4406-9bf1-4544f99f0a41',
  send: 'https://www.figma.com/api/mcp/asset/cb2e042c-d19e-4701-b792-12a7c78bed43',
  openInNewTab: 'https://www.figma.com/api/mcp/asset/c5d9c1f9-83fa-47e1-946d-10c9f7b3ba59',
  time: 'https://www.figma.com/api/mcp/asset/6ae4eb7b-9c0e-4ef2-9956-a89fbcfb59a0',
  listView: 'https://www.figma.com/api/mcp/asset/da4ed23e-56f1-4431-b24f-2aca18cc6250',
  calendar: 'https://www.figma.com/api/mcp/asset/ff286530-d39c-41c8-8300-2516171b297c',
  reload: 'https://www.figma.com/api/mcp/asset/596b2974-6ec7-45b3-81a8-3acef49b5f39',
  checkmarkSingle: 'https://www.figma.com/api/mcp/asset/d17b5cf7-f51d-4bd2-aab3-0d6b83ffb25c',
  programDetails: 'https://www.figma.com/api/mcp/asset/f92a9b8e-56b5-4d57-9b61-6927866579bd',
  messages: 'https://www.figma.com/api/mcp/asset/fca93fa5-a8b7-47c6-8653-304e2695d6ec',
  remindMe: 'https://www.figma.com/api/mcp/asset/2b018fed-f27c-4986-a6c7-dda425e22d43',
  search: 'https://www.figma.com/api/mcp/asset/8bad6e79-6b76-467c-ab77-6c193705712b',
  pause: 'https://www.figma.com/api/mcp/asset/a0d7ceae-b402-4524-8d8a-e64b405e66a9',
  languageIntermediate: 'https://www.figma.com/api/mcp/asset/185c662b-d441-4767-abb5-7022b5df2d6e',
  languageBeginner: 'https://www.figma.com/api/mcp/asset/185c662b-d441-4767-abb5-7022b5df2d6e',
  languageAdvanced: 'https://www.figma.com/api/mcp/asset/c0cccd8d-eb3a-4510-b64a-f03c3464f392',
};

export type IconName = keyof typeof assets;

export interface IconProps {
  /** The icon to display — matches Figma icon names */
  name: IconName;
  /** Size in pixels @default 16 */
  size?: number;
  /** Alt text for accessibility @default '' */
  alt?: string;
  /** Additional CSS class */
  className?: string;
}

/**
 * Single icon component — renders any Learnlight design-system icon by name.
 * Width is fixed to `size`; height is auto so the natural aspect ratio is preserved.
 */
export function Icon({ name, size = 16, alt = '', className }: IconProps) {
  return (
    <img
      src={assets[name]}
      alt={alt}
      width={size}
      height="auto"
      className={className}
      style={{ display: 'block' }}
    />
  );
}

export const iconNames = Object.keys(assets) as IconName[];
