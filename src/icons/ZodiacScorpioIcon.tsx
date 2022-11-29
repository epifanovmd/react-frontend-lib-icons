import React, { FC, memo } from 'react';
import ZodiacScorpioSvg from '../svg/zodiac-scorpio.svg';

export interface IZodiacScorpioIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ZodiacScorpioIcon: FC<IZodiacScorpioIconProps> = memo(props => {
  return <ZodiacScorpioSvg {...props} />;
});
