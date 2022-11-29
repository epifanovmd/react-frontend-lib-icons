import React, { FC, memo } from 'react';
import PotOutlineSvg from '../svg/pot-outline.svg';

export interface IPotOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PotOutlineIcon: FC<IPotOutlineIconProps> = memo(props => {
  return <PotOutlineSvg {...props} />;
});
