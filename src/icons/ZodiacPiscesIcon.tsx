import React, { FC, memo } from 'react';
import ZodiacPiscesSvg from '../svg/zodiac-pisces.svg';

export interface IZodiacPiscesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ZodiacPiscesIcon: FC<IZodiacPiscesIconProps> = memo(props => {
  return <ZodiacPiscesSvg {...props} />;
});
