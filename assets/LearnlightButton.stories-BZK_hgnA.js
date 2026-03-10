import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as F}from"./iframe-CHmeEH28.js";import{h as A,t as Y,a as J}from"./tokens-Cvach79u.js";import{i as Q,I as ee}from"./Icons-BQznmR0U.js";import"./preload-helper-PPVm8Dsz.js";const te=Y.find(t=>t.name===J.find(n=>n.token==="button-text")?.primitive),ne=te?.fontWeight??600,ae=Object.fromEntries(Object.entries(A).map(([t,n])=>[t,Object.fromEntries(Object.entries(n).map(([s,a])=>[s,a.value]))])),re={l:{height:40,paddingX:8,fontSize:14,iconSize:16,gap:6},m:{height:32,paddingX:8,fontSize:13,iconSize:14,gap:5},s:{height:24,paddingX:8,fontSize:12,iconSize:12,gap:4}},W=t=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":!0,children:[e.jsx("rect",{x:"2",y:"4",width:"12",height:"1.5",rx:"0.75"}),e.jsx("rect",{x:"2",y:"7.25",width:"12",height:"1.5",rx:"0.75"}),e.jsx("rect",{x:"2",y:"10.5",width:"12",height:"1.5",rx:"0.75"})]});function l({variant:t="primary",size:n="m",content:s="default",isDisabled:a=!1,leftIcon:r=!1,rightIcon:d=!1,selectIconLeft:o,selectIconRight:E,text:m="Button",onClick:U,...X}){const[G,V]=F.useState(!1),i=ae[t],c=re[n],$=a?"bgDisabled"in i?i.bgDisabled:i.bg:G?i.bgHover:i.bg,O=a&&"textDisabled"in i?i.textDisabled:i.text,K=t==="secondary"?`1.5px solid ${a?i.borderDisabled:i.border}`:"1.5px solid transparent",p=s==="icon_only",Z=p?c.height:void 0;return e.jsxs("button",{type:"button",disabled:a,onClick:U,onMouseEnter:()=>V(!0),onMouseLeave:()=>V(!1),style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:c.gap,height:c.height,width:Z,paddingLeft:p?0:c.paddingX,paddingRight:p?0:c.paddingX,background:$,color:O,border:K,borderRadius:6,fontSize:c.fontSize,fontFamily:"'Fira Sans', sans-serif",fontWeight:ne,lineHeight:1,cursor:a?"not-allowed":"pointer",transition:"background 0.15s, color 0.15s",whiteSpace:"nowrap",outline:"none",userSelect:"none"},...X,children:[!p&&r&&e.jsx("span",{style:{display:"flex",alignItems:"center",color:O},children:o??W(c.iconSize)}),p?o??W(c.iconSize):e.jsx("span",{children:m}),!p&&d&&e.jsx("span",{style:{display:"flex",alignItems:"center",color:O},children:E??W(c.iconSize)})]})}l.__docgenInfo={description:"Learnlight Design System — Button",methods:[],displayName:"LearnlightButton",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'txt' | 'txt_grey'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'txt'"},{name:"literal",value:"'txt_grey'"}]},description:`Visual style variant.
- 'primary': filled blue — main call-to-action
- 'secondary': outlined blue
- 'txt': text-only with blue label
- 'txt_grey': text-only with grey label
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'l' | 'm' | 's'",elements:[{name:"literal",value:"'l'"},{name:"literal",value:"'m'"},{name:"literal",value:"'s'"}]},description:`Size of the button.
- 'l': 40px height (large)
- 'm': 32px height (medium)
- 's': 24px height (small)
@default 'm'`,defaultValue:{value:"'m'",computed:!1}},content:{required:!1,tsType:{name:"union",raw:"'default' | 'icon_only'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'icon_only'"}]},description:`Layout mode.
- 'default': label with optional icons
- 'icon_only': icon only, no label
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the button is disabled.
Disables interaction and renders muted colours.
@default false`,defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show an icon on the left of the label.
@default false`,defaultValue:{value:"false",computed:!1}},rightIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show an icon on the right of the label.
@default false`,defaultValue:{value:"false",computed:!1}},selectIconLeft:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Custom React node rendered as the left icon.
Only rendered when leftIcon is true.`},selectIconRight:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Custom React node rendered as the right icon.
Only rendered when rightIcon is true.`},text:{required:!1,tsType:{name:"string"},description:`Button label text.
@default 'Button'`,defaultValue:{value:"'Button'",computed:!1}}},composes:["Omit"]};const{expect:M,fn:P,userEvent:N,within:se}=__STORYBOOK_MODULE_TEST__,H=["none",...Q],oe={l:16,m:14,s:12};function q(t,n){return t&&t!=="none"?e.jsx(ee,{name:t,size:n}):void 0}const ue={title:"Components/Button",component:l,parameters:{layout:"centered"},tags:["autodocs"],render:({leftIconName:t,rightIconName:n,size:s="m",...a})=>{const r=oe[s],d=q(t,r),o=q(n,r);return e.jsx(l,{...a,size:s,leftIcon:!!d,rightIcon:!!o,selectIconLeft:d,selectIconRight:o})},argTypes:{variant:{control:"select",options:["primary","secondary","txt","txt_grey"],description:"Visual style variant"},size:{control:"select",options:["l","m","s"],description:"Button size — l=40px, m=32px, s=24px"},content:{control:"select",options:["default","icon_only"],description:"Layout mode"},isDisabled:{control:"boolean"},leftIcon:{table:{disable:!0}},rightIcon:{table:{disable:!0}},selectIconLeft:{table:{disable:!0}},selectIconRight:{table:{disable:!0}},text:{control:"text"},onClick:{action:"clicked"},leftIconName:{control:"select",options:H,description:'Left icon — select an icon to enable, "none" to hide',table:{category:"Icons"}},rightIconName:{control:"select",options:H,description:'Right icon — select an icon to enable, "none" to hide',table:{category:"Icons"}}},args:{onClick:P(),leftIconName:"none",rightIconName:"none"}},u={args:{variant:"primary",size:"m",text:"Button"}},g={args:{variant:"primary",text:"Button"},play:async({canvasElement:t,args:n})=>{const a=se(t).getByRole("button");await N.click(a),M(n.onClick).toHaveBeenCalledTimes(1),await N.tab(),await N.keyboard("{Enter}"),M(n.onClick).toHaveBeenCalledTimes(2)}},x={args:{variant:"secondary",text:"Button"}},y={name:"Text (Blue)",args:{variant:"txt",text:"Button"}},f={name:"Text (Grey)",args:{variant:"txt_grey",text:"Button"}},h={name:"Size / Large (40px)",args:{size:"l",text:"Large"}},b={name:"Size / Medium (32px)",args:{size:"m",text:"Medium"}},v={name:"Size / Small (24px)",args:{size:"s",text:"Small"}},S={name:"Size / All Sizes",render:t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(l,{...t,size:"l",text:"Large (40px)"}),e.jsx(l,{...t,size:"m",text:"Medium (32px)"}),e.jsx(l,{...t,size:"s",text:"Small (24px)"})]}),args:{variant:"primary"}},I={args:{isDisabled:!0,text:"Disabled"}},z={name:"Disabled / Secondary",args:{variant:"secondary",isDisabled:!0,text:"Disabled"}},T={name:"Disabled / Text",args:{variant:"txt",isDisabled:!0,text:"Disabled"}},B={name:"Icons / Left Icon",args:{leftIconName:"search",text:"With Icon"}},j={name:"Icons / Right Icon",args:{rightIconName:"arrow-right",text:"With Icon"}},k={name:"Icons / Both Icons",args:{leftIconName:"search",rightIconName:"arrow-right",text:"With Icons"}},w={name:"Icons / Icon Only",args:{leftIconName:"search",content:"icon_only"}},D={name:"Edge / Long Label",args:{text:"This is a very long button label that exceeds fifty characters",variant:"primary"}},L={name:"Edge / Single Character",args:{text:"A",variant:"secondary"}},C={name:"Edge / Inside Form",render:t=>e.jsxs("form",{onSubmit:n=>{n.preventDefault(),alert("Form submitted!")},style:{display:"flex",flexDirection:"column",gap:12,padding:24,border:"1px solid #e5e7eb",borderRadius:8,minWidth:280},children:[e.jsxs("label",{style:{fontSize:13,color:"#374151"},children:["Email",e.jsx("input",{type:"email",placeholder:"you@example.com",style:{display:"block",marginTop:4,width:"100%",padding:"6px 8px",border:"1px solid #d1d5db",borderRadius:4,fontSize:13,boxSizing:"border-box"}})]}),e.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[e.jsx(l,{...t,variant:"txt_grey",text:"Cancel"}),e.jsx(l,{...t,variant:"primary",text:"Submit"})]})]}),args:{onClick:P()}},ie={bg:"Background",bgHover:"Background (hover)",bgDisabled:"Background (disabled)",text:"Text",textDisabled:"Text (disabled)",border:"Border",borderDisabled:"Border (disabled)"},R={name:"Token Usage",render:()=>{const t=Object.keys(A);return e.jsxs("div",{style:{fontFamily:"'Fira Sans', sans-serif",maxWidth:860,padding:"8px 0"},children:[e.jsx("p",{style:{margin:"0 0 28px",fontSize:12,color:"#5d7682"},children:"Each variant's colour slots mapped to their design token. Click a swatch to copy the hex value."}),t.map(n=>{const s=A[n];return e.jsxs("div",{style:{marginBottom:36},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:14},children:[e.jsx("h3",{style:{margin:0,fontSize:13,fontWeight:700,color:"#092f42",textTransform:"uppercase",letterSpacing:"0.06em",minWidth:80},children:n}),e.jsx(l,{variant:n,size:"m",text:"Preview"}),e.jsx(l,{variant:n,size:"m",text:"Disabled",isDisabled:!0})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"160px 140px 80px 1fr",gap:"6px 16px",alignItems:"center"},children:[["Slot","Token","Value",""].map(a=>e.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.06em",paddingBottom:4,borderBottom:"1px solid #ebeef0"},children:a},a)),Object.entries(s).map(([a,r])=>{const[d,o]=F.useState(!1),E=()=>{navigator.clipboard?.writeText(r.value),o(!0),setTimeout(()=>o(!1),1200)},m=r.value==="transparent"||r.value==="#0000000a";return e.jsxs(F.Fragment,{children:[e.jsx("div",{style:{fontSize:12,color:"#5d7682"},children:ie[a]??a}),e.jsx("div",{style:{fontSize:11,fontFamily:"monospace",color:"#092f42",background:"#f5f6f7",padding:"2px 6px",borderRadius:4},children:r.token}),e.jsx("div",{style:{fontSize:11,fontFamily:"monospace",color:"#5d7682"},children:m?"—":r.value}),e.jsx("div",{onClick:E,title:r.value,style:{width:28,height:18,borderRadius:4,background:m?"repeating-conic-gradient(#dfe4e6 0% 25%, #fff 0% 50%) 0 0 / 8px 8px":r.value,border:"1px solid rgba(0,0,0,0.1)",cursor:m?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:d&&e.jsx("span",{style:{fontSize:8,color:"#fff",fontWeight:700},children:"✓"})})]},a)})]})]},n)})]})}},_={name:"All Variants",render:()=>{const t=["primary","secondary","txt","txt_grey"],n=["l","m","s"],s=[{label:"Default",props:{}},{label:"Left icon",props:{leftIcon:!0}},{label:"Right icon",props:{rightIcon:!0}},{label:"Both icons",props:{leftIcon:!0,rightIcon:!0}},{label:"Icon only",props:{content:"icon_only"}},{label:"Disabled",props:{isDisabled:!0}}];return e.jsx("div",{style:{fontFamily:"sans-serif",overflowX:"auto"},children:t.map(a=>e.jsxs("div",{style:{marginBottom:40},children:[e.jsx("h3",{style:{margin:"0 0 12px",fontSize:13,color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.05em"},children:a}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, auto)",gap:"12px 24px",alignItems:"center",justifyItems:"start"},children:[n.map(r=>e.jsxs("div",{style:{fontSize:11,color:"#9ca3af",textAlign:"center"},children:[r.toUpperCase()," — ",r==="l"?"40px":r==="m"?"32px":"24px"]},r)),s.map(({label:r,props:d})=>n.map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:4},children:[e.jsx(l,{variant:a,size:o,text:"Button",...d}),e.jsx("span",{style:{fontSize:10,color:"#9ca3af"},children:r})]},`${r}-${o}`)))]})]},a))})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'm',
    text: 'Button'
  }
}`,...u.parameters?.docs?.source},description:{story:"Interactive playground — use controls to change variant, size, and icons",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    text: 'Button'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    // Click fires the handler
    await userEvent.click(button);
    expect(args.onClick).toHaveBeenCalledTimes(1);

    // Keyboard: tab focus then enter
    await userEvent.tab();
    await userEvent.keyboard('{Enter}');
    expect(args.onClick).toHaveBeenCalledTimes(2);
  }
}`,...g.parameters?.docs?.source},description:{story:"Filled blue — main call-to-action",...g.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    text: 'Button'
  }
}`,...x.parameters?.docs?.source},description:{story:"Outlined blue — secondary action",...x.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Text (Blue)',
  args: {
    variant: 'txt',
    text: 'Button'
  }
}`,...y.parameters?.docs?.source},description:{story:"Text-only with blue label — low-emphasis action",...y.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Text (Grey)',
  args: {
    variant: 'txt_grey',
    text: 'Button'
  }
}`,...f.parameters?.docs?.source},description:{story:"Text-only with grey label — minimal-emphasis action",...f.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Size / Large (40px)',
  args: {
    size: 'l',
    text: 'Large'
  }
}`,...h.parameters?.docs?.source},description:{story:"Large — 40px height",...h.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Size / Medium (32px)',
  args: {
    size: 'm',
    text: 'Medium'
  }
}`,...b.parameters?.docs?.source},description:{story:"Medium — 32px height",...b.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Size / Small (24px)',
  args: {
    size: 's',
    text: 'Small'
  }
}`,...v.parameters?.docs?.source},description:{story:"Small — 24px height",...v.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Size / All Sizes',
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 16
  }}>
      <LearnlightButton {...args} size="l" text="Large (40px)" />
      <LearnlightButton {...args} size="m" text="Medium (32px)" />
      <LearnlightButton {...args} size="s" text="Small (24px)" />
    </div>,
  args: {
    variant: 'primary'
  }
}`,...S.parameters?.docs?.source},description:{story:"All three sizes side by side",...S.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    text: 'Disabled'
  }
}`,...I.parameters?.docs?.source},description:{story:"Disabled state — all interactions blocked",...I.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Disabled / Secondary',
  args: {
    variant: 'secondary',
    isDisabled: true,
    text: 'Disabled'
  }
}`,...z.parameters?.docs?.source},description:{story:"Disabled secondary",...z.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Disabled / Text',
  args: {
    variant: 'txt',
    isDisabled: true,
    text: 'Disabled'
  }
}`,...T.parameters?.docs?.source},description:{story:"Disabled text",...T.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Icons / Left Icon',
  args: {
    leftIconName: 'search',
    text: 'With Icon'
  }
}`,...B.parameters?.docs?.source},description:{story:"Left icon + label",...B.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Icons / Right Icon',
  args: {
    rightIconName: 'arrow-right',
    text: 'With Icon'
  }
}`,...j.parameters?.docs?.source},description:{story:"Right icon + label",...j.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Icons / Both Icons',
  args: {
    leftIconName: 'search',
    rightIconName: 'arrow-right',
    text: 'With Icons'
  }
}`,...k.parameters?.docs?.source},description:{story:"Both icons flanking the label",...k.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Icons / Icon Only',
  args: {
    leftIconName: 'search',
    content: 'icon_only'
  }
}`,...w.parameters?.docs?.source},description:{story:"Icon-only — no label",...w.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Edge / Long Label',
  args: {
    text: 'This is a very long button label that exceeds fifty characters',
    variant: 'primary'
  }
}`,...D.parameters?.docs?.source},description:{story:"Long label — 50+ characters to verify truncation / wrapping behaviour",...D.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Edge / Single Character',
  args: {
    text: 'A',
    variant: 'secondary'
  }
}`,...L.parameters?.docs?.source},description:{story:"Short single character",...L.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Edge / Inside Form',
  render: args => <form onSubmit={e => {
    e.preventDefault();
    alert('Form submitted!');
  }} style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    padding: 24,
    border: '1px solid #e5e7eb',
    borderRadius: 8,
    minWidth: 280
  }}>
      <label style={{
      fontSize: 13,
      color: '#374151'
    }}>
        Email
        <input type="email" placeholder="you@example.com" style={{
        display: 'block',
        marginTop: 4,
        width: '100%',
        padding: '6px 8px',
        border: '1px solid #d1d5db',
        borderRadius: 4,
        fontSize: 13,
        boxSizing: 'border-box'
      }} />
      </label>
      <div style={{
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end'
    }}>
        <LearnlightButton {...args} variant="txt_grey" text="Cancel" />
        <LearnlightButton {...args} variant="primary" text="Submit" />
      </div>
    </form>,
  args: {
    onClick: fn()
  }
}`,...C.parameters?.docs?.source},description:{story:'Inside a form — verifies default type="button" does not submit',...C.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Token Usage',
  render: () => {
    const variants = Object.keys(buttonTokens) as Array<keyof typeof buttonTokens>;
    return <div style={{
      fontFamily: "'Fira Sans', sans-serif",
      maxWidth: 860,
      padding: '8px 0'
    }}>
        <p style={{
        margin: '0 0 28px',
        fontSize: 12,
        color: '#5d7682'
      }}>
          Each variant's colour slots mapped to their design token. Click a swatch to copy the hex value.
        </p>
        {variants.map(variant => {
        const slots = buttonTokens[variant];
        return <div key={variant} style={{
          marginBottom: 36
        }}>
              {/* Variant header with live preview */}
              <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 14
          }}>
                <h3 style={{
              margin: 0,
              fontSize: 13,
              fontWeight: 700,
              color: '#092f42',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              minWidth: 80
            }}>
                  {variant}
                </h3>
                <LearnlightButton variant={variant} size="m" text="Preview" />
                <LearnlightButton variant={variant} size="m" text="Disabled" isDisabled />
              </div>

              {/* Token rows */}
              <div style={{
            display: 'grid',
            gridTemplateColumns: '160px 140px 80px 1fr',
            gap: '6px 16px',
            alignItems: 'center'
          }}>
                {/* Header */}
                {['Slot', 'Token', 'Value', ''].map(h => <div key={h} style={{
              fontSize: 10,
              fontWeight: 700,
              color: '#9ca3af',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              paddingBottom: 4,
              borderBottom: '1px solid #ebeef0'
            }}>{h}</div>)}

                {/* Rows */}
                {(Object.entries(slots) as Array<[string, {
              token: string;
              value: string;
            }]>).map(([slot, t]) => {
              const [copied, setCopied] = React.useState(false);
              const copy = () => {
                navigator.clipboard?.writeText(t.value);
                setCopied(true);
                setTimeout(() => setCopied(false), 1200);
              };
              const isTransparent = t.value === 'transparent' || t.value === '#0000000a';
              return <React.Fragment key={slot}>
                      <div style={{
                  fontSize: 12,
                  color: '#5d7682'
                }}>{SLOT_LABELS[slot] ?? slot}</div>
                      <div style={{
                  fontSize: 11,
                  fontFamily: 'monospace',
                  color: '#092f42',
                  background: '#f5f6f7',
                  padding: '2px 6px',
                  borderRadius: 4
                }}>
                        {t.token}
                      </div>
                      <div style={{
                  fontSize: 11,
                  fontFamily: 'monospace',
                  color: '#5d7682'
                }}>{isTransparent ? '—' : t.value}</div>
                      <div onClick={copy} title={t.value} style={{
                  width: 28,
                  height: 18,
                  borderRadius: 4,
                  background: isTransparent ? 'repeating-conic-gradient(#dfe4e6 0% 25%, #fff 0% 50%) 0 0 / 8px 8px' : t.value,
                  border: '1px solid rgba(0,0,0,0.1)',
                  cursor: isTransparent ? 'default' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                        {copied && <span style={{
                    fontSize: 8,
                    color: '#fff',
                    fontWeight: 700
                  }}>✓</span>}
                      </div>
                    </React.Fragment>;
            })}
              </div>
            </div>;
      })}
      </div>;
  }
}`,...R.parameters?.docs?.source},description:{story:`Maps each button variant to the design tokens it consumes.
Every colour swatch is a direct reference to the Color Palette story.`,...R.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => {
    const variants = ['primary', 'secondary', 'txt', 'txt_grey'] as const;
    const sizes = ['l', 'm', 's'] as const;
    const states: Array<{
      label: string;
      props: Partial<React.ComponentProps<typeof LearnlightButton>>;
    }> = [{
      label: 'Default',
      props: {}
    }, {
      label: 'Left icon',
      props: {
        leftIcon: true
      }
    }, {
      label: 'Right icon',
      props: {
        rightIcon: true
      }
    }, {
      label: 'Both icons',
      props: {
        leftIcon: true,
        rightIcon: true
      }
    }, {
      label: 'Icon only',
      props: {
        content: 'icon_only'
      }
    }, {
      label: 'Disabled',
      props: {
        isDisabled: true
      }
    }];
    return <div style={{
      fontFamily: 'sans-serif',
      overflowX: 'auto'
    }}>
        {variants.map(variant => <div key={variant} style={{
        marginBottom: 40
      }}>
            <h3 style={{
          margin: '0 0 12px',
          fontSize: 13,
          color: '#6b7280',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
              {variant}
            </h3>
            <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, auto)',
          gap: '12px 24px',
          alignItems: 'center',
          justifyItems: 'start'
        }}>
              {/* column headers */}
              {sizes.map(s => <div key={s} style={{
            fontSize: 11,
            color: '#9ca3af',
            textAlign: 'center'
          }}>
                  {s.toUpperCase()} — {s === 'l' ? '40px' : s === 'm' ? '32px' : '24px'}
                </div>)}
              {states.map(({
            label,
            props
          }) => sizes.map(s => <div key={\`\${label}-\${s}\`} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 4
          }}>
                    <LearnlightButton variant={variant} size={s} text="Button" {...props} />
                    <span style={{
              fontSize: 10,
              color: '#9ca3af'
            }}>{label}</span>
                  </div>))}
            </div>
          </div>)}
      </div>;
  }
}`,..._.parameters?.docs?.source},description:{story:"Every variant × size × state at a glance",..._.parameters?.docs?.description}}};const ge=["Default","Primary","Secondary","TextBlue","TextGrey","SizeLarge","SizeMedium","SizeSmall","AllSizes","Disabled","DisabledSecondary","DisabledText","WithLeftIcon","WithRightIcon","WithBothIcons","IconOnly","LongText","ShortText","InsideForm","TokenUsage","AllVariants"];export{S as AllSizes,_ as AllVariants,u as Default,I as Disabled,z as DisabledSecondary,T as DisabledText,w as IconOnly,C as InsideForm,D as LongText,g as Primary,x as Secondary,L as ShortText,h as SizeLarge,b as SizeMedium,v as SizeSmall,y as TextBlue,f as TextGrey,R as TokenUsage,k as WithBothIcons,B as WithLeftIcon,j as WithRightIcon,ge as __namedExportsOrder,ue as default};
