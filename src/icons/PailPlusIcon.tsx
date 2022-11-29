import React, { FC, memo } from 'react';
import PailPlusSvg from '../svg/pail-plus.svg';

export interface IPailPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PailPlusIcon: FC<IPailPlusIconProps> = memo(props => {
  return <PailPlusSvg {...props} />;
});
