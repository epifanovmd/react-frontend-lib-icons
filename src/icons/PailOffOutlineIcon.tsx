import React, { FC, memo } from 'react';
import PailOffOutlineSvg from '../svg/pail-off-outline.svg';

export interface IPailOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PailOffOutlineIcon: FC<IPailOffOutlineIconProps> = memo(props => {
  return <PailOffOutlineSvg {...props} />;
});
