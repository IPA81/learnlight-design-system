import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-CHmeEH28.js";import{c as d,f as n,e as i,g as o}from"./tokens-Cvach79u.js";import"./preload-helper-PPVm8Dsz.js";const f={title:"Foundations/Borders",parameters:{layout:"padded"},tags:["autodocs"]},r={fontFamily:"'Fira Sans', sans-serif",color:d["text-primary"]},t={name:"Primitives",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40,padding:"40px 0"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:40},children:[e.jsx("div",{style:{width:180,height:80,borderRadius:8,border:`${o.border1.width} ${o.border1.style} ${o.border1.color}`,background:d["bg-primary"]}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("span",{style:{...r,fontSize:16,fontWeight:600},children:"border1"}),e.jsxs("span",{style:{...r,fontSize:14,color:d["text-secondary"]},children:["1px solid color[border-primary] — ",d["border-primary"]]}),e.jsx("span",{style:{...r,fontSize:12,color:d["text-secondary"]},children:"Used by: button, tag, card, header"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:40},children:[e.jsx("div",{style:{width:180,height:80,borderBottom:`${o.border2.width} ${o.border2.style} ${o.border2.color}`,background:d["bg-primary"]}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("span",{style:{...r,fontSize:16,fontWeight:600},children:"border2"}),e.jsxs("span",{style:{...r,fontSize:14,color:d["text-secondary"]},children:["border-bottom: 1px solid color[border-primary] — ",d["border-primary"]]}),e.jsx("span",{style:{...r,fontSize:12,color:d["text-secondary"]},children:"Used by: header"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:40},children:[e.jsx("div",{style:{width:180,height:80,borderRadius:8,border:`${o.border3.width} ${o.border3.style} ${o.border3.color}`,background:d["bg-primary"]}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("span",{style:{...r,fontSize:16,fontWeight:600},children:"border3"}),e.jsxs("span",{style:{...r,fontSize:14,color:d["text-secondary"]},children:["2px solid color[border-brand] — ",d["border-brand"]]}),e.jsx("span",{style:{...r,fontSize:12,color:d["text-secondary"]},children:"Used by: highlight-card"})]})]})]})},s={name:"All Borders",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48,padding:"40px 0"},children:[e.jsxs("div",{style:{display:"flex",gap:80},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:{...r,fontSize:18,fontWeight:600},children:"Tokens"}),["border-header = border2","button-border = border1","tag-border = border1","border-card = border1","border-highlight-cards = border3"].map(b=>e.jsx("span",{style:{...r,fontSize:16},children:b},b))]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:{...r,fontSize:18,fontWeight:600},children:"Primitives"}),e.jsx("span",{style:{...r,fontSize:16},children:"border1 = 1px solid border-primary (or needed color)"}),e.jsx("span",{style:{...r,fontSize:16},children:"border2 = border-bottom: 1px solid border-primary"}),e.jsx("span",{style:{...r,fontSize:16},children:"border3 = outline: 2px solid border-brand"})]})]}),e.jsxs("div",{style:{background:d["bg-primary"],border:n["highlight-card"],borderRadius:8,padding:12,display:"flex",justifyContent:"space-between",alignItems:"flex-start",width:560},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("p",{style:{...r,fontSize:18,margin:0},children:"Highlight outline — border3"}),e.jsx("p",{style:{...r,fontSize:12,color:d["text-secondary"],margin:0},children:'used on "happening now" conversations card'})]}),e.jsx("div",{style:{border:n.button,borderRadius:6,padding:"6px 8px",display:"inline-flex"},children:e.jsx("span",{style:{...r,fontSize:14,fontWeight:600},children:"Buttons — border1"})})]}),e.jsx("div",{style:{border:n.tag,borderRadius:4,padding:"4px 8px"},children:e.jsx("span",{style:{...r,fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px",color:d["text-secondary"]},children:"Tags — border1"})})]}),e.jsx("div",{style:{background:d["bg-primary"],borderBottom:n.header,boxShadow:i["page-header"],height:40,width:480,display:"flex",alignItems:"center",padding:"0 12px"},children:e.jsx("span",{style:{...r,fontSize:16},children:"Page header — border = border2"})}),e.jsx("div",{style:{background:d["bg-primary"],border:n.card,borderRadius:16,boxShadow:i.card,width:240,height:180,display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:12},children:e.jsx("span",{style:{...r,fontSize:16},children:"card-border — border1"})}),e.jsx("div",{style:{background:d["bg-primary"],border:n.focus,borderRadius:16,boxShadow:i.focus,width:240,height:120,display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:12},children:e.jsx("span",{style:{...r,fontSize:16},children:"focus state — border1 accent color"})})]})},a={name:"Token / border-highlight-cards (border3)",render:()=>e.jsx("div",{style:{padding:"40px 0"},children:e.jsxs("div",{style:{background:d["bg-primary"],border:n["highlight-card"],borderRadius:8,padding:12,display:"flex",justifyContent:"space-between",alignItems:"flex-start",width:440},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("p",{style:{...r,fontSize:18,margin:0},children:"Highlight outline — border3"}),e.jsx("p",{style:{...r,fontSize:12,color:d["text-secondary"],margin:0},children:'used on "happening now" conversations card'})]}),e.jsx("div",{style:{border:n.button,borderRadius:6,padding:"6px 8px",display:"inline-flex"},children:e.jsx("span",{style:{...r,fontSize:14,fontWeight:600},children:"Buttons — border1"})})]}),e.jsx("div",{style:{border:n.tag,borderRadius:4,padding:"4px 8px"},children:e.jsx("span",{style:{...r,fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px",color:d["text-secondary"]},children:"Tags — border1"})})]})})},l={name:"Token / border-header (border2)",render:()=>e.jsx("div",{style:{padding:"40px 0"},children:e.jsx("div",{style:{background:d["bg-primary"],borderBottom:n.header,boxShadow:i["page-header"],height:40,width:480,display:"flex",alignItems:"center",padding:"0 12px"},children:e.jsx("span",{style:{...r,fontSize:16},children:"Page header — border2"})})})},c={name:"Token / border-card (border1)",render:()=>e.jsx("div",{style:{padding:"40px 0"},children:e.jsx("div",{style:{background:d["bg-primary"],border:n.card,borderRadius:16,boxShadow:i.card,width:240,height:180,display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:12},children:e.jsx("span",{style:{...r,fontSize:16},children:"card-border — border1"})})})},p={name:"Token / focus border (border1 accent)",render:()=>e.jsx("div",{style:{padding:"40px 0"},children:e.jsx("div",{style:{background:d["bg-primary"],border:n.focus,borderRadius:16,boxShadow:i.focus,width:240,height:120,display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:12},children:e.jsx("span",{style:{...r,fontSize:16},children:"Focus state — border1 accent color"})})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Primitives',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    padding: '40px 0'
  }}>

      {/* border1 */}
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }}>
        <div style={{
        width: 180,
        height: 80,
        borderRadius: 8,
        border: \`\${borderScale.border1.width} \${borderScale.border1.style} \${borderScale.border1.color}\`,
        background: color['bg-primary']
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
        }}>border1</span>
          <span style={{
          ...FONT,
          fontSize: 14,
          color: color['text-secondary']
        }}>
            1px solid color[border-primary] — {color['border-primary']}
          </span>
          <span style={{
          ...FONT,
          fontSize: 12,
          color: color['text-secondary']
        }}>
            Used by: button, tag, card, header
          </span>
        </div>
      </div>

      {/* border2 */}
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }}>
        <div style={{
        width: 180,
        height: 80,
        borderBottom: \`\${borderScale.border2.width} \${borderScale.border2.style} \${borderScale.border2.color}\`,
        background: color['bg-primary']
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
        }}>border2</span>
          <span style={{
          ...FONT,
          fontSize: 14,
          color: color['text-secondary']
        }}>
            border-bottom: 1px solid color[border-primary] — {color['border-primary']}
          </span>
          <span style={{
          ...FONT,
          fontSize: 12,
          color: color['text-secondary']
        }}>
            Used by: header
          </span>
        </div>
      </div>

      {/* border3 */}
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }}>
        <div style={{
        width: 180,
        height: 80,
        borderRadius: 8,
        border: \`\${borderScale.border3.width} \${borderScale.border3.style} \${borderScale.border3.color}\`,
        background: color['bg-primary']
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
        }}>border3</span>
          <span style={{
          ...FONT,
          fontSize: 14,
          color: color['text-secondary']
        }}>
            2px solid color[border-brand] — {color['border-brand']}
          </span>
          <span style={{
          ...FONT,
          fontSize: 12,
          color: color['text-secondary']
        }}>
            Used by: highlight-card
          </span>
        </div>
      </div>

    </div>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'All Borders',
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
          {['border-header = border2', 'button-border = border1', 'tag-border = border1', 'border-card = border1', 'border-highlight-cards = border3'].map(line => <span key={line} style={{
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
          <span style={{
          ...FONT,
          fontSize: 16
        }}>border1 = 1px solid border-primary (or needed color)</span>
          <span style={{
          ...FONT,
          fontSize: 16
        }}>border2 = border-bottom: 1px solid border-primary</span>
          <span style={{
          ...FONT,
          fontSize: 16
        }}>border3 = outline: 2px solid border-brand</span>
        </div>
      </div>

      {/* Highlight outline — border3 card with button + tag inside */}
      <div style={{
      background: color['bg-primary'],
      border: border['highlight-card'],
      borderRadius: 8,
      padding: 12,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: 560
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
          <div>
            <p style={{
            ...FONT,
            fontSize: 18,
            margin: 0
          }}>Highlight outline — border3</p>
            <p style={{
            ...FONT,
            fontSize: 12,
            color: color['text-secondary'],
            margin: 0
          }}>
              used on "happening now" conversations card
            </p>
          </div>
          <div style={{
          border: border['button'],
          borderRadius: 6,
          padding: '6px 8px',
          display: 'inline-flex'
        }}>
            <span style={{
            ...FONT,
            fontSize: 14,
            fontWeight: 600
          }}>Buttons — border1</span>
          </div>
        </div>
        <div style={{
        border: border['tag'],
        borderRadius: 4,
        padding: '4px 8px'
      }}>
          <span style={{
          ...FONT,
          fontSize: 10,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          color: color['text-secondary']
        }}>
            Tags — border1
          </span>
        </div>
      </div>

      {/* Page header — border2 (bottom only) */}
      <div style={{
      background: color['bg-primary'],
      borderBottom: border['header'],
      boxShadow: shadow['page-header'],
      height: 40,
      width: 480,
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px'
    }}>
        <span style={{
        ...FONT,
        fontSize: 16
      }}>Page header — border = border2</span>
      </div>

      {/* Card border — border1 */}
      <div style={{
      background: color['bg-primary'],
      border: border['card'],
      borderRadius: 16,
      boxShadow: shadow['card'],
      width: 240,
      height: 180,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 12
    }}>
        <span style={{
        ...FONT,
        fontSize: 16
      }}>card-border — border1</span>
      </div>

      {/* Focus state — border1 accent color */}
      <div style={{
      background: color['bg-primary'],
      border: border['focus'],
      borderRadius: 16,
      boxShadow: shadow['focus'],
      width: 240,
      height: 120,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 12
    }}>
        <span style={{
        ...FONT,
        fontSize: 16
      }}>focus state — border1 accent color</span>
      </div>

    </div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Token / border-highlight-cards (border3)',
  render: () => <div style={{
    padding: '40px 0'
  }}>
      <div style={{
      background: color['bg-primary'],
      border: border['highlight-card'],
      borderRadius: 8,
      padding: 12,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: 440
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
          <div>
            <p style={{
            ...FONT,
            fontSize: 18,
            margin: 0
          }}>Highlight outline — border3</p>
            <p style={{
            ...FONT,
            fontSize: 12,
            color: color['text-secondary'],
            margin: 0
          }}>
              used on "happening now" conversations card
            </p>
          </div>
          <div style={{
          border: border['button'],
          borderRadius: 6,
          padding: '6px 8px',
          display: 'inline-flex'
        }}>
            <span style={{
            ...FONT,
            fontSize: 14,
            fontWeight: 600
          }}>Buttons — border1</span>
          </div>
        </div>
        <div style={{
        border: border['tag'],
        borderRadius: 4,
        padding: '4px 8px'
      }}>
          <span style={{
          ...FONT,
          fontSize: 10,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          color: color['text-secondary']
        }}>
            Tags — border1
          </span>
        </div>
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Token / border-header (border2)',
  render: () => <div style={{
    padding: '40px 0'
  }}>
      <div style={{
      background: color['bg-primary'],
      borderBottom: border['header'],
      boxShadow: shadow['page-header'],
      height: 40,
      width: 480,
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px'
    }}>
        <span style={{
        ...FONT,
        fontSize: 16
      }}>Page header — border2</span>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Token / border-card (border1)',
  render: () => <div style={{
    padding: '40px 0'
  }}>
      <div style={{
      background: color['bg-primary'],
      border: border['card'],
      borderRadius: 16,
      boxShadow: shadow['card'],
      width: 240,
      height: 180,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 12
    }}>
        <span style={{
        ...FONT,
        fontSize: 16
      }}>card-border — border1</span>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Token / focus border (border1 accent)',
  render: () => <div style={{
    padding: '40px 0'
  }}>
      <div style={{
      background: color['bg-primary'],
      border: border['focus'],
      borderRadius: 16,
      boxShadow: shadow['focus'],
      width: 240,
      height: 120,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 12
    }}>
        <span style={{
        ...FONT,
        fontSize: 16
      }}>Focus state — border1 accent color</span>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};const m=["Primitives","AllBorders","HighlightCard","PageHeader","CardBorder","FocusBorder"];export{s as AllBorders,c as CardBorder,p as FocusBorder,a as HighlightCard,l as PageHeader,t as Primitives,m as __namedExportsOrder,f as default};
