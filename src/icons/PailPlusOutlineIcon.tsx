import React, { FC, memo } from 'react';
import PailPlusOutlineSvg from '../svg/pail-plus-outline.svg';

export interface IPailPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PailPlusOutlineIcon: FC<IPailPlusOutlineIconProps> = memo(props => {
  return <PailPlusOutlineSvg {...props} />;
});
