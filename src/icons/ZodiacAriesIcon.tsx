import React, { FC, memo } from 'react';
import ZodiacAriesSvg from '../svg/zodiac-aries.svg';

export interface IZodiacAriesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ZodiacAriesIcon: FC<IZodiacAriesIconProps> = memo(props => {
  return <ZodiacAriesSvg {...props} />;
});
