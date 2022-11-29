import React, { FC, memo } from 'react';
import LampsOutlineSvg from '../svg/lamps-outline.svg';

export interface ILampsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LampsOutlineIcon: FC<ILampsOutlineIconProps> = memo(props => {
  return <LampsOutlineSvg {...props} />;
});
