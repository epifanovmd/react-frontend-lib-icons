import React, { FC, memo } from 'react';
import ZodiacTaurusSvg from '../svg/zodiac-taurus.svg';

export interface IZodiacTaurusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ZodiacTaurusIcon: FC<IZodiacTaurusIconProps> = memo(props => {
  return <ZodiacTaurusSvg {...props} />;
});
