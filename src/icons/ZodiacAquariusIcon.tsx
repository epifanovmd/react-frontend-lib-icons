import React, { FC, memo } from 'react';
import ZodiacAquariusSvg from '../svg/zodiac-aquarius.svg';

export interface IZodiacAquariusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ZodiacAquariusIcon: FC<IZodiacAquariusIconProps> = memo(props => {
  return <ZodiacAquariusSvg {...props} />;
});
