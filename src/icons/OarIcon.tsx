import React, { FC, memo } from 'react';
import OarSvg from '../svg/oar.svg';

export interface IOarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OarIcon: FC<IOarIconProps> = memo(props => {
  return <OarSvg {...props} />;
});
