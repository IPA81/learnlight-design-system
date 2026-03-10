import{j as e}from"./jsx-runtime-u17CrQMm.js";import{i as t,I as s}from"./Icons-BQznmR0U.js";const o={title:"Learnlight/Icons",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"select",options:t},size:{control:{type:"range",min:12,max:64,step:4}}},args:{name:"search",size:16}},a={},r={parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(72px, 1fr))",gap:4},children:t.map(n=>e.jsxs("div",{title:n,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6,padding:"10px 4px 8px",borderRadius:6,background:"#f8fafc"},children:[e.jsx("div",{style:{width:16,height:16,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(s,{name:n,size:16})}),e.jsx("span",{style:{fontSize:8,color:"#6b7280",textAlign:"center",wordBreak:"break-all",lineHeight:1.3},children:n})]},n))})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(72px, 1fr))',
    gap: 4
  }}>
      {iconNames.map(name => <div key={name} title={name} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      padding: '10px 4px 8px',
      borderRadius: 6,
      background: '#f8fafc'
    }}>
          <div style={{
        width: 16,
        height: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
            <Icon name={name} size={16} />
          </div>
          <span style={{
        fontSize: 8,
        color: '#6b7280',
        textAlign: 'center',
        wordBreak: 'break-all',
        lineHeight: 1.3
      }}>
            {name}
          </span>
        </div>)}
    </div>
}`,...r.parameters?.docs?.source}}};const d=["Single","Gallery"];export{r as Gallery,a as Single,d as __namedExportsOrder,o as default};
