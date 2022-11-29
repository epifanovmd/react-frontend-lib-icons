import React, { FC, memo } from 'react';
import PawOutlineSvg from '../svg/paw-outline.svg';

export interface IPawOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PawOutlineIcon: FC<IPawOutlineIconProps> = memo(props => {
  return <PawOutlineSvg {...props} />;
});
