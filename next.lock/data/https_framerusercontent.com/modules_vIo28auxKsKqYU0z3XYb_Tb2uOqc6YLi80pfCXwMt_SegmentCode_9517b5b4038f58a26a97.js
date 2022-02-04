import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{useState}from"react";import{motion}from"framer-motion";import{addPropertyControls,ControlType}from"framer";import{TODO_TYPE}from"https://framerusercontent.com/modules/qdqQsF0Yd1lKeuggWJzQ/Y6Gf00EfvCBYqbsMiSya/constants.js";import SegmentButton from"https://framerusercontent.com/modules/V0dmK9n0UdRFzNVRQFI2/Jxha13X7Kla8AqFgpW6H/goQ0lfp1K.js";// Welcome to Code in Framer
// Get Started: https://www.framer.com/docs/guides/
/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/docs/guides/auto-sizing
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */ export default function SegmentCode(props){const{onTabClick,list}=props;const[active,setActive]=useState(false);const[selected,setSelected]=useState(list[0]);return(/*#__PURE__*/ _jsx(motion.div,{style:container,children:list.map(name=>/*#__PURE__*/ _jsxs("div",{style:tabContainer,children:[selected===name&&/*#__PURE__*/ _jsx(motion.div,{style:slider,layoutId:"tabSlider"}),/*#__PURE__*/ _jsx(SegmentButton,{title:name,variant:selected===name?"Variant 1":"Variant 2",tap:()=>{onTabClick&&onTabClick(name);setSelected(name);}})]}))}));};SegmentCode.defaultProps={list:Object.values(TODO_TYPE),onTap:undefined};addPropertyControls(SegmentCode,{list:{type:ControlType.Array,control:{type:ControlType.String}},onTabClick:{type:ControlType.EventHandler}});const container={display:"flex",width:417,height:46,backgroundColor:"#fafafa",overflow:"hidden",borderRadius:12};const tabContainer={position:"relative",display:"flex",justifyContents:"center",alignItems:"center"};const slider={position:"absolute",width:"100%",height:"100%",top:0,zIndex:0,boxShadow:"0px 0px 2px 0px rgba(0, 0, 0, 0.1)",backgroundColor:"var(--token-334ec294-103c-4e28-a9b8-6b5039fe5924, #ffaa00)",overflow:"visible",borderRadius:10};
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"SegmentCode","slots":[],"annotations":{"framerContractVersion":"1","framerSupportedLayoutHeight":"any","framerSupportedLayoutWidth":"any"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./SegmentCode.map