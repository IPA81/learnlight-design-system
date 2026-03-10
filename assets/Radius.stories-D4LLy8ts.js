import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-CHmeEH28.js";import{r as t,c as r}from"./tokens-Cvach79u.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Foundations/Radius",parameters:{layout:"padded"},tags:["autodocs"]},a={fontFamily:"'Fira Sans', sans-serif",color:r["text-primary"]},n={name:"Primitives",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32,padding:"40px 0"},children:Object.entries(t).map(([i,s])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:32},children:[e.jsx("div",{style:{width:120,height:64,borderRadius:s,background:r["bg-secondary"],border:`1px solid ${r["border-primary"]}`,flexShrink:0}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[e.jsxs("span",{style:{...a,fontSize:16,fontWeight:600},children:["border-radius-",i]}),e.jsxs("span",{style:{...a,fontSize:14,color:r["text-secondary"]},children:[s,"px"]})]})]},i))})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Primitives',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    padding: '40px 0'
  }}>
      {(Object.entries(radiusScale) as [keyof typeof radiusScale, number][]).map(([name, value]) => <div key={name} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }}>
          <div style={{
        width: 120,
        height: 64,
        borderRadius: value,
        background: color['bg-secondary'],
        border: \`1px solid \${color['border-primary']}\`,
        flexShrink: 0
      }} />
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}>
            <span style={{
          ...FONT,
          fontSize: 16,
          fontWeight: 600
        }}>border-radius-{name}</span>
            <span style={{
          ...FONT,
          fontSize: 14,
          color: color['text-secondary']
        }}>{value}px</span>
          </div>
        </div>)}
    </div>
}`,...n.parameters?.docs?.source}}};const m=["Primitives"];export{n as Primitives,m as __namedExportsOrder,p as default};
