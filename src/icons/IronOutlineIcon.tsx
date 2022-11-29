import React, { FC, memo } from 'react';
import IronOutlineSvg from '../svg/iron-outline.svg';

export interface IIronOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IronOutlineIcon: FC<IIronOutlineIconProps> = memo(props => {
  return <IronOutlineSvg {...props} />;
});
