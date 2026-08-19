import React, { useState, useRef, useEffect } from 'react';

const SUGGESTIONS = [
  "How can I buy ECOS tokens?",
  "How do I connect my wallet?",
  "What is the ECOS token price?",
  "What are the vesting rules?",
  "How do I claim my purchased tokens?"
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      text: "Hello! I'm your Ecos AI assistant. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [messages, isOpen]);

  const handleSend = async (customQuery) => {
    const textToSend = customQuery || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend.trim()
    };

    setMessages(prev => [...prev, userMsg]);
    if (!customQuery) setInput('');
    setIsLoading(true);

    try {
      const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
      const baseUrl = isProduction ? '/api' : 'http://127.0.0.1:3005/api';
      const endpoint = `${baseUrl}/v2/chat`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userMsg.text })
      });

      const data = await response.json();

      if (response.ok && data.status) {
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          text: data.answer || "I couldn't generate a response. Please try again."
        }]);
      } else {
        const errDetail = data?.error?.message || data?.message || "Service temporarily unavailable.";
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          text: `Sorry, something went wrong: ${errDetail}`
        }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: `Unable to connect to the server. Please check your connection and try again.`
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetChat = () => {
    setMessages([{
      id: 'welcome',
      role: 'assistant',
      text: "Hello! I'm your Ecos AI assistant. How can I help you today?"
    }]);
  };

  const formatText = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      let html = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        return <li key={idx} style={styles.listItem} dangerouslySetInnerHTML={{ __html: html.replace(/^\s*[-*]\s*/, '') }} />;
      }
      if (/^\s*\d+\.\s/.test(line)) {
        return <li key={idx} style={styles.orderedItem} dangerouslySetInnerHTML={{ __html: html.replace(/^\s*\d+\.\s*/, '') }} />;
      }
      if (/^\s*#{2,3}\s/.test(line)) {
        return <h4 key={idx} style={styles.heading} dangerouslySetInnerHTML={{ __html: html.replace(/^\s*#+\s*/, '') }} />;
      }
      if (line.trim() === '') return <br key={idx} />;
      return <p key={idx} style={styles.paragraph} dangerouslySetInnerHTML={{ __html: html }} />;
    });
  };

  const styles = {
    wrapper: {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 99999,
      fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
      width: '0',
      height: '0',
      overflow: 'visible',
    },
    trigger: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: 'linear-gradient(135deg, #B57D5C 0%, #7E4F32 100%)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.12)',
      padding: '14px 22px',
      borderRadius: '50px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 600,
      letterSpacing: '0.02em',
      boxShadow: '0 10px 36px rgba(126, 79, 50, 0.45), 0 2px 10px rgba(0,0,0,0.2)',
      transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      opacity: isOpen ? 0 : 1,
      transform: isOpen ? 'scale(0.7) translateY(15px)' : 'scale(1) translateY(0)',
      pointerEvents: isOpen ? 'none' : 'auto',
      visibility: isOpen ? 'hidden' : 'visible',
      transformOrigin: 'bottom right',
      whiteSpace: 'nowrap',
    },
    triggerIcon: {
      width: '22px',
      height: '22px',
      position: 'relative',
    },
    triggerPulse: {
      position: 'absolute',
      top: '-2px',
      right: '-2px',
      width: '9px',
      height: '9px',
      backgroundColor: '#34D399',
      borderRadius: '50%',
      border: '2px solid #7E4F32',
      boxShadow: '0 0 6px rgba(52, 211, 153, 0.6)',
    },
    chatWindow: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      width: '410px',
      maxWidth: 'calc(100vw - 32px)',
      height: '610px',
      maxHeight: '85vh',
      borderRadius: '22px',
      overflow: 'hidden',
      boxShadow: '0 30px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(197,142,109,0.25)',
      transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(20px)',
      pointerEvents: isOpen ? 'auto' : 'none',
      visibility: isOpen ? 'visible' : 'hidden',
      transformOrigin: 'bottom right',
    },
    header: {
      background: 'linear-gradient(135deg, #181412 0%, #261c16 100%)',
      padding: '18px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid rgba(197,142,109,0.18)',
      flexShrink: 0,
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    headerAvatar: {
      width: '42px',
      height: '42px',
      borderRadius: '14px',
      background: 'linear-gradient(135deg, #C58E6D 0%, #D4A373 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 14px rgba(197,142,109,0.35)',
    },
    headerTitle: {
      fontSize: '15px',
      fontWeight: 700,
      color: '#F8F3EE',
      letterSpacing: '0.03em',
      margin: 0,
    },
    headerSubtitle: {
      fontSize: '11px',
      color: 'rgba(212,163,115,0.75)',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      marginTop: '2px',
      letterSpacing: '0.04em',
    },
    onlineDot: {
      width: '7px',
      height: '7px',
      backgroundColor: '#34D399',
      borderRadius: '50%',
      display: 'inline-block',
      boxShadow: '0 0 6px rgba(52,211,153,0.5)',
    },
    headerActions: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    },
    headerBtn: {
      background: 'transparent',
      border: 'none',
      color: 'rgba(248,243,238,0.55)',
      cursor: 'pointer',
      padding: '7px',
      borderRadius: '9px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s',
    },
    messagesArea: {
      flex: 1,
      overflowY: 'auto',
      padding: '22px 18px',
      background: 'linear-gradient(180deg, #110e0c 0%, #171310 100%)',
    },
    messageRow: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '11px',
      marginBottom: '18px',
    },
    messageRowUser: {
      flexDirection: 'row-reverse',
    },
    avatar: {
      width: '32px',
      height: '32px',
      borderRadius: '11px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontSize: '14px',
    },
    avatarBot: {
      background: 'linear-gradient(135deg, #B57D5C 0%, #7E4F32 100%)',
      color: '#fff',
      boxShadow: '0 3px 10px rgba(181,125,92,0.3)',
    },
    avatarUser: {
      background: 'linear-gradient(135deg, #C58E6D 0%, #8C5A3C 100%)',
      color: '#FFFFFF',
      border: '1px solid rgba(255,255,255,0.22)',
      boxShadow: '0 4px 12px rgba(140, 90, 60, 0.35)',
    },
    bubbleBot: {
      maxWidth: '84%',
      padding: '13px 17px',
      borderRadius: '6px 18px 18px 18px',
      background: 'rgba(246,239,233,0.05)',
      color: '#E8E1D7',
      fontSize: '13.5px',
      lineHeight: 1.65,
      border: '1px solid rgba(197,142,109,0.14)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    },
    bubbleUser: {
      maxWidth: '84%',
      padding: '13px 17px',
      borderRadius: '18px 6px 18px 18px',
      background: 'linear-gradient(135deg, #B57D5C 0%, #8A5738 100%)',
      color: '#FFFFFF',
      fontSize: '13.5px',
      lineHeight: 1.65,
      boxShadow: '0 4px 16px rgba(138,87,56,0.3)',
    },
    suggestionsWrap: {
      marginTop: '10px',
      marginBottom: '10px',
    },
    suggestionsLabel: {
      fontSize: '10px',
      fontWeight: 700,
      color: 'rgba(212,163,115,0.55)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      marginBottom: '10px',
    },
    suggestionBtn: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      background: 'rgba(197,142,109,0.07)',
      border: '1px solid rgba(197,142,109,0.15)',
      color: '#D4A373',
      fontSize: '12.5px',
      padding: '11px 15px',
      borderRadius: '12px',
      cursor: 'pointer',
      marginBottom: '7px',
      transition: 'all 0.22s',
      lineHeight: 1.5,
    },
    loadingBubble: {
      maxWidth: '84%',
      padding: '14px 18px',
      borderRadius: '6px 18px 18px 18px',
      background: 'rgba(246,239,233,0.05)',
      border: '1px solid rgba(197,142,109,0.14)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '12.5px',
      color: 'rgba(212,163,115,0.7)',
    },
    loadingDots: {
      display: 'flex',
      gap: '4px',
    },
    inputArea: {
      padding: '15px 18px',
      background: '#13100e',
      borderTop: '1px solid rgba(197,142,109,0.15)',
      flexShrink: 0,
    },
    inputRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: 'rgba(246,239,233,0.04)',
      borderRadius: '14px',
      padding: '5px 5px 5px 16px',
      border: '1px solid rgba(197,142,109,0.15)',
      transition: 'border-color 0.2s, box-shadow 0.2s',
    },
    input: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: '#EFE9E2',
      fontSize: '13.5px',
      padding: '8px 0',
      lineHeight: 1.4,
    },
    sendBtn: {
      width: '40px',
      height: '40px',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #B57D5C 0%, #7E4F32 100%)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'all 0.2s',
      boxShadow: '0 4px 14px rgba(126,79,50,0.35)',
    },
    sendBtnDisabled: {
      opacity: 0.35,
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
    footer: {
      textAlign: 'center',
      fontSize: '10px',
      color: 'rgba(212,163,115,0.35)',
      marginTop: '9px',
      letterSpacing: '0.04em',
    },
    listItem: { marginLeft: '18px', listStyleType: 'disc', marginTop: '4px', marginBottom: '4px' },
    orderedItem: { marginLeft: '18px', listStyleType: 'decimal', marginTop: '4px', marginBottom: '4px' },
    heading: { fontWeight: 700, color: '#D4A373', marginTop: '12px', marginBottom: '5px', fontSize: '13.5px' },
    paragraph: { margin: '4px 0', lineHeight: 1.65 },
  };

  return (
    <>
      <style>{`
        @keyframes dotPulse {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
        .ecosse-chat-scrollbar::-webkit-scrollbar { width: 4px; }
        .ecosse-chat-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .ecosse-chat-scrollbar::-webkit-scrollbar-thumb { background: rgba(197,142,109,0.22); border-radius: 4px; }
        .ecosse-chat-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(197,142,109,0.4); }
      `}</style>

      <div style={styles.wrapper}>
        {/* Floating Trigger Button */}
        <button
          onClick={() => setIsOpen(true)}
          style={styles.trigger}
          onMouseEnter={e => { if (!isOpen) { e.currentTarget.style.transform = 'scale(1.05) translateY(0)'; e.currentTarget.style.boxShadow = '0 14px 44px rgba(126, 79, 50, 0.55)'; } }}
          onMouseLeave={e => { if (!isOpen) { e.currentTarget.style.transform = 'scale(1) translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 36px rgba(126, 79, 50, 0.45)'; } }}
        >
          <div style={styles.triggerIcon}>
            <img src="/favicon.png" alt="ECOS" style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover' }} />
            <span style={styles.triggerPulse} />
          </div>
          Ask ECOS AI
        </button>

        {/* Chat Panel */}
        <div style={styles.chatWindow}>
          <div style={styles.header}>
            <div style={styles.headerLeft}>
              <div style={styles.headerAvatar}>
                <img src="/favicon.png" alt="ECOS" style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
              <div>
                <h3 style={styles.headerTitle}>ECOS AI</h3>
                <div style={styles.headerSubtitle}>
                  <span style={styles.onlineDot} />
                  Knowledge Assistant
                </div>
              </div>
            </div>
            <div style={styles.headerActions}>
              <button
                style={styles.headerBtn}
                onClick={resetChat}
                title="New conversation"
                onMouseEnter={e => { e.currentTarget.style.color = '#D4A373'; e.currentTarget.style.background = 'rgba(197,142,109,0.14)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(248,243,238,0.55)'; e.currentTarget.style.background = 'transparent'; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </button>
              <button
                style={styles.headerBtn}
                onClick={() => setIsOpen(false)}
                onMouseEnter={e => { e.currentTarget.style.color = '#D4A373'; e.currentTarget.style.background = 'rgba(197,142,109,0.14)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(248,243,238,0.55)'; e.currentTarget.style.background = 'transparent'; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
          </div>

          <div style={styles.messagesArea} className="ecosse-chat-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{ ...styles.messageRow, ...(msg.role === 'user' ? styles.messageRowUser : {}) }}
              >
                <div style={{ ...styles.avatar, ...(msg.role === 'user' ? styles.avatarUser : styles.avatarBot) }}>
                  {msg.role === 'user' ? (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  ) : (
                    <img src="/favicon.png" alt="Ecos" style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover' }} />
                  )}
                </div>
                <div style={msg.role === 'user' ? styles.bubbleUser : styles.bubbleBot}>
                  {formatText(msg.text)}
                </div>
              </div>
            ))}

            {!isLoading && (
              <div style={styles.suggestionsWrap}>
                <div style={styles.suggestionsLabel}>Quick questions</div>
                {SUGGESTIONS.map((sug, i) => (
                  <button
                    key={i}
                    style={styles.suggestionBtn}
                    onClick={() => handleSend(sug)}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(197,142,109,0.15)'; e.currentTarget.style.borderColor = 'rgba(197,142,109,0.28)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(197,142,109,0.07)'; e.currentTarget.style.borderColor = 'rgba(197,142,109,0.15)'; }}
                  >
                    {sug}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div style={styles.messageRow}>
                <div style={{ ...styles.avatar, ...styles.avatarBot }}>
                  <img src="/favicon.png" alt="Ecos" style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover' }} />
                </div>
                <div style={styles.loadingBubble}>
                  <div style={styles.loadingDots}>
                    {[0, 1, 2].map(i => (
                      <span key={i} style={{
                        width: '6px', height: '6px', borderRadius: '50%',
                        backgroundColor: '#C58E6D',
                        animation: `dotPulse 1.4s ease-in-out ${i * 0.16}s infinite`,
                        display: 'inline-block',
                      }} />
                    ))}
                  </div>
                  <span>Thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div style={styles.inputArea}>
            <div
              style={styles.inputRow}
              onFocus={e => e.currentTarget.style.borderColor = 'rgba(197,142,109,0.38)'}
              onBlur={e => e.currentTarget.style.borderColor = 'rgba(197,142,109,0.15)'}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything about ECOSSE..."
                disabled={isLoading}
                style={{ ...styles.input, ...(isLoading ? { opacity: 0.5 } : {}) }}
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                style={{ ...styles.sendBtn, ...(!input.trim() || isLoading ? styles.sendBtnDisabled : {}) }}
                onMouseEnter={e => { if (input.trim() && !isLoading) e.currentTarget.style.transform = 'scale(1.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </div>
            <div style={styles.footer}>Powered by ECOSSE Knowledge Base</div>
          </div>
        </div>
      </div>
    </>
  );
}
