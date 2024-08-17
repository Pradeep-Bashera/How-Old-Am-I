(self.__BUILD_MANIFEST = {
  __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
  "/": ["js/index.js"],
  "/_error": ["js/error.js"],
  sortedPages: ["/", "/_app", "/_error"],
}),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
