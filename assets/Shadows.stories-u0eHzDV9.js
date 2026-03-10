import{j as n}from"./jsx-runtime-u17CrQMm.js";import"./iframe-CHmeEH28.js";import{c as s,d as x,e as a}from"./tokens-Cvach79u.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Foundations/Shadows",parameters:{layout:"padded"},tags:["autodocs"]},e={fontFamily:"'Fira Sans', sans-serif",color:s["text-primary"]},d={background:s["bg-primary"],border:`1px solid ${s["border-secondary"]}`,borderRadius:16,width:240,height:180,display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:12,overflow:"hidden"},t={name:"Primitives",render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:40,padding:"40px 0"},children:Object.entries(x).map(([o,r])=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:40},children:[n.jsx("div",{style:{...d,boxShadow:r}}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[n.jsx("span",{style:{...e,fontSize:16,fontWeight:600},children:o}),n.jsx("span",{style:{...e,fontSize:14,color:s["text-secondary"]},children:r})]})]},o))})},i={name:"Token / card-shadow",render:()=>n.jsx("div",{style:{padding:"40px 0"},children:n.jsxs("div",{style:{...d,boxShadow:a.card},children:[n.jsx("span",{style:{...e,fontSize:14},children:"card-shadow"}),n.jsx("span",{style:{...e,fontSize:12,color:s["text-secondary"]},children:a.card})]})})},l={name:"Token / page-header-shadow",render:()=>n.jsx("div",{style:{padding:"40px 0"},children:n.jsx("div",{style:{background:s["bg-brand"],borderBottom:`1px solid ${s["border-primary"]}`,boxShadow:a["page-header"],height:40,display:"flex",alignItems:"center",padding:"0 12px",width:480},children:n.jsxs("span",{style:{...e,fontSize:14,color:s["text-invert"]},children:["page-header-shadow — ",a["page-header"]]})})})},c={name:"Token / modal-shadow",render:()=>n.jsx("div",{style:{padding:"40px 0"},children:n.jsxs("div",{style:{...d,boxShadow:a.modal},children:[n.jsx("span",{style:{...e,fontSize:14},children:"modal"}),n.jsx("span",{style:{...e,fontSize:12,color:s["text-secondary"]},children:a.modal})]})})},p={name:"Token / focus-shadow",render:()=>n.jsx("div",{style:{padding:"40px 0"},children:n.jsxs("div",{style:{...d,border:`1px solid ${s.focus}`,boxShadow:a.focus},children:[n.jsx("span",{style:{...e,fontSize:14},children:"Focus state"}),n.jsx("span",{style:{...e,fontSize:12,color:s["text-secondary"]},children:a.focus})]})})},h={name:"All Shadows",render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48,padding:"40px 0"},children:[n.jsxs("div",{style:{display:"flex",gap:80},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[n.jsx("span",{style:{...e,fontSize:18,fontWeight:600},children:"Tokens"}),["card-shadow = shadow1","page-header-shadow = shadow1","modal = shadow2"].map(o=>n.jsx("span",{style:{...e,fontSize:16},children:o},o))]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[n.jsx("span",{style:{...e,fontSize:18,fontWeight:600},children:"Primitives"}),Object.entries(x).map(([o,r])=>n.jsxs("span",{style:{...e,fontSize:16},children:[o," = box-shadow: ",r]},o))]})]}),n.jsxs("div",{style:{...d,boxShadow:a.card},children:[n.jsx("span",{style:{...e,fontSize:14},children:"card-shadow"}),n.jsx("span",{style:{...e,fontSize:12,color:s["text-secondary"]},children:a.card})]}),n.jsx("div",{style:{background:s["bg-brand"],borderBottom:`1px solid ${s["border-primary"]}`,boxShadow:a["page-header"],height:40,display:"flex",alignItems:"center",padding:"0 12px",width:480},children:n.jsxs("span",{style:{...e,fontSize:14,color:s["text-invert"]},children:["page-header-shadow — ",a["page-header"]]})}),n.jsxs("div",{style:{...d,boxShadow:a.modal},children:[n.jsx("span",{style:{...e,fontSize:14},children:"modal"}),n.jsx("span",{style:{...e,fontSize:12,color:s["text-secondary"]},children:a.modal})]}),n.jsxs("div",{style:{...d,border:`1px solid ${s.focus}`,boxShadow:a.focus},children:[n.jsx("span",{style:{...e,fontSize:14},children:"Focus state"}),n.jsx("span",{style:{...e,fontSize:12,color:s["text-secondary"]},children:a.focus})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Primitives',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    padding: '40px 0'
  }}>
      {(Object.entries(shadowScale) as [keyof typeof shadowScale, string][]).map(([name, value]) => <div key={name} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }}>
          <div style={{
        ...CARD,
        boxShadow: value
      }} />
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}>
            <span style={{
          ...FONT,
          fontSize: 16,
          fontWeight: 600
        }}>{name}</span>
            <span style={{
          ...FONT,
          fontSize: 14,
          color: color['text-secondary']
        }}>{value}</span>
          </div>
        </div>)}
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Token / card-shadow',
  render: () => <div style={{
    padding: '40px 0'
  }}>
      <div style={{
      ...CARD,
      boxShadow: shadow['card']
    }}>
        <span style={{
        ...FONT,
        fontSize: 14
      }}>card-shadow</span>
        <span style={{
        ...FONT,
        fontSize: 12,
        color: color['text-secondary']
      }}>{shadow['card']}</span>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Token / page-header-shadow',
  render: () => <div style={{
    padding: '40px 0'
  }}>
      <div style={{
      background: color['bg-brand'],
      borderBottom: \`1px solid \${color['border-primary']}\`,
      boxShadow: shadow['page-header'],
      height: 40,
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px',
      width: 480
    }}>
        <span style={{
        ...FONT,
        fontSize: 14,
        color: color['text-invert']
      }}>
          page-header-shadow — {shadow['page-header']}
        </span>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Token / modal-shadow',
  render: () => <div style={{
    padding: '40px 0'
  }}>
      <div style={{
      ...CARD,
      boxShadow: shadow['modal']
    }}>
        <span style={{
        ...FONT,
        fontSize: 14
      }}>modal</span>
        <span style={{
        ...FONT,
        fontSize: 12,
        color: color['text-secondary']
      }}>{shadow['modal']}</span>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Token / focus-shadow',
  render: () => <div style={{
    padding: '40px 0'
  }}>
      <div style={{
      ...CARD,
      border: \`1px solid \${color['focus']}\`,
      boxShadow: shadow['focus']
    }}>
        <span style={{
        ...FONT,
        fontSize: 14
      }}>Focus state</span>
        <span style={{
        ...FONT,
        fontSize: 12,
        color: color['text-secondary']
      }}>{shadow['focus']}</span>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'All Shadows',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48,
    padding: '40px 0'
  }}>

      {/* Token → Primitive reference table */}
      <div style={{
      display: 'flex',
      gap: 80
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
          <span style={{
          ...FONT,
          fontSize: 18,
          fontWeight: 600
        }}>Tokens</span>
          {['card-shadow = shadow1', 'page-header-shadow = shadow1', 'modal = shadow2'].map(line => <span key={line} style={{
          ...FONT,
          fontSize: 16
        }}>{line}</span>)}
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
          <span style={{
          ...FONT,
          fontSize: 18,
          fontWeight: 600
        }}>Primitives</span>
          {(Object.entries(shadowScale) as [string, string][]).map(([name, value]) => <span key={name} style={{
          ...FONT,
          fontSize: 16
        }}>{name} = box-shadow: {value}</span>)}
        </div>
      </div>

      {/* card-shadow */}
      <div style={{
      ...CARD,
      boxShadow: shadow['card']
    }}>
        <span style={{
        ...FONT,
        fontSize: 14
      }}>card-shadow</span>
        <span style={{
        ...FONT,
        fontSize: 12,
        color: color['text-secondary']
      }}>{shadow['card']}</span>
      </div>

      {/* page-header-shadow */}
      <div style={{
      background: color['bg-brand'],
      borderBottom: \`1px solid \${color['border-primary']}\`,
      boxShadow: shadow['page-header'],
      height: 40,
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px',
      width: 480
    }}>
        <span style={{
        ...FONT,
        fontSize: 14,
        color: color['text-invert']
      }}>
          page-header-shadow — {shadow['page-header']}
        </span>
      </div>

      {/* modal */}
      <div style={{
      ...CARD,
      boxShadow: shadow['modal']
    }}>
        <span style={{
        ...FONT,
        fontSize: 14
      }}>modal</span>
        <span style={{
        ...FONT,
        fontSize: 12,
        color: color['text-secondary']
      }}>{shadow['modal']}</span>
      </div>

      {/* focus */}
      <div style={{
      ...CARD,
      border: \`1px solid \${color['focus']}\`,
      boxShadow: shadow['focus']
    }}>
        <span style={{
        ...FONT,
        fontSize: 14
      }}>Focus state</span>
        <span style={{
        ...FONT,
        fontSize: 12,
        color: color['text-secondary']
      }}>{shadow['focus']}</span>
      </div>

    </div>
}`,...h.parameters?.docs?.source}}};const S=["Primitives","CardShadow","PageHeaderShadow","ModalShadow","FocusShadow","AllShadows"];export{h as AllShadows,i as CardShadow,p as FocusShadow,c as ModalShadow,l as PageHeaderShadow,t as Primitives,S as __namedExportsOrder,g as default};
