import React, { FC, memo } from 'react';
import PawOffOutlineSvg from '../svg/paw-off-outline.svg';

export interface IPawOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PawOffOutlineIcon: FC<IPawOffOutlineIconProps> = memo(props => {
  return <PawOffOutlineSvg {...props} />;
});
