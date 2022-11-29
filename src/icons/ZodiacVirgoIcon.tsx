import React, { FC, memo } from 'react';
import ZodiacVirgoSvg from '../svg/zodiac-virgo.svg';

export interface IZodiacVirgoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ZodiacVirgoIcon: FC<IZodiacVirgoIconProps> = memo(props => {
  return <ZodiacVirgoSvg {...props} />;
});
