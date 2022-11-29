import React, { FC, memo } from 'react';
import PailRemoveSvg from '../svg/pail-remove.svg';

export interface IPailRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PailRemoveIcon: FC<IPailRemoveIconProps> = memo(props => {
  return <PailRemoveSvg {...props} />;
});
