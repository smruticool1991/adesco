'use client'

import { useState, useEffect } from 'react'

const ADMIN_USER = 'admin'
const ADMIN_PASS = 'Adesco@2024'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('adesco_admin') === '1') {
      window.location.href = '/admin/gallery'
    }
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    setTimeout(() => {
      if (username === ADMIN_USER && password === ADMIN_PASS) {
        sessionStorage.setItem('adesco_admin', '1')
        window.location.href = '/admin/gallery'
      } else {
        setError('Invalid username or password.')
        setLoading(false)
      }
    }, 400)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f2d1f 0%, #1a4a2e 50%, #0d3a1e 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '20px', fontFamily: "'Poppins', sans-serif",
    }}>
      <div style={{
        background: '#fff', borderRadius: '16px', padding: '48px 40px',
        width: '100%', maxWidth: '400px',
        boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <img src="/assets/img/logo.png" alt="Adesco" style={{ height: '54px', objectFit: 'contain' }}
            onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1a3a22', margin: '14px 0 4px' }}>Admin Panel</h2>
          <p style={{ fontSize: '13px', color: '#999', margin: 0 }}>Sign in to manage your gallery</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#555', marginBottom: '6px' }}>
              Username
            </label>
            <input
              type="text" value={username} onChange={e => setUsername(e.target.value)}
              required autoFocus placeholder="Username"
              style={{
                width: '100%', padding: '11px 14px', fontSize: '14px',
                border: '1.5px solid #e0e0e0', borderRadius: '8px',
                outline: 'none', boxSizing: 'border-box',
              }}
              onFocus={e => (e.target.style.borderColor = '#347604')}
              onBlur={e => (e.target.style.borderColor = '#e0e0e0')}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#555', marginBottom: '6px' }}>
              Password
            </label>
            <input
              type="password" value={password} onChange={e => setPassword(e.target.value)}
              required placeholder="Password"
              style={{
                width: '100%', padding: '11px 14px', fontSize: '14px',
                border: '1.5px solid #e0e0e0', borderRadius: '8px',
                outline: 'none', boxSizing: 'border-box',
              }}
              onFocus={e => (e.target.style.borderColor = '#347604')}
              onBlur={e => (e.target.style.borderColor = '#e0e0e0')}
            />
          </div>

          {error && (
            <div style={{
              background: '#fff5f5', border: '1px solid #fcc', borderRadius: '8px',
              padding: '10px 14px', marginBottom: '18px',
              color: '#c0392b', fontSize: '13px',
            }}>
              {error}
            </div>
          )}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '13px',
            background: '#347604', color: '#fff',
            border: 'none', borderRadius: '8px',
            fontSize: '15px', fontWeight: 700,
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.8 : 1,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          }}>
            {loading && (
              <span style={{
                width: '16px', height: '16px',
                border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff',
                borderRadius: '50%', animation: 'spin 0.7s linear infinite',
                display: 'inline-block',
              }} />
            )}
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
