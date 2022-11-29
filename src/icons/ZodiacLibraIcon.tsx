import React, { FC, memo } from 'react';
import ZodiacLibraSvg from '../svg/zodiac-libra.svg';

export interface IZodiacLibraIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ZodiacLibraIcon: FC<IZodiacLibraIconProps> = memo(props => {
  return <ZodiacLibraSvg {...props} />;
});
