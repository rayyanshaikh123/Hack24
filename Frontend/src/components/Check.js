import React from 'react'

export default function check() {
  return (
    <div style={{width: 1440, height: 1024, position: 'relative', background: 'linear-gradient(0deg, white 0%, white 100%)', backgroundImage: 'url(https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
    <div style={{width: 765, height: 665, left: 337, top: 179, position: 'absolute', background: 'white', borderRadius: 100, overflow: 'hidden'}}>
      <div style={{left: 91, top: 84, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 40, display: 'inline-flex'}}>
        <div style={{borderRadius: 12}} />
      </div>
      <div style={{width: 653, height: 708, left: 66, top: 10, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 40, display: 'inline-flex'}}>
        <div style={{borderRadius: 12, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
          <div style={{width: 302, height: 56, position: 'relative', background: '#111111'}}>
            <div style={{left: 120, top: 12, position: 'absolute', color: 'white', fontSize: 18, fontFamily: 'Siemreap', fontWeight: '400', wordWrap: 'break-word'}}>Sign in</div>
          </div>
          <div style={{width: 302, height: 56, position: 'relative', background: 'rgba(17, 17, 17, 0.25)'}}>
            <div style={{left: 120, top: 12, position: 'absolute', color: 'white', fontSize: 18, fontFamily: 'Siemreap', fontWeight: '400', wordWrap: 'break-word'}}>sign up</div>
          </div>
        </div>
        <div style={{textAlign: 'center', color: '#333333', fontSize: 24, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Sign in</div>
        <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 40, display: 'flex'}}>
          <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'flex'}}>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
              <div style={{height: 34, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                <div style={{width: 95, height: 27, color: '#515151', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>username </div>
                <div style={{width: 220, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                  <div style={{width: 220, height: 27, position: 'relative'}} />
                </div>
                <div style={{width: 220, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                  <div style={{width: 220, height: 27, position: 'relative'}} />
                </div>
              </div>
              <div style={{width: 454, height: 56, position: 'relative', background: 'white', borderRadius: 10, border: '2px #747474 solid'}} />
              <div style={{height: 87, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                <div style={{width: 454, height: 27, position: 'relative'}}>
                  <div style={{left: 0, top: 0, position: 'absolute', color: '#666666', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Email address</div>
                </div>
                <div style={{width: 454, height: 56, position: 'relative', background: 'white', borderRadius: 12, overflow: 'hidden', border: '2px #747474 solid'}} />
              </div>
            </div>
          </div>
        </div>
        <div style={{width: 454, height: 64, position: 'relative', opacity: 0.25, background: '#111111', borderRadius: 40, overflow: 'hidden'}}>
          <div style={{left: 185, top: 15, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
            <div style={{textAlign: 'center', color: 'white', fontSize: 22, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Sign up</div>
          </div>
        </div>
        <div style={{width: 454, justifyContent: 'flex-start', alignItems: 'center', gap: 23, display: 'inline-flex'}} />
      </div>
    </div>
  </div>
  )
}
