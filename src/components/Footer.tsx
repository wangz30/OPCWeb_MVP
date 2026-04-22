export function Footer() {
  return (
    <footer style={{ 
      background: 'rgba(15, 23, 41, 0.95)', 
      borderTop: '1px solid #475569', 
      padding: '3rem 0', 
      marginTop: '4rem' 
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {/* 社区信息 */}
          <div>
            <h4 style={{ color: '#F1F5F9', marginBottom: '1rem' }}>云上 OPC 社区</h4>
            <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '0.5rem' }}>AI 驱动的一人公司创业平台</p>
            <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '0.5rem' }}>深圳国家高技术产业创新中心</p>
            <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '0.5rem' }}>粤港澳大湾区大数据中心</p>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>© 2026 云上 OPC 社区 版权所有</p>
          </div>
          
          {/* 服务支持 */}
          <div>
            <h4 style={{ color: '#F1F5F9', marginBottom: '1rem' }}>服务支持</h4>
            <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '0.5rem', lineHeight: 1.6 }}>
              工作时间：<br></br>
              周一至周五 9:00 - 18:00
            </p>
            <br></br>
            <a 
              href="mailto:gbanexus@hiic.com.cn" 
              style={{ 
                color: '#A5B4FC', 
                fontSize: '1rem', 
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 500,
                padding: '10px 16px',
                background: 'rgba(108, 99, 255, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(108, 99, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(108, 99, 255, 0.2)'
                e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.4)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(108, 99, 255, 0.1)'
                e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.2)'
              }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              gbanexus@hiic.com.cn
            </a>
          </div>
          
          {/* 快速链接 */}
          <div>
            <h4 style={{ color: '#F1F5F9', marginBottom: '1rem' }}>快速链接</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="/cloud-resources" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>云资源服务</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="/ai-models" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>AI 模型服务</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="/data-apis" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>数据 API 服务</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="/space" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>创客空间入驻</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="/policy" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>新闻资讯</a>
                </li>
              </ul>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="/" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>首页</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="/about" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>关于我们</a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* 关注我们 */}
          <div style={{ textAlign: 'center' }}>
            {/* 微信公众号二维码 */}
            <img
              src="/Pic4Wechet/1.jpg"
              alt="微信公众号二维码"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '12px',
                display: 'block',
                margin: '0 auto 0.5rem',
                border: '2px solid rgba(108, 99, 255, 0.3)'
              }}
            />
            <p style={{ color: '#A5B4FC', fontSize: '0.9rem', fontWeight: 600 }}>
              GBAnexus 官方微信
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
