import { EnhancedPageObject, PageObjectModel } from "nightwatch";

const googleResultsPageCommands = {};

const googleResultsPage = {
  commands: [googleResultsPageCommands],
  elements: {
    searchResultsDiv: "#rso",
  },
  sections: {
    searchResults: {
      selector: "#rso",
      elements: {
        resultLinks: "a h3",
      },
      commands: [
        {
          clickResultLink: function (this: EnhancedPageObject, index: number) {
            return this.click(`a h3:nth-child(${index})`);
          },
        },
      ],
    },
  },
} satisfies PageObjectModel;

export default googleResultsPage;

export interface GoogleResultsPage
  extends EnhancedPageObject<
    typeof googleResultsPageCommands,
    typeof googleResultsPage.elements,
    typeof googleResultsPage.sections
  > {}
