import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-CHmeEH28.js";import"./preload-helper-PPVm8Dsz.js";const o={borderPrimary:"#dfe4e6",borderBrand:"#0276b1",borderError:"#ca2b34",borderDisabled:"#dfe4e6",bgPrimary:"#ffffff",bgSecondary:"#f5f6f7",textPrimary:"#092f42",textSecondary:"#5d7682",textDisabled:"#b3bec4",textError:"#ca2b34",focusShadow:"0px 1px 12px 0px rgba(2, 118, 177, 0.25)"},g={fontFamily:"'Fira Sans', sans-serif",fontSize:14,fontStyle:"normal"};function de(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,children:[e.jsx("circle",{cx:"8",cy:"8",r:"6.5",stroke:o.textSecondary}),e.jsx("rect",{x:"7.25",y:"6.75",width:"1.5",height:"5",rx:"0.75",fill:o.textSecondary}),e.jsx("rect",{x:"7.25",y:"4.25",width:"1.5",height:"1.5",rx:"0.75",fill:o.textSecondary})]})}function p({label:t,required:a=!1,optional:r=!1,placeholder:s="",value:n,onChange:$,variant:z="default",forceState:h,leftIcon:W,rightIcon:N,hintText:K,disabled:l=!1,type:G="text",id:Q}){const[J,H]=c.useState("default"),u=l?"disabled":h??J;let m;u==="disabled"?m=o.borderDisabled:u==="focus"?m=o.borderBrand:z==="error"?m=o.borderError:m=o.borderPrimary;const ee=u==="disabled"?o.bgSecondary:o.bgPrimary,re=u==="hover"?"linear-gradient(rgba(0,0,0,0.04),rgba(0,0,0,0.04)), linear-gradient(white,white)":void 0,te=u==="disabled"?o.textDisabled:o.textPrimary,ae=u==="focus"?o.focusShadow:void 0,oe=t&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,marginBottom:4},children:[e.jsx("label",{htmlFor:Q,style:{...g,lineHeight:"18px",color:o.textPrimary,cursor:l?"default":"pointer"},children:t}),a&&e.jsx("span",{style:{...g,color:o.textError,letterSpacing:"0.03em"},children:"*"}),r&&e.jsx("span",{style:{...g,color:o.textSecondary,lineHeight:"18px"},children:"(Optional)"}),e.jsx(de,{})]}),se={display:"flex",alignItems:"center",height:40,border:`1px solid ${m}`,borderRadius:8,overflow:"hidden",background:re??ee,boxShadow:ae,transition:"border-color 0.15s, box-shadow 0.15s",cursor:l?"not-allowed":"text"},ne={flex:"1 0 0",minWidth:0,height:"100%",padding:"0 12px",paddingLeft:W?0:12,paddingRight:N?0:12,border:"none",outline:"none",background:"transparent",...g,lineHeight:"18px",color:te,cursor:l?"not-allowed":"text"},Y={display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:16,height:16,color:l?o.textDisabled:o.textSecondary},le=W&&e.jsx("span",{style:{...Y,marginLeft:12,marginRight:4},children:W}),ie=N&&e.jsx("span",{style:{...Y,marginRight:12,marginLeft:4},children:N}),ce=K&&e.jsx("p",{style:{...g,lineHeight:"18px",color:z==="error"?o.textError:o.textSecondary,margin:"4px 0 0"},children:K});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%"},children:[oe,e.jsxs("div",{style:se,onMouseEnter:()=>!l&&!h&&H("hover"),onMouseLeave:()=>!l&&!h&&H("default"),children:[le,e.jsx("input",{id:Q,type:G,value:n,onChange:$,placeholder:s,disabled:l,style:ne,onFocus:()=>!l&&!h&&H("focus"),onBlur:()=>!l&&!h&&H("default")}),ie]}),ce]})}p.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{label:{required:!1,tsType:{name:"string"},description:"Label text shown above the input"},required:{required:!1,tsType:{name:"boolean"},description:"Marks the field as required (shows red asterisk)",defaultValue:{value:"false",computed:!1}},optional:{required:!1,tsType:{name:"boolean"},description:'Marks the field as optional (shows grey "(Optional)")',defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"''",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Controlled value"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:"Change handler"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"}]},description:"Visual / validation state",defaultValue:{value:"'default'",computed:!1}},forceState:{required:!1,tsType:{name:"union",raw:"'default' | 'hover' | 'focus' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'disabled'"}]},description:"Force a specific visual state (useful for Storybook; normally driven by interaction)"},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon rendered on the left side of the input"},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon rendered on the right side of the input"},hintText:{required:!1,tsType:{name:"string"},description:"Helper / error message shown below the input"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the input",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"string"},description:"Input type",defaultValue:{value:"'text'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Accessible id (label is linked via htmlFor)"}}};const{expect:i,userEvent:d,within:O}=__STORYBOOK_MODULE_TEST__;function _(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,children:[e.jsx("circle",{cx:"7",cy:"7",r:"4.5",stroke:"currentColor",strokeWidth:"1.3"}),e.jsx("path",{d:"M10.5 10.5L13 13",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})]})}function U(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,children:[e.jsx("rect",{x:"1.5",y:"3.5",width:"13",height:"9",rx:"1.5",stroke:"currentColor",strokeWidth:"1.3"}),e.jsx("path",{d:"M1.5 5.5L8 9.5L14.5 5.5",stroke:"currentColor",strokeWidth:"1.3"})]})}function X(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,children:[e.jsx("path",{d:"M1 8C1 8 3.5 3.5 8 3.5C12.5 3.5 15 8 15 8C15 8 12.5 12.5 8 12.5C3.5 12.5 1 8 1 8Z",stroke:"currentColor",strokeWidth:"1.3"}),e.jsx("circle",{cx:"8",cy:"8",r:"2",stroke:"currentColor",strokeWidth:"1.3"})]})}function pe(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,children:[e.jsx("rect",{x:"3.5",y:"7",width:"9",height:"6.5",rx:"1.5",stroke:"currentColor",strokeWidth:"1.3"}),e.jsx("path",{d:"M5.5 7V5C5.5 3.619 6.619 2.5 8 2.5V2.5C9.381 2.5 10.5 3.619 10.5 5V7",stroke:"currentColor",strokeWidth:"1.3"})]})}const ge={title:"Components/Input Field",component:p,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{width:370,padding:24,fontFamily:"'Fira Sans', sans-serif"},children:e.jsx(t,{})})],argTypes:{variant:{control:"select",options:["default","error"],description:"Visual / validation state of the field"},forceState:{control:"select",options:[void 0,"default","hover","focus","disabled"],description:"Override the interaction state (useful for visual testing)"},label:{control:"text"},placeholder:{control:"text"},hintText:{control:"text"},required:{control:"boolean"},optional:{control:"boolean"},disabled:{control:"boolean"},type:{control:"select",options:["text","email","password","number","search","tel","url"]}}};function Z(t){const[a,r]=c.useState(t.value??"");return e.jsx(p,{...t,value:a,onChange:s=>r(s.target.value)})}const v={args:{label:"Level",required:!0,placeholder:"All levels",id:"input-default"}},b={args:{label:"Level",required:!0,placeholder:"All levels",forceState:"hover",id:"input-hover"}},f={args:{label:"Level",required:!0,placeholder:"All levels",forceState:"focus",id:"input-focus"}},y={args:{label:"Level",placeholder:"All levels",disabled:!0,id:"input-disabled"}},x={name:"State / Placeholder",args:{label:"Level",placeholder:"Search levels…",id:"input-placeholder"}},w={args:{label:"Level",required:!0,value:"Bad input",variant:"error",hintText:"This is an error message.",id:"input-error"}},S={name:"Error / Hover",args:{label:"Level",required:!0,value:"Bad input",variant:"error",hintText:"This is an error message.",forceState:"hover",id:"input-error-hover"}},T={name:"Error / Focus",args:{label:"Level",required:!0,value:"Bad input",variant:"error",hintText:"This is an error message.",forceState:"focus",id:"input-error-focus"}},I={name:"Label / Required",args:{label:"Email",required:!0,placeholder:"you@example.com",id:"input-required"}},E={name:"Label / Optional",args:{label:"Phone number",optional:!0,placeholder:"+1 555 0100",id:"input-optional"}},L={name:"Label / No Label",args:{placeholder:"Search…",id:"input-nolabel"}},j={name:"Icons / Left Icon",args:{label:"Search",placeholder:"Search…",leftIcon:e.jsx(_,{}),id:"input-left-icon"}},B={name:"Icons / Right Icon",args:{label:"Password",placeholder:"Enter password",type:"password",rightIcon:e.jsx(X,{}),id:"input-right-icon"}},k={name:"Icons / Both Icons",args:{label:"Email",placeholder:"you@example.com",leftIcon:e.jsx(U,{}),rightIcon:e.jsx(_,{}),id:"input-both-icons"}},C={name:"Types / Password",render:()=>{const[t,a]=c.useState(""),[r,s]=c.useState(!1);return e.jsx(p,{label:"Password",required:!0,type:r?"text":"password",placeholder:"Min. 8 characters",value:t,onChange:n=>a(n.target.value),rightIcon:e.jsx("button",{type:"button",onClick:()=>s(n=>!n),style:{background:"none",border:"none",cursor:"pointer",padding:0,display:"flex",color:"inherit"},"aria-label":r?"Hide password":"Show password",children:e.jsx(X,{})}),id:"input-password"})}},q={name:"Types / Email",args:{label:"Email address",type:"email",placeholder:"you@example.com",leftIcon:e.jsx(U,{}),id:"input-email"}},F={name:"Types / Number",args:{label:"Quantity",type:"number",placeholder:"0",id:"input-number"}},R={name:"Interactive / Live Validation",render:()=>{const[t,a]=c.useState(""),r=t.length>0&&t.length<3;return e.jsx(p,{label:"Username",required:!0,placeholder:"At least 3 characters",value:t,onChange:s=>a(s.target.value),variant:r?"error":"default",hintText:r?"Username must be at least 3 characters.":void 0,id:"input-live-validation"})}},A={name:"Interactive / Character Counter",render:()=>{const[a,r]=c.useState(""),s=a.length>50;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[e.jsx(p,{label:"Bio",optional:!0,placeholder:"Tell us about yourself…",value:a,onChange:n=>r(n.target.value),variant:s?"error":"default",id:"input-char-counter"}),e.jsxs("div",{style:{textAlign:"right",fontSize:12,marginTop:4,color:s?"#ca2b34":"#5d7682",fontFamily:"'Fira Sans', sans-serif"},children:[a.length," / ",50]})]})}},P={name:"All States",render:()=>{const t=[{label:"Default",props:{placeholder:"All levels"}},{label:"Hover",props:{placeholder:"All levels",forceState:"hover"}},{label:"Focus",props:{placeholder:"All levels",forceState:"focus"}},{label:"Disabled",props:{placeholder:"All levels",disabled:!0}},{label:"Error – default",props:{value:"Bad input",variant:"error",hintText:"This is an error message."}},{label:"Error – hover",props:{value:"Bad input",variant:"error",hintText:"This is an error message.",forceState:"hover"}},{label:"Error – focus",props:{value:"Bad input",variant:"error",hintText:"This is an error message.",forceState:"focus"}},{label:"With left icon",props:{placeholder:"Search…",leftIcon:e.jsx(_,{})}},{label:"With right icon",props:{placeholder:"Email",rightIcon:e.jsx(U,{})}}];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24,width:370,fontFamily:"'Fira Sans', sans-serif"},children:t.map(({label:a,props:r})=>e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.06em"},children:a}),e.jsx(Z,{label:"Level",required:!0,...r})]},a))})}},V={name:"Tests / Keyboard Interaction",render:()=>e.jsx(Z,{label:"Username",required:!0,placeholder:"Type here…",id:"input-test"}),play:async({canvasElement:t})=>{const r=O(t).getByRole("textbox");await d.tab(),i(r).toHaveFocus(),await d.type(r,"learnlight"),i(r.value).toBe("learnlight"),await d.clear(r),i(r.value).toBe(""),await d.tab(),i(r).not.toHaveFocus()}},D={name:"Tests / Disabled Input",args:{label:"Level",placeholder:"All levels",disabled:!0,id:"input-disabled-test"},play:async({canvasElement:t})=>{const r=O(t).getByRole("textbox");i(r).toBeDisabled(),await d.type(r,"hello"),i(r.value).toBe("")}},M={name:"Tests / Password Toggle",render:()=>{const[t,a]=c.useState("secret123"),[r,s]=c.useState(!1);return e.jsx(p,{label:"Password",type:r?"text":"password",value:t,onChange:n=>a(n.target.value),rightIcon:e.jsx("button",{type:"button",onClick:()=>s(n=>!n),style:{background:"none",border:"none",cursor:"pointer",padding:0,display:"flex",color:"inherit"},"aria-label":"Toggle visibility",children:r?e.jsx(X,{}):e.jsx(pe,{})}),id:"input-pw-toggle"})},play:async({canvasElement:t})=>{const a=O(t),r=a.getByLabelText("Password");i(r.type).toBe("password");const s=a.getByRole("button",{name:"Toggle visibility"});await d.click(s),i(r.type).toBe("text"),await d.click(s),i(r.type).toBe("password")}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Level',
    required: true,
    placeholder: 'All levels',
    id: 'input-default'
  }
}`,...v.parameters?.docs?.source},description:{story:"Resting state — no interaction",...v.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Level',
    required: true,
    placeholder: 'All levels',
    forceState: 'hover',
    id: 'input-hover'
  }
}`,...b.parameters?.docs?.source},description:{story:"Hover — subtle background darkening",...b.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Level',
    required: true,
    placeholder: 'All levels',
    forceState: 'focus',
    id: 'input-focus'
  }
}`,...f.parameters?.docs?.source},description:{story:"Focus — brand-blue border + glow ring",...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Level',
    placeholder: 'All levels',
    disabled: true,
    id: 'input-disabled'
  }
}`,...y.parameters?.docs?.source},description:{story:"Disabled — no interaction, greyed-out",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'State / Placeholder',
  args: {
    label: 'Level',
    placeholder: 'Search levels…',
    id: 'input-placeholder'
  }
}`,...x.parameters?.docs?.source},description:{story:"Placeholder text visible before the user types",...x.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Level',
    required: true,
    value: 'Bad input',
    variant: 'error',
    hintText: 'This is an error message.',
    id: 'input-error'
  }
}`,...w.parameters?.docs?.source},description:{story:"Error — red border, error hint message",...w.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Error / Hover',
  args: {
    label: 'Level',
    required: true,
    value: 'Bad input',
    variant: 'error',
    hintText: 'This is an error message.',
    forceState: 'hover',
    id: 'input-error-hover'
  }
}`,...S.parameters?.docs?.source},description:{story:"Error in hover state",...S.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Error / Focus',
  args: {
    label: 'Level',
    required: true,
    value: 'Bad input',
    variant: 'error',
    hintText: 'This is an error message.',
    forceState: 'focus',
    id: 'input-error-focus'
  }
}`,...T.parameters?.docs?.source},description:{story:"Error in focus state",...T.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Label / Required',
  args: {
    label: 'Email',
    required: true,
    placeholder: 'you@example.com',
    id: 'input-required'
  }
}`,...I.parameters?.docs?.source},description:{story:"Required marker",...I.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Label / Optional',
  args: {
    label: 'Phone number',
    optional: true,
    placeholder: '+1 555 0100',
    id: 'input-optional'
  }
}`,...E.parameters?.docs?.source},description:{story:"Optional marker",...E.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Label / No Label',
  args: {
    placeholder: 'Search…',
    id: 'input-nolabel'
  }
}`,...L.parameters?.docs?.source},description:{story:"No label — standalone input",...L.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Icons / Left Icon',
  args: {
    label: 'Search',
    placeholder: 'Search…',
    leftIcon: <SearchIcon />,
    id: 'input-left-icon'
  }
}`,...j.parameters?.docs?.source},description:{story:"Left icon — search",...j.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Icons / Right Icon',
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    rightIcon: <EyeIcon />,
    id: 'input-right-icon'
  }
}`,...B.parameters?.docs?.source},description:{story:"Right icon — eye (e.g. show/hide password)",...B.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Icons / Both Icons',
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    leftIcon: <MailIcon />,
    rightIcon: <SearchIcon />,
    id: 'input-both-icons'
  }
}`,...k.parameters?.docs?.source},description:{story:"Both icons",...k.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Types / Password',
  render: () => {
    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);
    return <InputField label="Password" required type={show ? 'text' : 'password'} placeholder="Min. 8 characters" value={value} onChange={e => setValue(e.target.value)} rightIcon={<button type="button" onClick={() => setShow(s => !s)} style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      color: 'inherit'
    }} aria-label={show ? 'Hide password' : 'Show password'}>
            <EyeIcon />
          </button>} id="input-password" />;
  }
}`,...C.parameters?.docs?.source},description:{story:"Password type — masked by default",...C.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Types / Email',
  args: {
    label: 'Email address',
    type: 'email',
    placeholder: 'you@example.com',
    leftIcon: <MailIcon />,
    id: 'input-email'
  }
}`,...q.parameters?.docs?.source},description:{story:"Email type",...q.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Types / Number',
  args: {
    label: 'Quantity',
    type: 'number',
    placeholder: '0',
    id: 'input-number'
  }
}`,...F.parameters?.docs?.source},description:{story:"Number type",...F.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Interactive / Live Validation',
  render: () => {
    const [value, setValue] = useState('');
    const isError = value.length > 0 && value.length < 3;
    return <InputField label="Username" required placeholder="At least 3 characters" value={value} onChange={e => setValue(e.target.value)} variant={isError ? 'error' : 'default'} hintText={isError ? 'Username must be at least 3 characters.' : undefined} id="input-live-validation" />;
  }
}`,...R.parameters?.docs?.source},description:{story:"Fully interactive — type to see live validation",...R.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Interactive / Character Counter',
  render: () => {
    const MAX = 50;
    const [value, setValue] = useState('');
    const over = value.length > MAX;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }}>
        <InputField label="Bio" optional placeholder="Tell us about yourself…" value={value} onChange={e => setValue(e.target.value)} variant={over ? 'error' : 'default'} id="input-char-counter" />
        <div style={{
        textAlign: 'right',
        fontSize: 12,
        marginTop: 4,
        color: over ? '#ca2b34' : '#5d7682',
        fontFamily: "'Fira Sans', sans-serif"
      }}>
          {value.length} / {MAX}
        </div>
      </div>;
  }
}`,...A.parameters?.docs?.source},description:{story:"Character counter",...A.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  render: () => {
    const rows: Array<{
      label: string;
      props: Partial<React.ComponentProps<typeof InputField>>;
    }> = [{
      label: 'Default',
      props: {
        placeholder: 'All levels'
      }
    }, {
      label: 'Hover',
      props: {
        placeholder: 'All levels',
        forceState: 'hover'
      }
    }, {
      label: 'Focus',
      props: {
        placeholder: 'All levels',
        forceState: 'focus'
      }
    }, {
      label: 'Disabled',
      props: {
        placeholder: 'All levels',
        disabled: true
      }
    }, {
      label: 'Error – default',
      props: {
        value: 'Bad input',
        variant: 'error',
        hintText: 'This is an error message.'
      }
    }, {
      label: 'Error – hover',
      props: {
        value: 'Bad input',
        variant: 'error',
        hintText: 'This is an error message.',
        forceState: 'hover'
      }
    }, {
      label: 'Error – focus',
      props: {
        value: 'Bad input',
        variant: 'error',
        hintText: 'This is an error message.',
        forceState: 'focus'
      }
    }, {
      label: 'With left icon',
      props: {
        placeholder: 'Search…',
        leftIcon: <SearchIcon />
      }
    }, {
      label: 'With right icon',
      props: {
        placeholder: 'Email',
        rightIcon: <MailIcon />
      }
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      width: 370,
      fontFamily: "'Fira Sans', sans-serif"
    }}>
        {rows.map(({
        label,
        props
      }) => <div key={label}>
            <p style={{
          margin: '0 0 6px',
          fontSize: 11,
          color: '#9ca3af',
          textTransform: 'uppercase',
          letterSpacing: '0.06em'
        }}>
              {label}
            </p>
            <Controlled label="Level" required {...props} />
          </div>)}
      </div>;
  }
}`,...P.parameters?.docs?.source},description:{story:"Every state and variant at a glance",...P.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Tests / Keyboard Interaction',
  render: () => <Controlled label="Username" required placeholder="Type here…" id="input-test" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole<HTMLInputElement>('textbox');

    // Tab into the field
    await userEvent.tab();
    expect(input).toHaveFocus();

    // Type a value
    await userEvent.type(input, 'learnlight');
    expect(input.value).toBe('learnlight');

    // Clear with keyboard shortcut
    await userEvent.clear(input);
    expect(input.value).toBe('');

    // Tab away — focus lost
    await userEvent.tab();
    expect(input).not.toHaveFocus();
  }
}`,...V.parameters?.docs?.source},description:{story:"Verifies keyboard navigation and value entry",...V.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Tests / Disabled Input',
  args: {
    label: 'Level',
    placeholder: 'All levels',
    disabled: true,
    id: 'input-disabled-test'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole<HTMLInputElement>('textbox');
    expect(input).toBeDisabled();
    // Confirm typing does nothing
    await userEvent.type(input, 'hello');
    expect(input.value).toBe('');
  }
}`,...D.parameters?.docs?.source},description:{story:"Verifies disabled input cannot receive focus or input",...D.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Tests / Password Toggle',
  render: () => {
    const [value, setValue] = useState('secret123');
    const [show, setShow] = useState(false);
    return <InputField label="Password" type={show ? 'text' : 'password'} value={value} onChange={e => setValue(e.target.value)} rightIcon={<button type="button" onClick={() => setShow(s => !s)} style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      color: 'inherit'
    }} aria-label="Toggle visibility">
            {show ? <EyeIcon /> : <LockIcon />}
          </button>} id="input-pw-toggle" />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText<HTMLInputElement>('Password');

    // Starts masked
    expect(input.type).toBe('password');

    // Click toggle → revealed
    const toggleBtn = canvas.getByRole('button', {
      name: 'Toggle visibility'
    });
    await userEvent.click(toggleBtn);
    expect(input.type).toBe('text');

    // Click again → masked
    await userEvent.click(toggleBtn);
    expect(input.type).toBe('password');
  }
}`,...M.parameters?.docs?.source},description:{story:"Verifies lock-icon password toggle works",...M.parameters?.docs?.description}}};const ve=["Default","Hover","Focus","Disabled","PlaceholderText","Error","ErrorHover","ErrorFocus","Required","Optional","NoLabel","WithLeftIcon","WithRightIcon","WithBothIcons","PasswordType","EmailType","NumberType","LiveValidation","CharacterCounter","AllStates","InteractionTest","DisabledInteractionTest","PasswordToggleTest"];export{P as AllStates,A as CharacterCounter,v as Default,y as Disabled,D as DisabledInteractionTest,q as EmailType,w as Error,T as ErrorFocus,S as ErrorHover,f as Focus,b as Hover,V as InteractionTest,R as LiveValidation,L as NoLabel,F as NumberType,E as Optional,M as PasswordToggleTest,C as PasswordType,x as PlaceholderText,I as Required,k as WithBothIcons,j as WithLeftIcon,B as WithRightIcon,ve as __namedExportsOrder,ge as default};
