
import { useState } from 'react'
import './App.css'

const wishes = [
  'Chúc bạn luôn xinh đẹp, vui vẻ và rạng rỡ như những đóa hoa.',
  'Mong rằng mỗi ngày của bạn đều tràn ngập niềm vui, yêu thương và những điều bất ngờ thật dễ thương.',
  'Chúc bạn luôn tự tin, hạnh phúc, gặp nhiều may mắn và đạt được mọi điều mình mong muốn.',
  'Mong nụ cười luôn nở trên môi bạn, hôm nay và cả những ngày về sau.',
]

function Rose() {
  return (
    <div className="rose-scene">
      <div className="rose-glow" />
      <svg className="rose" viewBox="0 0 240 290" role="img" aria-label="Hoa hồng đỏ">
        <defs>
          <radialGradient id="petal" cx="35%" cy="25%" r="80%">
            <stop offset="0%" stopColor="#ffb3cb" />
            <stop offset="38%" stopColor="#f43f76" />
            <stop offset="75%" stopColor="#c9164d" />
            <stop offset="100%" stopColor="#700d3b" />
          </radialGradient>
          <linearGradient id="stem" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#9ef5b0" />
            <stop offset="1" stopColor="#17694b" />
          </linearGradient>
          <linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#8ef5a4" />
            <stop offset="1" stopColor="#17694b" />
          </linearGradient>
        </defs>

        <path d="M120 112 Q115 180 127 260" fill="none" stroke="url(#stem)" strokeWidth="7" strokeLinecap="round" />
        <path d="M123 203 Q69 156 52 191 Q78 230 123 203" fill="url(#leaf)" />
        <path d="M124 224 Q171 170 195 197 Q180 234 124 224" fill="url(#leaf)" />
        <path d="M121 202 Q85 188 60 194 M127 222 Q163 199 186 202" fill="none" stroke="#b7ffc3" strokeWidth="1.5" />

        <g className="rose-bloom">
          <path d="M120 112 C76 105 53 77 74 46 C91 21 123 34 128 55 C142 20 180 32 185 61 C192 91 158 112 120 112Z" fill="url(#petal)" />
          <path d="M120 110 C83 119 57 93 69 69 C79 49 104 56 120 75 C134 44 164 50 174 73 C184 98 152 116 120 110Z" fill="#f94b80" />
          <path d="M120 109 C94 99 91 74 108 63 C124 52 147 66 145 84 C165 76 177 95 158 109 C145 118 130 115 120 109Z" fill="#d92160" />
          <path d="M119 104 C105 91 114 73 128 78 C145 82 137 97 128 99 C140 91 148 103 136 111 C129 115 122 111 119 104Z" fill="#ff9abc" />
          <path d="M84 45 Q100 37 112 58 M151 43 Q166 49 169 64" fill="none" stroke="#ffd4e2" strokeWidth="3" strokeLinecap="round" opacity=".8" />
        </g>

        <g fill="#ffe8a3">
          <circle cx="66" cy="37" r="3" />
          <circle cx="184" cy="46" r="2.5" />
          <circle cx="175" cy="119" r="2" />
          <circle cx="72" cy="116" r="2.5" />
        </g>
      </svg>
      <div className="rose-pedestal" />
    </div>
  )
}

function FloatingDecorations() {
  return (
    <div className="decorations" aria-hidden="true">
      {Array.from({ length: 24 }, (_, i) => (
        <span
          className={`sparkle sparkle-${i % 6}`}
          key={i}
          style={{
            left: `${(i * 43 + 7) % 100}%`,
            top: `${(i * 31 + 4) % 100}%`,
            animationDelay: `${(i % 8) * -0.7}s`,
          }}
        />
      ))}
      {Array.from({ length: 12 }, (_, i) => (
        <span
          className="falling-petal"
          key={`petal-${i}`}
          style={{
            left: `${(i * 37 + 5) % 100}%`,
            animationDelay: `${i * -1.3}s`,
            animationDuration: `${7 + (i % 5)}s`,
          }}
        >
          {i % 3 === 0 ? '♥' : '✿'}
        </span>
      ))}
    </div>
  )
}

export default function App() {
  const [opened, setOpened] = useState(false)

  return (
    <main className={`celebration ${opened ? 'is-open' : ''}`}>
      <FloatingDecorations />

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <section className="greeting">
        <div className="eyebrow">
          <span>✦</span> A LITTLE GIFT FOR YOU <span>✦</span>
        </div>

        <p className="date">20 · 10 · 2026</p>

        <h1>
          Happy
          <span> Vietnamese Women's Day</span>
        </h1>

        <p className="subtitle">
          Gửi đến những người phụ nữ tuyệt vời
          <br />
          một chút yêu thương từ trái tim 💗
        </p>

        <Rose />

        {!opened ? (
          <button className="open-button" onClick={() => setOpened(true)}>
            <span>✉</span> Mở món quà bí mật <span className="button-heart">♥</span>
          </button>
        ) : (
          <section className="letter" aria-live="polite">
            <div className="letter-top">✧ Một chút yêu thương ✧</div>
            <h2>Gửi bạn thân mến 💌</h2>

            <div className="letter-content">
              {wishes.map((wish, i) => (
                <p key={wish} style={{ animationDelay: `${i * 0.6}s` }}>
                  {wish}
                </p>
              ))}
            </div>

            <p className="signature">Chúc mừng ngày 20/10! 🌷</p>

            <button className="close-button" onClick={() => setOpened(false)}>
              Gấp lá thư lại ↩
            </button>
          </section>
        )}

        <p className="footer-note">
          Made with <span>♥</span> just for you
        </p>
      </section>
    </main>
  )
}
