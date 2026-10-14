"use client";

import React, { useState, useRef, useEffect } from "react";

export function AmbientSound() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleSound = () => {
    if (!audioCtxRef.current) {
      // @ts-expect-error webkitAudioContext fallback
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    const ctx = audioCtxRef.current;

    if (ctx.state === "suspended") {
      ctx.resume();
    }

    if (!isPlaying) {
      // Generate soothing ocean wave soundscape via Web Audio API buffer
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      // Pink noise algorithm for warm natural sound
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      // Low-pass filter for maritime ocean wave feeling
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(220, ctx.currentTime);

      // LFO for wave swelling rhythm
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.12, ctx.currentTime); // 8-second swell
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(80, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 2);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
      lfo.start();

      noiseNodeRef.current = noise;
      gainNodeRef.current = gain;
      setIsPlaying(true);
    } else {
      if (gainNodeRef.current && ctx) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
        setTimeout(() => {
          if (noiseNodeRef.current && "stop" in noiseNodeRef.current) {
            (noiseNodeRef.current as AudioScheduledSourceNode).stop();
          }
          setIsPlaying(false);
        }, 800);
      } else {
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      aria-label={isPlaying ? "Mute ambient ocean audio" : "Play ambient ocean audio"}
      className="hidden sm:flex items-center space-x-2 text-[10px] font-sans tracking-[0.22em] uppercase text-charcoal/60 hover:text-charcoal transition-colors px-3 py-1.5 rounded-full border border-charcoal/20 bg-charcoal/5 backdrop-blur-sm"
    >
      <div className="flex items-center space-x-0.5 h-3">
        <span
          className={`w-[1.5px] bg-charcoal transition-all ${
            isPlaying ? "h-3 animate-pulse" : "h-1 opacity-50"
          }`}
        />
        <span
          className={`w-[1.5px] bg-charcoal transition-all ${
            isPlaying ? "h-2 animate-pulse" : "h-1 opacity-50"
          }`}
          style={{ animationDelay: "150ms" }}
        />
        <span
          className={`w-[1.5px] bg-charcoal transition-all ${
            isPlaying ? "h-3.5 animate-pulse" : "h-1 opacity-50"
          }`}
          style={{ animationDelay: "300ms" }}
        />
      </div>
      <span>{isPlaying ? "SOUND ON" : "SOUND OFF"}</span>
    </button>
  );
}
