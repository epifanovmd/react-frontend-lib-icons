import React, { FC, memo } from 'react';
import ZodiacCancerSvg from '../svg/zodiac-cancer.svg';

export interface IZodiacCancerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ZodiacCancerIcon: FC<IZodiacCancerIconProps> = memo(props => {
  return <ZodiacCancerSvg {...props} />;
});
