import React from 'react'

export default function Signup() {
  return (
  <div className="center-container" style={{display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
    
      <div style={{width: 556, height: 742, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 40, display: 'inline-flex'}}>
<div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
  <div style={{textAlign: 'center', color: '#333333', fontSize: 32, fontFamily: 'Poppins', fontWeight: '1000', wordWrap: 'break-word'}}>Create an account</div>
</div>
<div style={{height: 87, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
  <div style={{width: 549, height: 27, position: 'relative'}}>
    <div style={{left: 0, top: 0, position: 'absolute', color: '#666666', fontSize: 23, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Gmail</div>
  </div>
  <div style={{}}>
  <input className="form-control me-2" type="search" placeholder="Enter Gmail" aria-label="Search"
 style={{ left: 5, top: 15, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex', width: 549, height: 56, position: 'relative', borderRadius: 12, overflow: 'hidden', border: '1px #666666 solid'}}/>
    <div >
 
    </div>
  </div>
</div>
<div style={{height: 131, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
  <div style={{width: 549, height: 27, position: 'relative'}}>
    <div style={{left: 0, top: 0, position: 'absolute', color: '#666666', fontSize: 23, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Phone</div>
  </div>
  <input className="form-control me-2" type="search" placeholder="Enter Phone no." aria-label="Search"
 style={{ left: 5, top: 15, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex', width: 549, height: 56, position: 'relative', borderRadius: 12, overflow: 'hidden', border: '1px #666666 solid'}}/>
</div>
<div style={{height: 165, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
  <div style={{height: 87, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
    <div style={{width: 549, height: 27, position: 'relative'}}>
      <div style={{left: 0, top: 0, position: 'absolute', color: '#666666', fontSize: 23, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Password</div>
      <div style={{width: 73, height: 27, left: 467.14, top: 0, position: 'absolute'}}>
        <div style={{width: 24, height: 24, left: 0, top: 3, position: 'absolute'}}>
          <div style={{width: 18.19, height: 16, left: 2.91, top: 4.01, position: 'absolute'}}></div>
        </div>
      </div>
    </div>
    <input className="form-control me-2" type="search" placeholder="Enter Password" aria-label="Search"
 style={{ left: 5, top: 15, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex', width: 549, height: 56, position: 'relative', borderRadius: 12, overflow: 'hidden', border: '1px #666666 solid'}}/>
  </div>
  <div style={{width: 554, height: 74, position: 'relative'}}>
    <div style={{left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
      <div style={{paddingTop: 20, paddingBottom: 8, paddingRight: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
        <div style={{width: 8, height: 8, background: 'rgba(102, 102, 102, 0.60)', borderRadius: 9999}} />
        <div style={{color: 'rgba(102, 102, 102, 0.60)', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Use 8 or more characters</div>
      </div>
      <div style={{paddingTop: 20, paddingBottom: 8, paddingRight: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
        <div style={{width: 8, height: 8, background: 'rgba(102, 102, 102, 0.60)', borderRadius: 9999}} />
        <div style={{color: 'rgba(102, 102, 102, 0.60)', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Use numbers (e.g. 1234)</div>
      </div>
    </div>
    <div style={{left: 237, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
      <div style={{width: 309, paddingTop: 8, paddingBottom: 8, paddingRight: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
      </div>
      <div style={{paddingTop: 8, paddingBottom: 8, paddingRight: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
      </div>
    </div>
  </div>
</div>
<button className="sb"style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word',left: 0, top: 14,
 position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex',width: 300, height: 125, 
position: 'relative', background: '#111111', borderRadius: 40, overflow: 'hidden', }}>Sign in</button>
<div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
  <div style={{}}>
    <div style={{}}>
      <br></br>
      <br></br>
      <br></br>
    </div>
  </div>
 
</div>
</div>
    </div>
  )
}
