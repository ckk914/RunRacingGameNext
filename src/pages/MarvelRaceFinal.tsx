import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { Shield, Star, Zap, Trophy, X } from 'lucide-react';
import styles from '../styles/MarvelRaceFinal.module.css';

interface Obstacle {
    x: number;
    y: number;
    type: 'shield' | 'star' | 'zap';
    rotation: number;
}

interface Character {
    name: string;
    x: number;
    y: number;
    speed: number;
    color: string;
    finished: boolean;
    emoji: string;
}

const RUNNER_EMOJIS = [
    '🏃', '🏃‍♂️', '🏃‍♀️', '🦸‍♂️', '🦸‍♀️', '⚡️', '🚀', '💨', '🌟', '✨',
    '🔥', '⭐️', '💫', '🌪️', '🦹', '🦹‍♂️', '🦹‍♀️', '🎯', '🎪', '🎨',
];

const ObstacleIcon = memo<{ type: 'shield' | 'star' | 'zap'; rotation: number }>(({ type, rotation }) => {
    const style = { transform: `rotate(${rotation}deg)` };
    switch (type) {
        case 'shield': return <Shield size={24} style={style} />;
        case 'star': return <Star size={24} style={style} />;
        case 'zap': return <Zap size={24} style={style} />;
        default: return null;
    }
});

const Character = memo<{ char: Character }>(({ char }) => (
    <div
        className={styles.character}
        style={{
            transform: `translate(${char.x}px, ${char.y}px)`,
            backgroundColor: char.color,
        }}
    >
        {char.emoji} {char.name}
    </div>
));

const MarvelRaceFinal: React.FC = () => {
    const [participants, setParticipants] = useState<Array<{ name: string; emoji: string }>>([]);
    const [running, setRunning] = useState(false);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [obstacles] = useState<Obstacle[]>(Array.from({ length: 8 }, (_, i) => ({
        x: 100 + (i % 2 === 0 ? 100 : 300),
        y: 100 + i * 50,
        type: ['shield', 'star', 'zap'][Math.floor(Math.random() * 3)] as Obstacle['type'],
        rotation: Math.random() * 360,
    })));
    const [inputName, setInputName] = useState('');
    const [winner, setWinner] = useState<string | null>(null);
    const animationFrameRef = useRef<number>(0);
    const finishLine = 1000;

    const addParticipant = useCallback(() => {
        if (inputName.trim() && !running) {
            const emoji = RUNNER_EMOJIS[participants.length % RUNNER_EMOJIS.length];
            setParticipants((prev) => [...prev, { name: inputName.trim(), emoji }]);
            setInputName('');
        }
    }, [inputName, participants.length, running]);

    const startRace = useCallback(() => {
        if (participants.length < 2) {
            alert('최소 2명의 참가자가 필요합니다!');
            return;
        }

        setWinner(null);
        setRunning(true);

        const verticalSpacing = 600 / Math.max(participants.length, 30);

        setCharacters(participants.map((participant, idx) => ({
            name: participant.name,
            x: 50,
            y: 50 + idx * verticalSpacing,
            speed: 2 + Math.random() * 2,
            color: `hsl(${Math.random() * 360}, 70%, 50%)`,
            finished: false,
            emoji: participant.emoji,
        })));
    }, [participants]);

    const resetRace = useCallback(() => {
        setRunning(false);
        setWinner(null);
        setCharacters([]);
    }, []);

    const updateGame = useCallback(() => {
        setCharacters((prevChars) => {
            const newChars = prevChars.map((char) => {
                if (char.finished) return char;

                const newX = char.x + char.speed;
                const finished = newX >= finishLine;

                return {
                    ...char,
                    x: finished ? finishLine : newX,
                    finished,
                };
            });

            const firstFinisher = newChars.find((char) => char.finished && !winner);
            if (firstFinisher && !winner) {
                setWinner(`${firstFinisher.emoji} ${firstFinisher.name}`);
                setTimeout(() => setRunning(false), 1000);
            }

            return newChars;
        });
    }, [winner]);

    useEffect(() => {
        let lastTime = 0;
        let frameCount = 0;

        const animate = (currentTime: number) => {
            frameCount++;
            if (frameCount % 2 === 0) {
                if (currentTime - lastTime >= 16.67) {
                    updateGame();
                    lastTime = currentTime;
                }
            }
            if (running) animationFrameRef.current = requestAnimationFrame(animate);
        };

        if (running) animationFrameRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameRef.current);
    }, [running, updateGame]);

    const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') addParticipant();
    }, [addParticipant]);

    const removeParticipant = useCallback((indexToRemove: number) => {
        if (!running) setParticipants((prev) => prev.filter((_, index) => index !== indexToRemove));
    }, [running]);

    return (
        <div className={styles.gameContainer}>
            <h1 className={styles.gameTitle}>🏃‍♂️ MARVEL RACE 🏃‍♀️</h1>
            <div className={styles.gameHeader}>
                <div className={styles.participantsList}>
                    {participants.map((participant, idx) => (
                        <div key={idx} className={styles.participant}>
                            {participant.emoji} {participant.name}
                            <button onClick={() => removeParticipant(idx)} className={styles.removeButton} disabled={running}>
                                <X size={16} />
                            </button>
                        </div>
                    ))}
                </div>
                <div className={styles.controls}>
                    <input
                        type="text"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className={styles.input}
                        placeholder="참가자 이름"
                        disabled={running}
                    />
                    <button onClick={addParticipant} disabled={running} className={styles.addButton}>
                        추가
                    </button>
                    <button onClick={startRace} disabled={running || participants.length < 2} className={styles.startButton}>
                        시작
                    </button>
                    <button onClick={resetRace} disabled={running} className={styles.resetButton}>
                        리셋
                    </button>
                </div>
            </div>
            <div className={styles.raceTrack}>
                <div className={styles.raceTrackInner}>
                    <div className={styles.finishLine} style={{ left: `${finishLine}px` }} />
                    {characters.map((char) => (
                        <Character key={char.name} char={char} />
                    ))}
                    {obstacles.map((obstacle, index) => (
                        <div
                            key={`obstacle-${index}`}
                            className={styles.obstacle}
                            style={{ left: `${obstacle.x}px`, top: `${obstacle.y}px` }}
                        >
                            <ObstacleIcon type={obstacle.type} rotation={obstacle.rotation} />
                        </div>
                    ))}
                </div>
            </div>
            {winner && (
                <div className={styles.winnerAnnouncement}>
                    <Trophy className={styles.trophyIcon} size={32} />
                    <span className={styles.winnerText}>{winner} 우승!</span>
                </div>
            )}
        </div>
    );
};

export default MarvelRaceFinal;