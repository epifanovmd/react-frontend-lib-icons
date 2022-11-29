import React, { FC, memo } from 'react';
import ChandelierSvg from '../svg/chandelier.svg';

export interface IChandelierIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChandelierIcon: FC<IChandelierIconProps> = memo(props => {
  return <ChandelierSvg {...props} />;
});
