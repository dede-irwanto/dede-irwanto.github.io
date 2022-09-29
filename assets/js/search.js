const { autocomplete, getAlgoliaResults, noResult } =
  window["@algolia/autocomplete-js"];

const searchClient = algoliasearch(
  "6O1BNUI581",
  "95b3bc81d0689f39136a2999e11ba01e"
);

autocomplete({
  container: "#autocomplete",
  placeholder: "Cari artikel...",
  detachedMediaQuery: "",
  getSources({ query }) {
    return [
      {
        sourceId: "docsearch",
        getItems() {
          return getAlgoliaResults({
            searchClient,
            queries: [
              {
                indexName: "docsearch",
                query,
                params: {
                  hitsPerPage: 10,
                  attributesToSnippet: ["title"],
                  snippetEllipsisText: "…",
                },
              },
            ],
          });
        },
        templates: {
          item({ item, components, html }) {
            return html`<a href="${item.url}" style="color:#000">
              <div class="aa-ItemWrapper">
                <div class="aa-ItemContent">
                  <div class="aa-ItemIcon aa-ItemIcon--alignTop">
                    <img
                      src="${item.image}"
                      alt="${item.name}"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div class="aa-ItemContentBody">
                    <div class="aa-ItemContentTitle">
                      ${components.Highlight({
                        hit: item,
                        attribute: "title",
                      })}
                    </div>
                  </div>
                  <div class="aa-ItemActions">
                    <button
                      class="aa-ItemActionButton aa-DesktopOnly aa-ActiveOnly"
                      type="button"
                      title="Select"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path
                          d="M18.984 6.984h2.016v6h-15.188l3.609 3.609-1.406 1.406-6-6 6-6 1.406 1.406-3.609 3.609h13.172v-4.031z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </a>`;
          },
        },
      },
    ];
  },
});
