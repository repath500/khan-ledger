"use client";

import { useState } from "react";

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cloudSave, setCloudSave] = useState(true);

  return (
    <div className="chat-shell">
      {/* Sidebar overlay backdrop for mobile */}
      {sidebarOpen && (
        <div
          className="chat-sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside className={`chat-sidebar ${sidebarOpen ? "is-open" : ""}`}>
        <div className="chat-sidebar__header">
          <div className="chat-sidebar__brand">
            <span className="chat-sidebar__brand-dot" />
            <span className="chat-sidebar__brand-name">LeemerLabs</span>
          </div>
          <span className="chat-sidebar__badge">BORN CHAT</span>
        </div>

        <button className="chat-sidebar__new-btn">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="7.25" y="3" width="1.5" height="10" rx="0.75" fill="currentColor" />
            <rect x="3" y="7.25" width="10" height="1.5" rx="0.75" fill="currentColor" />
          </svg>
          New chat
        </button>

        <div className="chat-sidebar__model-select">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Born-9b (Alpha)</span>
          <svg
            className="chat-sidebar__chevron"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M3 5l3 3 3-3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="chat-sidebar__cloud-row">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Cloud save</span>
          <button
            className={`chat-toggle ${cloudSave ? "is-on" : ""}`}
            onClick={() => setCloudSave(!cloudSave)}
            role="switch"
            aria-checked={cloudSave}
            aria-label="Cloud save"
          >
            <span className="chat-toggle__thumb" />
          </button>
        </div>

        <div className="chat-sidebar__conversations">
          <p className="chat-sidebar__empty">No conversations yet</p>
        </div>

        {/* Close button for mobile */}
        <button
          className="chat-sidebar__close"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 5l10 10M15 5L5 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </aside>

      {/* Main content */}
      <main className="chat-main">
        <header className="chat-main__header">
          <button
            className="chat-main__menu-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <span />
            <span />
            <span />
          </button>
          <div className="chat-main__header-title">
            <span>Born-9b (Alpha)</span>
          </div>
        </header>

        <div className="chat-main__body">
          <div className="chat-auth-card">
            <h2 className="chat-auth-card__title">
              Sign in to
              <br />
              Born Chat
            </h2>
            <p className="chat-auth-card__desc">
              Uploads, quotas, and saved chats stay attached to your account.
            </p>

            <form className="chat-auth-form" onSubmit={(e) => e.preventDefault()}>
              <div className="chat-auth-form__field">
                <input type="email" placeholder="you@company.com" autoComplete="email" />
              </div>
              <div className="chat-auth-form__field">
                <input type="password" placeholder="Password" autoComplete="current-password" />
              </div>
              <button type="submit" className="chat-auth-form__submit">
                Sign in
              </button>
            </form>

            <p className="chat-auth-card__footer">
              No account?{" "}
              <a href="#" className="chat-auth-card__link">
                Create one
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
