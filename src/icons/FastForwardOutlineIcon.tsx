import React, { FC, memo } from 'react';
import FastForwardOutlineSvg from '../svg/fast-forward-outline.svg';

export interface IFastForwardOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FastForwardOutlineIcon: FC<IFastForwardOutlineIconProps> = memo(props => {
  return <FastForwardOutlineSvg {...props} />;
});
