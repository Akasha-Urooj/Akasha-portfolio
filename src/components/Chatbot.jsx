import { useState } from "react";

const getBotReply = (message) => {
  const text = message.toLowerCase().trim();

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return "Hi! I'm Akasha's AI assistant. You can ask me about her projects, skills, education, or experience.";
  }

  if (
    text.includes("who is akasha") ||
    text.includes("about akasha") ||
    text.includes("who are you")
  ) {
    return "Akasha is an Artificial Intelligence student and AI developer focused on building intelligent systems, machine learning applications, computer vision solutions, and AI-powered experiences.";
  }

  if (
    text.includes("skill") ||
    text.includes("technology") ||
    text.includes("technologies") ||
    text.includes("tech stack")
  ) {
    return "Akasha works with Python, Machine Learning, Deep Learning, Computer Vision, NLP, PyTorch, Scikit-learn, Pandas, NumPy, Streamlit, Git and GitHub.";
  }

  if (
    text.includes("project") ||
    text.includes("projects") ||
    text.includes("work")
  ) {
    return "Some of Akasha's projects include a Multi-Agent AI Research Assistant, Explainable Pneumonia Detection, Customer Churn Prediction, Melodia AI, Jarvis AI Assistant, and Real-Time Object Detection.";
  }

  if (
    text.includes("research") ||
    text.includes("multi-agent") ||
    text.includes("agent")
  ) {
    return "Akasha has worked on a Multi-Agent AI Research Assistant designed to coordinate specialized AI agents for research, web search, paper discovery, citation checking and fact verification.";
  }

  if (
    text.includes("experience") ||
    text.includes("internship") ||
    text.includes("intern")
  ) {
    return "Akasha has AI internship experience through the Live Pakistan Internship Program and professional experience as a Management Incharge at Bright Way School.";
  }

  if (
    text.includes("education") ||
    text.includes("degree") ||
    text.includes("university") ||
    text.includes("gpa") ||
    text.includes("study")
  ) {
    return "Akasha is pursuing a Bachelor's degree in Artificial Intelligence at the University of Central Punjab.";
  }

  if (
    text.includes("contact") ||
    text.includes("email") ||
    text.includes("hire") ||
    text.includes("connect")
  ) {
    return "You can connect with Akasha through the Contact section of this portfolio, or reach her through her GitHub and LinkedIn profiles.";
  }

  if (
    text.includes("github") ||
    text.includes("code")
  ) {
    return "Akasha's GitHub profile contains her AI, machine learning and software development projects.";
  }

  if (
    text.includes("ai") ||
    text.includes("artificial intelligence")
  ) {
    return "Akasha is focused on Artificial Intelligence, with particular interest in Machine Learning, Deep Learning, Computer Vision, NLP, Generative AI and Agentic AI.";
  }

  if (
    text.includes("thank") ||
    text.includes("thanks")
  ) {
    return "You're welcome! Feel free to ask me anything else about Akasha.";
  }

  return "I'm currently a portfolio assistant, so I can answer questions about Akasha's projects, skills, education, experience and AI work. Try asking: \"What are her skills?\"";
};


function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm Akasha's AI assistant. Ask me about her projects, skills or experience.",
    },
  ]);

  const [input, setInput] = useState("");


  const sendMessage = (message = input) => {
    const cleanMessage = message.trim();

    if (!cleanMessage) return;

    const userMessage = {
      sender: "user",
      text: cleanMessage,
    };

    const botMessage = {
      sender: "bot",
      text: getBotReply(cleanMessage),
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
      botMessage,
    ]);

    setInput("");
  };


  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };


  return (
    <>
      {/* =====================================
          SPEECH BUBBLE
      ===================================== */}

      {!isOpen && (
        <div className="robot-message">
          <span>Let's talk!</span>
          <small>Ask me anything about Akasha.</small>
        </div>
      )}


      {/* =====================================
          ROBOT
      ===================================== */}

      <button
        className="robot-chatbot"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Akasha AI"
      >
        <div className="robot-glow" />

        <div className="robot-antenna">
          <span />
        </div>

        <div className="robot-head">
          <div className="robot-face">
            <span className="robot-eye" />
            <span className="robot-eye" />
          </div>
        </div>

        <div className="robot-ear robot-ear-left" />
        <div className="robot-ear robot-ear-right" />

        <div className="robot-body">
          <div className="robot-chest">AI</div>
        </div>

        <div className="robot-arm robot-arm-left" />
        <div className="robot-arm robot-arm-right" />

        <div className="robot-shadow" />
      </button>


      {/* =====================================
          CHAT WINDOW
      ===================================== */}

      {isOpen && (
        <div className="chatbot-window">

          {/* HEADER */}

          <div className="chatbot-header">

            <div className="chatbot-title">
              <span className="chatbot-status" />

              <div>
                <strong>AKASHA AI</strong>
                <small>Portfolio assistant</small>
              </div>
            </div>

            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>

          </div>


          {/* MESSAGES */}

          <div className="chatbot-messages">

            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.sender === "user"
                    ? "chat-message user-message"
                    : "chat-message bot-message-row"
                }
              >

                {message.sender === "bot" && (
                  <div className="bot-avatar">
                    AI
                  </div>
                )}

                <div className="chat-message-bubble">
                  {message.text}
                </div>

              </div>
            ))}

          </div>


          {/* SUGGESTIONS */}

          <div className="chatbot-suggestions">

            <button
              onClick={() =>
                sendMessage("What are Akasha's skills?")
              }
            >
              What are her skills?
            </button>

            <button
              onClick={() =>
                sendMessage("Tell me about Akasha's projects")
              }
            >
              Tell me about her projects
            </button>

            <button
              onClick={() =>
                sendMessage("Tell me about Akasha's experience")
              }
            >
              Tell me about her experience
            </button>

          </div>


          {/* INPUT */}

          <div className="chatbot-input">

            <input
              type="text"
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              onKeyDown={handleKeyDown}
              placeholder="Ask something..."
            />

            <button
              onClick={() => sendMessage()}
              aria-label="Send message"
            >
              →
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default Chatbot;
