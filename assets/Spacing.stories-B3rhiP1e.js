import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-CHmeEH28.js";import{s as r,c as s,b as l}from"./tokens-Cvach79u.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Foundations/Spacing",parameters:{layout:"padded"},tags:["autodocs"]},t={fontFamily:"'Fira Sans', sans-serif",color:s["text-primary"]},i={name:"Primitives",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32,padding:"40px 0",width:"100%"},children:Object.entries(r).filter(([n])=>n!=="none").map(([n,a])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("div",{style:{width:"100%",height:a,background:s["bg-secondary"],borderRadius:2,flexShrink:0}}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"baseline",whiteSpace:"nowrap",minWidth:340},children:[e.jsx("span",{style:{...t,fontSize:16},children:l[n]}),e.jsxs("span",{style:{...t,fontSize:14,color:s["text-secondary"]},children:[a,"px"]})]})]},n))})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Primitives',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    padding: '40px 0',
    width: '100%'
  }}>
      {(Object.entries(spacingScale) as [keyof typeof spacingScale, number][]).filter(([key]) => key !== 'none').map(([key, value]) => <div key={key} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
            {/* Bar */}
            <div style={{
        width: '100%',
        height: value,
        background: color['bg-secondary'],
        borderRadius: 2,
        flexShrink: 0
      }} />
            {/* Label */}
            <div style={{
        display: 'flex',
        gap: 8,
        alignItems: 'baseline',
        whiteSpace: 'nowrap',
        minWidth: 340
      }}>
              <span style={{
          ...FONT,
          fontSize: 16
        }}>{spacingNames[key]}</span>
              <span style={{
          ...FONT,
          fontSize: 14,
          color: color['text-secondary']
        }}>{value}px</span>
            </div>
          </div>)}
    </div>
}`,...i.parameters?.docs?.source}}};const y=["Primitives"];export{i as Primitives,y as __namedExportsOrder,m as default};
