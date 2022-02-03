import{jsx as _jsx}from"react/jsx-runtime";import styled,{css}from"styled-components";import{motion}from"framer-motion";import{addPropertyControls,ControlType}from"framer";import{color,COLOR}from"https://framerusercontent.com/modules/l1WcRLRSnhtvIgBHNKF1/9Z03ka8AHkVvf1q6NmVD/Color.js";import{SIZE,THEME,TYPE}from"https://framerusercontent.com/modules/uc0yHe8XNTh1oRhaYnDm/TLUc7i16QLhLsO7xc344/constants.js";const sizes={[SIZE.BIG]:css`
        height: 63px;
        padding: 20px;
        font-size: 18px;
        border-radius: 12px;
    `,[SIZE.LARGE]:css`
        height: 56px;
        padding: 18px;
        font-size: 16px;
        border-radius: 12px;
    `,[SIZE.MEDIUM]:css`
        height: 48px;
        padding: 14px 18px;
        font-size: 15px;
        border-radius: 12px;
    `,[SIZE.SMALL]:css`
        height: 40px;
        padding: 11px;
        font-size: 15px;
        border-radius: 8px;
    `,[SIZE.MINI]:css`
        height: 32px;
        padding: 8px 12px;
        font-size: 13px;
        border-radius: 8px;
    `,[SIZE.NONE]:css`
        height: unset;
        padding: 0;
        font-size: unset;
        border-radius: unset;
    `};const colors={[THEME.PRIMARY]:{color:`${color[COLOR.WHITE]}`,backgroundColor:`${color[COLOR.PURPLE][500]}`,borderColor:`${color[COLOR.PURPLE][500]}`},[THEME.SECONDARY]:{color:`${color[COLOR.PURPLE][500]}`,backgroundColor:`${color[COLOR.PURPLE][100]}`,borderColor:`${color[COLOR.PURPLE][100]}`},[THEME.MONO]:{color:`${color[COLOR.BLACK]}`,backgroundColor:`${color[COLOR.GRAY][200]}`,borderColor:`${color[COLOR.GRAY][200]}`},[THEME.WARNING]:{color:`${color[COLOR.WHITE]}`,backgroundColor:`${color[COLOR.RED][500]}`,borderColor:`${color[COLOR.RED][500]}`},[THEME.DASHED]:{color:`${color[COLOR.BLACK]}`,backgroundColor:`${color[COLOR.WHITE]}`,borderColor:`${color[COLOR.GRAY][300]}`,borderStyle:"dashed"},[THEME.LINE]:{color:`${color[COLOR.BLACK]}`,backgroundColor:`${color[COLOR.WHITE]}`,borderColor:`${color[COLOR.GRAY][200]}`},[THEME.NONE]:{color:`${color[COLOR.BLACK]}`,borderStyle:"none"}};const activeColor={[THEME.PRIMARY]:{color:`${color[COLOR.PURPLE][300]}`,backgroundColor:`${color[COLOR.PURPLE][600]}`,borderColor:`${color[COLOR.PURPLE][600]}`},[THEME.SECONDARY]:{color:`${color[COLOR.PURPLE][300]}`,backgroundColor:`${color[COLOR.PURPLE][200]}`,borderColor:`${color[COLOR.PURPLE][200]}`},[THEME.MONO]:{color:`${color[COLOR.GRAY][400]}`,backgroundColor:`${color[COLOR.GRAY][300]}`,borderColor:`${color[COLOR.GRAY][300]}`},[THEME.WARNING]:{color:`${color[COLOR.RED][300]}`,backgroundColor:`${color[COLOR.RED][600]}`,borderColor:`${color[COLOR.RED][600]}`},[THEME.DASHED]:{color:`${color[COLOR.GRAY][500]}`,backgroundColor:`${color[COLOR.GRAY][50]}`,borderColor:`${color[COLOR.GRAY][300]}`},[THEME.LINE]:{color:`${color[COLOR.GRAY][500]}`,backgroundColor:`${color[COLOR.GRAY][50]}`,borderColor:`${color[COLOR.GRAY][300]}`},[THEME.NONE]:{color:`${color[COLOR.BLACK]}`}};const disabledColor={[THEME.PRIMARY]:{color:`${color[COLOR.PURPLE][200]}`,backgroundColor:`${color[COLOR.PURPLE][300]}`,borderColor:`${color[COLOR.PURPLE][300]}`},[THEME.SECONDARY]:{color:`${color[COLOR.PURPLE][200]}`,backgroundColor:`${color[COLOR.PURPLE][100]}`,borderColor:`${color[COLOR.PURPLE][100]}`},[THEME.MONO]:{color:`${color[COLOR.GRAY][300]}`,backgroundColor:`${color[COLOR.GRAY][100]}`,borderColor:`${color[COLOR.GRAY][100]}`},[THEME.WARNING]:{color:`${color[COLOR.RED][200]}`,backgroundColor:`${color[COLOR.RED][300]}`,borderColor:`${color[COLOR.RED][300]}`},[THEME.DASHED]:{color:`${color[COLOR.GRAY][300]}`,backgroundColor:`${color[COLOR.WHITE]}`,borderColor:`${color[COLOR.GRAY][300]}`},[THEME.LINE]:{color:`${color[COLOR.GRAY][300]}`,backgroundColor:`${color[COLOR.WHITE]}`,borderColor:`${color[COLOR.GRAY][200]}`},[THEME.NONE]:{color:`${color[COLOR.BLACK]}`}};const colorStyles=($theme,$outlined)=>{return css`
    color: ${$outlined?color[COLOR.PURPLE][500]:colors[$theme].color};
    background-color: ${$outlined?color[COLOR.WHITE]:colors[$theme].backgroundColor};
    border-color: ${$outlined?color[COLOR.PURPLE][500]:colors[$theme].borderColor};
    border-style: ${colors[$theme].borderStyle};

    &:disabled {
      color: ${$outlined?color[COLOR.PURPLE][200]:disabledColor[$theme].color};
      background-color: ${$outlined?color[COLOR.WHITE]:disabledColor[$theme].backgroundColor};
      border-color: ${$outlined?color[COLOR.PURPLE][200]:disabledColor[$theme].borderColor};
    }

    &:active {
      color: ${$outlined?color[COLOR.PURPLE][300]:activeColor[$theme].color};
      background-color: ${$outlined?color[COLOR.PURPLE][100]:activeColor[$theme].backgroundColor};
      border-color: ${$outlined?color[COLOR.PURPLE][300]:activeColor[$theme].borderColor};
    }
  `;};const getStyle=props=>{const{size,$theme,outlined}=props;return css`
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        font-family: "Noto Sans KR", sans-serif;
        font-weight: ${$theme===THEME.DASHED||$theme===THEME.LINE?400:700};
        line-height: 1.25;
        border-style: solid;
        border-width: 1px;

        ${sizes[size]};
        ${colorStyles($theme,outlined)};
    `;};const StyledButton=styled(motion.div)`
  ${getStyle}
`;/**
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight auto
 */ export function Button(props){const{type,theme,label,icon,outlined,disabled,...restProps}=props;return(/*#__PURE__*/ _jsx(StyledButton,{$theme:theme,icon:icon,outlined:outlined,disabled:disabled,...restProps,children:label}));}Button.defaultProps={width:335,type:TYPE.BUTTON,size:SIZE.BIG,outlined:false,theme:THEME.PRIMARY,icon:undefined,disabled:false,label:"버튼 이름"};addPropertyControls(Button,{label:{type:ControlType.String},size:{type:ControlType.Enum,defaultValue:"large",options:["big","large","medium","small","mini","none"]},theme:{type:ControlType.Enum,defaultValue:"primary",options:["primary","secondary","mono","warning","dashed","line","none",]},outlined:{type:ControlType.Boolean},disabled:{type:ControlType.Boolean},onTap:{type:ControlType.EventHandler}});
export const __FramerMetadata__ = {"exports":{"Button":{"type":"reactComponent","name":"Button","slots":[],"annotations":{"framerSupportedLayoutHeight":"auto","framerSupportedLayoutWidth":"fixed","framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./Button.map