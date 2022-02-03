import * as React from "react"; import { useMemo } from "react"; import { ControlType } from "framer"; export const containerStyles = {width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}; export const defaultEvents = {onClick: {type: ControlType.EventHandler}, onMouseDown: {type: ControlType.EventHandler}, onMouseUp: {type: ControlType.EventHandler}, onMouseEnter: {type: ControlType.EventHandler}, onMouseLeave: {type: ControlType.EventHandler}}; const findByArray = (arr, search) => { return arr.find((a) => { return a.toLowerCase().includes(search); }); }; export function getIconSelection (iconKeys, selectByList, iconSearch = "", iconSelection, lowercaseIconKeyPairs) { if (selectByList) { return iconSelection }; if (iconSearch == null || (iconSearch === null || iconSearch === void 0 ? void 0 : iconSearch.length) === 0) { return null }; const iconSearchTerm = iconSearch.toLowerCase().replace(/-|\s/g, ""); var _iconSearchTerm; const searchResult = (_iconSearchTerm = lowercaseIconKeyPairs[iconSearchTerm]) !== null && _iconSearchTerm !== void 0 ? _iconSearchTerm : findByArray(iconKeys, iconSearchTerm); return searchResult; }; export function useIconSelection (iconKeys, selectByList, iconSearch = "", iconSelection, lowercaseIconKeyPairs) { const iconSearchResult = useMemo(() => { if (iconSearch == null || (iconSearch === null || iconSearch === void 0 ? void 0 : iconSearch.length) === 0) { return null }; const iconSearchTerm = iconSearch.toLowerCase().replace(/-|\s/g, ""); var _iconSearchTerm; const searchResult = (_iconSearchTerm = lowercaseIconKeyPairs[iconSearchTerm]) !== null && _iconSearchTerm !== void 0 ? _iconSearchTerm : findByArray(iconKeys, iconSearchTerm); return searchResult; }, [iconSelection, iconSearch]); const name = selectByList ? iconSelection : iconSearchResult; return name; }; export const __FramerMetadata__ = {exports: {getIconSelection: {type: "function"}, containerStyles: {type: "variable"}, defaultEvents: {type: "variable"}, useIconSelection: {type: "function"}}}; 