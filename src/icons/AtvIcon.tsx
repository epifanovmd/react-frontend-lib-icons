import React, { FC, memo } from 'react';
import AtvSvg from '../svg/atv.svg';

export interface IAtvIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AtvIcon: FC<IAtvIconProps> = memo(props => {
  return <AtvSvg {...props} />;
});
