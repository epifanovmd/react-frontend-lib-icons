import React, { FC, memo } from 'react';
import PailOutlineSvg from '../svg/pail-outline.svg';

export interface IPailOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PailOutlineIcon: FC<IPailOutlineIconProps> = memo(props => {
  return <PailOutlineSvg {...props} />;
});
