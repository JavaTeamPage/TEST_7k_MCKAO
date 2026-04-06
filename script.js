* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', 'Arial', sans-serif;
    background: #f0f2f5;
    min-height: 100vh;
}

.login-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2c5aa6;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-box {
    background: white;
    padding: 40px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    min-width: 320px;
}

.login-box h2 {
    color: #2c5aa6;
    margin-bottom: 10px;
}

.login-box p {
    color: #e67e22;
    font-weight: bold;
    margin-bottom: 20px;
}

.login-box input {
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    margin-bottom: 15px;
    font-size: 16px;
    text-align: center;
}

.login-box button {
    background: #2c5aa6;
    color: white;
    border: none;
    padding: 10px 30px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
}

.error {
    color: red;
    margin-top: 10px;
    font-size: 14px;
}

.menu-screen {
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 20px;
}

.menu-header {
    text-align: center;
    margin-bottom: 40px;
}

.menu-header h1 {
    color: #2c5aa6;
    font-size: 28px;
}

.creator {
    color: #e67e22;
    font-weight: bold;
    margin: 10px 0;
}

.subtitle {
    color: #666;
    margin-bottom: 15px;
}

.menu-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
}

.help-btn-main {
    background: #e67e22;
    color: white;
    border: none;
    padding: 8px 25px;
    cursor: pointer;
    font-size: 14px;
    border-radius: 5px;
}

.profile-btn {
    background: #2c5aa6;
    color: white;
    border: none;
    padding: 8px 25px;
    cursor: pointer;
    font-size: 14px;
    border-radius: 5px;
}

.profile-btn:hover {
    background: #1a3a6e;
}

.help-btn-main:hover {
    background: #d35400;
}

.variants-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 15px;
}

.variant-item {
    background: white;
    border: 2px solid #ddd;
    padding: 20px 10px;
    text-align: center;
    cursor: pointer;
    transition: 0.2s;
}

.variant-item:hover {
    border-color: #2c5aa6;
    background: #f0f4fa;
}

.variant-num {
    font-size: 24px;
    font-weight: bold;
    color: #2c5aa6;
}

.test-area {
    max-width: 1200px;
    margin: 20px auto;
    background: white;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.top-bar {
    background: #2c5aa6;
    color: white;
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.back-btn {
    background: #e67e22;
    color: white;
    border: none;
    padding: 5px 15px;
    cursor: pointer;
}

.timer-box {
    background: #1a3a6e;
    padding: 5px 15px;
    font-family: monospace;
    font-size: 18px;
}

.finish-btn {
    background: #d9534f;
    color: white;
    border: none;
    padding: 6px 20px;
    cursor: pointer;
}

.main-area {
    display: flex;
    min-height: 500px;
}

.tasks-panel {
    width: 160px;
    background: #f5f5f5;
    border-right: 1px solid #ddd;
    padding: 15px;
}

.task-btn {
    background: white;
    border: 1px solid #bbb;
    padding: 8px;
    margin-bottom: 8px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
}

.task-btn:hover {
    background: #e0e0e0;
}

.task-btn.active {
    background: #ffeb3b;
    border: 2px solid #f00;
    font-weight: bold;
}

.task-btn.answered {
    background: #c8e6c9;
}

.question-area {
    flex: 1;
    padding: 25px;
}

.question-header {
    text-align: right;
    margin-bottom: 15px;
}

.help-btn-small {
    background: #e67e22;
    color: white;
    border: none;
    padding: 5px 15px;
    cursor: pointer;
    font-size: 12px;
    border-radius: 3px;
}

.question-text {
    font-size: 15px;
    line-height: 1.5;
    margin-bottom: 25px;
}

.data-table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
    font-size: 14px;
}

.data-table td, .data-table th {
    border: 1px solid #999;
    padding: 8px;
    text-align: center;
}

.data-table th {
    background: #e0e0e0;
    font-weight: bold;
}

.answer-block {
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid #ccc;
}

.answer-label {
    font-weight: bold;
    margin-right: 10px;
}

#answerInput {
    padding: 6px;
    width: 200px;
    border: 1px solid #aaa;
    font-size: 14px;
}

.save-btn {
    background: #5cb85c;
    color: white;
    border: none;
    padding: 6px 20px;
    margin-left: 10px;
    cursor: pointer;
    border-radius: 3px;
}

.save-btn:hover {
    background: #4cae4c;
}

.saved-msg {
    margin-top: 10px;
    color: #3c763d;
    font-size: 13px;
}

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    z-index: 1000;
}

.modal-content {
    background: white;
    width: 500px;
    margin: 100px auto;
    padding: 20px;
    border: 1px solid #aaa;
    border-radius: 8px;
    max-height: 80vh;
    overflow-y: auto;
}

.help-list {
    margin: 20px;
    line-height: 1.6;
}

.result-stats {
    background: #f5f5f5;
    padding: 15px;
    text-align: center;
    margin: 15px 0;
    border-radius: 5px;
}

.result-item {
    padding: 8px;
    margin: 5px 0;
    font-size: 13px;
    border-radius: 3px;
}

.result-item.correct {
    background: #dff0d8;
}

.result-item.wrong {
    background: #f2dede;
}

.modal-content button {
    background: #2c5aa6;
    color: white;
    border: none;
    padding: 8px 20px;
    cursor: pointer;
    margin-top: 15px;
    width: 100%;
    border-radius: 5px;
}

.profile-info {
    background: #f5f5f5;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 20px;
}

.profile-info p {
    margin: 10px 0;
    font-size: 16px;
}

.profile-info code {
    background: #e0e0e0;
    padding: 3px 8px;
    border-radius: 4px;
    font-family: monospace;
}
