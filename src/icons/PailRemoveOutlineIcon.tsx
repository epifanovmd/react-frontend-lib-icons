import React, { FC, memo } from 'react';
import PailRemoveOutlineSvg from '../svg/pail-remove-outline.svg';

export interface IPailRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PailRemoveOutlineIcon: FC<IPailRemoveOutlineIconProps> = memo(props => {
  return <PailRemoveOutlineSvg {...props} />;
});
