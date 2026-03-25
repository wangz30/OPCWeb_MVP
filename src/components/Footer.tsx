export function Footer() {
  return (
    <footer style={{ 
      background: 'rgba(15, 23, 41, 0.95)', 
      borderTop: '1px solid #475569', 
      padding: '3rem 0', 
      marginTop: '4rem' 
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div>
            <h4 style={{ color: '#F1F5F9', marginBottom: '1rem' }}>云上OPC社区</h4>
            <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '0.5rem' }}>AI驱动的一人公司创业平台</p>
            <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '0.5rem' }}>主办单位：粤港澳大湾区大数据中心</p>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>© 2024 云上OPC社区 版权所有</p>
          </div>
          
          <div>
            <h4 style={{ color: '#F1F5F9', marginBottom: '1rem' }}>服务支持</h4>
            <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '0.5rem' }}>创业咨询：400-888-8888</p>
            <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '0.5rem' }}>技术支持：tech@opc-cloud.com</p>
            <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '0.5rem' }}>商务合作：biz@opc-cloud.com</p>
            <p style={{ color: '#CBD5E1', fontSize: '0.9rem' }}>投诉建议：feedback@opc-cloud.com</p>
          </div>
          
          <div>
            <h4 style={{ color: '#F1F5F9', marginBottom: '1rem' }}>快速链接</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/solutions" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>解决方案</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/products" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>产品服务</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/policies" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>政策扶持</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/resources" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>资源库</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/login" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>登录注册</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: '#F1F5F9', marginBottom: '1rem' }}>关注我们</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ 
                width: '100px', 
                height: '100px', 
                background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.1), rgba(255, 101, 132, 0.1))',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '0.5rem'
              }}>
                <div style={{ fontSize: '2rem' }}>📱</div>
                <span style={{ color: '#CBD5E1', fontSize: '0.75rem', textAlign: 'center', marginTop: '0.25rem' }}>微信公众号</span>
              </div>
              <div style={{ 
                width: '100px', 
                height: '100px', 
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.1))',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '0.5rem'
              }}>
                <div style={{ fontSize: '2rem' }}>💻</div>
                <span style={{ color: '#CBD5E1', fontSize: '0.75rem', textAlign: 'center', marginTop: '0.25rem' }}>官方网站</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}