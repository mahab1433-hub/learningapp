import React, { useState } from 'react';
import { Sparkles, CheckCircle2, RotateCcw, ThumbsUp, Star } from 'lucide-react';
import { playClickSound, playSuccessSound, playStarSound } from '../utils/soundEffects';

export default function InteractiveActivity({ activity, onComplete }) {
  const [solved, setSolved] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [selectedWordTarget, setSelectedWordTarget] = useState({});
  const [pairMatches, setPairMatches] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);

  if (!activity) return null;

  const handleWordSelect = (wordIndex, option, correct) => {
    playClickSound();
    const updated = { ...selectedWordTarget, [wordIndex]: option };
    setSelectedWordTarget(updated);

    if (option === correct) {
      playSuccessSound();
      setFeedback('Awesome job! That spells the word correctly! 🌟');
      // check if all words solved
      if (activity.words && Object.keys(updated).length === activity.words.length) {
        setSolved(true);
        playStarSound();
        if (onComplete) onComplete();
      }
    } else {
      setFeedback('Almost! Try listening to the sound again.');
    }
  };

  const handleSingleOption = (opt, correct) => {
    setSelectedOption(opt);
    playClickSound();
    if (opt === correct) {
      playSuccessSound();
      setSolved(true);
      setFeedback('Brilliant! You solved this interactive puzzle! 🎉');
      playStarSound();
      if (onComplete) onComplete();
    } else {
      setFeedback('Good try! Think carefully and try again.');
    }
  };

  const handlePairMatch = (leftItem, rightItem) => {
    playClickSound();
    const updated = { ...pairMatches, [leftItem]: rightItem };
    setPairMatches(updated);

    if (activity.pairs && Object.keys(updated).length === activity.pairs.length) {
      playSuccessSound();
      setSolved(true);
      setFeedback('Woohoo! You matched all pairs perfectly! 🌟');
      playStarSound();
      if (onComplete) onComplete();
    }
  };

  const resetActivity = () => {
    setSelectedWordTarget({});
    setPairMatches({});
    setSelectedOption(null);
    setSolved(false);
    setFeedback('');
    playClickSound();
  };

  return (
    <div className="activity-card">
      <div className="activity-header">
        <div className="activity-title-wrap">
          <span className="activity-icon-badge">
            <Sparkles className="w-5 h-5 text-amber-500 animate-spin-slow" />
          </span>
          <div>
            <h4 className="activity-title">{activity.title || 'Interactive Learning Activity'}</h4>
            <p className="activity-instruction">{activity.instruction}</p>
          </div>
        </div>
        <button 
          onClick={resetActivity} 
          className="btn-ghost-small" 
          title="Try again"
        >
          <RotateCcw className="w-4 h-4" /> Reset
        </button>
      </div>

      <div className="activity-body">
        {/* Type 1: Word Match / CVC builder */}
        {activity.type === 'word_match' && activity.words && (
          <div className="word-match-grid">
            {activity.words.map((item, idx) => {
              const userSelection = selectedWordTarget[idx];
              const isCorrect = userSelection === item.target;
              return (
                <div key={idx} className={`word-puzzle-box ${isCorrect ? 'box-correct' : ''}`}>
                  <div className="word-meaning-tag">{item.meaning}</div>
                  <div className="letters-display">
                    <span className="char-slot">{item.prefix}</span>
                    <span className={`char-slot slot-target ${userSelection ? 'slot-filled' : ''}`}>
                      {userSelection || '_'}
                    </span>
                    <span className="char-slot">{item.suffix}</span>
                  </div>
                  <div className="letter-options">
                    {item.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleWordSelect(idx, opt, item.target)}
                        className={`letter-pill-btn ${userSelection === opt ? (isCorrect ? 'btn-correct' : 'btn-wrong') : ''}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Type 2: Counter / Math Add */}
        {activity.type === 'counter_add' && (
          <div className="counter-activity-box">
            <div className="counters-visual">
              <div className="counter-group">
                <span className="counter-label">{activity.firstNum} Apples</span>
                <div className="counter-items">
                  {Array.from({ length: activity.firstNum }).map((_, i) => (
                    <span key={i} className="bounce-item">🍎</span>
                  ))}
                </div>
              </div>
              <span className="math-operator">+</span>
              <div className="counter-group">
                <span className="counter-label">{activity.secondNum} Apples</span>
                <div className="counter-items">
                  {Array.from({ length: activity.secondNum }).map((_, i) => (
                    <span key={i} className="bounce-item">🍏</span>
                  ))}
                </div>
              </div>
              <span className="math-operator">=</span>
              <div className="counter-group">
                <span className="counter-label">Total?</span>
                <div className="counter-total-box">
                  {solved ? `${activity.targetSum} 🍎` : '?'}
                </div>
              </div>
            </div>

            <div className="counter-options-row">
              {[activity.targetSum - 1, activity.targetSum, activity.targetSum + 2].sort().map((sum) => (
                <button
                  key={sum}
                  onClick={() => handleSingleOption(sum, activity.targetSum)}
                  className={`btn-choice-pill ${selectedOption === sum ? (sum === activity.targetSum ? 'choice-correct' : 'choice-wrong') : ''}`}
                >
                  {sum} Apples
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Type 3: Pattern Finish */}
        {activity.type === 'pattern_finish' && (
          <div className="pattern-activity-box">
            <div className="pattern-sequence-row">
              {activity.sequence.map((item, i) => (
                <div key={i} className={`pattern-chip ${item === '?' ? 'pattern-target' : ''}`}>
                  {item === '?' ? (selectedOption || '?') : item}
                </div>
              ))}
            </div>
            <div className="pattern-choices">
              {activity.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSingleOption(opt, activity.correctAnswer)}
                  className={`pattern-opt-btn ${selectedOption === opt ? (opt === activity.correctAnswer ? 'opt-correct' : 'opt-wrong') : ''}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Type 4: Interactive Pair Matching */}
        {(activity.type === 'sense_match' || 
          activity.type === 'helper_tool_match' || 
          activity.type === 'landform_matcher' || 
          activity.type === 'rights_explorer') && activity.pairs && (
          <div className="pairs-matching-container">
            <div className="pairs-grid">
              {activity.pairs.map((p, idx) => {
                const key = Object.keys(p)[0];
                const val = p[key];
                const matched = pairMatches[p[key]];
                return (
                  <div key={idx} className={`pair-card ${matched ? 'pair-card-matched' : ''}`}>
                    <div className="pair-left-label">{p[key]}</div>
                    <div className="pair-arrow">➡️</div>
                    <button
                      onClick={() => handlePairMatch(p[key], p[Object.keys(p)[1]])}
                      className={`pair-right-btn ${matched ? 'btn-matched' : ''}`}
                    >
                      {matched ? `✓ ${p[Object.keys(p)[1]]}` : `Tap to connect: ${p[Object.keys(p)[1]]}`}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Type 5: Fraction Slicer / Visualizer */}
        {activity.type === 'fraction_slicer' && (
          <div className="fraction-activity-box">
            <div className="fraction-bars-visual">
              {Array.from({ length: activity.totalParts }).map((_, i) => (
                <div 
                  key={i} 
                  className={`fraction-bar-slice ${i < activity.shadedParts ? 'slice-shaded' : ''}`}
                >
                  Part {i + 1}
                </div>
              ))}
            </div>
            <p className="fraction-label-count">
              {activity.shadedParts} out of {activity.totalParts} parts shaded
            </p>
            <div className="fraction-options">
              {activity.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSingleOption(opt, activity.correctAnswer)}
                  className={`fraction-opt-btn ${selectedOption === opt ? (opt === activity.correctAnswer ? 'opt-correct' : 'opt-wrong') : ''}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Type 6: General Single Option / Categorizer */}
        {(activity.type === 'direction_compass' || 
          activity.type === 'prime_composite_sorter' || 
          activity.type === 'percent_converter') && (
          <div className="general-choice-box">
            {activity.number && <div className="big-highlight-number">{activity.number}</div>}
            {activity.fraction && <div className="big-highlight-number">{activity.fraction}</div>}
            <div className="options-grid-interactive">
              {activity.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSingleOption(opt, activity.correctAnswer)}
                  className={`btn-choice-pill ${selectedOption === opt ? (opt === activity.correctAnswer ? 'choice-correct' : 'choice-wrong') : ''}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Type 7: Preposition Picker */}
        {activity.type === 'preposition_picker' && activity.sentences && (
          <div className="preposition-list">
            {activity.sentences.map((st, i) => (
              <div key={i} className="prep-sentence-card">
                <p className="prep-text">{st.text}</p>
                <div className="prep-options-row">
                  {st.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSingleOption(opt, st.answer)}
                      className="letter-pill-btn"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Type 8: Voice Transformer */}
        {activity.type === 'voice_transformer' && activity.items && (
          <div className="voice-transformer-grid">
            {activity.items.map((item, i) => (
              <div key={i} className="voice-item-card">
                <p className="voice-sentence">"{item.sentence}"</p>
                <div className="voice-choice-btns">
                  {['Active', 'Passive'].map((vType) => (
                    <button
                      key={vType}
                      onClick={() => handleSingleOption(vType, item.type)}
                      className="letter-pill-btn"
                    >
                      {vType} Voice
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Feedback Alert */}
        {feedback && (
          <div className={`activity-feedback ${solved ? 'feedback-success' : 'feedback-hint'}`}>
            {solved ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            ) : (
              <ThumbsUp className="w-5 h-5 text-amber-600 flex-shrink-0" />
            )}
            <span>{feedback}</span>
          </div>
        )}

        {solved && (
          <div className="activity-solved-celebration">
            <span className="celebration-badge">
              <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
              Activity Solved! +15 Bonus XP
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
