import React, { FC, memo } from 'react';
import ZodiacGeminiSvg from '../svg/zodiac-gemini.svg';

export interface IZodiacGeminiIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ZodiacGeminiIcon: FC<IZodiacGeminiIconProps> = memo(props => {
  return <ZodiacGeminiSvg {...props} />;
});
