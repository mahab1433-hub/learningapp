// Text-to-Speech Helper using browser Web Speech API
// Allows young learners (Grades 1-5) to hear lessons and questions read aloud.

let isSpeechEnabled = true;

export function speakText(text, onEndCallback = null) {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  if (!isSpeechEnabled || !text) {
    return;
  }

  const cleanText = text
    .replace(/[#*_`]/g, '')
    .replace(/\[.*?\]/g, '')
    .trim();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.rate = 0.9; // Friendly, clear pacing for children
  utterance.pitch = 1.05; // Slightly warm/bright tone

  // Attempt to select a friendly English voice if available
  const voices = window.speechSynthesis.getVoices();
  const childFriendlyVoice = voices.find(v => 
    (v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Google') || v.name.includes('Zira')))
  ) || voices.find(v => v.lang.startsWith('en'));

  if (childFriendlyVoice) {
    utterance.voice = childFriendlyVoice;
  }

  if (onEndCallback) {
    utterance.onend = onEndCallback;
    utterance.onerror = onEndCallback;
  }

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

export function toggleSpeech() {
  isSpeechEnabled = !isSpeechEnabled;
  if (!isSpeechEnabled) {
    stopSpeaking();
  }
  return isSpeechEnabled;
}

export function getSpeechEnabled() {
  return isSpeechEnabled;
}
