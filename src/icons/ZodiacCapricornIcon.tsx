import React, { FC, memo } from 'react';
import ZodiacCapricornSvg from '../svg/zodiac-capricorn.svg';

export interface IZodiacCapricornIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ZodiacCapricornIcon: FC<IZodiacCapricornIconProps> = memo(props => {
  return <ZodiacCapricornSvg {...props} />;
});
