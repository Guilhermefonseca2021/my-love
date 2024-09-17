import { TypeAnimation } from 'react-type-animation';

interface TypingTextProps {
  primary: string;
  second: string;
  third: string;
}

export function TypingText({ primary, second, third }: TypingTextProps) {
  return (
    <TypeAnimation
      sequence={[
        primary,
        1000, // wait 1s before replacing
        second,
        1000,
        third,
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
