import React, { FC, memo } from 'react';
import WrenchCheckOutlineSvg from '../svg/wrench-check-outline.svg';

export interface IWrenchCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WrenchCheckOutlineIcon: FC<IWrenchCheckOutlineIconProps> = memo(props => {
  return <WrenchCheckOutlineSvg {...props} />;
});
